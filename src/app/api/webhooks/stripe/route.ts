import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createServiceClient } from "@/lib/supabase/server";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = createServiceClient();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session, supabase, stripe);
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        await handleSubscriptionUpsert(event.data.object as Stripe.Subscription, supabase);
        break;
      }
      case "customer.subscription.deleted": {
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription, supabase);
        break;
      }
      default:
        // Unhandled event type — acknowledge receipt silently
        break;
    }
  } catch (err) {
    console.error(`[stripe-webhook] handler error for ${event.type}:`, err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

// ── handlers ──────────────────────────────────────────────────────────────────

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session,
  supabase: ReturnType<typeof createServiceClient>,
  stripe: Stripe,
) {
  const userId = session.metadata?.user_id;
  if (!userId) {
    console.warn("[stripe-webhook] checkout.session.completed missing user_id metadata");
    return;
  }

  // Determine if this is a Pro subscription checkout or a one-time package purchase
  if (session.mode === "subscription") {
    // Subscription entitlement is handled by subscription.created webhook
    return;
  }

  // One-time package purchase — resolve package via stripe_price_id
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id, { limit: 10 } as Stripe.Checkout.SessionListLineItemsParams);
  for (const item of lineItems.data) {
    const priceId = item.price?.id;
    if (!priceId) continue;

    const { data: pkg } = await supabase
      .from("packages")
      .select("id")
      .eq("stripe_price_id", priceId)
      .single();

    if (!pkg) {
      console.warn("[stripe-webhook] no package found for price_id:", priceId);
      continue;
    }

    await supabase.from("entitlements").insert({
      user_id: userId,
      package_id: pkg.id,
      scope: "package",
      source: "stripe_checkout",
      stripe_reference: session.id,
      expires_at: null, // perpetual
    });
  }
}

async function handleSubscriptionUpsert(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceClient>,
) {
  const userId = subscription.metadata?.user_id;
  if (!userId) {
    console.warn("[stripe-webhook] subscription missing user_id metadata");
    return;
  }

  // In Stripe's dahlia API, current_period_end is on the subscription item, not the subscription itself
  const firstItem = subscription.items?.data?.[0];
  const periodEnd = firstItem?.current_period_end ?? subscription.billing_cycle_anchor;
  const expiresAt = new Date(periodEnd * 1000).toISOString();

  // Upsert the scope='all' entitlement row for this user+subscription
  const { data: existing } = await supabase
    .from("entitlements")
    .select("id")
    .eq("user_id", userId)
    .eq("scope", "all")
    .eq("stripe_reference", subscription.id)
    .single();

  if (existing) {
    await supabase
      .from("entitlements")
      .update({ expires_at: expiresAt })
      .eq("id", existing.id);
  } else {
    await supabase.from("entitlements").insert({
      user_id: userId,
      package_id: null,
      scope: "all",
      source: "stripe_subscription",
      stripe_reference: subscription.id,
      expires_at: expiresAt,
    });
  }
}

async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createServiceClient>,
) {
  // Expire the row immediately — do not delete (keep for history)
  await supabase
    .from("entitlements")
    .update({ expires_at: new Date().toISOString() })
    .eq("stripe_reference", subscription.id)
    .eq("scope", "all");
}

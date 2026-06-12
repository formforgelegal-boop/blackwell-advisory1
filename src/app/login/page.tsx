import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LoginForm from "./LoginForm";

export const metadata = { title: "Sign In" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    redirect(next ?? "/dashboard/my-package");
  }

  return (
    <div className="min-h-screen bg-[#f8f7f5] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="font-serif text-2xl text-[#1a2e4a]">Bracton</p>
          <p className="text-sm text-[#6b7280] mt-1">Sign in to your account</p>
        </div>
        <LoginForm next={next} />
      </div>
    </div>
  );
}

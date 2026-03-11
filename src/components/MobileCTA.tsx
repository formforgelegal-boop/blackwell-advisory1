import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      <Link
        href="/contact"
        className="block w-full bg-gold text-navy text-center font-semibold text-lg py-4 hover:opacity-95 transition-opacity"
      >
        Book a Call
      </Link>
    </div>
  );
}

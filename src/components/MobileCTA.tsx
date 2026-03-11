import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-[#fbfaf8] md:hidden">
      <Link href="/contact" className="block py-3 text-center text-sm font-medium text-ink">
        Book a Discovery Call
      </Link>
    </div>
  );
}

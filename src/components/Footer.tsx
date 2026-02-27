import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 py-12">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <span className="font-serif text-xl font-bold text-white">
            Blackwell Advisory
          </span>
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-gold transition-colors"
            >
              Services
            </Link>
            <Link href="/about" className="hover:text-gold transition-colors">
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gold transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 space-y-2 text-xs leading-relaxed">
          <p>
            Blackwell Advisory is a consultancy, not a law firm. Services do
            not constitute regulated legal advice. No solicitor-client
            relationship is formed. Clients are encouraged to seek independent
            legal advice where required.
          </p>
          <p>Governing law: England &amp; Wales.</p>
          <p>© Blackwell Advisory 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

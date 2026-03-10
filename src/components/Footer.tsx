import Link from "next/link";
import { COMPANY_DETAILS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 py-12">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <span className="font-serif text-xl font-bold text-white">{COMPANY_DETAILS.name}</span>
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link href="/services" className="hover:text-gold">Services</Link>
            <Link href="/blog" className="hover:text-gold">Blog</Link>
            <Link href="/case-studies" className="hover:text-gold">Case Studies</Link>
            <Link href="/risk-calculator" className="hover:text-gold">Risk Calculator</Link>
            <Link href="/about" className="hover:text-gold">About</Link>
            <Link href="/contact" className="hover:text-gold">Contact</Link>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 space-y-2 text-xs leading-relaxed">
          <p>Registered office: {COMPANY_DETAILS.registeredOffice}</p>
          <p>Company registration number: {COMPANY_DETAILS.companyNumber}</p>
          <p>ICO registration: {COMPANY_DETAILS.icoRegistration}</p>
          <p>
            <Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link> · <Link href="/terms-and-conditions" className="hover:text-gold">Terms and Conditions</Link> · <Link href="/cookie-policy" className="hover:text-gold">Cookie Policy</Link>
          </p>
          <p>
            Blackwell Advisory is a consultancy, not a law firm. Services do not constitute regulated legal advice. Clients are encouraged to seek independent legal advice where required.
          </p>
          <p>Governing law: England &amp; Wales.</p>
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

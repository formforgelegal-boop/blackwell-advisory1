import Link from "next/link";
import { COMPANY_DETAILS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-stone py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-10 grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-serif text-2xl text-ink">{COMPANY_DETAILS.name}</p>
            <p className="mt-3 max-w-md text-sm text-ink/65">Employment risk advisory for UK SMEs. Practical, preventative, and commercially grounded.</p>
          </div>
          <nav className="grid grid-cols-2 gap-2 text-sm text-ink/70 md:justify-self-end">
            <Link href="/services" className="hover:text-ink">Services</Link>
            <Link href="/blog" className="hover:text-ink">Insights</Link>
            <Link href="/case-studies" className="hover:text-ink">Case Studies</Link>
            <Link href="/risk-calculator" className="hover:text-ink">Risk Calculator</Link>
            <Link href="/about" className="hover:text-ink">About</Link>
            <Link href="/contact" className="hover:text-ink">Contact</Link>
          </nav>
        </div>

        <div className="space-y-2 border-t border-line pt-8 text-xs leading-relaxed text-ink/55">
          <p>Registered office: {COMPANY_DETAILS.registeredOffice}</p>
          <p>Company registration number: {COMPANY_DETAILS.companyNumber}</p>
          <p>ICO registration: {COMPANY_DETAILS.icoRegistration}</p>
          <p>
            <Link href="/privacy-policy" className="hover:text-ink">Privacy Policy</Link> · <Link href="/terms-and-conditions" className="hover:text-ink">Terms and Conditions</Link> · <Link href="/cookie-policy" className="hover:text-ink">Cookie Policy</Link>
          </p>
          <p>Blackwell Advisory is a consultancy, not a law firm. Services do not constitute regulated legal advice.</p>
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { COMPANY_DETAILS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#f3f1ed] py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-12 grid gap-10 border-b border-line pb-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="font-serif text-2xl text-ink">{COMPANY_DETAILS.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/68">
              Employment risk advisory for UK SMEs. Practical, preventative, and commercially grounded.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-y-2 text-sm text-ink/72 md:justify-self-end md:text-right">
            <Link href="/services" className="transition-colors hover:text-ink">Services</Link>
            <Link href="/blog" className="transition-colors hover:text-ink">Insights</Link>
            <Link href="/case-studies" className="transition-colors hover:text-ink">Case Studies</Link>
            <Link href="/risk-calculator" className="transition-colors hover:text-ink">Risk Calculator</Link>
            <Link href="/about" className="transition-colors hover:text-ink">About</Link>
            <Link href="/contact" className="transition-colors hover:text-ink">Contact</Link>
          </nav>
        </div>

        <div className="grid gap-6 text-xs leading-relaxed text-ink/58 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-1.5">
            <p>Registered office: {COMPANY_DETAILS.registeredOffice}</p>
            <p>Company registration number: {COMPANY_DETAILS.companyNumber}</p>
            {COMPANY_DETAILS.icoRegistration && <p>ICO registration: {COMPANY_DETAILS.icoRegistration}</p>}
            <p>
              Blackwell Advisory is a consultancy, not a law firm. Services do not constitute regulated legal advice.
            </p>
          </div>
          <div className="space-y-1.5 md:text-right">
            <p>
              <Link href="/privacy-policy" className="transition-colors hover:text-ink">Privacy Policy</Link> ·{" "}
              <Link href="/terms-and-conditions" className="transition-colors hover:text-ink">Terms and Conditions</Link> ·{" "}
              <Link href="/cookie-policy" className="transition-colors hover:text-ink">Cookie Policy</Link>
            </p>
            <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

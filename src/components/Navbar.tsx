"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOP_LEVEL_NAV } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-[#fbfaf8]/95 backdrop-blur transition-all ${scrolled ? "shadow-[0_2px_18px_rgba(20,26,34,0.06)]" : ""}`}>
      <div className="mx-auto flex h-18 max-w-[1180px] items-center justify-between px-6">
        <Link href="/" className="font-serif text-xl tracking-tight text-ink">Blackwell Advisory</Link>

        <nav className="hidden items-center gap-7 md:flex">
          {TOP_LEVEL_NAV.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm transition-colors ${pathname === link.href ? "text-ink" : "text-ink/60 hover:text-ink"}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="p-2 text-ink md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-[#fbfaf8] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {TOP_LEVEL_NAV.map((link) => (
              <Link key={link.href} href={link.href} className={`py-1.5 text-sm ${pathname === link.href ? "text-ink" : "text-ink/70"}`} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

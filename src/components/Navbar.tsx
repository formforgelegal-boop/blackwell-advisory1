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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-xl font-bold text-navy tracking-tight">
          Blackwell Advisory
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {TOP_LEVEL_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${pathname === link.href ? "text-navy" : "text-navy/60"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-muted px-6 py-4 flex flex-col gap-3">
          {TOP_LEVEL_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 font-medium transition-colors ${pathname === link.href ? "text-navy" : "text-navy/70"}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

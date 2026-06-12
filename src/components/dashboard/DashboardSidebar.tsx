"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard/my-package",   label: "My Package"   },
  { href: "/dashboard/my-documents", label: "My Documents" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-56 shrink-0 flex-col border-r border-[#d8dce2] bg-[#1a2e4a]">
      <div className="px-6 py-8">
        <span className="font-serif text-lg text-white tracking-tight">Bracton</span>
        <span className="ml-2 text-[11px] text-[#c9a84c] font-medium uppercase tracking-widest">by Blackwell</span>
      </div>

      <nav className="flex flex-col gap-1 px-3 flex-1">
        {NAV.map(({ href, label }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={[
                "rounded-md px-3 py-2.5 text-sm transition-colors",
                active
                  ? "bg-[#c9a84c]/20 text-[#c9a84c] font-medium"
                  : "text-white/70 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-6 border-t border-white/10">
        <Link href="/" className="text-xs text-white/40 hover:text-white/60 transition-colors">
          ← Back to site
        </Link>
      </div>
    </aside>
  );
}

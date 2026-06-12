"use client";

import { useState } from "react";
import Link from "next/link";
import type { Package, PackageDocument, GeneratedDocument } from "@/types/database";
import type { DocumentTemplate } from "@/data/document-templates";

interface Props {
  pkg: Package;
  documents: PackageDocument[];
  generatedBySlug: Map<string, GeneratedDocument[]>;
  templateMap: Map<string, DocumentTemplate>;
  locked: boolean;
  defaultOpen: boolean;
}

export default function PackageGroup({
  pkg,
  documents,
  generatedBySlug,
  templateMap,
  locked,
  defaultOpen,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  const builtCount = documents.filter((d) => (generatedBySlug.get(d.template_slug)?.length ?? 0) > 0).length;
  const totalCount = documents.length;

  return (
    <div className={[
      "rounded-xl border overflow-hidden",
      locked ? "border-[#d8dce2] bg-white/50" : "border-[#d8dce2] bg-white",
    ].join(" ")}>
      {/* ── Group header ──────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          {locked && (
            <span className="text-[#9ca3af]" aria-hidden>
              <LockIcon />
            </span>
          )}
          <span className={["font-serif text-lg tracking-tight", locked ? "text-[#9ca3af]" : "text-[#1a2e4a]"].join(" ")}>
            {pkg.name}
          </span>
          {!locked && totalCount > 0 && (
            <span className="text-xs text-[#6b7280]">
              {builtCount} of {totalCount} built
            </span>
          )}
        </div>
        <ChevronIcon open={open} />
      </button>

      {/* ── Progress bar (owned only) ─────────────────────── */}
      {!locked && open && totalCount > 0 && (
        <div className="px-5 pb-2">
          <div className="h-1.5 rounded-full bg-[#1a2e4a]/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#c9a84c] transition-all"
              style={{ width: `${Math.round((builtCount / totalCount) * 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* ── Document rows ─────────────────────────────────── */}
      {open && (
        <ul className="divide-y divide-[#d8dce2]/60 border-t border-[#d8dce2]/60">
          {documents.length === 0 && (
            <li className="px-5 py-4 text-sm text-[#9ca3af]">
              No documents in this package yet.
            </li>
          )}
          {documents.map((pd) => (
            <DocumentRow
              key={pd.id}
              pd={pd}
              generated={generatedBySlug.get(pd.template_slug) ?? []}
              template={templateMap.get(pd.template_slug)}
              locked={locked}
              pkgName={pkg.name}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

// ── DocumentRow ────────────────────────────────────────────────

interface RowProps {
  pd: PackageDocument;
  generated: GeneratedDocument[];
  template: DocumentTemplate | undefined;
  locked: boolean;
  pkgName: string;
}

function DocumentRow({ pd, generated, template, locked, pkgName }: RowProps) {
  const name = template?.name ?? pd.template_slug;
  const description = template?.description ?? "";
  const isBuilt = generated.length > 0;

  if (locked) {
    return (
      <li className="flex items-center gap-3 px-5 py-3">
        <span className="text-[#9ca3af] shrink-0"><LockIcon /></span>
        <span className="text-sm text-[#9ca3af] flex-1">{name}</span>
        <span className="text-xs text-[#9ca3af]">Included in {pkgName}</span>
      </li>
    );
  }

  if (isBuilt) {
    return (
      <li className="flex items-start gap-3 px-5 py-3.5">
        <span className="text-emerald-500 mt-0.5 shrink-0"><CheckIcon /></span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-[#1a2e4a]">{name}</p>
          <p className="text-xs text-[#6b7280] mt-0.5">
            {generated.length} {generated.length === 1 ? "document" : "documents"}
          </p>
        </div>
        <Link
          href={`/dashboard/my-documents?template=${pd.template_slug}`}
          className="shrink-0 text-xs text-[#1a2e4a] underline underline-offset-2 hover:text-[#c9a84c] transition-colors"
        >
          View
        </Link>
      </li>
    );
  }

  return (
    <li className="flex items-start gap-3 px-5 py-3.5">
      <span className="text-[#d8dce2] mt-0.5 shrink-0"><CircleIcon /></span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[#1a2e4a]">{name}</p>
        {description && (
          <p className="text-xs text-[#6b7280] mt-0.5 leading-snug">{description}</p>
        )}
      </div>
      {template?.formPath && (
        <Link
          href={template.formPath}
          className="shrink-0 inline-flex items-center rounded-md bg-[#1a2e4a] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#c9a84c] transition-colors"
        >
          Create
        </Link>
      )}
    </li>
  );
}

// ── Icons ──────────────────────────────────────────────────────

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={["text-[#6b7280] transition-transform", open ? "rotate-180" : ""].join(" ")}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

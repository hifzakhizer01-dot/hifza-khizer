import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-brand-navy/15 bg-brand-navy text-brand-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-brand-dark-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="field-label">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="field-label text-brand-dark-muted/70">
          Built with Next.js &amp; Tailwind — edits live in{" "}
          <code className="font-mono">src/data/content.ts</code>
        </p>
      </div>
    </footer>
  );
}

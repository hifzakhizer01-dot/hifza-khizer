import Link from "next/link";
import AdminForm from "./AdminForm";

export const metadata = {
  title: "Project Dashboard — Hifza Khizer",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/"
          className="field-label text-ink-soft hover:text-raspberry"
        >
          ← Back to site
        </Link>

        <h1 className="font-display mt-6 text-4xl font-bold uppercase tracking-tight md:text-5xl">
          Project Dashboard
        </h1>

        <div className="mt-6 max-w-2xl rounded-sm border border-marigold/50 bg-marigold/10 p-5 text-sm leading-relaxed text-ink-soft">
          <p className="field-label mb-2 text-ink">Why this page doesn&apos;t &quot;save&quot;</p>
          <p>
            This portfolio is a <strong>static site</strong> — it&apos;s just
            HTML, CSS and JS files with no database attached, which is exactly
            what makes it free to host and fast to load on Vercel. That means
            this page can&apos;t write directly to the live site.
          </p>
          <p className="mt-2">
            Instead, fill in the form below and it generates the exact code
            block for a new project. Copy it, paste it into the{" "}
            <code className="font-mono">projects</code> array in{" "}
            <code className="font-mono">src/data/content.ts</code>, then
            commit and push — Vercel rebuilds the site automatically in
            about a minute.
          </p>
          <p className="mt-2">
            <strong>Future upgrade path:</strong> if you eventually want to
            add projects from your phone without touching code, the next
            step is a headless CMS (like Sanity or Contentful) — a small,
            free-tier swap that turns this same form into one that actually
            saves.
          </p>
        </div>

        <div className="mt-12">
          <AdminForm />
        </div>
      </div>
    </div>
  );
}

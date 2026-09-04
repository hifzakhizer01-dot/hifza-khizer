"use client";

import { useMemo, useState } from "react";

const accents = ["orange", "teal-dark", "teal"] as const;
type Accent = (typeof accents)[number];

const accentClass: Record<Accent, string> = {
  orange: "bg-brand-orange",
  "teal-dark": "bg-brand-teal-dark",
  teal: "bg-brand-teal",
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminForm() {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [detailsRaw, setDetailsRaw] = useState("");
  const [tagsRaw, setTagsRaw] = useState("");
  const [link, setLink] = useState("");
  const [linkLabel, setLinkLabel] = useState("");
  const [accent, setAccent] = useState<Accent>("orange");
  const [copied, setCopied] = useState(false);

  const slug = useMemo(() => slugify(title || "new-project"), [title]);
  const details = detailsRaw
    .split("\n")
    .map((d) => d.trim())
    .filter(Boolean);
  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const code = useMemo(() => {
    const detailsCode = details.length
      ? details.map((d) => `    "${escapeQuotes(d)}",`).join("\n")
      : `    "Add a few detail bullets here.",`;
    const tagsCode = tags.length
      ? tags.map((t) => `"${escapeQuotes(t)}"`).join(", ")
      : `"Tag"`;

    return `  {
    slug: "${slug}",
    title: "${escapeQuotes(title || "Project title")}",
    client: "${escapeQuotes(client || "Client / context")}",
    category: "${escapeQuotes(category || "Category")}",
    summary:
      "${escapeQuotes(summary || "One-sentence summary of the project.")}",
    details: [
${detailsCode}
    ],
    tags: [${tagsCode}],${
      link
        ? `\n    link: "${escapeQuotes(link)}",\n    linkLabel: "${escapeQuotes(
            linkLabel || "View project"
          )}",`
        : ""
    }
    accent: "${accent}",
  },`;
  }, [slug, title, client, category, summary, details, tags, link, linkLabel, accent]);

  function handleCopy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* ---------- FORM ---------- */}
      <div className="space-y-5">
        <Field label="Project title">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Spring Sale Campaign"
            className="input"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Client / context">
            <input
              value={client}
              onChange={(e) => setClient(e.target.value)}
              placeholder="e.g. Own business"
              className="input"
            />
          </Field>
          <Field label="Category">
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Social Media"
              className="input"
            />
          </Field>
        </div>

        <Field label="One-line summary">
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={2}
            placeholder="What is this project, in one sentence?"
            className="input"
          />
        </Field>

        <Field label="Detail bullets (one per line)">
          <textarea
            value={detailsRaw}
            onChange={(e) => setDetailsRaw(e.target.value)}
            rows={4}
            placeholder={"Planned and scheduled weekly posts\nGrew followers by X%\nRan a small paid boost test"}
            className="input font-mono text-xs"
          />
        </Field>

        <Field label="Tags (comma-separated)">
          <input
            value={tagsRaw}
            onChange={(e) => setTagsRaw(e.target.value)}
            placeholder="Instagram, Content, Paid Ads"
            className="input"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Link (optional)">
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://..."
              className="input"
            />
          </Field>
          <Field label="Link label">
            <input
              value={linkLabel}
              onChange={(e) => setLinkLabel(e.target.value)}
              placeholder="View project"
              className="input"
            />
          </Field>
        </div>

        <Field label="Accent color">
          <div className="flex gap-3">
            {accents.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAccent(a)}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 field-label transition-colors ${
                  accent === a
                    ? "border-brand-teal bg-brand-teal text-brand-white"
                    : "border-brand-teal/25 text-brand-muted"
                }`}
              >
                <span className={`h-2.5 w-2.5 rounded-full ${accentClass[a]}`} />
                {a}
              </button>
            ))}
          </div>
        </Field>
      </div>

      {/* ---------- PREVIEW + CODE ---------- */}
      <div className="space-y-6">
        <div>
          <p className="field-label mb-2 text-brand-muted">Live preview</p>
          <div className="rounded-sm border border-brand-navy/15 bg-brand-navy p-6 text-brand-white">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="field-label text-brand-orange">
                {category || "Category"}
              </span>
              <span className="field-label text-brand-dark-muted">
                {client || "Client / context"}
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight">
              {title || "Project title"}
            </h3>
            <p className="mt-2 text-sm text-brand-dark-muted">
              {summary || "One-sentence summary of the project."}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(tags.length ? tags : ["Tag"]).map((t, i) => (
                <span
                  key={i}
                  className="field-label rounded-full border border-brand-white/25 px-3 py-1 text-brand-dark-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            {link && (
              <span
                className={`field-label mt-4 inline-flex w-fit items-center gap-2 rounded-full ${accentClass[accent]} px-4 py-2 text-brand-navy`}
              >
                {linkLabel || "View project"} ↗
              </span>
            )}
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="field-label text-brand-muted">
              Code — paste into <code className="font-mono">projects[]</code>
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="field-label rounded-full border border-brand-teal px-3 py-1.5 transition-colors hover:bg-brand-teal hover:text-brand-white"
            >
              {copied ? "Copied!" : "Copy code"}
            </button>
          </div>
          <pre className="overflow-x-auto rounded-sm border border-brand-teal/15 bg-brand-white p-4 font-mono text-xs leading-relaxed text-brand-text">
            {code}
          </pre>
        </div>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid color-mix(in srgb, var(--brand-teal) 20%, transparent);
          background: var(--brand-white);
          border-radius: 2px;
          padding: 0.6rem 0.75rem;
          font-size: 0.9rem;
          color: var(--brand-text);
        }
        .input:focus {
          outline: 2px dashed var(--brand-teal);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="field-label mb-1.5 block text-brand-muted">{label}</span>
      {children}
    </label>
  );
}

function escapeQuotes(s: string) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

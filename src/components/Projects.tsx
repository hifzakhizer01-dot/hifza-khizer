import { projects, type Project } from "@/data/content";

const accentMap = {
  marigold: {
    text: "text-marigold",
    bg: "bg-marigold",
    border: "border-marigold",
    soft: "bg-marigold/10",
  },
  raspberry: {
    text: "text-raspberry",
    bg: "bg-raspberry",
    border: "border-raspberry",
    soft: "bg-raspberry/10",
  },
  teal: {
    text: "text-teal",
    bg: "bg-teal",
    border: "border-teal",
    soft: "bg-teal/10",
  },
} as const;

export default function Projects() {
  return (
    <section id="projects" className="border-t border-ink/15 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 grid gap-10 md:grid-cols-[220px_1fr]">
          <div>
            <p className="field-label text-marigold">Field 04</p>
            <h2 className="font-display mt-1 text-4xl font-bold uppercase leading-none tracking-tight">
              Projects
            </h2>
          </div>
          <p className="max-w-2xl text-paper/70 leading-relaxed">
            Three ways I&apos;ve practiced marketing so far: running a real
            Instagram business, posting for a B2B product, and building a
            classifier that puts my data-analytics half to use.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const c = accentMap[project.accent];

  return (
    <article className="grid gap-8 border-t border-paper/15 pt-10 md:grid-cols-[1fr_1.1fr]">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className={`field-label ${c.text}`}>{project.category}</span>
          <span className="field-label text-paper/40">{project.client}</span>
        </div>

        <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-md text-paper/75 leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="field-label rounded-full border border-paper/25 px-3 py-1 text-paper/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`field-label mt-6 inline-flex items-center gap-2 rounded-sm ${c.bg} px-4 py-2.5 text-ink transition-transform hover:-translate-y-0.5`}
          >
            {project.linkLabel ?? "View"}
            <span aria-hidden>↗</span>
          </a>
        )}
      </div>

      <div className="space-y-6">
        <ul className="space-y-3">
          {project.details.map((d, i) => (
            <li key={i} className="flex gap-3 text-sm text-paper/75 leading-relaxed">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${c.bg}`} />
              {d}
            </li>
          ))}
        </ul>

        {project.slug === "tohfa-tales-pk" && <InstagramGrid />}
        {project.slug === "voicetact" && <CalendarStrip />}
        {project.slug === "cnn-product-classifier" && <ClassifierTape />}
      </div>
    </article>
  );
}

/** Signature module — mimics the real Instagram grid Tohfa Tales PK lives on. */
function InstagramGrid() {
  const tiles = [
    "Basket, top-down",
    "Ribbon detail",
    "Packing process",
    "Client unboxing",
    "Seasonal set",
    "Behind the scenes",
  ];
  return (
    <div>
      <p className="field-label mb-2 text-marigold">@tohfatalespk — feed</p>
      <div className="grid grid-cols-3 gap-1 rounded-sm border border-marigold/40 p-1">
        {tiles.map((caption, i) => (
          <div
            key={i}
            className="group flex aspect-square flex-col items-center justify-center gap-1 border border-dashed border-paper/25 bg-paper/5 p-2 text-center transition-colors hover:border-marigold/60"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4 text-paper/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5-11 11" />
            </svg>
            <span className="text-[9px] leading-tight text-paper/40">
              {caption}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-paper/35">
        Placeholder grid — swap in real photos via the /admin dashboard or{" "}
        <code className="font-mono">src/data/content.ts</code>.
      </p>
    </div>
  );
}

/** Signature module — a B2B posting-rhythm strip for the VoiceTact case study. */
function CalendarStrip() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const posted = [true, false, true, false, true, false, false];
  return (
    <div>
      <p className="field-label mb-2 text-teal">Weekly posting rhythm</p>
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day, i) => (
          <div
            key={day}
            className={`flex flex-col items-center gap-1.5 rounded-sm border py-3 text-center ${
              posted[i]
                ? "border-teal/60 bg-teal/15"
                : "border-paper/15 bg-paper/5"
            }`}
          >
            <span className="text-[10px] text-paper/50">{day}</span>
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                posted[i] ? "bg-teal" : "bg-paper/20"
              }`}
            />
          </div>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-paper/35">
        B2B pages earn trust with consistency, not volume — a steady
        cadence beat frequent posting.
      </p>
    </div>
  );
}

/** Signature module — a "print-out" data tape for the CNN classifier. */
function ClassifierTape() {
  const rows = [
    ["input", "product_image.jpg"],
    ["model", "CNN, 4 conv layers"],
    ["classes", "12 product categories"],
    ["status", "training complete"],
  ];
  return (
    <div className="rounded-sm border border-raspberry/40 bg-paper/5 p-4 font-mono text-xs">
      {rows.map(([k, v]) => (
        <div
          key={k}
          className="flex justify-between gap-4 border-b border-paper/10 py-1.5 last:border-0"
        >
          <span className="text-paper/40">{k}</span>
          <span className="text-paper/80">{v}</span>
        </div>
      ))}
    </div>
  );
}

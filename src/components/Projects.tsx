import { projects, type Project } from "@/data/content";
import Image from "next/image";

const accentMap = {
  orange: {
    text: "text-brand-orange",
    bg: "bg-brand-orange",
    border: "border-brand-orange",
    soft: "bg-brand-orange/10",
  },
  "teal-dark": {
    text: "text-brand-teal-dark",
    bg: "bg-brand-teal-dark",
    border: "border-brand-teal-dark",
    soft: "bg-brand-teal-dark/10",
  },
  teal: {
    text: "text-brand-teal",
    bg: "bg-brand-teal",
    border: "border-brand-teal",
    soft: "bg-brand-teal/10",
  },
} as const;

export default function Projects() {
  return (
    <section id="projects" className="border-t border-brand-navy/15 bg-brand-navy text-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 grid gap-10 md:grid-cols-[220px_1fr]">
          <div>
            <p className="field-label text-brand-orange">Field 04</p>
            <h2 className="font-display mt-1 text-4xl font-bold uppercase leading-none tracking-tight">
              Projects
            </h2>
          </div>
          <p className="max-w-2xl text-brand-dark-muted leading-relaxed">
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
    <article className="grid gap-8 border-t border-brand-white/15 pt-10 md:grid-cols-[1fr_1.1fr]">
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className={`field-label ${c.text}`}>{project.category}</span>
          <span className="field-label text-brand-dark-muted">{project.client}</span>
        </div>

        <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {project.title}
        </h3>

        <p className="mt-4 max-w-md text-brand-dark-muted leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="field-label rounded-full border border-brand-white/25 px-3 py-1 text-brand-dark-muted"
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
            className={`field-label mt-6 inline-flex items-center gap-2 rounded-full ${c.bg} px-4 py-2.5 text-brand-navy transition-colors hover:bg-brand-teal-dark`}
          >
            {project.linkLabel ?? "View"}
            <span aria-hidden>↗</span>
          </a>
        )}
      </div>

      <div className="space-y-6">
        <ul className="space-y-3">
          {project.details.map((d, i) => (
            <li key={i} className="flex gap-3 text-sm text-brand-dark-muted leading-relaxed">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${c.bg}`} />
              {d}
            </li>
          ))}
        </ul>

        <ProjectImageGrid project={project} />
        {project.slug === "voicetact" && <CalendarStrip />}
        {project.slug === "cnn-product-classifier" && <ClassifierTape />}
      </div>
    </article>
  );
}

function ProjectImageGrid({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {project.images.map((image, index) => (
        <div
          key={image}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-teal/30 bg-brand-white/5 shadow-sm transition-shadow hover:border-brand-teal hover:shadow-lg hover:shadow-brand-teal/20"
        >
          <Image
            src={image}
            alt={`${project.title} work sample ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 30vw, 45vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

/** Signature module — a B2B posting-rhythm strip for the VoiceTact case study. */
function CalendarStrip() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const posted = [true, false, true, false, true, false, false];
  return (
    <div>
      <p className="field-label mb-2 text-brand-teal">Weekly posting rhythm</p>
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day, i) => (
          <div
            key={day}
            className={`flex flex-col items-center gap-1.5 rounded-sm border py-3 text-center ${
              posted[i]
                ? "border-brand-teal/60 bg-brand-teal/15"
                : "border-brand-white/15 bg-brand-white/5"
            }`}
          >
            <span className="text-[10px] text-brand-dark-muted">{day}</span>
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                posted[i] ? "bg-brand-teal" : "bg-brand-white/20"
              }`}
            />
          </div>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-brand-dark-muted/70">
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
    <div className="rounded-sm border border-brand-teal-dark/40 bg-brand-white/5 p-4 font-mono text-xs">
      {rows.map(([k, v]) => (
        <div
          key={k}
          className="flex justify-between gap-4 border-b border-brand-white/10 py-1.5 last:border-0"
        >
          <span className="text-brand-dark-muted">{k}</span>
          <span className="text-brand-white/80">{v}</span>
        </div>
      ))}
    </div>
  );
}

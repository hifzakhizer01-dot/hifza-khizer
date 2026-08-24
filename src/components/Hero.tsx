import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="doc-grid relative overflow-hidden border-b border-ink/15 bg-ink text-paper"
      style={{ color: "var(--paper)" }}
    >
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        {/* stamp */}
        <div className="stamp absolute right-6 top-24 hidden select-none rounded-full border-2 border-marigold px-4 py-2 md:block">
          <span className="field-label text-marigold">Brief Approved</span>
        </div>

        <p className="field-label mb-6 text-marigold">
          Campaign Brief — Candidate Profile
        </p>

        <h1 className="font-display max-w-4xl text-[15vw] font-black uppercase leading-[0.85] tracking-tight md:text-[6.5rem]">
          Hifza
          <br />
          Khizer
        </h1>

        <p className="mt-6 max-w-xl text-lg text-paper/85 md:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-paper/20 pt-6 sm:grid-cols-4">
          <Field label="Location" value={profile.location.split(",")[0]} />
          <Field label="Education" value="BS Data Analytics" />
          <Field label="Focus" value="Marketing" />
          <Field label="Status" value="Open to roles" accent />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="field-label rounded-sm bg-marigold px-5 py-3 text-ink transition-transform hover:-translate-y-0.5"
          >
            View the work
          </a>
          <a
            href="#contact"
            className="field-label rounded-sm border border-paper/40 px-5 py-3 text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            Say hello
          </a>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="field-label text-paper/50">{label}</p>
      <p
        className={`mt-1 font-mono text-sm ${
          accent ? "text-marigold" : "text-paper"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

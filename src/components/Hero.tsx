import { profile } from "@/data/content";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="doc-grid relative overflow-hidden border-b border-brand-navy/15 bg-brand-navy text-brand-white"
    >
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        {/* stamp */}
        <div className="absolute right-6 top-24 hidden h-72 w-72 rounded-full bg-brand-teal/90 md:block" />

        <div className="relative grid items-center gap-12 md:grid-cols-[1fr_280px]">
          <div>

        <p className="field-label mb-6 text-brand-orange">
          Campaign Brief — Candidate Profile
        </p>

        <h1 className="font-display max-w-4xl text-[15vw] font-black uppercase leading-[0.85] tracking-tight md:text-[6.5rem]">
          Hifza
          <br />
          Khizer
        </h1>

        <p className="mt-6 max-w-xl text-lg text-brand-dark-muted md:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-brand-white/20 pt-6 sm:grid-cols-4">
          <Field label="Location" value={profile.location.split(",")[0]} />
          <Field label="Education" value="BS Data Analytics" />
          <Field label="Focus" value="Marketing" />
          <Field label="Status" value="Open to roles" accent />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="field-label rounded-full bg-brand-teal px-5 py-3 text-brand-white transition-colors hover:bg-brand-teal-dark"
          >
            View the work
          </a>
          <a
            href="#contact"
            className="field-label rounded-full border border-brand-white/40 px-5 py-3 text-brand-white transition-colors hover:border-brand-white hover:bg-brand-white/10"
          >
            Say hello
          </a>
        </div>

          </div>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-4 rounded-full bg-brand-teal" />
            <Image
              src={profile.heroImage}
              alt={profile.name}
              width={320}
              height={400}
              className="relative aspect-[4/5] w-full rounded-[45%] object-cover shadow-2xl"
              priority
            />
          </div>
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
      <p className="field-label text-brand-dark-muted">{label}</p>
      <p
        className={`mt-1 font-mono text-sm ${
          accent ? "text-brand-orange" : "text-brand-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

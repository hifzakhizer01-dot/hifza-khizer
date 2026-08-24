import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[220px_1fr]">
        <div>
          <p className="field-label text-raspberry">Field 01</p>
          <h2 className="font-display mt-1 text-4xl font-bold uppercase leading-none tracking-tight">
            About
          </h2>
          <p className="field-label mt-4 text-ink-soft">
            {profile.education}
          </p>
        </div>

        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[220px_1fr]">
        <div>
          <p className="field-label text-raspberry">Field 05</p>
          <h2 className="font-display mt-1 text-4xl font-bold uppercase leading-none tracking-tight">
            Contact
          </h2>
          <p className="field-label mt-4 text-teal">{profile.status}</p>
        </div>

        <div className="max-w-xl">
          <p className="text-lg text-ink-soft leading-relaxed">
            Have a role, an internship, or a campaign that needs an extra
            pair of hands? I&apos;d love to hear from you.
          </p>

          <dl className="mt-8 space-y-5">
            <Row label="Email">
              <a href={`mailto:${profile.email}`} className="hover:text-raspberry">
                {profile.email}
              </a>
            </Row>
            <Row label="Phone">
              <a href={profile.phoneHref} className="hover:text-raspberry">
                {profile.phone}
              </a>
            </Row>
            <Row label="LinkedIn">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-raspberry"
              >
                linkedin.com/in/hifza-khizer
              </a>
            </Row>
            <Row label="Location">{profile.location}</Row>
          </dl>

          <a
            href={`mailto:${profile.email}`}
            className="field-label mt-10 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-paper transition-transform hover:-translate-y-0.5"
          >
            Send an email
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-ink/10 pb-3">
      <dt className="field-label w-24 shrink-0 text-ink-soft">{label}</dt>
      <dd className="font-mono text-sm text-ink">{children}</dd>
    </div>
  );
}

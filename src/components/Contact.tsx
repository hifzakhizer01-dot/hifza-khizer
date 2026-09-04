import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[220px_1fr]">
        <div>
          <p className="field-label text-brand-teal">Field 05</p>
          <h2 className="font-display mt-1 text-4xl font-bold uppercase leading-none tracking-tight">
            Contact
          </h2>
          <p className="field-label mt-4 text-brand-teal">{profile.status}</p>
        </div>

        <div className="max-w-xl">
          <p className="text-lg text-brand-muted leading-relaxed">
            Have a role, an internship, or a campaign that needs an extra
            pair of hands? I&apos;d love to hear from you.
          </p>

          <dl className="mt-8 space-y-5">
            <Row label="Email">
              <a href={`mailto:${profile.email}`} className="hover:text-brand-teal-dark">
                {profile.email}
              </a>
            </Row>
            <Row label="Phone">
              <a href={profile.phoneHref} className="hover:text-brand-teal-dark">
                {profile.phone}
              </a>
            </Row>
            <Row label="LinkedIn">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-teal-dark"
              >
                linkedin.com/in/hifza-khizer
              </a>
            </Row>
            <Row label="Location">{profile.location}</Row>
          </dl>

          <a
            href={`mailto:${profile.email}`}
            className="field-label mt-10 inline-flex items-center gap-2 rounded-full bg-brand-teal px-5 py-3 text-brand-white transition-colors hover:bg-brand-teal-dark"
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
    <div className="flex items-baseline gap-4 border-b border-brand-teal/10 pb-3">
      <dt className="field-label w-24 shrink-0 text-brand-muted">{label}</dt>
      <dd className="font-mono text-sm text-brand-text">{children}</dd>
    </div>
  );
}

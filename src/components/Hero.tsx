import { profile } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy px-6 py-24 lg:px-16 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-[420px] w-[420px]">
          <div className="absolute -right-6 -top-6 h-[300px] w-[300px] rounded-full bg-brand-teal-dark/60" />
          <div className="absolute bottom-0 right-8 h-[360px] w-[360px] overflow-hidden rounded-full ring-4 ring-brand-teal/30">
            <Image
              src={profile.heroImage}
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl lg:mx-0">
        <p className="text-sm font-semibold tracking-wide text-brand-orange">
          Campaign brief — candidate profile
        </p>

        <h1 className="mt-6 text-6xl font-extrabold leading-[0.95] tracking-tight text-brand-white lg:text-7xl">
          Hifza
          <br />
          Khizer
        </h1>

        <p className="mt-6 max-w-xl text-lg text-brand-dark-muted">
          {profile.tagline}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-brand-white/10 pt-6 sm:grid-cols-4">
          <Field label="Location" value={profile.location.split(",")[0]} />
          <Field label="Education" value="BS Data Analytics" />
          <Field label="Focus" value="Marketing" />
          <Field label="Status" value="Open to roles" accent />
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-brand-white transition hover:bg-brand-teal-dark"
          >
            View the work
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-brand-white/30 px-6 py-3 text-sm font-semibold text-brand-white transition hover:border-brand-white"
          >
            Say hello
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 h-64 w-64 overflow-hidden rounded-full ring-4 ring-brand-teal/30 lg:hidden">
        <Image
          src={profile.heroImage}
          alt={profile.name}
          fill
          className="object-cover"
        />
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

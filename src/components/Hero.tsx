import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/content";

export default function Hero() {
  // Splits "Hifza Khizer" into two stacked lines for the big heading
  const nameParts = profile.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section className="relative overflow-hidden bg-brand-navy px-6 py-24 lg:px-16 lg:py-32">
      {/* Decorative teal circles — contained, no overflow/clipping */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-[420px] w-[420px]">
          {/* Back circle, peeking out for depth */}
          <div className="absolute -right-6 -top-6 h-[300px] w-[300px] rounded-full bg-brand-teal-dark/60" />
          {/* Front circle holding the photo */}
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
        <h1 className="font-display text-7xl font-black uppercase leading-[0.9] tracking-tight text-white lg:text-8xl">
          {firstName}
          <br />
          {lastName}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-slate-300">
          {profile.tagline}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-4">
          <div>
            <p className="text-xs text-slate-400">Location</p>
            <p className="mt-1 font-medium text-white">{profile.location}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Education</p>
            <p className="mt-1 font-medium text-white">{profile.education}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Focus</p>
            <p className="mt-1 font-medium text-white">Marketing</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Status</p>
            <p className="mt-1 font-medium text-brand-orange">{profile.status}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-teal-dark"
          >
            View the work
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
          >
            Say hello
          </Link>
        </div>
      </div>

      {/* Mobile photo — shown below text instead of floating right */}
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

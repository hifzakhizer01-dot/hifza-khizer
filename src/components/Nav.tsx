import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus" },
  { href: "#timeline", label: "Timeline" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-teal/15 bg-brand-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-teal text-white font-bold text-sm">
              HK
            </span>
          </div>
        </Link>
        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="field-label text-brand-muted transition-colors hover:text-brand-teal-dark"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="field-label rounded-full border border-brand-teal px-3 py-1.5 text-brand-teal transition-colors hover:bg-brand-teal hover:text-brand-white"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

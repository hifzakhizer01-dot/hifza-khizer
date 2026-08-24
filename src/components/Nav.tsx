const links = [
  { href: "#about", label: "About" },
  { href: "#focus", label: "Focus" },
  { href: "#timeline", label: "Timeline" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="field-label flex items-center gap-2 text-ink"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-raspberry" />
          Hifza Khizer
        </a>
        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="field-label text-ink-soft transition-colors hover:text-raspberry"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="field-label rounded-sm border border-ink px-3 py-1.5 text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

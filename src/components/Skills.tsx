import { tools, focusAreas } from "@/data/content";

export default function Skills() {
  return (
    <section id="focus" className="border-y border-brand-teal/15 bg-brand-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[220px_1fr]">
          <div>
            <p className="field-label text-brand-teal">Field 02</p>
            <h2 className="font-display mt-1 text-4xl font-bold uppercase leading-none tracking-tight">
              Focus &amp; Tools
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <p className="field-label mb-4 text-brand-muted">
                Areas I&apos;m building toward
              </p>
              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="field-label rounded-full border border-brand-teal/25 bg-brand-white px-3.5 py-2 text-brand-text"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="field-label mb-4 text-brand-muted">
                Tools in the current stack
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                {tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="border-l-2 border-brand-orange pl-3"
                  >
                    <p className="font-medium text-brand-text">{tool.name}</p>
                    <p className="field-label text-brand-muted/70">
                      {tool.category}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

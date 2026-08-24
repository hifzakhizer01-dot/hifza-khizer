import { tools, focusAreas } from "@/data/content";

export default function Skills() {
  return (
    <section id="focus" className="border-y border-ink/15 bg-paper-dim">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[220px_1fr]">
          <div>
            <p className="field-label text-raspberry">Field 02</p>
            <h2 className="font-display mt-1 text-4xl font-bold uppercase leading-none tracking-tight">
              Focus &amp; Tools
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <p className="field-label mb-4 text-ink-soft">
                Areas I&apos;m building toward
              </p>
              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="field-label rounded-full border border-ink/25 bg-paper px-3.5 py-2 text-ink"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="field-label mb-4 text-ink-soft">
                Tools in the current stack
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                {tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="border-l-2 border-marigold pl-3"
                  >
                    <p className="font-medium text-ink">{tool.name}</p>
                    <p className="field-label text-ink-soft/70">
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

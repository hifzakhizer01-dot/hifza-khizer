import { timeline } from "@/data/content";

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[220px_1fr]">
        <div>
          <p className="field-label text-brand-teal">Field 03</p>
          <h2 className="font-display mt-1 text-4xl font-bold uppercase leading-none tracking-tight">
            Timeline
          </h2>
          <p className="mt-4 max-w-[200px] text-sm text-brand-muted">
            How the interest in marketing actually happened, in order.
          </p>
        </div>

        <ol className="relative space-y-10 border-l border-brand-teal/20 pl-8">
          {timeline.map((item) => (
            <li key={item.stage} className="relative">
              <span className="absolute -left-[38px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-teal bg-brand-white">
                <span className="h-2 w-2 rounded-full bg-brand-teal" />
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="field-label text-brand-orange">
                  {item.stage}
                </span>
                <span className="field-label text-brand-muted/70">
                  {item.when}
                </span>
              </div>

              <h3 className="font-display mt-1 text-2xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="field-label mt-0.5 text-brand-muted">
                {item.place}
              </p>
              <p className="mt-3 max-w-2xl text-brand-muted leading-relaxed">
                {item.description}
              </p>
              <span className="field-label mt-3 inline-block rounded-full bg-brand-teal/10 px-3 py-1 text-brand-teal-dark">
                {item.tag}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

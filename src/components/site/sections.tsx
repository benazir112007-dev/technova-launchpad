import { Reveal } from "./Reveal";
import { services, projects, stats } from "./site-data";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => (
        <Reveal key={service.title} delay={i * 70}>
          <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
            <div className="mb-5 grid size-11 place-items-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
              <service.icon className="size-5" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function PortfolioGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
      {items.map((project, i) => (
        <Reveal key={project.name} delay={i * 80}>
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={project.image}
                alt={`${project.name} — ${project.category}`}
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h4 className="truncate text-lg font-medium">{project.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {project.category}
                </p>
              </div>
              <span className="shrink-0 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 70}>
          <div className="flex flex-col">
            <span className="font-display text-4xl font-bold text-accent md:text-5xl">
              {stat.value}
            </span>
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

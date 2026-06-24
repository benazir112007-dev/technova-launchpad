import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServicesGrid } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TechNova" },
      {
        name: "description",
        content:
          "Cloud architecture, AI integration, product engineering, security, data, and platform strategy — the full engineering stack from TechNova.",
      },
      { property: "og:title", content: "Services — TechNova" },
      {
        property: "og:description",
        content:
          "Cloud, AI, product engineering, security, data, and platform strategy from TechNova.",
      },
    ],
  }),
  component: Services,
});

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We audit your systems, goals, and constraints to define a sharp technical roadmap.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture and interfaces are designed for scale, security, and clarity from day one.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Senior engineers ship in tight iterations with continuous testing and observability.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "We harden, monitor, and optimize so your platform grows without rewrites.",
  },
];

function Services() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our Services"
            title="A full-stack engineering partner"
            description="From the first architecture diagram to millions of users, we cover the systems that move your business forward."
          />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <ServicesGrid />
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How it works"
            title="A process built for momentum"
            className="mb-14"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-display text-3xl font-bold text-accent/40">
                    {item.step}
                  </span>
                  <h3 className="mt-4 mb-2 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card px-8 py-14 text-center md:px-16">
              <h2 className="font-display text-3xl font-bold">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us where you want to go and we'll map the fastest, safest
                route to get there.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-accent px-8 font-semibold text-accent-foreground transition-transform active:scale-95"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

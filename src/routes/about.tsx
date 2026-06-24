import { createFileRoute } from "@tanstack/react-router";
import { Target, Zap, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatsRow } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TechNova" },
      {
        name: "description",
        content:
          "TechNova is an engineering studio operating at the intersection of extreme speed and clinical precision. Meet the team building the digital frontier.",
      },
      { property: "og:title", content: "About — TechNova" },
      {
        property: "og:description",
        content:
          "An engineering studio operating at the intersection of extreme speed and clinical precision.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Zap,
    title: "Velocity",
    description:
      "We ship in days, not quarters. Tight feedback loops keep momentum high and risk low.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Every system is measured, monitored, and engineered for correctness — not guesswork.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We embed with your team, transfer knowledge, and leave you stronger than we found you.",
  },
];

function About() {
  return (
    <>
      <section className="px-6 pt-20 pb-12 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="About TechNova"
            title="We operate at the intersection of extreme speed and clinical precision."
            description="Founded by engineers who were tired of bloated processes, TechNova partners with ambitious teams to build infrastructure and products that endure. We are a small, senior team that ships."
          />
        </div>
      </section>

      <section className="border-y border-border bg-surface/30 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <StatsRow />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="space-y-5 text-muted-foreground">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Our story
              </h2>
              <p className="leading-relaxed">
                TechNova began with a simple conviction: world-class software
                comes from small teams of senior engineers who own outcomes end
                to end. No hand-offs, no diffusion of responsibility.
              </p>
              <p className="leading-relaxed">
                Today we help fintechs, platforms, and enterprises modernize
                their stacks, integrate AI responsibly, and scale to millions of
                users without rewrites. We measure success by the systems still
                running flawlessly years after launch.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <p className="font-display text-2xl font-semibold leading-snug">
                “We build products that transcend trends — focused on clarity,
                performance, and lasting resonance.”
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                — The TechNova founding team
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="How we work"
            title="The principles behind every build"
            className="mb-14"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="mb-5 grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                    <value.icon className="size-5" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

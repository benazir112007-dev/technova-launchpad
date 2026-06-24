import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServicesGrid, PortfolioGrid, StatsRow } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechNova — Engineering the Digital Frontier" },
      {
        name: "description",
        content:
          "TechNova builds high-performance cloud, AI, and product engineering solutions for enterprises ready to scale in the age of intelligence.",
      },
      { property: "og:title", content: "TechNova — Engineering the Digital Frontier" },
      {
        property: "og:description",
        content:
          "High-performance cloud, AI, and product engineering for enterprises ready to scale.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-accent/15 blur-[120px] animate-glow" />
        <div className="pointer-events-none absolute top-40 right-0 size-72 rounded-full bg-accent/10 blur-[120px] animate-glow [animation-delay:1.5s]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-block rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-accent">
                Next Gen Infrastructure
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Building the{" "}
                <span className="text-accent glow-text">Digital</span> Frontier.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                High-performance solutions for enterprises ready to scale in the
                age of intelligence — from cloud architecture to AI, built with
                clinical precision.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="flex h-14 items-center justify-center gap-2 rounded-xl bg-accent px-8 font-semibold text-accent-foreground transition-transform active:scale-95"
                >
                  Get Started <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="flex h-14 items-center justify-center rounded-xl border border-border bg-surface/50 px-8 font-medium transition-colors hover:border-accent/40"
                >
                  View Portfolio
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface/30 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <StatsRow />
        </div>
      </section>

      {/* Services preview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our Expertise"
              title="Capabilities built to scale"
              description="A full-stack engineering partner across the systems that move your business forward."
            />
            <Reveal delay={150}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
              >
                All services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <ServicesGrid limit={3} />
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected Work"
              title="Crafted with intention"
              description="A glimpse at the platforms and products we've shipped for ambitious teams."
            />
            <Reveal delay={150}>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
              >
                View all work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <PortfolioGrid limit={2} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-accent px-8 py-16 text-center text-accent-foreground md:px-16 md:py-20">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Ready to deploy?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-accent-foreground/70">
                Connect with our engineering team for a technical audit of your
                existing systems — no strings attached.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-background px-8 font-bold text-foreground shadow-xl transition-transform active:scale-95"
              >
                Start a Conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

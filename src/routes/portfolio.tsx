import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PortfolioGrid } from "@/components/site/sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — TechNova" },
      {
        name: "description",
        content:
          "Selected work from TechNova: cloud platforms, AI infrastructure, fintech products, and realtime data systems built for scale.",
      },
      { property: "og:title", content: "Portfolio — TechNova" },
      {
        property: "og:description",
        content:
          "Cloud platforms, AI infrastructure, fintech products, and realtime data systems built for scale.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Platforms and products built to last"
            description="Each engagement is a partnership. Here is a selection of the systems we've shipped for ambitious teams."
          />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <PortfolioGrid />
        </div>
      </section>

      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="rounded-3xl bg-accent px-8 py-16 text-center text-accent-foreground md:px-16">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Your project could be next.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-accent-foreground/70">
                Let's talk about what you're building and how we can help you
                ship it faster.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-background px-8 font-bold text-foreground transition-transform active:scale-95"
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

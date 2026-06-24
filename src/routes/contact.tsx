import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TechNova" },
      {
        name: "description",
        content:
          "Get in touch with TechNova. Tell us about your project and our engineering team will reach out for a technical audit.",
      },
      { property: "og:title", content: "Contact — TechNova" },
      {
        property: "og:description",
        content:
          "Tell us about your project and our engineering team will reach out.",
      },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: Mail, label: "Email", value: "hello@technova.studio" },
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0142" },
  { icon: MapPin, label: "Studio", value: "San Francisco · Remote" },
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Message sent", {
        description: "Thanks for reaching out — we'll respond within 24 hours.",
      });
    }, 700);
  }

  return (
    <section className="px-6 pt-20 pb-24 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful together."
          description="Tell us where you want to go. We'll map the fastest, safest route to get there."
          className="mb-14"
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-6">
              {details.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words text-base">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-lg font-semibold">
                  Prefer a technical audit?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Send us access to your stack and we'll return a prioritized
                  report on performance, security, and scale.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jane Doe" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                />
              </div>
              <div className="mt-5">
                <Field
                  label="Company"
                  name="company"
                  placeholder="Acme Inc."
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Project brief
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you're building…"
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 flex h-14 w-full items-center justify-center rounded-xl bg-accent font-semibold text-accent-foreground transition-transform active:scale-95 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

function Field({ label, name, type = "text", placeholder, required }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  );
}

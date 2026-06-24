import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { navLinks } from "./site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="font-display text-xl font-bold tracking-tight text-accent"
            >
              TECH<span className="text-foreground">NOVA</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              High-performance engineering for enterprises ready to scale in the
              age of intelligence.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </h3>
            <p className="text-sm text-muted-foreground">hello@technova.studio</p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} TechNova Solutions Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "./Logo";
import { company, navLinks, serviceGroups } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/30">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="min-w-0">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {company.tagline} A digital agency building websites, brands, software and AI
              solutions for growing businesses worldwide.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {company.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {s.label}
                    <ArrowUpRight className="size-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links" className="min-w-0">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceGroups.slice(0, 6).map((g) => (
                <li key={g.slug}>
                  <Link
                    to="/services"
                    hash={g.slug}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex min-w-0 items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`mailto:${company.email}`} className="truncate hover:text-primary">
                  {company.email}
                </a>
              </li>
              <li className="flex min-w-0 items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                  {company.phone}
                </a>
              </li>
              <li className="flex min-w-0 items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-glow my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {company.name} ✔️ · All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms
            </Link>
            <a href={`https://${company.domain}`} className="hover:text-primary">
              {company.domain}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

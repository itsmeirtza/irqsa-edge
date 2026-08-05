import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/Shared";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/site";
import { cn } from "@/lib/utils";

const title = "Pricing — Transparent Digital Agency Packages | Irqsa Edge";
const description =
  "Simple, transparent pricing for websites, e-commerce stores, branding, custom software and AI solutions. Fixed quotes with no hidden fees.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Clear packages, <span className="text-gradient">fixed quotes</span>
          </>
        }
        description="Pick a starting point below. Every engagement is confirmed with a written scope and a fixed price before any work begins."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.08}
              className={cn(
                "card-rim relative flex h-full flex-col rounded-3xl border bg-card p-8 transition-transform duration-500 hover:-translate-y-1.5",
                plan.featured
                  ? "border-primary/40 shadow-glow lg:-mt-4 lg:pb-12"
                  : "border-border shadow-soft",
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-brand-gradient px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                  Most popular
                </span>
              ) : null}

              <h2 className="font-display text-lg font-semibold text-foreground">{plan.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>

              <p className="mt-6 flex items-end gap-2">
                <span className="font-display text-4xl font-semibold text-foreground">
                  {plan.price}
                </span>
                <span className="pb-1 text-xs text-muted-foreground">{plan.cadence}</span>
              </p>

              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.featured ? "premium" : "outline"}
                size="lg"
                className="mt-8 w-full"
              >
                <Link to="/contact">
                  {plan.cta} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-3xl border border-border bg-secondary/40 p-7 text-center">
          <p className="text-sm text-muted-foreground">
            Need graphic design, marketing or maintenance only? We also work on monthly retainers
            and per-deliverable rates — tell us what you need and we'll price it precisely.
          </p>
        </Reveal>
      </Section>

      <FaqSection muted />
      <CtaBand />
    </>
  );
}

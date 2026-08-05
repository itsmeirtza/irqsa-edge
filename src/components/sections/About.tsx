import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { values } from "@/data/site";

export function AboutSection({ withCta = true }: { withCta?: boolean }) {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          align="left"
          eyebrow="About Irqsa Edge"
          title={
            <>
              A modern digital agency for{" "}
              <span className="text-gradient">complete business solutions</span>
            </>
          }
          description="Irqsa Edge is a digital agency and software house. We design brands, build websites and stores, engineer custom software, and deploy AI systems — all under one roof, with one accountable team. From a first landing page to a multi-market platform, we handle strategy, design, development, launch and long-term care."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal
              key={value.title}
              delay={(i % 2) * 0.08}
              className="card-rim rounded-2xl border border-border bg-card p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <h3 className="font-display text-base font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {withCta ? (
        <Reveal className="mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/about">
              More about our studio <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      ) : null}
    </Section>
  );
}

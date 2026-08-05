import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Counter } from "@/components/common/Counter";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { processSteps, projects, stats, technologies, testimonials, whyChooseUs } from "@/data/site";

export function StatsBand() {
  return (
    <Section className="py-14 sm:py-16">
      <div className="grid grid-cols-2 gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="min-w-0 text-center">
            <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function WhyChooseUs() {
  return (
    <Section muted>
      <SectionHeading
        eyebrow="Why Irqsa Edge"
        title={
          <>
            Ten reasons clients stay <span className="text-gradient">for years</span>
          </>
        }
        description="We're small enough to care about every detail and structured enough to deliver on schedule."
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={(i % 3) * 0.06}
            className="card-rim group rounded-2xl border border-border bg-card p-6 transition-transform duration-500 hover:-translate-y-1"
          >
            <span className="grid size-8 place-items-center rounded-full bg-primary-soft text-primary">
              <Check className="size-4" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Working Process"
        title="A seven-step process with no surprises"
        description="You always know what's happening, what's next, and what we need from you."
      />

      <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal
            as="li"
            key={step.step}
            delay={(i % 4) * 0.07}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
          >
            <span className="font-display text-4xl font-semibold text-primary-soft transition-colors duration-500 group-hover:text-primary">
              {step.step}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            <span className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function TechMarquee() {
  const row = [...technologies, ...technologies];

  return (
    <Section muted className="overflow-hidden">
      <SectionHeading
        eyebrow="Technologies"
        title="A modern stack, chosen per project"
        description="We pick the tools that fit your goals and budget — never the other way around."
      />

      <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="marquee-track flex w-max items-center gap-3">
          {row.map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-soft"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function PortfolioSection({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <Section>
      <SectionHeading
        eyebrow="Portfolio"
        title={
          <>
            Selected work across <span className="text-gradient">industries</span>
          </>
        }
        description="Placeholder projects showing the range of what we design and build — swap in your own case studies any time."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {items.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={(i % 2) * 0.08}
            className="card-rim group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} — ${p.category} project by Irqsa Edge`}
                loading="lazy"
                width={1024}
                height={768}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-surface-strong px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-foreground backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border/70 px-2.5 py-1 text-[0.7rem] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {limit ? (
        <Reveal className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">
              View full portfolio <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      ) : null}
    </Section>
  );
}

export function TestimonialsSection() {
  return (
    <Section muted>
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say after launch"
        description="Placeholder testimonials — replace with your own once your first projects go live."
      />

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            as="li"
            key={t.name}
            delay={(i % 3) * 0.07}
            className="card-rim flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-transform duration-500 hover:-translate-y-1"
          >
            <span className="font-display text-4xl leading-none text-primary/40" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/90">{t.quote}</p>
            <div className="mt-6 flex min-w-0 items-center gap-3 border-t border-border pt-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-gradient font-display text-sm font-semibold text-primary-foreground">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-foreground">
                  {t.name}
                </span>
                <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function CtaBand() {
  return (
    <Section>
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 text-center shadow-card sm:px-12">
        <div className="bg-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Ready to build something your competitors will notice?
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Tell us about your project and we'll come back with a clear scope, timeline and fixed
            quote within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="premium" size="xl">
              <Link to="/contact">
                Start Your Project <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

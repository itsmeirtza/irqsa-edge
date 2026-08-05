import { Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";

import heroImage from "@/assets/hero-abstract.jpg";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/common/Section";
import { industries } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      {/* Animated ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-hero-glow absolute inset-0" />
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="animate-float absolute -left-20 top-10 size-72 rounded-full bg-primary/20 blur-[90px]" />
        <div className="animate-float-delayed absolute -right-16 top-40 size-80 rounded-full bg-primary-glow/25 blur-[110px]" />
        <div className="animate-float absolute bottom-0 left-1/3 size-64 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <Reveal>
            <Eyebrow>Digital Agency · Software House · AI Studio</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl lg:text-[3.6rem]">
              We build websites, brands &amp;{" "}
              <span className="text-gradient">AI solutions</span> that grow your business.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Irqsa Edge helps startups and businesses build modern websites, Shopify stores, AI
              solutions, branding, software and digital experiences that generate real business
              growth.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="premium" size="xl">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-1.5 font-medium text-foreground">4.9/5</span> average client
                rating
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>320+ projects delivered in 18 countries</span>
            </div>
          </Reveal>
        </div>

        {/* Hero visual */}
        <Reveal delay={0.18} className="relative min-w-0">
          <div className="card-rim relative overflow-hidden rounded-[2rem] border border-border shadow-card">
            <img
              src={heroImage}
              alt="Abstract blue glass forms representing Irqsa Edge digital craftsmanship"
              width={1408}
              height={1200}
              className="aspect-[7/6] size-full object-cover"
            />
            <div className="glass-media absolute bottom-4 left-4 right-4 rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.18em] opacity-70">Building the future</p>
              <p className="mt-1 text-sm font-medium">
                One solution at a time — design, code, AI and growth under one roof.
              </p>
            </div>
          </div>

        </Reveal>
      </div>

      {/* Industry strip */}
      <Reveal
        delay={0.4}
        className="mx-auto mt-16 w-full max-w-6xl px-5 sm:px-8"
      >
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted across industries
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {industries.map((industry) => (
            <li
              key={industry}
              className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {industry}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Figma,
  Globe,
  LifeBuoy,
  Palette,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { serviceGroups, type ServiceGroup } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Globe,
  ShoppingBag,
  Palette,
  Figma,
  Sparkles,
  Code2,
  TrendingUp,
  LifeBuoy,
};

export function ServiceCard({
  group,
  index,
  detailed = false,
}: {
  group: ServiceGroup;
  index: number;
  detailed?: boolean;
}) {
  const Icon = icons[group.icon] ?? Globe;
  const visible = detailed ? group.items : group.items.slice(0, 6);

  return (
    <Reveal
      as="article"
      delay={(index % 3) * 0.08}
      className="card-rim group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
    >
      <span id={group.slug} className="absolute -top-24" aria-hidden="true" />
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-primary transition-colors duration-500 group-hover:bg-brand-gradient group-hover:text-primary-foreground">
          <Icon className="size-5" />
        </span>
        <span className="font-display text-xs tracking-[0.2em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold text-foreground">{group.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{group.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {visible.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border/70 bg-secondary/60 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
          >
            {item}
          </li>
        ))}
        {!detailed && group.items.length > 6 ? (
          <li className="rounded-full bg-primary-soft px-2.5 py-1 text-[0.7rem] font-medium text-accent-foreground">
            +{group.items.length - 6} more
          </li>
        ) : null}
      </ul>

      <div className="mt-auto pt-6">
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1"
        >
          Discuss this service <ArrowRight className="size-4" />
        </Link>
      </div>
    </Reveal>
  );
}

export function ServicesSection({
  detailed = false,
  showAll = false,
}: {
  detailed?: boolean;
  showAll?: boolean;
}) {
  const groups = showAll ? serviceGroups : serviceGroups.slice(0, 6);

  return (
    <Section id="services">
      {showAll ? null : (
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything you need to launch, <span className="text-gradient">look sharp</span> and
              scale
            </>
          }
          description="One senior team covering design, development, e-commerce, AI and marketing — so your digital presence stays consistent from first pixel to post-launch growth."
        />
      )}

      <div className={showAll ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"}>
        {groups.map((group, i) => (
          <ServiceCard key={group.slug} group={group} index={i} detailed={detailed} />
        ))}
      </div>

      {!showAll ? (
        <Reveal className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              Explore all services <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      ) : null}
    </Section>
  );
}

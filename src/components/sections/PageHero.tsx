import { Reveal } from "@/components/common/Reveal";
import { Eyebrow } from "@/components/common/Section";

/** Compact hero used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-32 sm:px-8 sm:pb-14 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-hero-glow absolute inset-0" />
        <div className="grid-lines absolute inset-0 opacity-30" />
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 text-center">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

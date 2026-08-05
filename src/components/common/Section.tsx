import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-accent/60 px-3.5 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent-foreground",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "text-balance font-semibold text-foreground",
          Tag === "h1"
            ? "text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            : "text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
  muted = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-5 py-20 sm:px-8 sm:py-24 lg:py-28",
        muted && "bg-secondary/40",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

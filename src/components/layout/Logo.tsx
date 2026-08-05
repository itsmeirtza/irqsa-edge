import { Link } from "@tanstack/react-router";

import logo from "@/assets/irqsa-logo.jpeg.asset.json";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      to="/"
      aria-label={`${company.name} home`}
      className={cn("group flex min-w-0 items-center gap-3", className)}
    >
      <img
        src={logo.url}
        alt={`${company.name} logo`}
        width={44}
        height={44}
        className="size-10 shrink-0 rounded-xl object-cover ring-1 ring-border transition-transform duration-500 group-hover:scale-105"
      />
      {compact ? null : (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="truncate font-display text-[1.05rem] font-semibold tracking-tight text-foreground">
            Irqsa <span className="text-primary">Edge</span>
          </span>
          <span className="mt-1 truncate text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
            {company.domain}
          </span>
        </span>
      )}
    </Link>
  );
}

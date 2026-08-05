import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "glass-strong py-2" : "border-b border-transparent py-4",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8"
      >
        <Logo />

        <div className="flex items-center gap-2">
          <ul className="mr-2 hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-foreground after:scale-x-100" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brand-gradient after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <Button asChild variant="premium" className="hidden sm:inline-flex">
            <Link to="/contact">Start Project</Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-secondary/60 text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-5 mt-3 overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-card lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "bg-accent text-accent-foreground" }}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="premium" size="lg" className="mt-3 w-full">
            <Link to="/contact">Start Project</Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}

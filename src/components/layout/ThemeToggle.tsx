import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex h-10 w-[4.5rem] items-center rounded-full border border-border bg-secondary/70 p-1 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span
        className="absolute left-1 size-8 rounded-full bg-brand-gradient shadow-glow transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: isDark ? "translateX(2.15rem)" : "translateX(0)" }}
        aria-hidden="true"
      />
      <span className="relative z-10 grid size-8 place-items-center">
        <Sun
          className={`size-4 transition-colors ${isDark ? "text-muted-foreground" : "text-primary-foreground"}`}
        />
      </span>
      <span className="relative z-10 grid size-8 place-items-center">
        <Moon
          className={`size-4 transition-colors ${isDark ? "text-primary-foreground" : "text-muted-foreground"}`}
        />
      </span>
    </button>
  );
}

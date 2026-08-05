import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

const STORAGE_KEY = "irqsa-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Resolve stored preference / system scheme after hydration.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(stored ?? system);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

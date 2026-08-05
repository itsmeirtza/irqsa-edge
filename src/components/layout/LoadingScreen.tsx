import { useEffect, useState } from "react";

import logo from "@/assets/irqsa-logo.jpeg.asset.json";

/** Brief branded intro overlay shown once on first paint. */
export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[70] grid place-items-center bg-background transition-opacity duration-700 ${
        done ? "opacity-0" : "opacity-100"
      }`}
      style={{ visibility: done ? "hidden" : "visible" }}
    >
      <div className="flex flex-col items-center gap-5">
        <img
          src={logo.url}
          alt=""
          width={72}
          height={72}
          className="size-16 animate-pulse rounded-2xl ring-1 ring-border"
        />
        <div className="h-0.5 w-32 overflow-hidden rounded-full bg-border">
          <div className="h-full w-1/2 bg-brand-gradient marquee-track" />
        </div>
      </div>
    </div>
  );
}

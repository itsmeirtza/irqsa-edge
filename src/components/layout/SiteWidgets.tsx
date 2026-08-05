import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { company } from "@/data/site";

/** Thin brand-gradient reading-progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-brand-gradient transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 left-6 z-50 grid size-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-4" />
    </button>
  );
}

export function WhatsAppButton() {
  const href = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.15-.15.34-.4.51-.6.12-.15.2-.28.3-.47.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.06 2.85 1.21 3.05.15.2 2.06 3.28 5.05 4.47 2.5.99 3 .87 3.55.82.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.37 9.37 0 0 1-1.44-5A9.45 9.45 0 0 1 18.7 5.3a9.35 9.35 0 0 1 2.76 6.67 9.45 9.45 0 0 1-9.42 9.53ZM12.05 1A11.4 11.4 0 0 0 .63 12.42c0 2.01.53 3.98 1.53 5.71L0 24l6.03-1.58a11.36 11.36 0 0 0 5.45 1.39h.01A11.44 11.44 0 0 0 23.5 12.4 11.36 11.36 0 0 0 12.05 1Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

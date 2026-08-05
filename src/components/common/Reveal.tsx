import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
};

/** Scroll-triggered fade + rise. Respects reduced-motion preferences. */
export function Reveal({ children, delay = 0, y = 26, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -8% 0px" });
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const hidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const shown = { opacity: 1, y: 0 };

  return (
    <MotionTag
      ref={ref as never}
      initial={hidden}
      animate={inView ? shown : hidden}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ServicesSection } from "@/components/sections/Services";
import { FaqSection } from "@/components/sections/Faq";
import {
  CtaBand,
  PortfolioSection,
  ProcessSection,
  StatsBand,
  TechMarquee,
  TestimonialsSection,
  WhyChooseUs,
} from "@/components/sections/Shared";

const title = "Irqsa Edge — Websites, Branding & AI Solutions for Growth";
const description =
  "Premium digital agency building websites, Shopify stores, branding, UI/UX, custom software and AI solutions for startups and businesses worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TechMarquee />
      <PortfolioSection limit={4} />
      <TestimonialsSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/sections/PageHero";
import { ServicesSection } from "@/components/sections/Services";
import { CtaBand, ProcessSection, TechMarquee } from "@/components/sections/Shared";

const title = "Services — Web, E-Commerce, Design, AI & Marketing | Irqsa Edge";
const description =
  "Explore Irqsa Edge services: website development, Shopify and WooCommerce, graphic design, UI/UX, AI solutions, custom software, digital marketing, hosting and support.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Full-service digital delivery, <span className="text-gradient">end to end</span>
          </>
        }
        description="From a single logo to a complete platform with AI automation — here is everything we design, build, market and maintain for our clients."
      />
      <ServicesSection detailed showAll />
      <ProcessSection />
      <TechMarquee />
      <CtaBand />
    </>
  );
}

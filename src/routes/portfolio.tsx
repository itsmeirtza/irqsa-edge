import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/sections/PageHero";
import { CtaBand, PortfolioSection, TestimonialsSection } from "@/components/sections/Shared";

const title = "Portfolio — Websites, Stores, Dashboards & Branding | Irqsa Edge";
const description =
  "Selected Irqsa Edge work: business websites, Shopify stores, restaurant sites, dashboards, AI products, brand identities, mobile UI and landing pages.";

export const Route = createFileRoute("/portfolio")({
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
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Work that earns <span className="text-gradient">attention and revenue</span>
          </>
        }
        description="A cross-section of the websites, stores, products and identities we build. Every card is placeholder content you can replace with your own case studies."
      />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}

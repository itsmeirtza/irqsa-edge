import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/Shared";
import { faqs } from "@/data/site";

const title = "FAQ — Timelines, Shopify, Redesigns & Support | Irqsa Edge";
const description =
  "Answers to common questions about project timelines, Shopify stores, website redesigns, AI websites, hosting, support and custom features.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Everything you want to know, <span className="text-gradient">answered plainly</span>
          </>
        }
        description="No sales speak — just the practical details about how we work, what things cost and what happens after launch."
      />
      <FaqSection />
      <CtaBand />
    </>
  );
}

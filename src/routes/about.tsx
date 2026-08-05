import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/sections/PageHero";
import { AboutSection } from "@/components/sections/About";
import {
  CtaBand,
  ProcessSection,
  StatsBand,
  TechMarquee,
  WhyChooseUs,
} from "@/components/sections/Shared";

const title = "About Irqsa Edge — Digital Agency & Software House";
const description =
  "Meet Irqsa Edge: a senior team of designers, engineers and strategists delivering innovation, quality, performance, security and scalable digital solutions.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Building the future, <span className="text-gradient">one solution at a time</span>
          </>
        }
        description="Irqsa Edge is a digital agency, software house and creative studio helping startups, SMEs and international companies turn ideas into products that perform."
      />
      <StatsBand />
      <AboutSection withCta={false} />
      <WhyChooseUs />
      <ProcessSection />
      <TechMarquee />
      <CtaBand />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/common/Section";
import { PageHero } from "@/components/sections/PageHero";
import { company } from "@/data/site";

const title = "Terms of Service — Irqsa Edge";
const description =
  "The terms that apply to projects, quotes, payments, revisions, ownership and support when working with Irqsa Edge.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

const sections = [
  {
    h: "Quotes and scope",
    p: "Every project begins with a written scope and fixed quote. Work outside that scope is quoted separately before it starts.",
  },
  {
    h: "Payments",
    p: "Projects typically require an advance to begin, with the balance due before final delivery or go-live. Retainers are billed monthly in advance.",
  },
  {
    h: "Revisions",
    p: "Each package includes a defined number of revision rounds. Additional rounds are available at our standard hourly rate.",
  },
  {
    h: "Timelines",
    p: "Delivery dates assume timely feedback and content from your side. Delays in approvals may shift the schedule accordingly.",
  },
  {
    h: "Ownership",
    p: "On final payment, you own the delivered designs and custom code. Third-party licences, themes, plugins and stock assets remain subject to their own terms.",
  },
  {
    h: "Support and maintenance",
    p: "Post-launch support periods are stated in your package. Ongoing maintenance, monitoring and updates are available as a monthly plan.",
  },
  {
    h: "Liability",
    p: "We deliver our services with professional care, but we are not liable for indirect or consequential losses, or for downtime caused by third-party providers.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Placeholder terms provided as a starting point — have them reviewed by a legal professional before publishing."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          {sections.map((s) => (
            <article key={s.h} className="mb-9">
              <h2 className="text-xl font-semibold text-foreground">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </article>
          ))}
          <p className="text-sm text-muted-foreground">
            Need clarification? Contact{" "}
            <a href={`mailto:${company.email}`} className="text-primary hover:underline">
              {company.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}

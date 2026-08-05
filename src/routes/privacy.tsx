import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/common/Section";
import { PageHero } from "@/components/sections/PageHero";
import { company } from "@/data/site";

const title = "Privacy Policy — Irqsa Edge";
const description =
  "How Irqsa Edge collects, uses and protects the information you share through our website and project enquiries.";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information we collect",
    p: "We collect only the details you submit through our contact form or send us directly: your name, email address, phone number, company name and project description. We also collect anonymous analytics about how visitors use this website.",
  },
  {
    h: "How we use your information",
    p: "Your details are used to reply to your enquiry, prepare proposals, deliver the services you engage us for, and — only with your consent — send occasional updates about our work.",
  },
  {
    h: "Sharing and third parties",
    p: "We never sell your data. We share information only with the service providers required to operate our business (for example hosting, email and analytics providers), and only to the extent necessary.",
  },
  {
    h: "Data retention",
    p: "Enquiry records are kept for as long as needed for our business relationship and legal obligations. You can ask us to delete your data at any time.",
  },
  {
    h: "Your rights",
    p: "You may request access to, correction of, or deletion of your personal data, and you may withdraw consent for marketing at any time.",
  },
  {
    h: "Cookies",
    p: "This website uses essential cookies plus optional analytics cookies to understand aggregate usage. You can block cookies in your browser settings.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This is placeholder legal copy you should review with a qualified professional before publishing."
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
            Questions about this policy? Email us at{" "}
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

import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { company } from "@/data/site";

const title = "Contact Irqsa Edge — Start Your Project Today";
const description =
  "Get a fixed quote within one business day. Contact Irqsa Edge by email, phone or WhatsApp to start your website, store, branding, software or AI project.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

const details = [
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: `+${company.whatsapp}`,
    href: `https://wa.me/${company.whatsapp}`,
  },
  { icon: MapPin, label: "Office", value: company.address },
  { icon: Clock, label: "Working hours", value: company.hours },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's scope your project <span className="text-gradient">this week</span>
          </>
        }
        description="Send us the brief — or just a rough idea. You'll hear back from a senior team member within one business day, with next steps and a clear price."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <Reveal className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h2 className="text-lg font-semibold text-foreground">Contact details</h2>
              <ul className="mt-5 flex flex-col gap-4">
                {details.map((d) => (
                  <li key={d.label} className="flex min-w-0 items-start gap-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <d.icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {d.label}
                      </span>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="block break-words text-sm font-medium text-foreground hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <span className="block break-words text-sm font-medium text-foreground">
                          {d.value}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={0.1}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
            >
              <div className="relative grid aspect-[4/3] place-items-center bg-secondary/60">
                <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="relative px-6 text-center">
                  <MapPin className="mx-auto size-6 text-primary" />
                  <p className="mt-3 text-sm font-medium text-foreground">Google Maps placeholder</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Paste your Maps embed here to show the office location.
                  </p>
                </div>
              </div>
              <div className="border-t border-border p-5">
                <p className="text-sm text-muted-foreground">{company.address}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

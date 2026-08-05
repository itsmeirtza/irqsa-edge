import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function FaqSection({ muted = false }: { muted?: boolean }) {
  return (
    <Section muted={muted}>
      <SectionHeading
        eyebrow="FAQ"
        title="Questions clients ask before starting"
        description="Still unsure about something? Send us a message and we'll answer honestly — even if the answer is that we're not the right fit."
      />

      <Reveal className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="card-rim rounded-2xl border border-border bg-card px-5 transition-colors"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

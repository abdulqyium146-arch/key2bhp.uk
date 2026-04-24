"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
}: FAQSectionProps) {
  return (
    <section className="section-padding bg-surface border-y border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">{title}</h2>
            {subtitle && (
              <p className="text-foreground-muted">{subtitle}</p>
            )}
          </div>

          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

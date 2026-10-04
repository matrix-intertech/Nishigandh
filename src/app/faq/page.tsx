import { faqs } from "@/data/faq";
import Link from "next/link";

export const metadata = {
  title: "FAQ | Nishigandh Farms",
  description: "Frequently asked questions about staying at Nishigandh Farms.",
};

export default function FAQPage() {
  const visibleFaqs = faqs.filter((f) => f.visible);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-6">Questions?</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Find answers to common questions about your upcoming retreat.
        </p>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-3xl">
          {visibleFaqs.length > 0 ? (
            <div className="space-y-8">
              {visibleFaqs.map((faq, i) => (
                <div key={i} className="border-b border-border pb-8">
                  <h3 className="font-heading text-2xl mb-4">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border border-border bg-muted/30">
              <p className="text-muted-foreground italic text-lg">FAQ details coming soon.</p>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Still have a question?</p>
            <Link href="/contact" className="inline-block border-b border-foreground pb-1 uppercase tracking-widest text-sm hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

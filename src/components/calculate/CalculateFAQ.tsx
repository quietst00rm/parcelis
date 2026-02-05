import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  { q: "How does Parcelis pricing work?", a: "You pay a base cost per insured package (starting at $2.50 for orders up to $200) and charge customers whatever you want at checkout. The difference is your profit. Most merchants set prices that give them roughly 50% margin on every insured package." },
  { q: "What does the merchant actually pay?", a: "Only the base cost per insured package. There are no monthly fees, no setup costs, and no contracts. You only pay when a customer opts in to protection at checkout." },
  { q: "How does the claims process work?", a: "Customers file claims directly through Parcelis. Our team handles the entire process from start to finish, including verification, approval, and reshipment or refund coordination. Your team does nothing." },
  { q: "What opt-in rates can I expect?", a: "The industry average is around 43%. Top-performing merchants with optimized checkout flows regularly see opt-in rates of 60-70%. Rates depend on your product category, average order value, and how protection is presented at checkout." },
  { q: "How long does integration take?", a: "Most merchants are live in under 15 minutes. Install the Parcelis app from the Shopify App Store, configure your pricing, and protection appears at checkout automatically. No code or developer resources required." },
  { q: "Are there contracts or long-term commitments?", a: "No. Parcelis is month-to-month with no contracts, no minimums, and no cancellation fees. You can pause or remove the app at any time." },
  { q: "What does the coverage include?", a: "Parcelis covers lost, stolen, and damaged packages up to $2,500 per box and $25,000 per shipment. Coverage is backed by The Hartford, a Fortune 500, A-rated insurer." },
  { q: "Can I customize the protection price shown to customers?", a: "Yes. You have full control over what customers see at checkout. Parcelis provides a suggested default that gives approximately 50% margin, but you can adjust it up or down to match your brand and customer expectations." },
];

const CalculateFAQ = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Common Questions</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default CalculateFAQ;

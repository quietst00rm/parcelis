import React, { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    q: "How much do I earn per referral?",
    a: "You earn $0.10 per insured package shipped by every merchant you refer to Parcelis. This is recurring, uncapped, and paid monthly. The more your clients ship and the higher their opt-in rates, the more you earn.",
  },
  {
    q: "Is there a cost to join the partner program?",
    a: "No. There are zero fees, zero setup costs, and zero minimums. Once you're connected with our team, you can start earning right away.",
  },
  {
    q: "How does my client benefit?",
    a: "Your clients get a shipping protection solution they can offer at checkout. Parcelis handles all claims with 5–7 day resolution, so your client's support team is never involved. It adds a checkout revenue line with zero operational burden.",
  },
  {
    q: "What makes Parcelis different from other shipping protection providers?",
    a: "Three things: (1) Your clients earn revenue from protection instead of the provider keeping 100%. (2) Support is 100% human with under 1-hour response times, so your recommendation never backfires. (3) No 24-month non-competes, no punitive rate hikes, no legacy code that breaks stores.",
  },
  {
    q: "How do I track my referrals and earnings?",
    a: "Every partner gets a dedicated dashboard showing referred merchants, insured package volume, and monthly earnings in real time.",
  },
  {
    q: "Do my clients need technical expertise to set up Parcelis?",
    a: "No. It is a one-click Shopify install. No coding, no theme modifications, no developer hours. Most merchants are live in under 15 minutes.",
  },
  {
    q: "Can I refer merchants on platforms other than Shopify?",
    a: "Yes. Parcelis integrates with Shopify, WooCommerce, BigCommerce, Magento, and 29next. We also have a custom API for non-standard platforms.",
  },
];

const PartnerFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = useCallback((i: number) => {
    setOpenIdx((prev) => (prev === i ? null : i));
  }, []);

  return (
    <section className="bg-background-gray py-20 md:py-24" style={{ border: "none" }}>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-brand-900 text-3xl md:text-4xl mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-border-gray shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-5 py-5 text-left min-h-[44px] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-text-primary text-[15px] sm:text-base pr-4">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  ref={(el) => { contentRefs.current[i] = el; }}
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen
                      ? (contentRefs.current[i]?.scrollHeight ?? 500) + "px"
                      : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-5 text-muted-foreground text-[15px] leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerFAQ;

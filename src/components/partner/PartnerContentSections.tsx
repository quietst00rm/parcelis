import React from "react";
import {
  ShieldCheck,
  Headset,
  Lock,
  Gauge,
  Users,
  Cpu,
  Wallet,
  Shield,
  Award,
  ShoppingBag,
  Check,
} from "lucide-react";

/* ═══════════════════════════════════════════
   SECTION 5 — WHAT YOUR CLIENTS GET
   ═══════════════════════════════════════════ */

const clientCards = [
  {
    icon: ShieldCheck,
    title: "Additional Checkout Revenue",
    desc: "Merchants offer optional shipping protection at checkout and earn on every protected order. A new revenue line with zero added cost.",
  },
  {
    icon: Headset,
    title: "Zero Claims Burden",
    desc: "Customers file claims directly through the Parcelis portal. Your clients never touch a claim. Resolution in 5–7 business days.",
  },
  {
    icon: Lock,
    title: "Real Insurance Backing",
    desc: "Policies underwritten by The Hartford, a Fortune 500 insurer. Fully licensed. Not a self-insurance workaround. Not a tech hack.",
  },
  {
    icon: Gauge,
    title: "No Lock-In Contracts",
    desc: "Month-to-month. No 24-month non-competes. No punitive rate increases. No surprise offboarding.",
  },
];

export const WhatClientsGet: React.FC = () => (
  <section className="bg-background-gray py-20 md:py-24" style={{ border: "none" }}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="font-heading font-extrabold text-brand-900 text-3xl md:text-4xl mb-3">
        What Your Clients Get
      </h2>
      <p className="text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
        The shipping protection solution you can recommend with confidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clientCards.map((c) => (
          <div
            key={c.title}
            className="bg-white rounded-2xl border border-border-gray shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 md:p-8 flex items-start gap-5 text-left"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
              <c.icon size={22} className="text-brand" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-text-primary text-lg mb-1.5">{c.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 6 — WHY AGENCIES SWITCH
   ═══════════════════════════════════════════ */

const switchCols = [
  {
    icon: Users,
    title: "Support You Can Stand Behind",
    desc: "100% human support with response times under 1 hour. No AI chatbot loops. No offshore phone trees. When your client has a problem, a real person answers.",
  },
  {
    icon: Cpu,
    title: "Tech That Actually Works",
    desc: "Built for Shopify architecture. One-click install. No theme modifications required. No site speed impact. No breaking stores before a big launch.",
  },
  {
    icon: Wallet,
    title: "Truly Passive Income",
    desc: "Earn $0.10 per insured package across every merchant you refer. No volume minimums. No caps. Monthly payouts. Track everything in your partner dashboard.",
  },
];

export const WhyAgenciesSwitch: React.FC = () => (
  <section className="bg-white py-20 md:py-24" style={{ border: "none" }}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="font-heading font-extrabold text-brand-900 text-3xl md:text-4xl mb-14">
        Why Agencies Switch to Parcelis
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {switchCols.map((c) => (
          <div key={c.title} className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
              <c.icon size={26} className="text-brand" strokeWidth={1.8} />
            </div>
            <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[320px]">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 7 — IDEAL PARTNER PROFILE
   ═══════════════════════════════════════════ */

const checklistItems = [
  "Shopify Partner or Shopify Plus Partner agency",
  "Manages 10+ active merchant clients",
  "Provides development, strategy, or operations services",
  "Values support quality and app reliability",
];

export const IdealPartnerProfile: React.FC = () => (
  <section className="bg-background-gray py-20 md:py-24" style={{ border: "none" }}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-heading font-extrabold text-brand-900 text-3xl md:text-4xl mb-12 text-center">
        Ideal Partner Profile
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left – prose */}
        <p className="text-text-primary text-lg leading-relaxed">
          Our most successful partners are Shopify agencies and e-commerce consultants who actively
          recommend tools to their merchant clients. If you manage multiple Shopify stores and care
          about the apps you put your name behind, we built this program for you.
        </p>

        {/* Right – checklist */}
        <ul className="space-y-5">
          {checklistItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2db87a] flex items-center justify-center mt-0.5">
                <Check size={14} className="text-white" strokeWidth={3} />
              </span>
              <span className="text-text-primary text-[15px] leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════
   SECTION 8 — TRUST SIGNALS
   ═══════════════════════════════════════════ */

const trustCols = [
  {
    icon: Shield,
    title: "Powered by InsureShip",
    desc: "20+ years of shipping insurance expertise. 200+ years of combined insurance knowledge. Licensed reinsurance provider.",
  },
  {
    icon: Award,
    title: "Backed by The Hartford",
    desc: "Fortune 500 insurer. A-rated financial strength. Real underwriting, real coverage, real payouts.",
  },
  {
    icon: ShoppingBag,
    title: "Built for Shopify",
    desc: "Native Shopify integration. One-click install. No code changes. No performance impact. Certified architecture.",
  },
];

export const TrustSignals: React.FC = () => (
  <section className="bg-white py-20 md:py-24" style={{ border: "none" }}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {trustCols.map((c) => (
          <div key={c.title} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-5">
              <c.icon size={28} className="text-brand" strokeWidth={1.8} />
            </div>
            <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[300px]">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

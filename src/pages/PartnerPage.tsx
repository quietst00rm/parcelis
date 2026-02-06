import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FileText, Share2, BarChart3, DollarSign } from "lucide-react";

/* ─── HERO ─── */
const PartnerHero: React.FC = () => (
  <section className="relative overflow-hidden -mt-24 pt-24" style={{ border: 'none' }}>
    <div className="absolute inset-0 bg-gradient-to-br from-[#1e2acd] to-[#0d1247] z-0" />
    <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-28 sm:py-32 md:py-40">
      {/* Badge */}
      <span className="inline-block mb-6 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white border border-white/40 bg-white/10 rounded-full">
        Partner Program
      </span>

      {/* Headline */}
      <h1
        className="font-heading font-extrabold text-white leading-tight mb-6 max-w-4xl"
        style={{ fontSize: "clamp(1.875rem, 5vw, 3.5rem)" }}
      >
        Grow Your Agency Revenue.
        <br className="hidden sm:block" /> Protect Your Clients' Shipments.
      </h1>

      {/* Subheadline */}
      <p className="text-white/80 text-lg sm:text-xl max-w-[700px] mb-10 leading-relaxed">
        Refer merchants to Parcelis and earn $0.10 per insured package across your entire portfolio. Recurring. No cap.
      </p>

      {/* CTA */}
      <button
        onClick={() => {
          const el = document.getElementById("partner-calculator");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="border-2 border-white text-white rounded-full px-8 py-3.5 font-bold text-base hover:bg-white hover:text-brand transition-all min-h-[44px] min-w-[44px]"
      >
        Calculate Your Revenue
      </button>
    </div>

    {/* Spacer so stats bar overlaps */}
    <div className="h-20 md:h-24 relative z-0" />
  </section>
);

/* ─── STATS BAR ─── */
const stats = [
  { value: "$0.10", label: "Per Insured Package" },
  { value: "43%", label: "Avg. Customer Opt-In Rate" },
  { value: "5–7 Days", label: "Claim Resolution" },
  { value: "$0", label: "Agency Fees or Setup Costs" },
];

const PartnerStatsBar: React.FC = () => (
  <div className="relative z-20 -mt-20 md:-mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] p-8 md:p-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center text-center ${
              i < stats.length - 1 ? "md:border-r md:border-border-gray" : ""
            }`}
          >
            <span className="text-brand font-extrabold text-2xl sm:text-3xl mb-1">{s.value}</span>
            <span className="text-muted-foreground text-sm">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── HOW IT WORKS ─── */
const steps = [
  { icon: FileText, title: "Apply", desc: "Complete our quick partner application. Approval typically within 24 hours." },
  { icon: Share2, title: "Refer", desc: "Share your unique partner link or introduce merchants directly. We handle all onboarding." },
  { icon: BarChart3, title: "Track", desc: "Monitor referral activity, insured package volume, and earnings in your partner dashboard." },
  { icon: DollarSign, title: "Earn", desc: "Receive monthly payouts based on insured package volume across your entire referred portfolio." },
];

const PartnerHowItWorks: React.FC = () => (
  <section className="bg-white pt-36 md:pt-44 pb-20 md:pb-28" style={{ border: 'none' }}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="font-heading font-extrabold text-brand-900 text-3xl md:text-4xl mb-3">How It Works</h2>
      <p className="text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
        Our simple onboarding process gets you earning in minutes.
      </p>

      {/* Desktop: horizontal with connecting line */}
      <div className="hidden md:block relative">
        {/* Line behind icons */}
        <div className="absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-border-gray z-0" />

        <div className="grid grid-cols-4 gap-8 relative z-10">
          {steps.map((s) => (
            <div key={s.title} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mb-5 shadow-md">
                <s.icon size={24} strokeWidth={1.8} />
              </div>
              <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm max-w-[220px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical with connecting line */}
      <div className="md:hidden relative flex flex-col items-center gap-10">
        {/* Vertical line */}
        <div className="absolute top-7 bottom-7 left-1/2 -translate-x-1/2 w-0.5 bg-border-gray z-0" />

        {steps.map((s) => (
          <div key={s.title} className="flex flex-col items-center relative z-10">
            <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mb-4 shadow-md">
              <s.icon size={24} strokeWidth={1.8} />
            </div>
            <h3 className="font-heading font-bold text-text-primary text-lg mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm max-w-[280px]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const PartnerPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Partner Program | Parcelis — Earn Recurring Revenue Referring Merchants</title>
        <meta name="description" content="Join the Parcelis Partner Program. Earn $0.10 per insured package across your entire referred merchant portfolio. Recurring revenue. No cap. No fees." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.myparcelis.com/partner-with-us" />

        {/* Open Graph */}
        <meta property="og:title" content="Parcelis Partner Program — Recurring Revenue for Agencies" />
        <meta property="og:description" content="Refer merchants to Parcelis and earn $0.10 per insured package. No cap. No fees. Monthly payouts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myparcelis.com/partner-with-us" />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>

      <PartnerHero />
      <PartnerStatsBar />
      <PartnerHowItWorks />

      {/* Placeholder anchor for future calculator section */}
      <div id="partner-calculator" />
    </>
  );
};

export default PartnerPage;

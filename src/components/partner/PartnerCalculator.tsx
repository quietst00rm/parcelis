import React, { useState, useCallback, useMemo } from "react";
import { useAnimatedNumber } from "@/hooks/use-animated-number";

/* ─── Formatter ─── */
const fmtNum = (n: number) => Math.round(n).toLocaleString("en-US");
const fmtDollar = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US", { minimumFractionDigits: 0 });
const fmtDollarCents = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* ─── Custom Slider ─── */
interface SliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}

const PartnerSlider: React.FC<SliderProps> = ({ label, min, max, step, value, onChange, format }) => {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm font-semibold text-text-primary">{label}</label>
        <span className="text-sm font-bold text-brand bg-brand/10 px-3 py-1 rounded-full">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="partner-slider w-full"
        style={{
          background: `linear-gradient(to right, hsl(238 69% 36%) ${pct}%, hsl(220 13% 91%) ${pct}%)`,
        }}
      />
    </div>
  );
};

/* ─── Reference Table ─── */
const refCards = [
  { tier: "Starter", merchants: 5, label: "5 merchants" },
  { tier: "Growing", merchants: 10, label: "10 merchants" },
  { tier: "Scaling", merchants: 25, label: "25 merchants" },
  { tier: "Enterprise", merchants: 50, label: "50 merchants" },
];

const ReferenceCards: React.FC = () => (
  <div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {refCards.map((r) => {
        const insured = r.merchants * 5000 * 0.43;
        const monthly = insured * 0.1;
        const annual = monthly * 12;
        return (
          <div
            key={r.merchants}
            className="bg-background-gray rounded-2xl border border-border-gray p-5 flex flex-col items-center text-center"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">
              {r.tier}
            </span>
            <span className="text-2xl md:text-3xl font-extrabold text-text-primary">{r.label}</span>
            <div className="w-10 h-0.5 bg-border-gray my-3" />
            <span className="text-xl md:text-2xl font-extrabold text-[#2db87a]">{fmtDollar(monthly)}</span>
            <span className="text-xs text-muted-foreground mt-0.5">monthly earnings</span>
            <span className="text-base font-bold text-[#2db87a]/80 mt-2">{fmtDollar(annual)}</span>
            <span className="text-xs text-muted-foreground mt-0.5">annual earnings</span>
          </div>
        );
      })}
    </div>
    <p className="text-xs text-muted-foreground italic mt-5 text-center">
      Based on 5,000 packages/merchant at 43% opt-in rate.
    </p>
  </div>
);

/* ─── Animated Result ─── */
interface ResultProps {
  label: string;
  value: number;
  format: (n: number) => string;
  className?: string;
  valueClassName?: string;
}

const AnimatedResult: React.FC<ResultProps> = ({ label, value, format, className = "", valueClassName = "" }) => {
  const animated = useAnimatedNumber(value, 400);
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className={`font-extrabold ${valueClassName}`}>{format(animated)}</span>
      <span className="text-sm text-muted-foreground mt-1">{label}</span>
    </div>
  );
};

/* ─── Main Calculator ─── */
const PartnerCalculator: React.FC = () => {
  const [merchants, setMerchants] = useState(10);
  const [packages, setPackages] = useState(5000);
  const [optIn, setOptIn] = useState(43);

  const calc = useMemo(() => {
    const insured = merchants * packages * (optIn / 100);
    const monthly = insured * 0.10;
    const annual = monthly * 12;
    return { insured, monthly, annual };
  }, [merchants, packages, optIn]);

  return (
    <section
      id="partner-calculator"
      className="relative py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #1e2acd 0%, #0d1247 100%)", border: "none" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl mb-3">
            Calculate Your Partner Revenue
          </h2>
          <p className="text-white/80 text-lg">See what your referral network is worth.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] p-8 md:p-12 max-w-[900px] mx-auto">
          {/* Sliders */}
          <PartnerSlider
            label="Merchants You Refer"
            min={1}
            max={100}
            step={1}
            value={merchants}
            onChange={setMerchants}
            format={(v) => String(v)}
          />
          <PartnerSlider
            label="Avg. Monthly Packages Per Merchant"
            min={500}
            max={50000}
            step={500}
            value={packages}
            onChange={setPackages}
            format={(v) => v.toLocaleString("en-US")}
          />
          <PartnerSlider
            label="Avg. Opt-In Rate"
            min={20}
            max={70}
            step={1}
            value={optIn}
            onChange={setOptIn}
            format={(v) => `${v}%`}
          />

          {/* Divider */}
          <div className="border-t border-border-gray my-8" />

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            <AnimatedResult
              label="Total Insured Packages/Mo"
              value={calc.insured}
              format={fmtNum}
              valueClassName="text-2xl md:text-3xl text-text-primary"
            />
            <AnimatedResult
              label="Your Monthly Earnings"
              value={calc.monthly}
              format={fmtDollarCents}
              valueClassName="text-4xl md:text-[42px] text-[#2db87a]"
            />
            <AnimatedResult
              label="Your Annual Earnings"
              value={calc.annual}
              format={fmtDollar}
              valueClassName="text-2xl md:text-3xl text-text-primary"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-border-gray my-8" />

          {/* Reference Cards */}
          <ReferenceCards />
        </div>
      </div>
    </section>
  );
};

export default PartnerCalculator;

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
  suffix?: string;
}

const PartnerSlider: React.FC<SliderProps> = ({ label, min, max, step, value, onChange, format, suffix = "" }) => {
  const pct = ((value - min) / (max - min)) * 100;
  const [displayValue, setDisplayValue] = useState(format(value));
  const [isFocused, setIsFocused] = useState(false);

  // Sync display when value changes externally (slider drag)
  React.useEffect(() => {
    if (!isFocused) {
      setDisplayValue(format(value));
    }
  }, [value, format, isFocused]);

  const commitValue = useCallback((raw: string) => {
    const digits = raw.replace(/[^0-9]/g, "");
    if (!digits) {
      setDisplayValue(format(value));
      return;
    }
    let num = parseInt(digits, 10);
    num = Math.max(min, Math.min(max, num));
    num = Math.round(num / step) * step;
    onChange(num);
    setDisplayValue(format(num));
  }, [min, max, step, value, onChange, format]);

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm font-semibold text-text-primary">{label}</label>
        <input
          type="text"
          inputMode="numeric"
          value={isFocused ? displayValue : format(value)}
          onFocus={(e) => {
            setIsFocused(true);
            // Show raw number for easier editing
            setDisplayValue(String(value));
            requestAnimationFrame(() => e.target.select());
          }}
          onChange={(e) => setDisplayValue(e.target.value.replace(/[^0-9]/g, ""))}
          onBlur={() => {
            setIsFocused(false);
            commitValue(displayValue);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
          className="text-sm font-bold text-brand bg-brand/10 px-3 py-1 rounded-full w-[80px] text-right outline-none focus:ring-2 focus:ring-brand/30 transition-shadow"
        />
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

/* ─── Reference Cards ─── */
const refCards = [
  { merchants: 5, label: "5 merchants" },
  { merchants: 10, label: "10 merchants" },
  { merchants: 25, label: "25 merchants" },
  { merchants: 50, label: "50 merchants" },
];

const ReferenceCards: React.FC = () => (
  <div>
    <div className="text-center mb-6">
      <h3 className="font-heading font-bold text-text-primary text-xl md:text-[22px] mb-1.5">
        Portfolio Earnings Breakdown
      </h3>
      <p className="text-sm text-muted-foreground">
        Projected monthly and annual earnings at standard assumptions.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {refCards.map((r) => {
        const insured = r.merchants * 5000 * 0.43;
        const monthly = insured * 0.1;
        const annual = monthly * 12;
        return (
          <div
            key={r.merchants}
            className="bg-white rounded-xl border border-border-gray shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-6 flex flex-col items-center text-center"
          >
            <span className="text-lg font-bold text-text-primary mb-2">{r.label}</span>
            <span className="text-xl md:text-[22px] font-bold text-brand">{fmtDollar(monthly)}/mo</span>
            <span className="text-sm text-muted-foreground mt-1">{fmtDollar(annual)}/yr</span>
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
      style={{ background: "linear-gradient(135deg, #101155 0%, #1e22aa 50%, #2e32d4 100%)", border: "none" }}
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

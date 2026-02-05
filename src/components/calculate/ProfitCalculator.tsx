import { useState, useCallback, useMemo } from "react";
import { Info, Star } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useAnimatedNumber } from "@/hooks/use-animated-number";

// --- Calculation helpers ---
const getBaseCost = (aov: number) => {
  if (aov <= 0) return 0;
  if (aov <= 200) return 2.5;
  return Math.min(2.5 + Math.ceil((aov - 200) / 100) * 1.25, 200);
};

const getDefaultSellingPrice = (aov: number) => {
  if (aov <= 0) return 0;
  if (aov <= 200) return 4.96;
  return 4.96 + Math.ceil((aov - 200) / 100) * 2.48;
};

const fmt = (n: number, decimals = 0) =>
  n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

const fmtDollar = (n: number, decimals = 0) => `$${fmt(Math.abs(n), decimals)}`;

// --- Animated value display ---
const AnimatedDollar = ({ value, decimals = 0, className = "" }: { value: number; decimals?: number; className?: string }) => {
  const animated = useAnimatedNumber(value);
  const negative = value < 0;
  return (
    <span className={className}>
      {negative && "-"}{fmtDollar(animated, decimals)}
    </span>
  );
};

const AnimatedNumber = ({ value, className = "" }: { value: number; className?: string }) => {
  const animated = useAnimatedNumber(value);
  return <span className={className}>{fmt(Math.round(animated))}</span>;
};

// --- Main Component ---
const ProfitCalculator = () => {
  const [aov, setAov] = useState(100);
  const [monthlyOrders, setMonthlyOrders] = useState(5000);
  const [optInRate, setOptInRate] = useState(43);
  const [sellingPrice, setSellingPrice] = useState(4.96);
  const [hasOverride, setHasOverride] = useState(false);

  const baseCost = useMemo(() => getBaseCost(aov), [aov]);
  const defaultSP = useMemo(() => getDefaultSellingPrice(aov), [aov]);

  const handleAovChange = useCallback((val: number) => {
    setAov(val);
    if (!hasOverride) {
      setSellingPrice(getDefaultSellingPrice(val));
    }
  }, [hasOverride]);

  const handleSellingPriceChange = useCallback((val: number) => {
    setSellingPrice(val);
    setHasOverride(true);
  }, []);

  const resetSellingPrice = useCallback(() => {
    setSellingPrice(defaultSP);
    setHasOverride(false);
  }, [defaultSP]);

  // Calculations
  const insuredPackages = Math.round(monthlyOrders * (optInRate / 100));
  const totalRevenue = insuredPackages * sellingPrice;
  const totalCost = insuredPackages * baseCost;
  const monthlyProfit = totalRevenue - totalCost;
  const profitPerPackage = insuredPackages > 0 ? monthlyProfit / insuredPackages : 0;
  const isNegative = monthlyProfit < 0;

  return (
    <section className="bg-white pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8">
          {/* LEFT: Inputs */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5 md:p-8 h-fit">
            <h2 className="text-xl font-bold text-[#1e2099] mb-4">Your Store Numbers</h2>
            <hr className="border-gray-100 mb-6" />

            {/* AOV */}
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="aov">Average Order Value</label>
            <div className="relative mb-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
              <input
                id="aov"
                type="number"
                min={0}
                step={1}
                value={aov}
                onChange={e => handleAovChange(Math.max(0, Number(e.target.value) || 0))}
                className="w-full pl-7 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e2099]/40 text-sm"
                aria-label="Average Order Value in dollars"
              />
            </div>
            <p className="text-xs text-gray-500 mb-5">The average value of a single customer order</p>

            {/* Monthly Orders */}
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="orders">Monthly Orders</label>
            <div className="flex items-center gap-3 mb-1">
              <Slider
                value={[monthlyOrders]}
                min={100}
                max={50000}
                step={100}
                onValueChange={([v]) => setMonthlyOrders(v)}
                className="flex-1"
                aria-label="Monthly Orders slider"
              />
              <input
                id="orders"
                type="number"
                min={100}
                max={50000}
                step={100}
                value={monthlyOrders}
                onChange={e => setMonthlyOrders(Math.max(0, Number(e.target.value) || 0))}
                className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#1e2099]/40"
                aria-label="Monthly Orders"
              />
            </div>
            <p className="text-xs text-gray-500 mb-5">Total orders shipped per month</p>

            {/* Opt-In Rate */}
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="optin">Customer Opt-In Rate</label>
            <div className="flex items-center gap-3 mb-1">
              <Slider
                value={[optInRate]}
                min={5}
                max={85}
                step={1}
                onValueChange={([v]) => setOptInRate(v)}
                className="flex-1"
                aria-label="Customer Opt-In Rate slider"
              />
              <div className="relative w-20">
                <input
                  id="optin"
                  type="number"
                  min={5}
                  max={85}
                  step={1}
                  value={optInRate}
                  onChange={e => setOptInRate(Math.min(85, Math.max(5, Number(e.target.value) || 5)))}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#1e2099]/40"
                  aria-label="Customer Opt-In Rate percent"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">%</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-5">Industry average is 43%. Top merchants reach 70%.</p>

            {/* Selling Price */}
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="sp">Your Selling Price</label>
            <div className="relative mb-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
              <input
                id="sp"
                type="number"
                min={0}
                step={0.01}
                value={sellingPrice}
                onChange={e => handleSellingPriceChange(Math.max(0, Number(e.target.value) || 0))}
                className="w-full pl-7 pr-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e2099]/40 text-sm"
                aria-label="Your Selling Price in dollars"
              />
            </div>
            {hasOverride && Math.abs(sellingPrice - defaultSP) > 0.001 && (
              <button onClick={resetSellingPrice} className="text-xs text-[#1e2099] underline mb-1">
                Reset to suggested
              </button>
            )}
            <p className="text-xs text-gray-500 mb-6">
              This is what you charge customers at checkout. The suggested default gives ~50% margin.
            </p>

            {/* Base cost info */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg px-4 py-3 flex items-start gap-2">
              <Info size={16} className="text-blue-600 mt-0.5 shrink-0" />
              <p className="text-sm text-blue-800">
                Parcelis base cost for this AOV: <strong>${baseCost.toFixed(2)}</strong>
              </p>
            </div>
          </div>

          {/* RIGHT: Results */}
          <div className="flex flex-col gap-6" aria-live="polite">
            {/* Monthly Profit Hero */}
            <div className="bg-[#1e2099] rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <p className="text-sm uppercase tracking-wider opacity-80 mb-2">Your Monthly Profit</p>
              <div className={`text-3xl md:text-5xl font-bold ${isNegative ? "text-red-300" : ""}`}>
                {isNegative && "-"}
                <AnimatedDollar value={Math.abs(monthlyProfit)} />
              </div>
              <p className="text-lg opacity-70 mt-1">per month</p>
              <div className="h-px bg-white/20 my-4" />
              <p className="text-xl font-semibold">
                Annual Projection:{" "}
                <span className={isNegative ? "text-red-300" : ""}>
                  {isNegative && "-"}
                  <AnimatedDollar value={Math.abs(monthlyProfit * 12)} />
                </span>
              </p>
            </div>

            {/* Breakdown */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-[#1e2099] mb-4">Monthly Breakdown</h3>
              <div className="space-y-0">
                {[
                  { label: "Total Monthly Orders", value: <AnimatedNumber value={monthlyOrders} /> },
                  { label: "Insured Packages", value: <><AnimatedNumber value={insuredPackages} /> <span className="text-gray-400 text-xs">({optInRate}%)</span></> },
                  { label: "Revenue Collected", value: <AnimatedDollar value={totalRevenue} className="text-green-600" />, cls: "" },
                  { label: "Parcelis Cost", value: <AnimatedDollar value={totalCost} className="text-gray-500" /> },
                  { label: "Your Profit", value: <AnimatedDollar value={monthlyProfit} className={`font-bold ${isNegative ? "text-red-500" : "text-[#1e2099]"}`} />, highlight: true },
                  { label: "Profit Per Package", value: <AnimatedDollar value={profitPerPackage} decimals={2} className="text-gray-500 text-sm" /> },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className={`flex justify-between items-center py-3 ${row.highlight ? "bg-blue-50 -mx-6 px-6 rounded" : ""} ${i < arr.length - 1 ? "border-b border-dashed border-gray-200" : ""}`}
                  >
                    <span className="text-sm text-gray-600">{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scaling */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-[#1e2099] mb-4">What This Looks Like Over Time</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                  { mult: 1, label: "per month" },
                  { mult: 3, label: "per quarter" },
                  { mult: 12, label: "per year", accent: true },
                ].map(({ mult, label, accent }) => (
                  <div key={label}>
                    <div className={`text-2xl font-bold ${isNegative ? "text-red-500" : "text-[#1e2099]"} flex items-center justify-center gap-1`}>
                      {accent && <Star size={16} className="text-amber-400" />}
                      {monthlyProfit * mult < 0 && "-"}
                      <AnimatedDollar value={Math.abs(monthlyProfit * mult)} />
                    </div>
                    <p className="text-sm text-gray-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;

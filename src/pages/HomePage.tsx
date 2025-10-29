import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, DollarSign, Clock, TrendingUp, Users, Award, ChevronRight, Code, Package } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { GlassmorphicCard } from "@/components/ui/glassmorphic-card";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";
import shopifyLogo from "@/assets/platforms/shopify.png";
import twentyNineNextLogo from "@/assets/platforms/29next.png";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<"basic" | "profit">("basic");
  const [basicValue, setBasicValue] = useState(150);
  const [profitValue, setProfitValue] = useState(150);
  const [customerPrice, setCustomerPrice] = useState(4.99);
  const [volume, setVolume] = useState(100);
  const [statsVisible, setStatsVisible] = useState(false);

  // Animated counters for stats
  const packagesCount = useCounter(statsVisible ? 50000 : 0, 2000);
  const merchantsCount = useCounter(statsVisible ? 10000 : 0, 2000);
  const satisfactionCount = useCounter(statsVisible ? 99 : 0, 2000);

  // Pricing calculation logic
  const calculateBaseCost = (value: number) => {
    if (value <= 49) return { cost: 0, description: "Below minimum coverage" };
    if (value <= 200) return { cost: 2.5, description: "For packages valued $50-$200" };
    if (value <= 400) return { cost: 5.0, description: "For packages valued $201-$400" };
    if (value <= 600) return { cost: 7.5, description: "For packages valued $401-$600" };
    if (value <= 800) return { cost: 10.0, description: "For packages valued $601-$800" };
    return { cost: null, description: "Contact us for custom quote" };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const basicTier = calculateBaseCost(basicValue);
  const profitTier = calculateBaseCost(profitValue);
  const profit = Math.max(0, customerPrice - (profitTier.cost || 0));
  const annualProfit = profit * volume * 12;
  const costPercent = customerPrice > 0 ? ((profitTier.cost || 0) / customerPrice) * 100 : 50;
  const profitPercent = customerPrice > 0 ? (profit / customerPrice) * 100 : 50;

  // Smooth scroll function and scroll animations
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleClick);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Trigger stats animation
          if (entry.target.classList.contains("stats-bar")) {
            setStatsVisible(true);
          }
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll(".fade-in-up, .stats-bar").forEach((el) => {
      animateOnScroll.observe(el);
    });

    return () => {
      document.removeEventListener("click", handleClick);
      animateOnScroll.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="main-content"
        className="relative min-h-[85vh] bg-gradient-to-br from-[#1e2099] via-[#2533a8] to-[#2a2fb5] text-white overflow-hidden"
      >
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--color-white) / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--color-white) / 0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          aria-hidden="true"
        />

        {/* Radial Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(ellipse at 30% 50%, hsla(238 63% 58% / 0.3) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge with Hartford */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-8 shadow-lg">
              <Shield className="text-green-400" size={24} />
              <span className="text-white text-sm font-semibold">Underwritten by The Hartford</span>
            </div>

            {/* Hero Headline */}
            <h1 className="mb-6 hero-content-fade">
              <span className="block text-3xl md:text-5xl lg:text-6xl font-medium text-white/90 mb-3">
                Zero-Hassle Claims Management
              </span>
              <span className="block text-5xl md:text-7xl lg:text-[96px] text-white font-bold leading-none tracking-tight hero-headline-bottom">
                THAT PAYS YOU
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
              Never touch a claim. Earn from every package. Real insurance protection.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center mb-12">
              <a href="#calculator" className="btn btn-primary btn-large inline-flex items-center gap-2 shadow-2xl">
                Calculate Your Profit
                <ChevronRight size={20} />
              </a>
              <Link
                to="/apply"
                className="btn btn-secondary btn-large text-white border-2 border-white hover:bg-white hover:text-primary transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <div className="w-0.5 h-10 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
          <span className="text-xs text-white/70 uppercase tracking-widest">Scroll to discover</span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar bg-primary-dark text-white py-16 border-t-4 border-cyan-400">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center fade-in-up">
              <Shield className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <div className="text-5xl md:text-6xl font-bold mb-2 text-cyan-400">
                ${(packagesCount / 1000).toFixed(0)}M+
              </div>
              <div className="text-lg text-white/80 font-medium">Packages Protected</div>
            </div>
            <div className="text-center fade-in-up">
              <Users className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <div className="text-5xl md:text-6xl font-bold mb-2 text-cyan-400">
                {(merchantsCount / 1000).toFixed(0)}K+
              </div>
              <div className="text-lg text-white/80 font-medium">Active Merchants</div>
            </div>
            <div className="text-center fade-in-up">
              <Award className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <div className="text-5xl md:text-6xl font-bold mb-2 text-cyan-400">{satisfactionCount}%</div>
              <div className="text-lg text-white/80 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-[#f8f9fe]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Save Time - Zero Hassle (FIRST) */}
            <div
              className="fade-in-up relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 value-prop-card"
              style={{ borderColor: "hsl(238 69% 36%)" }}
            >
              <div className="mb-6">
                <Clock className="w-16 h-16 text-primary" />
              </div>

              <h3 className="text-3xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Zero Hassle
              </h3>

              <div className="mb-4">
                <div className="text-5xl font-bold" style={{ color: "hsl(163 100% 43%)" }}>
                  0 minutes
                </div>
                <div className="text-base font-medium" style={{ color: "hsl(215 16% 47%)" }}>
                  merchant involvement
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: "hsl(215 16% 47%)" }}>
                Zero merchant involvement in claims. Direct customers to our portal and never think about it again.
              </p>
            </div>

            {/* Make Money (SECOND) */}
            <div
              className="fade-in-up relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 value-prop-card"
              style={{ borderColor: "hsl(163 100% 43%)" }}
            >
              <div className="mb-6">
                <DollarSign className="w-16 h-16 text-primary" />
              </div>

              <h3 className="text-3xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Generate Revenue
              </h3>

              <div className="mb-4">
                <div className="text-5xl font-bold" style={{ color: "hsl(163 100% 43%)" }}>
                  $2.49+
                </div>
                <div className="text-base font-medium" style={{ color: "hsl(215 16% 47%)" }}>
                  profit per package
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: "hsl(215 16% 47%)" }}>
                Set your markup and turn package protection into a profit center. No overhead, pure margin.
              </p>
            </div>

            {/* Protect Customers (THIRD) */}
            <div
              className="fade-in-up relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 value-prop-card"
              style={{ borderColor: "hsl(238 63% 58%)" }}
            >
              <div className="mb-6">
                <Shield className="w-16 h-16 text-primary" />
              </div>

              <h3 className="text-3xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Protect Customers
              </h3>

              <div className="mb-4">
                <div className="text-5xl font-bold" style={{ color: "hsl(163 100% 43%)" }}>
                  5-7 days
                </div>
                <div className="text-base font-medium" style={{ color: "hsl(215 16% 47%)" }}>
                  claim resolution
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: "hsl(215 16% 47%)" }}>
                Comprehensive coverage including porch piracy with fast claim resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section
        id="calculator"
        className="py-24 bg-gradient-to-b from-white to-[#e8e9f9] min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                See Your Profit Potential
              </h2>
              <p className="text-xl" style={{ color: "hsl(215 16% 47%)" }}>
                Real numbers. Real profit.
              </p>
            </div>

            {/* Calculator Tabs */}
            <div className="flex gap-2 border-b-2 mb-8" style={{ borderColor: "hsl(214 15% 66%)" }}>
              <button
                onClick={() => setActiveTab("basic")}
                className={`px-8 py-4 text-lg font-semibold transition-all duration-200 relative -bottom-0.5 ${
                  activeTab === "basic" ? "border-b-3" : "text-gray-500 hover:text-gray-700"
                }`}
                style={
                  activeTab === "basic"
                    ? {
                        color: "hsl(238 69% 36%)",
                        borderBottom: "3px solid hsl(238 69% 36%)",
                      }
                    : {}
                }
              >
                Basic Cost
              </button>
              <button
                onClick={() => setActiveTab("profit")}
                className={`px-8 py-4 text-lg font-semibold transition-all duration-200 relative -bottom-0.5 ${
                  activeTab === "profit" ? "border-b-3" : "text-gray-500 hover:text-gray-700"
                }`}
                style={
                  activeTab === "profit"
                    ? {
                        color: "hsl(238 69% 36%)",
                        borderBottom: "3px solid hsl(238 69% 36%)",
                      }
                    : {}
                }
              >
                Profit Calculator
              </button>
            </div>

            {/* Calculator Panels with Glassmorphism */}
            <GlassmorphicCard className="p-8 lg:p-12 min-h-[500px]">
              {/* Basic Cost Panel */}
              {activeTab === "basic" && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <label
                      className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-3"
                      style={{ color: "hsl(227 33% 16%)" }}
                    >
                      <Package size={16} className="text-primary" />
                      Package Value
                    </label>
                    <div className="relative mb-4">
                      <span
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-semibold"
                        style={{ color: "hsl(215 16% 47%)" }}
                      >
                        $
                      </span>
                      <input
                        type="number"
                        value={basicValue}
                        onChange={(e) => setBasicValue(Number(e.target.value))}
                        className="w-full pl-12 pr-6 py-4 text-3xl font-semibold border-2 rounded-lg transition-all duration-200 focus:outline-none calc-input backdrop-blur-sm"
                        style={{
                          borderColor: "hsl(214 15% 66%)",
                          color: "hsl(227 33% 16%)",
                          background: "rgba(255, 255, 255, 0.7)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "hsl(238 69% 36%)";
                          e.target.style.boxShadow = "0 0 0 3px hsla(238 69% 36% / 0.15)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "hsl(214 15% 66%)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={basicValue}
                      onChange={(e) => setBasicValue(Number(e.target.value))}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer calc-slider"
                      style={{
                        background: "hsl(214 15% 66%)",
                      }}
                    />
                  </div>

                  <div
                    className="bg-white/70 backdrop-blur-md rounded-xl p-8 border-2 shadow-lg"
                    style={{ borderColor: "hsl(238 69% 36%)" }}
                  >
                    <div
                      className="text-base font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "hsl(215 16% 47%)" }}
                    >
                      Your Base Cost
                    </div>
                    <div className="text-6xl font-bold mb-2 result-value" style={{ color: "hsl(238 69% 36%)" }}>
                      {basicTier.cost === null
                        ? "Custom Quote"
                        : basicTier.cost === 0
                          ? "N/A"
                          : formatCurrency(basicTier.cost)}
                    </div>
                    <div className="text-base" style={{ color: "hsl(215 16% 47%)" }}>
                      {basicTier.description}
                    </div>
                  </div>
                </div>
              )}

              {/* Profit Calculator Panel */}
              {activeTab === "profit" && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <label
                      className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-3"
                      style={{ color: "hsl(227 33% 16%)" }}
                    >
                      <Package size={16} className="text-primary" />
                      Package Value
                    </label>
                    <div className="relative mb-4">
                      <span
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-semibold"
                        style={{ color: "hsl(215 16% 47%)" }}
                      >
                        $
                      </span>
                      <input
                        type="number"
                        value={profitValue}
                        onChange={(e) => setProfitValue(Number(e.target.value))}
                        className="w-full pl-12 pr-6 py-4 text-3xl font-semibold border-2 rounded-lg transition-all duration-200 focus:outline-none calc-input backdrop-blur-sm"
                        style={{
                          borderColor: "hsl(214 15% 66%)",
                          color: "hsl(227 33% 16%)",
                          background: "rgba(255, 255, 255, 0.7)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "hsl(238 69% 36%)";
                          e.target.style.boxShadow = "0 0 0 3px hsla(238 69% 36% / 0.15)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "hsl(214 15% 66%)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={profitValue}
                      onChange={(e) => setProfitValue(Number(e.target.value))}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer calc-slider mb-2"
                      style={{ background: "hsl(214 15% 66%)" }}
                    />
                    <div className="text-sm" style={{ color: "hsl(215 16% 47%)" }}>
                      Your base cost:{" "}
                      <strong style={{ color: "hsl(238 69% 36%)" }}>
                        {profitTier.cost === null ? "Custom" : formatCurrency(profitTier.cost || 0)}
                      </strong>
                    </div>
                  </div>

                  <div>
                    <label
                      className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider mb-3"
                      style={{ color: "hsl(227 33% 16%)" }}
                    >
                      <DollarSign size={16} className="text-primary" />
                      Your Customer Price
                    </label>
                    <div className="relative mb-4">
                      <span
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-semibold"
                        style={{ color: "hsl(215 16% 47%)" }}
                      >
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        value={customerPrice}
                        onChange={(e) => setCustomerPrice(Number(e.target.value))}
                        className="w-full pl-12 pr-6 py-4 text-3xl font-semibold border-2 rounded-lg transition-all duration-200 focus:outline-none calc-input backdrop-blur-sm"
                        style={{
                          borderColor: "hsl(214 15% 66%)",
                          color: "hsl(227 33% 16%)",
                          background: "rgba(255, 255, 255, 0.7)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "hsl(238 69% 36%)";
                          e.target.style.boxShadow = "0 0 0 3px hsla(238 69% 36% / 0.15)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "hsl(214 15% 66%)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="0.50"
                      value={customerPrice}
                      onChange={(e) => setCustomerPrice(Number(e.target.value))}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer calc-slider"
                      style={{ background: "hsl(214 15% 66%)" }}
                    />
                  </div>

                  <div
                    className="bg-white/70 backdrop-blur-md rounded-xl p-8 border-2 shadow-lg"
                    style={{ borderColor: "hsl(163 100% 43%)", boxShadow: "0 8px 24px hsla(163 100% 43% / 0.2)" }}
                  >
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-lg">
                        <span>Customer Pays:</span>
                        <span className="font-semibold font-mono">{formatCurrency(customerPrice)}</span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span>Your Cost:</span>
                        <span className="font-semibold font-mono">{formatCurrency(profitTier.cost || 0)}</span>
                      </div>
                      <div className="h-0.5" style={{ background: "hsl(214 15% 66%)" }} />
                      <div className="flex justify-between text-xl font-bold">
                        <span>Your Profit:</span>
                        <span className="text-3xl result-value" style={{ color: "hsl(163 100% 43%)" }}>
                          {formatCurrency(profit)}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex h-16 rounded-lg overflow-hidden">
                        <div
                          className="flex items-center justify-center text-white font-semibold text-sm transition-all duration-400"
                          style={{
                            width: `${costPercent}%`,
                            background: "linear-gradient(135deg, hsl(238 69% 36%) 0%, hsl(238 63% 58%) 100%)",
                          }}
                        >
                          Cost
                        </div>
                        <div
                          className="flex items-center justify-center text-white font-semibold text-sm transition-all duration-400"
                          style={{
                            width: `${profitPercent}%`,
                            background: "hsl(163 100% 43%)",
                          }}
                        >
                          Profit
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-base flex-wrap" style={{ color: "hsl(215 16% 47%)" }}>
                      At
                      <input
                        type="number"
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="w-20 px-2 py-1 text-base font-semibold text-center border rounded volume-input"
                        style={{ borderColor: "hsl(214 15% 66%)" }}
                      />
                      packages/month:
                      <strong className="text-2xl" style={{ color: "hsl(163 100% 43%)" }}>
                        {formatCurrency(annualProfit)}/year
                      </strong>
                    </div>
                  </div>
                </div>
              )}
            </GlassmorphicCard>

            <div className="text-center mt-12">
              <Link to="/apply" className="btn btn-primary btn-large inline-flex items-center gap-2">
                Start Earning with PARCELIS
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Platforms */}
      <section className="py-24 bg-gradient-to-br from-[#1e2099] to-[#2a2fb5] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="heading-2 text-center text-white mb-16">Trusted by Growing Brands</h2>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto mb-20 p-12 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-400">
            <svg className="text-white opacity-20 mb-6" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path
                d="M12 28C12 24 14 20 18 18C16 18 14 16 14 14C14 12 16 10 18 10C22 10 24 12 24 18V28C24 32 22 36 18 36C14 36 12 34 12 28Z"
                fill="currentColor"
              />
              <path
                d="M28 28C28 24 30 20 34 18C32 18 30 16 30 14C30 12 32 10 34 10C38 10 40 12 40 18V28C40 32 38 36 34 36C30 36 28 34 28 28Z"
                fill="currentColor"
              />
            </svg>

            <p className="text-2xl md:text-3xl font-normal text-white leading-relaxed mb-8">
              PARCELIS added $1,200 per month in pure profit with zero effort on our end. The calculator sold us
              immediately—we could see the exact ROI before even applying.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/30" />
              <div className="flex-1 min-w-[200px]">
                <div className="text-xl font-bold text-white">Sarah Chen</div>
                <div className="text-base text-white/80">Founder & CEO</div>
                <div className="text-base text-white/80">ModernGoods</div>
              </div>
              <div className="ml-auto">
                <span
                  className="inline-block px-6 py-3 rounded-full font-bold text-lg text-white"
                  style={{ background: "hsl(163 100% 43%)" }}
                >
                  +$1,200/mo profit
                </span>
              </div>
            </div>
          </div>

          {/* Platform Integrations */}
          <div className="max-w-6xl mx-auto">
            <h3 className="heading-3 text-center text-white mb-12">Seamlessly Integrated</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Shopify */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="h-20 flex items-center justify-center mb-4">
                  <img
                    src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-monotone-white-7edf88561b256e005e9b9d003c283c39dcbd74ec844dfc9a3912edeec39b4d7e.svg"
                    alt="Shopify"
                    className="max-h-16 object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-white text-center mb-2">Shopify</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(163 100% 43%)" }} />
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "hsl(163 100% 43%)" }}
                  >
                    LIVE
                  </span>
                </div>
                <div className="text-sm text-white/70 text-center">One-click app</div>
              </div>

              {/* 29next */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="h-20 flex items-center justify-center mb-4">
                  <img
                    src="https://cdn.prod.website-files.com/65c3b52a66ffacb0e2680070/65d8e42b4239fa0963dc2bd2_logo%20(19).svg"
                    alt="29next"
                    className="max-h-16 object-contain"
                  />
                </div>
                <div className="text-xl font-bold text-white text-center mb-2">29next</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(163 100% 43%)" }} />
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "hsl(163 100% 43%)" }}
                  >
                    LIVE
                  </span>
                </div>
                <div className="text-sm text-white/70 text-center">Full integration</div>
              </div>

              {/* WooCommerce */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="text-4xl">🛒</div>
                </div>
                <div className="text-xl font-bold text-white text-center mb-2">WooCommerce</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-white/70 border border-dashed border-white/30 px-3 py-1 rounded-full">
                    COMING SOON
                  </span>
                </div>
                <div className="text-sm text-white/70 text-center">Plugin available</div>
              </div>

              {/* BigCommerce */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="text-4xl">🏪</div>
                </div>
                <div className="text-xl font-bold text-white text-center mb-2">BigCommerce</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-white/70 border border-dashed border-white/30 px-3 py-1 rounded-full">
                    COMING SOON
                  </span>
                </div>
                <div className="text-sm text-white/70 text-center">Native integration</div>
              </div>

              {/* Magento */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="text-4xl">🔧</div>
                </div>
                <div className="text-xl font-bold text-white text-center mb-2">Magento</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-white/70 border border-dashed border-white/30 px-3 py-1 rounded-full">
                    COMING SOON
                  </span>
                </div>
                <div className="text-sm text-white/70 text-center">Extension available</div>
              </div>

              {/* Custom API */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Code size={48} className="text-white" />
                </div>
                <div className="text-xl font-bold text-white text-center mb-2">Custom API</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(163 100% 43%)" }} />
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "hsl(163 100% 43%)" }}
                  >
                    AVAILABLE
                  </span>
                </div>
                <div className="text-sm text-white/70 text-center">RESTful API</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="trust-container">
          <h2 className="trust-headline">Licensed. Legitimate. Reliable.</h2>

          <div className="trust-grid">
            {/* Hartford Backing */}
            <div className="trust-card fade-in-up">
              <div className="trust-icon">
                <Shield size={80} strokeWidth={1.5} />
              </div>
              <h3 className="trust-card-headline">Backed by The Hartford</h3>
              <p className="trust-card-description">
                200+ years of insurance expertise. Real underwriting, real coverage, real payouts.
              </p>
              <div className="trust-badge">Licensed Reinsurance Provider</div>
            </div>

            {/* Compliance */}
            <div className="trust-card fade-in-up">
              <div className="trust-icon">
                <Award size={80} strokeWidth={1.5} />
              </div>
              <h3 className="trust-card-headline">Regulatory Compliance</h3>
              <p className="trust-card-description">
                Not a tech workaround. Licensed in all operating states. Full DOI oversight.
              </p>
              <div className="trust-badge">State-Regulated Coverage</div>
            </div>

            {/* Speed */}
            <div className="trust-card fade-in-up">
              <div className="trust-icon">
                <Clock size={80} strokeWidth={1.5} />
              </div>
              <h3 className="trust-card-headline">5-7 Day Claims</h3>
              <p className="trust-card-description">
                Faster than carriers. Professional claim adjusters. Zero merchant involvement.
              </p>
              <div className="trust-badge">Industry-Leading Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="coverage-section">
        <div className="coverage-split">
          <div className="coverage-left">
            <h2 className="coverage-headline">Comprehensive Protection</h2>

            <ul className="coverage-list">
              <li className="coverage-item">
                <div className="check-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.1" />
                    <path
                      d="M9 16L14 21L23 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Lost Packages</span>
              </li>
              <li className="coverage-item">
                <div className="check-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.1" />
                    <path
                      d="M9 16L14 21L23 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Damaged Shipments</span>
              </li>
              <li className="coverage-item">
                <div className="check-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.1" />
                    <path
                      d="M9 16L14 21L23 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Porch Piracy</span>
              </li>
              <li className="coverage-item">
                <div className="check-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.1" />
                    <path
                      d="M9 16L14 21L23 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>All Global Carriers</span>
              </li>
            </ul>

            <div className="coverage-limits">
              <div className="limit-card">
                <div className="limit-label">Per Box</div>
                <div className="limit-value">$2,500</div>
              </div>
              <div className="limit-card">
                <div className="limit-label">Per Shipment</div>
                <div className="limit-value">$25,000</div>
              </div>
            </div>
          </div>

          <div className="coverage-right">
            <div className="resolution-display">
              <div className="resolution-number">5-7</div>
              <div className="resolution-unit">Business Days</div>
              <div className="resolution-label">Average claim resolution</div>
              <div className="resolution-comparison">Carrier insurance: 30-60 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Summary */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="heading-2 text-center mb-16" style={{ color: "hsl(238 69% 36%)" }}>
            Simple Process, Zero Hassle
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center fade-in-up">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                1
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Integrate
              </h3>
              <p className="text-lg" style={{ color: "hsl(215 16% 47%)" }}>
                Connect via Shopify app or platform integration
              </p>
            </div>
            <div className="text-center fade-in-up">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                2
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Sell
              </h3>
              <p className="text-lg" style={{ color: "hsl(215 16% 47%)" }}>
                Insurance option appears at checkout - customers opt in
              </p>
            </div>
            <div className="text-center fade-in-up">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 text-white"
                style={{ background: "var(--gradient-primary)" }}
              >
                3
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Relax
              </h3>
              <p className="text-lg" style={{ color: "hsl(215 16% 47%)" }}>
                Claims go directly to PARCELIS - you stay focused on growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Major Carriers */}
      <section className="py-24 bg-[#f8f9fe]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="heading-2 text-center mb-4" style={{ color: "hsl(238 69% 36%)" }}>
            All Major Carriers Covered
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto" style={{ color: "hsl(215 16% 47%)" }}>
            Comprehensive protection across USPS, UPS, FedEx, DHL, and all regional and international carriers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <img
                src={uspsLogo}
                alt="USPS shipping logo"
                className="h-16 object-contain mx-auto mb-3 opacity-70 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm font-medium" style={{ color: "hsl(215 16% 47%)" }}>
                USPS
              </p>
            </div>
            <div className="text-center">
              <img
                src={upsLogo}
                alt="UPS shipping logo"
                className="h-16 object-contain mx-auto mb-3 opacity-70 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm font-medium" style={{ color: "hsl(215 16% 47%)" }}>
                UPS
              </p>
            </div>
            <div className="text-center">
              <img
                src={fedexLogo}
                alt="FedEx shipping logo"
                className="h-16 object-contain mx-auto mb-3 opacity-70 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm font-medium" style={{ color: "hsl(215 16% 47%)" }}>
                FedEx
              </p>
            </div>
            <div className="text-center">
              <img
                src={dhlLogo}
                alt="DHL shipping logo"
                className="h-16 object-contain mx-auto mb-3 opacity-70 hover:opacity-100 transition-opacity"
              />
              <p className="text-sm font-medium" style={{ color: "hsl(215 16% 47%)" }}>
                DHL
              </p>
            </div>
          </div>
          <p className="text-center mt-12" style={{ color: "hsl(215 16% 47%)" }}>
            + all regional and international carriers
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="final-cta-content">
            <h2 className="final-cta-headline">Ready to Turn Protection Into Profit?</h2>
            <p className="final-cta-subheadline">
              Join the merchants who've chosen the smarter way to protect shipments.
            </p>

            <div className="final-cta-buttons">
              <a href="#calculator" className="btn btn-primary btn-large">
                Calculate Your Profit
              </a>
              <Link to="/apply" className="btn btn-secondary btn-large">
                Apply Now
              </Link>
            </div>

            <div className="final-trust-badges">
              <div className="trust-item">
                <Shield className="text-primary" size={24} />
              </div>
              <div className="trust-item">
                <span className="trust-badge-text">Licensed Reinsurance Provider</span>
              </div>
              <div className="trust-item">
                <span className="trust-badge-text">200+ Years Combined Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

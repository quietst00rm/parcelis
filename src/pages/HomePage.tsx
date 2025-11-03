import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Clock, Users, Award, ChevronRight, Code, CheckCircle, Zap, TrendingUp, Smile } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";
import { HeroBanner } from "@/components/HeroBanner";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";
import shopifyLogo from "@/assets/platforms/shopify.png";
import twentyNineNextLogo from "@/assets/platforms/29next.png";

const HomePage = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  // Animated counters for stats
  const packagesCount = useCounter(statsVisible ? 50000 : 0, 2000);
  const merchantsCount = useCounter(statsVisible ? 10000 : 0, 2000);
  const satisfactionCount = useCounter(statsVisible ? 99 : 0, 2000);

  // Scroll animations
  useEffect(() => {

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
      animateOnScroll.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBanner
        headline="Deliver Confidence with Every Shipment."
        subheadline="A tech-enabled package protection platform that keeps customers happy, support teams unburdened, and your brand reputation intact — powered by InsureShip."
        primaryCTA={{
          text: "Protect Your Customers Today",
          href: "/apply",
        }}
        secondaryCTA={{
          text: "See How It Works",
          href: "/how-it-works",
        }}
      />

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
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Save Time - Zero Hassle */}
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

            {/* Protect Customers */}
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
              Our customer service team used to spend hours dealing with lost package claims. Now with PARCELIS, those issues are handled automatically and our customers are happier than ever.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/30" />
              <div className="flex-1 min-w-[200px]">
                <div className="text-xl font-bold text-white">Sarah Chen</div>
                <div className="text-base text-white/80">Founder & CEO</div>
                <div className="text-base text-white/80">ModernGoods</div>
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
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(163 100% 43%)" }} />
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "hsl(163 100% 43%)" }}
                  >
                    LIVE
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
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(163 100% 43%)" }} />
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "hsl(163 100% 43%)" }}
                  >
                    LIVE
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
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(163 100% 43%)" }} />
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "hsl(163 100% 43%)" }}
                  >
                    LIVE
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

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-4" style={{ color: "hsl(238 69% 36%)" }}>
              Protection That Builds Trust. Automation That Saves Time.
            </h2>
            <p className="text-xl" style={{ color: "hsl(215 16% 47%)" }}>
              From checkout to claim resolution, Parcelis ensures a smooth, worry-free experience for both merchants and customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Comprehensive Coverage */}
            <div className="fade-in-up bg-[#f8f9fe] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-6">
                <Shield className="w-14 h-14" style={{ color: "hsl(238 69% 36%)" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Comprehensive Coverage
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "hsl(215 16% 47%)" }}>
                Every order is covered against loss, damage, and porch piracy, across USPS, UPS, FedEx, DHL, and international carriers — ensuring peace of mind for your customers worldwide.
              </p>
            </div>

            {/* Zero Merchant Involvement */}
            <div className="fade-in-up bg-[#f8f9fe] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-6">
                <Zap className="w-14 h-14" style={{ color: "hsl(238 69% 36%)" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Zero Merchant Involvement
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "hsl(215 16% 47%)" }}>
                Customers submit claims directly through our self-service portal. Parcelis handles resolution in 5–7 days, reducing tickets and freeing your support team.
              </p>
            </div>

            {/* Boost Conversions and Loyalty */}
            <div className="fade-in-up bg-[#f8f9fe] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-6">
                <TrendingUp className="w-14 h-14" style={{ color: "hsl(238 69% 36%)" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Boost Conversions and Loyalty
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "hsl(215 16% 47%)" }}>
                When customers see 'Protected by Parcelis' at checkout, they feel secure completing their purchase — leading to higher conversion rates and repeat buyers.
              </p>
            </div>

            {/* Fewer Refunds, Happier Customers */}
            <div className="fade-in-up bg-[#f8f9fe] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="mb-6">
                <Smile className="w-14 h-14" style={{ color: "hsl(238 69% 36%)" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(238 69% 36%)" }}>
                Fewer Refunds, Happier Customers
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "hsl(215 16% 47%)" }}>
                Eliminate time-consuming back-and-forth over missing or damaged shipments. Parcelis keeps customers satisfied and loyal, without burdening your team.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/how-it-works"
              className="btn btn-primary btn-large inline-flex items-center gap-2"
            >
              See How Parcelis Works
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="trust-container">
          <h2 className="trust-headline">Licensed. Legitimate. Reliable.</h2>

          <div className="trust-grid">
            {/* InsureShip Backing */}
            <div className="trust-card fade-in-up">
              <div className="trust-icon">
                <Shield size={80} strokeWidth={1.5} />
              </div>
              <h3 className="trust-card-headline">Powered by InsureShip</h3>
              <p className="trust-card-description">
                Industry-leading insurance infrastructure. Real underwriting, real coverage, real payouts.
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
            <h2 className="final-cta-headline">Ready to Protect Your Customers?</h2>
            <p className="final-cta-subheadline">
              Join the merchants who've chosen the smarter way to deliver confidence with every shipment.
            </p>

            <div className="final-cta-buttons">
              <Link to="/apply" className="btn btn-primary btn-large">
                Protect Your Customers Today
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">
                See How It Works
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
                <span className="trust-badge-text">Comprehensive Protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

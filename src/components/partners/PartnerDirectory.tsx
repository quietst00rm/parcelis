import { useState, useEffect } from "react";
import {
  Search,
  X,
  Truck,
  DollarSign,
  Scale,
  Globe,
  Package,
  CheckCircle,
  Star,
  ArrowRight,
  Palette,
  Zap,
  Handshake,
  Gift,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxParcels from "@/components/ParallaxParcels";

/* ── types ── */
interface PartnerStat {
  value: string;
  label: string;
}

interface Partner {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ElementType;
  featured?: boolean;
  fullDescription: string;
  whyWeTrust: string;
  stats: PartnerStat[];
  tags: string[];
  offer?: { title: string; description: string };
  website: string;
}

/* ── placeholder data ── */
const partners: Partner[] = [
  {
    id: "swiftship",
    name: "SwiftShip",
    category: "Logistics",
    description:
      "Global freight forwarding and last-mile delivery solutions for e-commerce brands.",
    icon: Truck,
    featured: true,
    fullDescription:
      "SwiftShip provides end-to-end logistics solutions for e-commerce brands, from manufacturer to customer doorstep. Their network spans 20+ countries with specialized handling for fragile and high-value goods.",
    whyWeTrust:
      "SwiftShip has maintained a 99.4% on-time delivery rate across our shared clients. Their real-time tracking integration helps us verify claims faster and reduce disputes.",
    stats: [
      { value: "99.4%", label: "On-Time Rate" },
      { value: "20+", label: "Countries" },
    ],
    tags: ["Last-Mile", "Freight", "Warehousing"],
    offer: {
      title: "15% Off First Shipment",
      description: "Exclusive discount for Parcelis-protected merchants.",
    },
    website: "https://example.com",
  },
  {
    id: "claimguard",
    name: "ClaimGuard",
    category: "Finance",
    description:
      "Automated chargeback prevention and recovery for online sellers.",
    icon: DollarSign,
    fullDescription:
      "ClaimGuard uses AI-driven dispute management to prevent chargebacks before they happen and recover revenue from illegitimate disputes. They process over $300M in protected transactions annually.",
    whyWeTrust:
      "ClaimGuard's proactive approach complements Parcelis shipping protection perfectly — together we cover both transit and post-delivery financial risks for merchants.",
    stats: [
      { value: "$300M+", label: "Protected Volume" },
      { value: "72%", label: "Win Rate" },
    ],
    tags: ["Chargebacks", "Fraud", "Revenue Recovery"],
    website: "https://example.com",
  },
  {
    id: "tradelaw",
    name: "TradeLaw Pro",
    category: "Legal",
    description:
      "Cross-border compliance and trade regulation advisory for e-commerce.",
    icon: Scale,
    fullDescription:
      "TradeLaw Pro specializes in international trade compliance, customs regulations, and consumer protection law for e-commerce businesses shipping across borders.",
    whyWeTrust:
      "TradeLaw Pro ensures our mutual clients stay compliant with shipping regulations in every market, reducing legal exposure and customs delays.",
    stats: [
      { value: "40+", label: "Jurisdictions" },
      { value: "98%", label: "Compliance Rate" },
    ],
    tags: ["Customs", "Compliance", "IP Protection"],
    website: "https://example.com",
  },
  {
    id: "packsmart",
    name: "PackSmart",
    category: "Logistics",
    description:
      "Eco-friendly packaging solutions engineered to reduce damage in transit.",
    icon: Package,
    fullDescription:
      "PackSmart designs sustainable, protective packaging that reduces product damage by up to 60%. Their custom solutions are tailored for fragile, heavy, and irregularly shaped items.",
    whyWeTrust:
      "PackSmart-packaged shipments see significantly fewer damage claims through Parcelis. Better packaging means fewer losses for everyone in the chain.",
    stats: [
      { value: "60%", label: "Less Damage" },
      { value: "100%", label: "Recyclable" },
    ],
    tags: ["Sustainable", "Custom Packaging", "Damage Prevention"],
    offer: {
      title: "Free Packaging Audit",
      description: "Complimentary audit for Parcelis merchants.",
    },
    website: "https://example.com",
  },
  {
    id: "routeoptix",
    name: "RouteOptix",
    category: "Software",
    description:
      "AI-powered shipping route optimization and carrier selection platform.",
    icon: Globe,
    fullDescription:
      "RouteOptix uses machine learning to analyze carrier performance, transit times, and cost to recommend the optimal shipping route for every order. Integrates with all major e-commerce platforms.",
    whyWeTrust:
      "RouteOptix data feeds directly into our risk models, helping us price protection more accurately and identify high-risk shipping lanes before problems occur.",
    stats: [
      { value: "18%", label: "Cost Savings" },
      { value: "10K+", label: "Active Merchants" },
    ],
    tags: ["AI", "Route Planning", "Carrier Selection"],
    website: "https://example.com",
  },
  {
    id: "brandforge",
    name: "BrandForge",
    category: "Creative",
    description:
      "Conversion-focused product photography and listing optimization.",
    icon: Palette,
    fullDescription:
      "BrandForge creates high-converting product imagery and listing content for e-commerce brands. Their data-driven approach to creative has helped brands increase conversion rates by an average of 28%.",
    whyWeTrust:
      "BrandForge ensures product listings accurately represent items, which reduces 'not as described' claims and improves the overall customer experience.",
    stats: [
      { value: "28%", label: "CVR Increase" },
      { value: "4 Day", label: "Turnaround" },
    ],
    tags: ["Photography", "Listings", "Conversion"],
    website: "https://example.com",
  },
  {
    id: "flowpay",
    name: "FlowPay",
    category: "Finance",
    description:
      "Revenue-based financing and working capital for growing brands.",
    icon: DollarSign,
    featured: true,
    fullDescription:
      "FlowPay offers non-dilutive funding based on your sales velocity. Get approved in 24 hours with funding up to $2M — no equity, no personal guarantees.",
    whyWeTrust:
      "FlowPay-funded merchants can invest in better shipping and packaging, which directly reduces claim rates. Their transparent pricing aligns with our values.",
    stats: [
      { value: "$150M+", label: "Total Funded" },
      { value: "24hrs", label: "Approval" },
    ],
    tags: ["Funding", "Working Capital", "Growth"],
    offer: {
      title: "0.5% Rate Discount",
      description: "Exclusive rate for Parcelis merchants.",
    },
    website: "https://example.com",
  },
  {
    id: "shiplytics",
    name: "Shiplytics",
    category: "Software",
    description:
      "Real-time shipping analytics and delivery performance dashboards.",
    icon: Zap,
    fullDescription:
      "Shiplytics aggregates shipping data across all your carriers into a single dashboard. Track delivery performance, identify problem carriers, and benchmark against industry standards.",
    whyWeTrust:
      "Shiplytics visibility helps merchants make data-driven carrier decisions, which reduces shipping failures and claim frequency across our portfolio.",
    stats: [
      { value: "50+", label: "Carrier Integrations" },
      { value: "Real-Time", label: "Tracking" },
    ],
    tags: ["Analytics", "Dashboards", "Performance"],
    website: "https://example.com",
  },
];

const categories = [
  "All",
  "Logistics",
  "Finance",
  "Legal",
  "Software",
  "Creative",
];

const categoryDotColor: Record<string, string> = {
  Logistics: "bg-primary",
  Finance: "bg-success",
  Legal: "bg-warning",
  Software: "bg-primary-medium",
  Creative: "bg-destructive",
};

/* ── component ── */
const PartnerDirectory = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (selectedPartner) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPartner]);

  const filteredPartners = partners.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featuredCount = partners.filter((p) => p.featured).length;
  const offerCount = partners.filter((p) => p.offer).length;

  /* ── Featured Card (horizontal, spans 2 cols) ── */
  const FeaturedCard = ({ partner, index }: { partner: Partner; index: number }) => (
    <ScrollReveal delay={index * 60}>
      <div
        onClick={() => setSelectedPartner(partner)}
        className="group relative md:col-span-2 flex flex-col md:flex-row rounded-2xl border border-border/60 bg-card cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:scale-[1.01] overflow-hidden"
      >
        {/* Gradient left accent */}
        <div
          className="hidden md:block w-1 shrink-0 rounded-l-2xl"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--success)) 100%)",
          }}
        />

        {/* Icon area */}
        <div className="flex items-center justify-center md:w-48 shrink-0 p-8 md:p-10">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-success/10">
            <partner.icon className="h-9 w-9 text-success" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8 md:py-10 md:pr-10 md:pl-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {partner.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-success-foreground">
                  <Star className="h-3 w-3 fill-current" />
                  Featured
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    categoryDotColor[partner.category] || "bg-muted-foreground"
                  }`}
                />
                {partner.category}
              </div>
            </div>
            {partner.offer && (
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-warning/15 px-3 py-1 text-[11px] font-semibold text-warning border border-warning/20">
                <Gift className="h-3 w-3" />
                Exclusive Offer
              </span>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xl">
            {partner.description}
          </p>

          {/* Stats + CTA row */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-3">
              {partner.stats.map((s, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5"
                >
                  <span className="text-xs font-bold text-success">
                    {s.value}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <span className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
              View Partner
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );

  /* ── Standard Card ── */
  const StandardCard = ({ partner, index }: { partner: Partner; index: number }) => (
    <ScrollReveal delay={index * 60}>
      <div
        onClick={() => setSelectedPartner(partner)}
        className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-10 cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-primary/30 hover:scale-[1.015] min-h-[360px]"
      >
        {/* Offer dot */}
        {partner.offer && (
          <div className="absolute top-5 right-5 flex items-center gap-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warning opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-warning" />
            </span>
            <span className="text-[10px] font-medium text-warning">Offer</span>
          </div>
        )}

        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-light-tint mb-6">
          <partner.icon className="h-6 w-6 text-primary" />
        </div>

        {/* Name & category */}
        <h3 className="font-heading text-lg font-bold text-foreground mb-1.5">
          {partner.name}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              categoryDotColor[partner.category] || "bg-muted-foreground"
            }`}
          />
          {partner.category}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {partner.description}
        </p>

        {/* Stat previews */}
        <div className="flex gap-3 mb-6">
          {partner.stats.map((s, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5"
            >
              <span className="text-xs font-bold text-success">{s.value}</span>
              <span className="text-[10px] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
          View Partner
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </ScrollReveal>
  );

  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden -mt-24 pt-24">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(237 67% 19%) 0%, hsl(238 69% 36%) 50%, hsl(238 63% 58%) 100%)",
          }}
        />
        <ParallaxParcels opacity={0.6} />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <span className="inline-block mb-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold tracking-widest uppercase text-white/90 backdrop-blur-sm">
            Partner Directory
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]">
            OUR PARTNER
            <br />
            ECOSYSTEM.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 font-light leading-relaxed mb-16">
            We partner with a network of trusted agencies and solution providers
            to bring added value and expertise. Explore our certified partners
            and enhance your business.
          </p>

          {/* Glassmorphic stat bar */}
          <div className="inline-flex items-center gap-0 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center gap-3 px-8 py-5">
              <CheckCircle className="h-5 w-5 text-success shrink-0" />
              <div className="text-left">
                <p className="text-2xl font-bold text-success">{partners.length}</p>
                <p className="text-xs text-white/70">Verified Partners</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3 px-8 py-5">
              <Star className="h-5 w-5 text-success shrink-0" />
              <div className="text-left">
                <p className="text-2xl font-bold text-success">{featuredCount}</p>
                <p className="text-xs text-white/70">Featured</p>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3 px-8 py-5">
              <Zap className="h-5 w-5 text-warning shrink-0" />
              <div className="text-left">
                <p className="text-2xl font-bold text-warning">{offerCount}</p>
                <p className="text-xs text-white/70">Exclusive Offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Unified Filter Toolbar ── */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {activeCategory === cat && (
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  )}
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-auto sm:ml-auto sm:min-w-[260px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find a partner..."
                className="w-full rounded-full border border-input bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-inner transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Partner Grid (bento) ── */}
      <section className="bg-background-gray">
        <div className="container mx-auto px-4 py-16 md:py-24">
          {filteredPartners.length === 0 ? (
            <div className="text-center py-24">
              <Package className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No partners found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-sm font-medium text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner, i) =>
                partner.featured ? (
                  <div key={partner.id} className="md:col-span-2 lg:col-span-2">
                    <FeaturedCard partner={partner} index={i} />
                  </div>
                ) : (
                  <div key={partner.id}>
                    <StandardCard partner={partner} index={i} />
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Become a Partner CTA ── */}
      <section className="relative bg-primary-light-tint overflow-hidden">
        {/* Decorative dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative container mx-auto px-4 py-20 md:py-28 text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success/10 text-success mx-auto mb-8">
                <Handshake className="h-8 w-8" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Become a Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Join our trusted partner ecosystem and offer added value to
                merchants using Parcelis shipping protection.
              </p>
              <a href="/partner-with-us" className="btn btn-primary btn-large">
                Apply to Partner
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Detail Modal ── */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPartner(null)}
          aria-label="Partner detail overlay"
        >
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Gradient header band */}
            <div
              className="relative rounded-t-2xl px-8 py-8"
              style={{
                background:
                  "linear-gradient(135deg, hsl(237 67% 19%) 0%, hsl(238 69% 36%) 50%, hsl(238 63% 58%) 100%)",
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                    <selectedPartner.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-white">
                      {selectedPartner.name}
                    </h2>
                    <p className="text-sm text-blue-200">
                      {selectedPartner.category}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1.5 text-xs font-semibold text-success-foreground">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Verified Partner
                </span>
              </div>

              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 right-4 rounded-full p-2.5 bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* body */}
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* left */}
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    <Star className="h-4 w-4 text-primary" />
                    Who They Are
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedPartner.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {selectedPartner.stats.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-secondary/50 p-4 text-center border-l-2 border-l-success"
                    >
                      <p className="text-2xl font-bold text-success">
                        {s.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedPartner.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <span
                        className={`inline-block h-1.5 w-1.5 rounded-full mr-1.5 ${
                          categoryDotColor[selectedPartner.category] ||
                          "bg-muted-foreground"
                        }`}
                      />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* right */}
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Why We Trust Them
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedPartner.whyWeTrust}
                  </p>
                </div>

                {selectedPartner.offer && (
                  <div className="rounded-xl border border-warning/25 bg-gradient-to-br from-warning/5 to-warning/10 p-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-warning mb-2 uppercase tracking-wide">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      Exclusive Offer
                    </span>
                    <p className="font-heading text-base font-bold text-foreground">
                      {selectedPartner.offer.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedPartner.offer.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* footer */}
            <div className="px-8 pb-8 space-y-3">
              <a
                href={selectedPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                Visit Partner Website
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setSelectedPartner(null)}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                ← Back to Directory
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerDirectory;

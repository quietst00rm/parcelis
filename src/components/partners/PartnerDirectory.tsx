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
import ScrollReveal from "@/components/ScrollReveal";

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

/* ── partner data ── */
const partners: Partner[] = [
  {
    id: "swiftship",
    name: "SwiftShip",
    category: "Fulfillment & Logistics",
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
    category: "Chargeback Protection",
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
    category: "Compliance & Customs",
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
    category: "Fulfillment & Logistics",
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
    category: "Analytics & Reporting",
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
    category: "Marketing & Retention",
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
    category: "Chargeback Protection",
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
    category: "Analytics & Reporting",
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
  "Fulfillment & Logistics",
  "Returns Management",
  "Chargeback Protection",
  "Compliance & Customs",
  "Marketing & Retention",
  "Analytics & Reporting",
  "Customer Experience",
];

const categoryDotColor: Record<string, string> = {
  "Fulfillment & Logistics": "bg-primary",
  "Returns Management": "bg-[hsl(280,60%,50%)]",
  "Chargeback Protection": "bg-success",
  "Compliance & Customs": "bg-warning",
  "Marketing & Retention": "bg-destructive",
  "Analytics & Reporting": "bg-primary-medium",
  "Customer Experience": "bg-[hsl(190,70%,45%)]",
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

  /* ── Partner Card ── */
  const PartnerCard = ({ partner, index }: { partner: Partner; index: number }) => (
    <ScrollReveal delay={index * 60}>
      <button
        type="button"
        onClick={() => setSelectedPartner(partner)}
        aria-label={`View details for ${partner.name}`}
        className="group relative flex flex-col text-left w-full rounded-2xl border border-[hsl(220,13%,91%)] bg-card p-5 sm:p-6 lg:p-8 cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {/* Offer indicator */}
        {partner.offer && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warning opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-warning" />
            </span>
            <span className="text-[10px] font-medium text-warning">Offer</span>
          </div>
        )}

        {/* Icon */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl mb-4 ${
            partner.featured ? "bg-success/10" : "bg-[hsl(228,89%,96%)]"
          }`}
        >
          <partner.icon
            className={`h-5 w-5 ${partner.featured ? "text-success" : "text-primary"}`}
          />
        </div>

        {/* Name & badges */}
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-heading text-base font-bold text-foreground">
            {partner.name}
          </h3>
          {partner.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-success px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-success-foreground">
              <Star className="h-2.5 w-2.5 fill-current" />
              Featured
            </span>
          )}
        </div>

        {/* Category */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
          <span
            className={`inline-block h-1.5 w-1.5 rounded-full ${
              categoryDotColor[partner.category] || "bg-muted-foreground"
            }`}
          />
          {partner.category}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {partner.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-2 mb-4">
          {partner.stats.map((s, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1"
            >
              <span className="text-xs font-bold text-success">{s.value}</span>
              <span className="text-[10px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
          View Partner
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </button>
    </ScrollReveal>
  );

  return (
    <div className="bg-background min-h-screen -mt-24 pt-24">
      {/* ── Hero ── */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-3xl font-bold mb-3"
            style={{ color: "hsl(237, 67%, 19%)" }}
          >
            The Parcelis Partner Ecosystem
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-5">
            Vetted service providers offering exclusive benefits to
            Parcelis-protected merchants.
          </p>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium"
            style={{
              backgroundColor: "hsl(214, 100%, 97%)",
              color: "hsl(238, 69%, 39%)",
            }}
          >
            <CheckCircle className="h-3.5 w-3.5" />
            {partners.length} Verified Partners
          </span>
        </div>
      </section>

      {/* ── Filter / Search Bar ── */}
      <section className="sticky top-0 z-30 bg-white border-b border-[hsl(220,13%,91%)]">
        <div className="container mx-auto px-4 py-3 md:py-4">
          {/* Mobile: search above filters */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-3 sm:gap-4">
            {/* Category pills */}
            <nav
              aria-label="Filter partners by category"
              className="relative flex-shrink-0 w-full sm:w-auto"
            >
              <div
                className="flex gap-2 overflow-x-auto scrollbar-hide pr-8 sm:pr-0 -mx-1 px-1"
                role="tablist"
                aria-label="Partner categories"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    aria-controls="partner-grid"
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 min-h-[44px] min-w-[44px] ${
                      activeCategory === cat
                        ? "text-white shadow-sm"
                        : "text-muted-foreground hover:bg-[hsl(220,14%,90%)]"
                    }`}
                    style={
                      activeCategory === cat
                        ? { backgroundColor: "hsl(238, 69%, 39%)" }
                        : { backgroundColor: "hsl(220, 14%, 96%)" }
                    }
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {/* Scroll fade indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
            </nav>

            {/* Search */}
            <div className="relative w-full sm:w-auto sm:ml-auto sm:min-w-[260px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search partners..."
                aria-label="Search partners"
                className="w-full rounded-lg border border-[hsl(220,13%,91%)] bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all min-h-[44px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner Grid ── */}
      <section className="bg-[hsl(220,14%,96%)]" id="partner-grid" role="tabpanel">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {filteredPartners.length === 0 ? (
            <div className="text-center py-20">
              <Package className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground text-base mb-3">
                No partners found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-sm font-medium text-primary hover:underline min-h-[44px]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPartners.map((partner, i) => (
                <PartnerCard key={partner.id} partner={partner} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Detail Modal ── */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPartner(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedPartner.name} partner details`}
        >
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div
              className="relative rounded-t-2xl px-5 py-6 sm:px-8 sm:py-8"
              style={{
                background:
                  "linear-gradient(135deg, hsl(237 67% 19%) 0%, hsl(238 69% 36%) 50%, hsl(238 63% 58%) 100%)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pr-10 sm:pr-0">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm shrink-0">
                    <selectedPartner.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {selectedPartner.name}
                    </h2>
                    <p className="text-sm text-blue-200">
                      {selectedPartner.category}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success px-3 py-1.5 text-xs font-semibold text-success-foreground self-start sm:self-auto">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Verified Partner
                </span>
              </div>

              <button
                onClick={() => setSelectedPartner(null)}
                aria-label="Close partner details"
                className="absolute top-4 right-4 rounded-full p-2.5 bg-white/10 text-white hover:bg-white/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-5 md:p-8">
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
                      <p className="text-2xl font-bold text-success">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
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

              <div className="space-y-6 border-t border-border/40 pt-6 md:border-t-0 md:pt-0">
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
                  <div className="rounded-xl border border-warning/25 bg-gradient-to-br from-warning/5 to-warning/10 p-5">
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

            {/* Footer */}
            <div className="px-5 pb-5 md:px-8 md:pb-8 space-y-3">
              <a
                href={selectedPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors min-h-[44px]"
              >
                Visit Partner Website
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setSelectedPartner(null)}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-2 min-h-[44px]"
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

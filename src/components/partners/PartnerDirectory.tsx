import { useState } from "react";
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

/* ── component ── */
const PartnerDirectory = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPartners = partners.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        style={{
          background:
            "linear-gradient(135deg, hsl(237 67% 19%) 0%, hsl(238 69% 36%) 50%, hsl(238 63% 58%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-white/90">
            Directory
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            OUR PARTNER ECOSYSTEM.
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80 leading-relaxed">
            We partner with a network of trusted agencies and solution providers
            to bring added value and expertise. Explore our certified partners
            and enhance your business.
          </p>
        </div>
        {/* decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
      </section>

      {/* ── Category Tabs ── */}
      <div className="border-b border-border bg-background sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <nav className="flex gap-6 overflow-x-auto scrollbar-hide py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap pb-3 pt-4 text-sm font-medium transition-colors border-b-2 ${
                  activeCategory === cat
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Search Bar ── */}
      <div className="sticky top-[49px] z-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find a partner..."
              className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </div>

      {/* ── Partner Grid ── */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        {filteredPartners.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">
            No partners found matching your criteria.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner, i) => (
              <ScrollReveal key={partner.id} delay={i * 80}>
                <div
                  onClick={() => setSelectedPartner(partner)}
                  className={`group relative flex flex-col rounded-xl border bg-card p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    partner.featured
                      ? "border-primary/30 shadow-md"
                      : "border-border hover:border-primary/20"
                  }`}
                >
                  {partner.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <partner.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {partner.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="mt-1 text-[11px] font-medium"
                      >
                        {partner.category}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {partner.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    View Partner{" "}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      {/* ── Detail Modal ── */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPartner(null)}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

          {/* modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* close */}
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* header */}
            <div className="flex items-center justify-between gap-4 p-6 pb-0">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <selectedPartner.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    {selectedPartner.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {selectedPartner.category}
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
                <CheckCircle className="h-3.5 w-3.5" />
                Verified Partner
              </span>
            </div>

            {/* body */}
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* left */}
              <div className="space-y-5">
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground mb-2">
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
                      className="rounded-lg bg-secondary p-3 text-center"
                    >
                      <p className="text-lg font-bold text-primary">
                        {s.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedPartner.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* right */}
              <div className="space-y-5">
                <div>
                  <h3 className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground mb-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Why We Trust Them
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedPartner.whyWeTrust}
                  </p>
                </div>

                {selectedPartner.offer && (
                  <div className="rounded-xl border border-primary/20 bg-primary-light-tint p-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-2">
                      <Star className="h-3.5 w-3.5" />
                      Exclusive Offer
                    </span>
                    <p className="font-heading text-sm font-bold text-foreground">
                      {selectedPartner.offer.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {selectedPartner.offer.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* footer */}
            <div className="p-6 pt-0">
              <a
                href={selectedPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                Visit Partner Website
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerDirectory;

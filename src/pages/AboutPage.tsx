import { Shield, TrendingUp, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hartfordLogo from "@/assets/logos/hartford.png";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Merchant-First Shipping Insurance</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            PARCELIS is a global reinsurance provider offering legitimate, licensed package protection backed by The Hartford. We put merchant profitability and operational efficiency first.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              PARCELIS fills the gap between complex enterprise solutions and expensive consumer-focused apps. We built our service specifically for growing D2C e-commerce merchants who need real protection without the hassle.
            </p>
            <p>
              Our platform gives merchants the ability to turn shipping insurance from a cost center into a profit generator, while providing customers with comprehensive coverage they can trust.
            </p>
            <p>
              We're committed to transparency, fair pricing, and merchant success. No long-term contracts, no surprise offboarding, no hidden fees.
            </p>
          </div>
        </section>

        {/* Underwriter Section */}
        <section className="mb-16 bg-muted rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <img src={hartfordLogo} alt="The Hartford insurance logo" className="h-16 md:h-20 object-contain mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Real Insurance, Real Protection</h2>
            <div className="space-y-4 mb-8 text-left">
              <p className="text-lg">
                <span className="font-semibold">PARCELIS is a licensed reinsurance provider</span> legally reselling insurance underwritten by The Hartford, a recognized industry leader with over 200 years of experience.
              </p>
              <p className="text-muted-foreground">
                This matters because many competitors offer "tech solutions" that aren't legitimate insurance products. These unlicensed alternatives leave merchants and customers exposed to potential non-payment of claims and regulatory issues.
              </p>
              <p className="text-muted-foreground">
                We comply with state insurance regulations to ensure your protection is legitimate, enforceable, and backed by a trusted underwriter.
              </p>
            </div>
            <div className="inline-flex items-center gap-3 bg-card border-2 border-primary rounded-lg px-6 py-4">
              <Shield className="text-primary" size={32} />
              <div className="text-left">
                <p className="font-semibold text-sm">Underwritten by</p>
                <p className="text-xl font-bold text-primary">The Hartford</p>
              </div>
            </div>
          </div>
        </section>

        {/* Carrier Coverage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Comprehensive Carrier Coverage</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Full protection across all major carriers with no geographic limitations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <img src={uspsLogo} alt="USPS logo" className="h-16 object-contain mx-auto mb-4" />
              <h3 className="font-semibold mb-2">USPS</h3>
              <p className="text-sm text-muted-foreground">Full domestic coverage including Priority and First-Class Mail</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <img src={upsLogo} alt="UPS logo" className="h-16 object-contain mx-auto mb-4" />
              <h3 className="font-semibold mb-2">UPS</h3>
              <p className="text-sm text-muted-foreground">Ground, Air, and international UPS shipments covered</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <img src={fedexLogo} alt="FedEx logo" className="h-16 object-contain mx-auto mb-4" />
              <h3 className="font-semibold mb-2">FedEx</h3>
              <p className="text-sm text-muted-foreground">All FedEx services including Express and Ground</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <img src={dhlLogo} alt="DHL logo" className="h-16 object-contain mx-auto mb-4" />
              <h3 className="font-semibold mb-2">DHL</h3>
              <p className="text-sm text-muted-foreground">Global coverage for international DHL shipments</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8">+ Regional carriers and international postal services worldwide</p>
        </section>

        {/* Why Different */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why PARCELIS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <TrendingUp className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Better for Merchants</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Control your markup and pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Zero involvement in claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Turn insurance into profit</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Shield className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Better Coverage</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Includes porch piracy protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>All carriers supported globally</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Fast 5-7 day claim resolution</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <Users className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-3">Better Partnership</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>No long-term contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>No sudden offboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Transparent pricing always</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16 bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Built on Trust and Transparency</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex gap-3">
              <TrendingUp className="flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Merchant Profitability</h3>
                <p className="text-sm opacity-90">We believe merchants should profit from the value they provide</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Shield className="flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Operational Simplicity</h3>
                <p className="text-sm opacity-90">Zero hassle, zero involvement in claims management</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Regulatory Compliance</h3>
                <p className="text-sm opacity-90">Licensed, legitimate insurance you can trust</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Customer Satisfaction</h3>
                <p className="text-sm opacity-90">Comprehensive coverage that customers actually want</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/apply">Get Started with PARCELIS</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

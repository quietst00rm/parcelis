import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Globe, Zap, CheckCircle } from "lucide-react";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple Integration, Zero Hassle</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From setup to claims resolution, PARCELIS handles everything so you can focus on growing your business.
          </p>
        </div>

        {/* Process Steps */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Apply & Onboard</h3>
                <p className="text-muted-foreground mb-2">
                  Submit your application through our simple form. Our team reviews and sends onboarding documentation. Shopify merchants can activate with one click.
                </p>
                <p className="text-sm text-primary font-semibold">Timeline: Approval within 24-48 hours</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Integrate at Checkout</h3>
                <p className="text-muted-foreground mb-2">
                  Add PARCELIS insurance as an optional checkout add-on. Compatible with Shopify, 29next, and more platforms coming soon.
                </p>
                <p className="text-sm text-primary font-semibold">Insurance pricing displays automatically based on cart value</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Customer Opts In</h3>
                <p className="text-muted-foreground mb-2">
                  Your customers see the insurance option at checkout. Those who opt in receive comprehensive coverage including porch piracy protection.
                </p>
                <p className="text-sm text-primary font-semibold">You control the customer-facing price and keep the markup</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Claims (If Needed)</h3>
                <p className="text-muted-foreground mb-2">
                  If a package is lost, damaged, or stolen, customers file claims directly with PARCELIS. You simply direct them to our claims portal.
                </p>
                <p className="text-sm text-primary font-semibold">Zero merchant involvement - no support tickets, no replacement decisions</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Fast Resolution</h3>
                <p className="text-muted-foreground mb-2">
                  Our team processes claims in 5-7 business days. Customers receive updates via email. You never touch the process.
                </p>
                <p className="text-sm text-primary font-semibold">Professional claims handling backed by The Hartford</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="mb-16 bg-muted rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">What's Covered</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Lost packages</h3>
                <p className="text-sm text-muted-foreground">Full coverage for packages that never arrive</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Damaged packages</h3>
                <p className="text-sm text-muted-foreground">Protection for items damaged in transit</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Stolen packages (porch piracy)</h3>
                <p className="text-sm text-muted-foreground">Including theft after delivery</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">All carriers</h3>
                <p className="text-sm text-muted-foreground mb-3">USPS, UPS, FedEx, DHL, regional, international</p>
                <div className="flex items-center gap-3">
                  <img src={uspsLogo} alt="USPS logo" className="h-6 object-contain" />
                  <img src={upsLogo} alt="UPS logo" className="h-6 object-contain" />
                  <img src={fedexLogo} alt="FedEx logo" className="h-6 object-contain" />
                  <img src={dhlLogo} alt="DHL logo" className="h-6 object-contain" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Global coverage</h3>
                <p className="text-sm text-muted-foreground">No geographic limits</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="font-semibold mb-3">Coverage Limits</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Up to $2,500 per box</li>
              <li>• Up to $25,000 per shipment</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Note: Certain exclusions apply (invalid addresses, refused deliveries, etc.) - full details in policy terms
            </p>
          </div>
        </section>

        {/* Platform Integrations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Works With Your Platform</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Live Now</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border-2 border-primary rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold">Shopify</h4>
                    <span className="text-xs bg-success text-success-foreground px-3 py-1 rounded-full font-semibold">
                      Live
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>One-click activation via Shopify App Store</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Connect your store in minutes</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border-2 border-primary rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold">29next</h4>
                    <span className="text-xs bg-success text-success-foreground px-3 py-1 rounded-full font-semibold">
                      Live
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Seamless integration with 29next checkout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Coming Soon</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {["WooCommerce", "BigCommerce", "Magento"].map((platform) => (
                  <div key={platform} className="bg-card border border-border rounded-lg p-4 text-center opacity-60">
                    <p className="font-bold mb-2">{platform}</p>
                    <span className="text-xs bg-muted-foreground text-background px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6">
                Custom API integration available for other platforms
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="mb-16 bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Manage Everything in One Place</h2>
          <p className="text-lg mb-6 opacity-95">
            Access your merchant dashboard to view insured shipments, monitor claims, track payouts, and manage multiple stores.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Shield size={20} className="flex-shrink-0 mt-0.5" />
              <span>View all insured orders</span>
            </div>
            <div className="flex items-start gap-3">
              <Shield size={20} className="flex-shrink-0 mt-0.5" />
              <span>Claims overview and status</span>
            </div>
            <div className="flex items-start gap-3">
              <Shield size={20} className="flex-shrink-0 mt-0.5" />
              <span>Payout history and reporting</span>
            </div>
            <div className="flex items-start gap-3">
              <Shield size={20} className="flex-shrink-0 mt-0.5" />
              <span>Multi-store account management</span>
            </div>
            <div className="flex items-start gap-3">
              <Shield size={20} className="flex-shrink-0 mt-0.5" />
              <span>Performance analytics</span>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <Button asChild variant="hero" size="lg">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Globe, Zap, CheckCircle, Plug, ShoppingCart } from "lucide-react";
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hassle-Free Claims, Automatic Revenue</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Zero merchant involvement in claims management. From setup to payout, PARCELIS handles everything while you profit.
          </p>
        </div>

        {/* Process Steps */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Card 1: Apply & Onboard */}
            <div className="bg-white border border-border rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[120px] font-bold text-primary-light-tint opacity-30 leading-none select-none">
                01
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="text-white" size={48} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Quick Application</h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    Fill out our simple application form with basic business information. Shopify merchants can connect our app with one click. We'll review your application and onboard you within 24-48 hours—no lengthy approval process.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-text-primary">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span>Simple application form</span>
                    </li>
                    <li className="flex items-center gap-3 text-text-primary">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span>Shopify one-click option</span>
                    </li>
                    <li className="flex items-center gap-3 text-text-primary">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span>24-48 hour onboarding</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-background-gray rounded-lg p-6 h-64 flex items-center justify-center">
                  <p className="text-text-tertiary text-center">Application form mockup</p>
                </div>
              </div>
            </div>

            {/* Card 2: Integration Setup */}
            <div className="bg-primary-light-tint border border-border rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-[120px] font-bold text-primary/10 opacity-30 leading-none select-none">
                02
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="bg-background-gray rounded-lg p-6 h-64 flex items-center justify-center order-2 md:order-1">
                  <p className="text-text-tertiary text-center">Checkout integration mockup</p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Plug className="text-white" size={48} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    Once approved, we'll provide everything you need to add hassle-free insurance to your checkout. Zero claims involvement for you—customers handle everything directly. Set your customer-facing price to generate revenue on every protected package.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-text-primary">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span>Zero merchant involvement in claims</span>
                    </li>
                    <li className="flex items-center gap-3 text-text-primary">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span>Set your markup price</span>
                    </li>
                    <li className="flex items-center gap-3 text-text-primary">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span>Automatic data sync</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Customer Purchase */}
            <div className="bg-white border border-border rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[120px] font-bold text-primary-light-tint opacity-30 leading-none select-none">
                03
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <ShoppingCart className="text-white" size={48} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Customer Purchase</h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    At checkout, customers see the insurance option and can opt in with a single click. If a claim arises, customers handle it directly—zero merchant involvement. You never touch claims while earning profit on every protected package.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-text-primary">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span>Zero merchant involvement in claims</span>
                    </li>
                    <li className="flex items-center gap-3 text-text-primary">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span>Earn revenue through markup pricing</span>
                    </li>
                    <li className="flex items-center gap-3 text-text-primary">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span>Complete coverage for customers</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-background-gray rounded-lg p-6 h-64 flex items-center justify-center">
                  <p className="text-text-tertiary text-center">Checkout page with insurance option</p>
                </div>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="bg-card border-2 border-primary rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold">WooCommerce</h4>
                    <span className="text-xs bg-success text-success-foreground px-3 py-1 rounded-full font-semibold">
                      Live
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Plugin available for WordPress</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border-2 border-primary rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold">BigCommerce</h4>
                    <span className="text-xs bg-success text-success-foreground px-3 py-1 rounded-full font-semibold">
                      Live
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Native integration available</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border-2 border-primary rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold">Magento</h4>
                    <span className="text-xs bg-success text-success-foreground px-3 py-1 rounded-full font-semibold">
                      Live
                    </span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Zap className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span>Extension available for Adobe Commerce</span>
                    </li>
                  </ul>
                </div>
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

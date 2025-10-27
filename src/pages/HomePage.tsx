import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Globe } from "lucide-react";
import hartfordLogo from "@/assets/logos/hartford.png";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";
import shopifyLogo from "@/assets/platforms/shopify.png";
import twentyNineNextLogo from "@/assets/platforms/29next.png";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark text-primary-foreground py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-h1 mb-6">
            Turn Package Protection Into Profit
          </h1>
          <p className="text-body-lg mb-8 max-w-3xl mx-auto opacity-95">
            PARCELIS gives your customers comprehensive shipping insurance while putting money back in your pocket. No claims hassles. No overhead. Just better margins.
          </p>
          <Button asChild variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90">
            <Link to="/apply">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <img src={hartfordLogo} alt="The Hartford logo" className="h-8 md:h-10 object-contain" />
              <span className="font-semibold">Underwritten by The Hartford</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <Shield className="text-primary" size={24} />
              <span className="font-semibold">Licensed Reinsurance Provider</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-h2 mb-6">Merchant Benefits</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <DollarSign className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Profitable</h3>
                    <p className="text-muted-foreground">Mark up insurance costs to increase revenue per order</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Zero Involvement</h3>
                    <p className="text-muted-foreground">Never handle claims - customers contact PARCELIS directly</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Fast Payouts</h3>
                    <p className="text-muted-foreground">5-7 business day claim resolution</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">All Carriers</h3>
                    <p className="text-muted-foreground">USPS, UPS, FedEx, DHL, and all international carriers supported</p>
                    <div className="flex items-center gap-3 mt-3">
                      <img src={uspsLogo} alt="USPS logo" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                      <img src={upsLogo} alt="UPS logo" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                      <img src={fedexLogo} alt="FedEx logo" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                      <img src={dhlLogo} alt="DHL logo" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-h2 mb-6">Customer Protection</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Complete Coverage</h3>
                    <p className="text-muted-foreground">Lost, damaged, AND stolen packages (including porch piracy)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Global Coverage</h3>
                    <p className="text-muted-foreground">Unlimited geographic protection</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Simple Claims</h3>
                    <p className="text-muted-foreground">Easy filing process with email tracking</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Real Insurance</h3>
                    <p className="text-muted-foreground">Underwritten by The Hartford, not a tech workaround</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Preview */}
      <section className="py-12 md:py-24 bg-background-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">See Your Potential Profit</h2>
            <p className="text-body-lg text-text-secondary">Calculate merchant costs and customer pricing</p>
          </div>
          <div className="max-w-md mx-auto bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Package Value</p>
                <p className="text-2xl font-bold">$150</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Your Cost</p>
                  <p className="text-xl font-semibold">$2.50</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Customer Price</p>
                  <p className="text-xl font-semibold">$4.99</p>
                </div>
              </div>
              <div className="bg-success/10 border border-success rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Your Profit</p>
                <p className="text-3xl font-bold text-success">$2.49</p>
              </div>
            </div>
            <Button asChild variant="hero" className="w-full mt-6">
              <Link to="/pricing">Calculate Your Costs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Summary */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 text-center mb-12">Simple Process, Zero Hassle</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-h4 mb-3">Integrate</h3>
              <p className="text-text-secondary">Connect via Shopify app or platform integration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-h4 mb-3">Sell</h3>
              <p className="text-text-secondary">Insurance option appears at checkout - customers opt in</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-h4 mb-3">Relax</h3>
              <p className="text-text-secondary">Claims go directly to PARCELIS - you stay focused on growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-12 md:py-24 bg-background-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 text-center mb-12">Seamless Platform Integrations</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Shopify Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <img src={shopifyLogo} alt="Shopify" className="h-16 object-contain" />
                <span className="bg-primary text-white px-4 py-2 rounded-full text-xl font-semibold">
                  LIVE NOW
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Shopify One-Click Integration</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Install our app from the Shopify App Store and activate insurance at checkout in under 5 minutes.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary-hover">
                <Link to="/how-it-works">View Integration Details</Link>
              </Button>
            </div>

            {/* 29next Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <img src={twentyNineNextLogo} alt="29next" className="h-16 object-contain" />
                <span className="bg-primary text-white px-4 py-2 rounded-full text-xl font-semibold">
                  LIVE NOW
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">29next Native Integration</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Seamlessly add insurance to your 29next checkout flow with our native integration.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary-hover">
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Major Carriers */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 text-center mb-4">All Major Carriers Covered</h2>
          <p className="text-body-lg text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Comprehensive protection across USPS, UPS, FedEx, DHL, and all regional and international carriers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <div className="text-center">
              <img src={uspsLogo} alt="USPS shipping logo" className="h-12 md:h-16 object-contain mx-auto mb-2" />
              <p className="text-sm font-medium text-muted-foreground">USPS</p>
            </div>
            <div className="text-center">
              <img src={upsLogo} alt="UPS shipping logo" className="h-12 md:h-16 object-contain mx-auto mb-2" />
              <p className="text-sm font-medium text-muted-foreground">UPS</p>
            </div>
            <div className="text-center">
              <img src={fedexLogo} alt="FedEx shipping logo" className="h-12 md:h-16 object-contain mx-auto mb-2" />
              <p className="text-sm font-medium text-muted-foreground">FedEx</p>
            </div>
            <div className="text-center">
              <img src={dhlLogo} alt="DHL shipping logo" className="h-12 md:h-16 object-contain mx-auto mb-2" />
              <p className="text-sm font-medium text-muted-foreground">DHL</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8">+ all regional and international carriers</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-24 bg-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-h2 mb-8">Ready to Protect Packages and Boost Profits?</h2>
          <Button asChild variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

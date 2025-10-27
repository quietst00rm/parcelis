import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Globe } from "lucide-react";
import hartfordLogo from "@/assets/logos/hartford.png";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turn Package Protection Into Profit
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95">
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Merchant Benefits</h2>
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
              <h2 className="text-3xl font-bold mb-6">Customer Protection</h2>
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
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See Your Potential Profit</h2>
            <p className="text-lg text-muted-foreground">Calculate merchant costs and customer pricing</p>
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Process, Zero Hassle</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrate</h3>
              <p className="text-muted-foreground">Connect via Shopify app or platform integration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Sell</h3>
              <p className="text-muted-foreground">Insurance option appears at checkout - customers opt in</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Relax</h3>
              <p className="text-muted-foreground">Claims go directly to PARCELIS - you stay focused on growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Integrates With Your Platform</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6 mb-2">
                <p className="text-2xl font-bold">Shopify</p>
              </div>
              <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded">Live Now</span>
            </div>
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6 mb-2">
                <p className="text-2xl font-bold">29next</p>
              </div>
              <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded">Live Now</span>
            </div>
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6 mb-2 opacity-60">
                <p className="text-2xl font-bold">WooCommerce</p>
              </div>
              <span className="text-xs bg-muted-foreground text-background px-2 py-1 rounded">Coming Soon</span>
            </div>
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6 mb-2 opacity-60">
                <p className="text-2xl font-bold">BigCommerce</p>
              </div>
              <span className="text-xs bg-muted-foreground text-background px-2 py-1 rounded">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Major Carriers */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">All Major Carriers Covered</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
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
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Protect Packages and Boost Profits?</h2>
          <Button asChild variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

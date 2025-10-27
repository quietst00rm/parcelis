import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, DollarSign, Clock, Globe, CheckCircle } from "lucide-react";

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
            Licensed, merchant-first shipping insurance underwritten by The Hartford. We handle every claim—your team does nothing. Just better margins.
          </p>
          <Button asChild variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90">
            <Link to="/apply">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Trust Signals - Enhanced */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-center">
            <Badge variant="default" size="lg" className="flex items-center gap-2 px-4 py-2">
              <Shield size={18} />
              <span>Underwritten by The Hartford</span>
            </Badge>
            <Badge variant="default" size="lg" className="flex items-center gap-2 px-4 py-2">
              <Shield size={18} />
              <span>Licensed Reinsurance Provider</span>
            </Badge>
            <Badge variant="success" size="lg" className="flex items-center gap-2 px-4 py-2">
              <CheckCircle size={18} />
              <span>Porch Piracy Covered</span>
            </Badge>
            <Badge variant="default" size="lg" className="flex items-center gap-2 px-4 py-2">
              <Clock size={18} />
              <span>5-7 Day Resolution</span>
            </Badge>
            <Badge variant="default" size="lg" className="flex items-center gap-2 px-4 py-2">
              <Globe size={18} />
              <span>Global Coverage</span>
            </Badge>
          </div>
        </div>
      </section>

      {/* Differentiators - 3 Card Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <DollarSign className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Profit Center</h3>
              <p className="text-muted-foreground">
                Set your customer price at checkout. The difference from our base cost is your margin—automatically.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <Shield className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Zero Claims Work</h3>
              <p className="text-muted-foreground">
                Customers file claims with us directly. Typical resolution in 5–7 business days. You never touch the process.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <CheckCircle className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Legitimate Coverage</h3>
              <p className="text-muted-foreground">
                Lost, damaged, and stolen—including porch piracy. Global. All major carriers. Real insurance by The Hartford.
              </p>
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

      {/* How It Works - 5 Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple Process, Zero Hassle</h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Onboard</h3>
              <p className="text-muted-foreground text-sm">Apply and get approved in 24-48 hours. Shopify merchants activate with one click.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Embed at Checkout</h3>
              <p className="text-muted-foreground text-sm">Insurance option displays automatically based on cart value.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Opt-in</h3>
              <p className="text-muted-foreground text-sm">Customers choose coverage; you set the price and keep the markup.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">We Handle Claims</h3>
              <p className="text-muted-foreground text-sm">Customers file directly with PARCELIS. Zero merchant involvement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-xl font-semibold mb-3">Payouts in 5-7 Days</h3>
              <p className="text-muted-foreground text-sm">Fast resolution backed by The Hartford.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why PARCELIS?</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Why not carrier insurance?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Higher costs per package</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Limited theft coverage (no porch piracy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Slower claim resolutions</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Why not consumer apps?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Premium pricing with lower margins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Long-term contracts required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Potential sudden offboarding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Integrates With Your Platform</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6 mb-2">
                <p className="text-2xl font-bold">Shopify</p>
              </div>
              <Badge variant="success">Live Now</Badge>
            </div>
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6 mb-2">
                <p className="text-2xl font-bold">29next</p>
              </div>
              <Badge variant="success">Live Now</Badge>
            </div>
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6 mb-2 opacity-60">
                <p className="text-2xl font-bold">WooCommerce</p>
              </div>
              <Badge variant="muted">Coming Soon</Badge>
            </div>
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6 mb-2 opacity-60">
                <p className="text-2xl font-bold">BigCommerce</p>
              </div>
              <Badge variant="muted">Coming Soon</Badge>
            </div>
            <div className="text-center">
              <div className="bg-card border border-border rounded-lg p-6 mb-2 opacity-60">
                <p className="text-2xl font-bold">Magento</p>
              </div>
              <Badge variant="muted">Coming Soon</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Growing D2C Brands</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4 italic">
                "PARCELIS turned shipping insurance from a cost center into a profit generator. Our customers love the coverage, and we love the hands-off claims process."
              </p>
              <div className="text-sm">
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-muted-foreground">Founder, BellaHome</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4 italic">
                "The integration was seamless, and the margins are excellent. We've finally found a shipping insurance partner that puts merchants first."
              </p>
              <div className="text-sm">
                <p className="font-semibold">Marcus Rodriguez</p>
                <p className="text-muted-foreground">CEO, SportGear Plus</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-muted-foreground mb-4 italic">
                "Zero claims hassle means our support team can focus on what matters. The 5-7 day resolution time is exactly as promised."
              </p>
              <div className="text-sm">
                <p className="font-semibold">Emily Thompson</p>
                <p className="text-muted-foreground">Operations Director, TechStyle</p>
              </div>
            </div>
          </div>
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

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Globe, ChevronRight } from "lucide-react";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";
import shopifyLogo from "@/assets/platforms/shopify.png";
import twentyNineNextLogo from "@/assets/platforms/29next.png";
import heroShieldPackages from "@/assets/hero/shield-packages-transparent.png";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - InsureShip Inspired */}
      <section className="relative bg-[#F8FAFB] text-foreground py-12 md:py-24 pt-16 overflow-hidden">
        {/* Subtle Dotted Pattern Background */}
        <div className="absolute inset-0 dotted-pattern-light opacity-100 pointer-events-none" aria-hidden="true" />
        
        {/* Geometric Accent Shape - Top Right Diagonal */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent transform rotate-12 translate-x-32 -translate-y-32 pointer-events-none" 
          aria-hidden="true" 
        />
        
        {/* Two-Column Grid Layout */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Text Content */}
            <div className="hero-content-fade text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="block text-foreground">Shipping Insurance.</span>
                <span className="block text-primary mt-2">Powerful.</span>
                <span className="block text-primary">Flexible.</span>
                <span className="block text-primary">Profitable.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[500px] mx-auto md:mx-0">
                PARCELIS gives your customers comprehensive protection while putting money back in your pocket.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="h-16 px-8 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Link to="/apply" className="flex items-center gap-2">
                    Get Started
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </Button>
                
                <Button asChild variant="ghost" size="lg" className="text-primary hover:text-primary/80">
                  <Link to="/how-it-works">Learn more →</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="hidden md:flex items-center justify-center relative">
              <div className="relative w-full max-w-[600px]">
                <img 
                  src={heroShieldPackages} 
                  alt="Shield protecting shipping packages with technology circuit board pattern"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 text-center">
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
                    <p className="text-muted-foreground">Legitimate licensed coverage, not a tech workaround</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column - Headline & Description */}
            <div className="text-center md:text-left">
              <h2 className="text-h2 mb-4">See Your Potential Profit</h2>
              <p className="text-lg text-[#4A4A4A] max-w-[600px] mx-auto md:mx-0">
                Instantly calculate your margin on insured shipments.
              </p>
            </div>

            {/* Right Column - Calculator Card */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.05)] p-6 md:p-10">
                {/* Package Value */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-[#4A4A4A] mb-2 block">Package Value</label>
                  <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-lg p-4 text-center font-bold text-2xl transition-all duration-250 hover:shadow-[0_0_0_3px_rgba(30,32,153,0.15)] hover:scale-[1.02]">
                    $150
                  </div>
                </div>

                {/* Cost & Price Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border-b border-[rgba(0,0,0,0.05)]">
                  <div>
                    <label className="text-sm font-medium text-[#4A4A4A] mb-2 block">Your Cost</label>
                    <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-lg p-4 text-center font-bold text-xl transition-all duration-250 hover:shadow-[0_0_0_3px_rgba(30,32,153,0.15)] hover:scale-[1.02]">
                      $2.50
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#4A4A4A] mb-2 block">Customer Price</label>
                    <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-lg p-4 text-center font-bold text-xl transition-all duration-250 hover:shadow-[0_0_0_3px_rgba(30,32,153,0.15)] hover:scale-[1.02]">
                      $4.99
                    </div>
                  </div>
                </div>

                {/* Profit Display Banner */}
                <div className="bg-[#E8F9E8] rounded-xl p-5 md:p-7 mb-6 animate-fade-in" role="status" aria-live="polite">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="text-[#2E7D32]" size={20} />
                      <span className="font-medium text-[#4A4A4A]">Your Profit</span>
                    </div>
                    <span className="text-4xl font-bold text-[#2E7D32]">$2.49</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  asChild 
                  className="w-full h-14 rounded-xl font-semibold text-base bg-gradient-to-r from-[#1E2099] to-[#4A90E2] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-md"
                >
                  <Link to="/pricing">Calculate Your Costs</Link>
                </Button>

                {/* Subtext */}
                <p className="text-sm text-[#6E7585] text-center mt-4">
                  We handle every claim. You keep the profit.
                </p>
              </div>
            </div>
          </div>

          {/* Info Strip */}
          <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[rgba(0,0,0,0.05)] text-center">
            <p className="text-sm text-[#6E7585]">
              Coverage limit: $2,500 per package • Claims resolved within 5–7 business days
            </p>
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

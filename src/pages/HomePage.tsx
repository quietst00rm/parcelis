import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Globe, ChevronRight } from "lucide-react";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";
import shopifyLogo from "@/assets/platforms/shopify.png";
import twentyNineNextLogo from "@/assets/platforms/29next.png";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-black text-white overflow-hidden flex items-center">
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 229, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
          aria-hidden="true" 
        />
        
        {/* Radial Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 212, 0.05) 0%, transparent 50%)'
          }}
          aria-hidden="true"
        />
        
        <div className="container mx-auto px-4 md:px-10 relative z-10 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            
            {/* Text Content */}
            <div className="text-center animate-fade-in">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6 tracking-tight">
                Protect what <span className="text-primary">matters</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
                Turn package protection into profit. Comprehensive shipping insurance that pays <span className="text-white font-semibold">you</span>, not just your customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
                <Button 
                  asChild 
                  size="lg" 
                  className="h-16 px-10 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary-hover shadow-[0_0_30px_rgba(0,229,212,0.3)] hover:shadow-[0_0_40px_rgba(0,229,212,0.5)] transition-all duration-300"
                >
                  <Link to="/apply">Get Started</Link>
                </Button>
                
                <Link 
                  to="/how-it-works" 
                  className="text-white font-bold text-lg inline-flex items-center gap-2 hover:text-primary transition-all duration-300 hover:gap-3"
                >
                  Learn more
                  <ChevronRight size={24} />
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-primary/30">
                <Shield className="text-primary" size={24} />
                <span className="text-white text-base font-semibold">Licensed Reinsurance Provider</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-background-alt border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div>
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">$50M+</div>
              <div className="text-text-secondary text-lg">Packages Protected</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">10K+</div>
              <div className="text-text-secondary text-lg">Active Merchants</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2">99%</div>
              <div className="text-text-secondary text-lg">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">For <span className="text-primary">Merchants</span></h2>
              <div className="space-y-8">
                <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
                  <div className="flex items-start gap-4">
                    <DollarSign className="text-primary flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Profitable</h3>
                      <p className="text-text-secondary text-lg">Mark up insurance costs to increase revenue per order</p>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
                  <div className="flex items-start gap-4">
                    <Shield className="text-primary flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Zero Involvement</h3>
                      <p className="text-text-secondary text-lg">Never handle claims - customers contact PARCELIS directly</p>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
                  <div className="flex items-start gap-4">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Fast Payouts</h3>
                      <p className="text-text-secondary text-lg">5-7 business day claim resolution</p>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
                  <div className="flex items-start gap-4">
                    <Globe className="text-primary flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">All Carriers</h3>
                      <p className="text-text-secondary text-lg mb-4">USPS, UPS, FedEx, DHL, and all international carriers supported</p>
                      <div className="flex items-center gap-4">
                        <img src={uspsLogo} alt="USPS" className="h-7 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        <img src={upsLogo} alt="UPS" className="h-7 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        <img src={fedexLogo} alt="FedEx" className="h-7 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                        <img src={dhlLogo} alt="DHL" className="h-7 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">For <span className="text-primary">Customers</span></h2>
              <div className="space-y-8">
                <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
                  <div className="flex items-start gap-4">
                    <Shield className="text-primary flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Complete Coverage</h3>
                      <p className="text-text-secondary text-lg">Lost, damaged, AND stolen packages (including porch piracy)</p>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
                  <div className="flex items-start gap-4">
                    <Globe className="text-primary flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Global Coverage</h3>
                      <p className="text-text-secondary text-lg">Unlimited geographic protection</p>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
                  <div className="flex items-start gap-4">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Simple Claims</h3>
                      <p className="text-text-secondary text-lg">Easy filing process with email tracking</p>
                    </div>
                  </div>
                </div>
                <div className="border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
                  <div className="flex items-start gap-4">
                    <Shield className="text-primary flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Real Insurance</h3>
                      <p className="text-text-secondary text-lg">Legitimate licensed coverage, not a tech workaround</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Summary */}
      <section className="py-16 md:py-28 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">How it <span className="text-primary">works</span></h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6 border-2 border-primary">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Integrate</h3>
              <p className="text-text-secondary text-lg">Connect via Shopify app or platform integration</p>
            </div>
            <div className="text-center border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6 border-2 border-primary">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Sell</h3>
              <p className="text-text-secondary text-lg">Insurance option appears at checkout - customers opt in</p>
            </div>
            <div className="text-center border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6 border-2 border-primary">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Relax</h3>
              <p className="text-text-secondary text-lg">Claims go directly to PARCELIS - you stay focused on growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-16 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">Platform <span className="text-primary">Integrations</span></h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Shopify Card */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
              <div className="flex items-center justify-between mb-6">
                <img src={shopifyLogo} alt="Shopify" className="h-16 object-contain brightness-0 invert" />
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                  LIVE NOW
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Shopify One-Click</h3>
              <p className="text-text-secondary mb-8 leading-relaxed text-lg">
                Install from the Shopify App Store and activate insurance at checkout in under 5 minutes.
              </p>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-bold">
                <Link to="/how-it-works">View Integration</Link>
              </Button>
            </div>

            {/* 29next Card */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
              <div className="flex items-center justify-between mb-6">
                <img src={twentyNineNextLogo} alt="29next" className="h-16 object-contain brightness-0 invert" />
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                  LIVE NOW
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">29next Native</h3>
              <p className="text-text-secondary mb-8 leading-relaxed text-lg">
                Seamlessly add insurance to your 29next checkout flow with our native integration.
              </p>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-bold">
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Major Carriers */}
      <section className="py-16 md:py-28 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white">All Major <span className="text-primary">Carriers</span></h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Comprehensive protection across USPS, UPS, FedEx, DHL, and all regional and international carriers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center p-6 border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
              <img src={uspsLogo} alt="USPS shipping logo" className="h-12 mb-4 object-contain brightness-0 invert opacity-80" />
              <p className="text-sm font-semibold text-text-secondary">USPS</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
              <img src={upsLogo} alt="UPS shipping logo" className="h-12 mb-4 object-contain brightness-0 invert opacity-80" />
              <p className="text-sm font-semibold text-text-secondary">UPS</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
              <img src={fedexLogo} alt="FedEx shipping logo" className="h-12 mb-4 object-contain brightness-0 invert opacity-80" />
              <p className="text-sm font-semibold text-text-secondary">FedEx</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,229,212,0.1)]">
              <img src={dhlLogo} alt="DHL shipping logo" className="h-12 mb-4 object-contain brightness-0 invert opacity-80" />
              <p className="text-sm font-semibold text-text-secondary">DHL</p>
            </div>
          </div>
          <p className="text-center text-text-secondary mt-12 text-lg">+ all regional and international carriers</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Ready to get <span className="text-primary">started</span>?</h2>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">Join thousands of merchants protecting packages and boosting profits with PARCELIS</p>
          <Button asChild size="lg" className="h-16 px-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary-hover shadow-[0_0_30px_rgba(0,229,212,0.3)] hover:shadow-[0_0_40px_rgba(0,229,212,0.5)] transition-all">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

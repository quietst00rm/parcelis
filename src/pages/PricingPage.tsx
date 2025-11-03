import PricingCalculator from "@/components/PricingCalculator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Clock, Star, FileText, Search, CheckCircle, Banknote, Package } from "lucide-react";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";
import shopifyLogo from "@/assets/platforms/shopify.png";
import twentyNineLogo from "@/assets/platforms/29next.png";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero/Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-medium py-20 md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rotate-12"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white -rotate-6"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-white rotate-45"></div>
          <div className="absolute bottom-10 right-1/3 w-20 h-20 border-2 border-white -rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple Pricing. Proven Value.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Affordable protection that pays for itself in customer trust and operational efficiency.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10">
              Coverage starts at $2.50 per shipment for packages valued up to $200. That small investment reduces refund losses, improves customer satisfaction scores, and cuts down costly support time. With Parcelis, every claim is handled quickly and fairly — keeping customers confident and your operations smooth.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg font-semibold px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/apply" aria-label="Get a custom quote for your business">
                Get a Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparent Pricing Calculator
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly what comprehensive package protection costs for your shipment values.
            </p>
          </div>

          <PricingCalculator />

          {/* Coverage Information */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-sm">
              <Package className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-primary mb-1">$2,500</p>
              <p className="text-sm text-muted-foreground">maximum coverage per box</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-sm">
              <Package className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-primary mb-1">$25,000</p>
              <p className="text-sm text-muted-foreground">maximum coverage per shipment</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border shadow-sm">
              <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-lg font-semibold text-foreground mb-1">All Carriers</p>
              <p className="text-sm text-muted-foreground">USPS, UPS, FedEx, DHL, international</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="default" size="lg">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Built for Efficiency, Designed for Trust
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Shield className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lost, damaged, or stolen packages — including porch piracy — covered with all major carriers. Customers get the protection they deserve without exceptions or fine print.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Clock className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Zero Merchant Involvement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your team never touches a claim. Customers file directly through our portal, we handle everything, and claims resolve in 5-7 business days. Your support bandwidth stays focused where it matters.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <Star className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Brand Reputation Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fast, fair claim resolution keeps customers satisfied and returning. Reduce negative reviews, minimize refund disputes, and build long-term loyalty through reliable post-purchase protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details Section */}
      <section className="py-16 md:py-20 bg-background-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What's Covered
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Full Protection Across All Scenarios</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">Lost packages during transit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">Damaged items in shipping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">Stolen packages including porch piracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">All carriers: USPS, UPS, FedEx, DHL, regional and international</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">Global coverage with no geographic limitations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-foreground">Up to $2,500 per box, $25,000 per shipment</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Standard Exclusions</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center text-destructive text-xl flex-shrink-0">×</span>
                  <span className="text-lg text-foreground">Invalid or incorrect addresses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center text-destructive text-xl flex-shrink-0">×</span>
                  <span className="text-lg text-foreground">Refused deliveries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center text-destructive text-xl flex-shrink-0">×</span>
                  <span className="text-lg text-foreground">Items not yet shipped</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center text-destructive text-xl flex-shrink-0">×</span>
                  <span className="text-lg text-foreground">Return-to-sender situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center text-destructive text-xl flex-shrink-0">×</span>
                  <span className="text-lg text-foreground">Packages still in retailer possession</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Process Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fast, Fair, Hassle-Free Claims
            </h2>
            <p className="text-xl text-muted-foreground">
              5-7 business days from claim to resolution — with zero merchant involvement.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-card rounded-lg p-6 shadow-sm text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                  </div>
                  <FileText className="w-12 h-12 text-primary mx-auto md:mx-0 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Customer Files Claim</h3>
                  <p className="text-sm text-muted-foreground">
                    Customer submits claim through dedicated portal with tracking number and required documentation.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-card rounded-lg p-6 shadow-sm text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                  </div>
                  <Search className="w-12 h-12 text-primary mx-auto md:mx-0 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Professional Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Licensed claims team verifies coverage and reviews documentation for fast processing.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-card rounded-lg p-6 shadow-sm text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                  </div>
                  <CheckCircle className="w-12 h-12 text-primary mx-auto md:mx-0 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Resolution Confirmed</h3>
                  <p className="text-sm text-muted-foreground">
                    Claim approved and customer notified with resolution details and payout timeline.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="bg-card rounded-lg p-6 shadow-sm text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                  </div>
                  <Banknote className="w-12 h-12 text-primary mx-auto md:mx-0 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Customer Satisfied</h3>
                  <p className="text-sm text-muted-foreground">
                    Fast resolution builds trust, reduces negative reviews, and keeps customers coming back.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link to="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Carrier Coverage Strip */}
      <section className="py-12 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground mb-6 font-medium">Works with all major carriers</p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            <img src={uspsLogo} alt="USPS logo" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={upsLogo} alt="UPS logo" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={fedexLogo} alt="FedEx logo" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={dhlLogo} alt="DHL logo" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Seamless Platform Integration
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-card rounded-lg p-8 shadow-sm border-2 border-success/20">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-success" />
                Available Now
              </h3>
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-3">
                  <img src={shopifyLogo} alt="Shopify" className="h-10 object-contain" />
                  <span className="px-3 py-1 bg-success text-success-foreground rounded-full text-sm font-semibold">
                    Live
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={twentyNineLogo} alt="29next" className="h-10 object-contain" />
                  <span className="px-3 py-1 bg-success text-success-foreground rounded-full text-sm font-semibold">
                    Live
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border-2 border-primary/20">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Launching Soon
              </h3>
              <div className="flex items-center gap-8 flex-wrap text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="font-medium">WooCommerce</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium">BigCommerce</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium">Magento</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg">
              <Link to="/apply">Start Your Application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rotate-12"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 border-2 border-white -rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Customers and Your Brand?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join merchants who trust Parcelis for fast, fair, comprehensive package protection.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-xl font-semibold px-10 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Link to="/apply" aria-label="Apply now for Parcelis package protection">
                Apply Now
              </Link>
            </Button>
            <div className="mt-6">
              <Link 
                to="/how-it-works" 
                className="text-white/80 hover:text-white underline transition-colors duration-300"
              >
                Or learn more about how it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

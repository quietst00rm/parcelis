import { Shield, Users, Check, Award, Handshake, Plug, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Built for E-Commerce. Backed by Insurance Expertise.
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Parcelis is a technology-driven protection platform powered by InsureShip, the industry leader in e-commerce shipping insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/apply">Partner with Parcelis</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <section className="py-20 max-w-4xl mx-auto">
          <div className="bg-muted rounded-lg p-8 md:p-12 border-l-4 border-primary">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Our mission is to help e-commerce brands deliver peace of mind at every doorstep — transforming shipping anxiety into customer confidence through technology, expertise, and relentless service.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Powered by InsureShip's 20+ years of industry leadership and over 200 years of combined insurance expertise, Parcelis reduces claim disputes, eliminates refund losses, and creates exceptional post-purchase experiences that build lasting customer trust.
            </p>
          </div>
        </section>

        {/* Key Highlights Grid */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Leading Brands Choose Parcelis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Insurance Expertise */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Award className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Insurance Expertise</h3>
              <p className="text-muted-foreground">
                Backed by InsureShip with 20+ years of industry leadership and over 200 years of combined insurance expertise.
              </p>
            </div>

            {/* Merchant Trust */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Handshake className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Merchant Trust</h3>
              <p className="text-muted-foreground">
                Trusted by leading e-commerce brands to reduce claim disputes, eliminate refund losses, and protect their bottom line.
              </p>
            </div>

            {/* Platform Integration */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Plug className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
              <p className="text-muted-foreground">
                Plug-and-play setup for Shopify, WooCommerce, BigCommerce, Magento, and custom platforms — launch in minutes.
              </p>
            </div>

            {/* Global Coverage */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Globe className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
              <p className="text-muted-foreground">
                Comprehensive protection across all major carriers worldwide — USPS, UPS, FedEx, DHL, and regional services.
              </p>
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

        {/* Value Propositions */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Parcelis Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Shield className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4">Hassle-Free Protection</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Zero merchant involvement in claims</span>
                </li>
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

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Users className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4">Operational Efficiency</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Reduce support ticket volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Eliminate refund disputes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Streamlined claim process</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Focus on growth, not claims</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <Shield className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4">True Partnership</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>No long-term contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>No surprise offboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Transparent pricing always</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Dedicated merchant support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-muted rounded-xl">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Built on Trust and Transparency</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start text-left">
                <Shield className="flex-shrink-0 text-primary" size={28} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Regulatory Compliance</h3>
                  <p className="text-muted-foreground">Licensed, legitimate insurance backed by trusted underwriters</p>
                </div>
              </div>
              <div className="flex gap-4 items-start text-left">
                <Check className="flex-shrink-0 text-primary" size={28} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Customer Confidence</h3>
                  <p className="text-muted-foreground">Build lasting trust with comprehensive protection customers value</p>
                </div>
              </div>
              <div className="flex gap-4 items-start text-left">
                <Users className="flex-shrink-0 text-primary" size={28} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Operational Excellence</h3>
                  <p className="text-muted-foreground">Streamlined claims management that keeps your team focused</p>
                </div>
              </div>
              <div className="flex gap-4 items-start text-left">
                <Award className="flex-shrink-0 text-primary" size={28} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Industry Leadership</h3>
                  <p className="text-muted-foreground">20+ years of InsureShip expertise protecting e-commerce brands</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Customers?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join merchants using Parcelis to eliminate shipping headaches and build customer trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/apply">Partner with Parcelis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

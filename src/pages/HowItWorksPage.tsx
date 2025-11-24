import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, Shield, FileCheck, TrendingUp, Zap } from "lucide-react";
import HowItWorksHero from '@/components/HowItWorksHero';

const HowItWorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HowItWorksHero />

      {/* 4-Step Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Parcelis Works
          </h2>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Integrate */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#1e22aa] rounded-lg flex items-center justify-center mb-6">
                <Settings className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-[#1e22aa] mb-4">Integrate</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect Parcelis via our Shopify, WooCommerce, or API integration in minutes. No coding, no contracts — just instant coverage for your customers.
              </p>
            </div>

            {/* Step 2: Offer Protection */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#1e22aa] rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-[#1e22aa] mb-4">Offer Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                At checkout, customers can opt-in to protect their order against loss, damage, or theft — giving them confidence to complete their purchase.
              </p>
            </div>

            {/* Step 3: We Handle Claims */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#1e22aa] rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-[#1e22aa] mb-4">We Handle Claims</h3>
              <p className="text-gray-600 leading-relaxed">
                If a package goes missing or arrives damaged, customers submit claims directly through our self-service portal. Our team manages resolution and payout in 5–7 days, keeping your inbox clear and your customers satisfied.
              </p>
            </div>

            {/* Step 4: You Stay Focused on Growth */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#1e22aa] rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-[#1e22aa] mb-4">You Stay Focused on Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Parcelis removes the burden of post-delivery issues — freeing your team to focus on sales, not support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Live Integrations
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Shopify */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Shopify</h3>
                <span className="px-3 py-1 bg-success text-success-foreground rounded-full text-xs font-semibold">
                  Live
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Zap className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>One-click activation via Shopify App Store</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Connect your store in minutes</span>
                </li>
              </ul>
            </div>

            {/* NEXT Commerce */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">NEXT Commerce</h3>
                <span className="px-3 py-1 bg-success text-success-foreground rounded-full text-xs font-semibold">
                  Live
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Zap className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Seamless integration with NEXT Commerce checkout</span>
                </li>
              </ul>
            </div>

            {/* WooCommerce */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">WooCommerce</h3>
                <span className="px-3 py-1 bg-success text-success-foreground rounded-full text-xs font-semibold">
                  Live
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Zap className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Plugin available for WordPress</span>
                </li>
              </ul>
            </div>

            {/* BigCommerce */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">BigCommerce</h3>
                <span className="px-3 py-1 bg-success text-success-foreground rounded-full text-xs font-semibold">
                  Live
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Zap className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Native integration available</span>
                </li>
              </ul>
            </div>

            {/* Magento */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Magento</h3>
                <span className="px-3 py-1 bg-success text-success-foreground rounded-full text-xs font-semibold">
                  Live
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Zap className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span>Extension available for Adobe Commerce</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 text-lg">
            Custom API integration available for other platforms
          </p>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-background-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Protect Your Customers?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Join merchants using Parcelis to eliminate shipping headaches and build customer trust.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold px-10 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/apply" aria-label="Apply now for Parcelis">
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;

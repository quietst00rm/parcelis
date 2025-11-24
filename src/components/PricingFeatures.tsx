import React from 'react';
import { Shield, Clock, Star } from 'lucide-react';

const PricingFeatures: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Built for Efficiency, Designed for Trust</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-6">
                    <Shield className="w-12 h-12 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Comprehensive Coverage</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Lost, damaged, or stolen packages — including porch piracy — covered with all major carriers. Customers get the protection they deserve without exceptions or fine print.
                </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-6">
                    <Clock className="w-12 h-12 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Zero Merchant Involvement</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Your team never touches a claim. Customers file directly through our portal, we handle everything, and claims resolve in 5-7 business days. Your support bandwidth stays focused where it matters.
                </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-6">
                    <Star className="w-12 h-12 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Brand Reputation Protection</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Fast, fair claim resolution keeps customers satisfied and returning. Reduce negative reviews, minimize refund disputes, and build long-term loyalty through reliable post-purchase protection.
                </p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default PricingFeatures;

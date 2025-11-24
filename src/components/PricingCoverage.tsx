import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

const PricingCoverage: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-16">What's Covered</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
            
            {/* Included */}
            <div className="bg-white rounded-3xl p-10 flex-1 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-100">Full Protection Across All Scenarios</h3>
                <ul className="space-y-6">
                    {[
                        "Lost packages during transit",
                        "Damaged items in shipping",
                        "Stolen packages including porch piracy",
                        "All carriers: USPS, UPS, FedEx, DHL, regional and international",
                        "Global coverage with no geographic limitations",
                        "Up to $2,500 per box, $25,000 per shipment"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

             {/* Excluded */}
             <div className="bg-gray-50 rounded-3xl p-10 flex-1 shadow-inner border border-gray-100">
                <h3 className="text-xl font-bold text-slate-900 mb-8 pb-4 border-b border-gray-200">Standard Exclusions</h3>
                <ul className="space-y-6">
                    {[
                        "Invalid or incorrect addresses",
                        "Refused deliveries",
                        "Items not yet shipped",
                        "Return-to-sender situations",
                        "Packages still in retailer possession"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      </div>
    </div>
  );
};

export default PricingCoverage;

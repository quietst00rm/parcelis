import React, { useState } from 'react';
import { Package, ShieldCheck, ChevronsUpDown, Calculator } from 'lucide-react';

const PricingCalculator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("150");

  const packageValue = parseFloat(inputValue) || 0;
  // Logic: $150 -> $2.50. This implies Cost = Value / 60.
  const cost = packageValue / 60;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow empty string to clear the input
    setInputValue(e.target.value);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(val);
  };

  return (
    <div className="bg-white py-12 -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-brand-50 text-brand mb-4 shadow-sm">
              <Calculator size={16} className="mr-2" strokeWidth={2} /> Interactive Tool
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Transparent Pricing Calculator</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
                See exactly what comprehensive package protection costs for your shipment values.
            </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100 mb-10">
            <div className="mb-4">
                <label className="block text-xs font-bold text-slate-800 mb-2 uppercase tracking-wide">Package Value</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-gray-500 font-bold text-lg">$</span>
                    </div>
                    <input 
                        type="number" 
                        value={inputValue}
                        onChange={handleInputChange}
                        className="block w-full pl-9 pr-12 py-3 text-lg border-2 border-brand/20 rounded-xl focus:ring-brand focus:border-brand transition-colors text-slate-900"
                        placeholder="Enter package value"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                         <ChevronsUpDown className="text-gray-400" size={20} />
                    </div>
                </div>
            </div>

            <div className="py-4 text-center mb-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Your Cost</p>
                <p className="text-6xl font-extrabold text-brand tracking-tight">
                    {formatCurrency(cost)}
                </p>
            </div>

            <ul className="space-y-2 text-center text-xs text-gray-500">
                <li className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                    Pricing is charged at checkout on a per-package basis
                </li>
                <li className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                    Comprehensive coverage for loss, damage, and theft
                </li>
                 <li className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                    No contracts, no monthly fees
                </li>
            </ul>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-8">
                    <Package className="w-14 h-14 text-brand" strokeWidth={1.5} />
                </div>
                <h4 className="text-4xl font-bold text-brand mb-3">$2,500</h4>
                <p className="text-base text-gray-500 font-medium">maximum coverage per box</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-8">
                    <Package className="w-14 h-14 text-brand" strokeWidth={1.5} />
                </div>
                <h4 className="text-4xl font-bold text-brand mb-3">$25,000</h4>
                <p className="text-base text-gray-500 font-medium">maximum coverage per shipment</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-8">
                    <ShieldCheck className="w-14 h-14 text-brand" strokeWidth={1.5} />
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-3 mt-1">All Carriers</h4>
                <p className="text-base text-gray-400 mt-1 px-2 leading-tight font-medium">USPS, UPS, FedEx, DHL, international</p>
            </div>

        </div>

        <div className="text-center mt-12">
             <button className="bg-brand text-white font-bold py-4 px-10 rounded-xl hover:bg-brand-dark transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 text-lg">
                 See How It Works
             </button>
        </div>

      </div>
    </div>
  );
};

export default PricingCalculator;

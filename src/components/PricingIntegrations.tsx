import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PricingIntegrations: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Seamless Platform Integration</h2>
        
        <div className="border border-emerald-100 rounded-xl p-8 bg-white shadow-sm inline-block w-full max-w-4xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 justify-center">
                
                <div className="flex items-center gap-2 text-slate-700 font-bold text-lg">
                    <CheckCircle2 className="text-emerald-500" />
                    Available Now
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                     {/* Shopify */}
                    <div className="flex items-center gap-2">
                         <div className="w-6 h-6 bg-[#95BF47] rounded-full flex items-center justify-center text-white text-[10px] font-bold">S</div>
                         <span className="font-bold text-slate-700 text-sm">Shopify</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                    {/* NEXT */}
                    <div className="flex items-center gap-2">
                         <span className="font-black text-blue-900 text-sm tracking-tighter">NEXT</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                    {/* Woo */}
                    <div className="flex items-center gap-2">
                         <span className="font-bold text-purple-900 text-sm">WooCommerce</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                    {/* BigCommerce */}
                    <div className="flex items-center gap-2">
                         <span className="font-bold text-slate-700 text-sm">BigCommerce</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                     {/* Magento */}
                     <div className="flex items-center gap-2">
                         <span className="font-bold text-orange-600 text-sm">Magento</span>
                         <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">Live</span>
                    </div>
                </div>

            </div>
        </div>

        <div className="mt-12">
            <button className="bg-brand hover:bg-brand-dark text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition-colors">
                Start Your Application
            </button>
        </div>

      </div>
    </div>
  );
};

export default PricingIntegrations;

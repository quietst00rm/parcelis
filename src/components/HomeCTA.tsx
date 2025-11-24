import React from 'react';
import { Shield } from 'lucide-react';

const HomeCTA: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand mb-6 leading-tight">
            Ready to Protect Your <br/> Customers?
        </h2>
        <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
            Join the merchants who've chosen the smarter way to deliver confidence with every shipment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-brand hover:bg-brand-dark text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                Sign Up Today
            </button>
            <button className="text-brand font-bold py-4 px-8 hover:bg-brand-50 rounded-xl transition-colors w-full sm:w-auto">
                See How It Works
            </button>
        </div>

        <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-center gap-8 md:gap-20 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <div className="flex items-center gap-2 justify-center">
                <Shield className="w-5 h-5" strokeWidth={2} />
                Licensed Reinsurance Provider
            </div>
            <div className="flex items-center gap-2 justify-center">
                <span>Comprehensive Protection</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default HomeCTA;

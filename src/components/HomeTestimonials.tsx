import React from 'react';
import { Quote } from 'lucide-react';

const HomeTestimonials: React.FC = () => {
  return (
    <div className="py-24 bg-brand relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-16">Trusted by Growing Brands</h2>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 md:p-16 text-left shadow-2xl relative">
            <div className="mb-8 opacity-20">
                <Quote className="w-16 h-16 text-brand" fill="currentColor" />
            </div>
            <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-10">
                "Our customer service team used to spend hours dealing with lost package claims. Now with PARCELIS, those issues are handled automatically and our customers are happier than ever."
            </p>
            <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center text-white font-bold text-xl">
                    S
                </div>
                <div>
                    <p className="text-slate-900 font-bold text-lg">Sarah Chen</p>
                    <p className="text-brand font-medium text-sm">Founder & CEO</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">ModernGoods</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default HomeTestimonials;

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const HomeSplitFeature: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12 items-stretch">
                
                {/* Left Side (Content List) - 40% */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center py-8">
                    <h2 className="text-4xl font-extrabold text-brand mb-10">Comprehensive Protection</h2>
                    <div className="space-y-6">
                        {['Lost Packages', 'Damaged Shipments', 'Porch Piracy', 'All Global Carriers'].map((item) => (
                            <div key={item} className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all flex-shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-brand group-hover:text-white" />
                                </div>
                                <span className="text-xl font-bold text-slate-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side (5-7 Days Card) - 60%, styled as a Big Card */}
                <div className="w-full lg:w-3/5">
                    <div className="h-full bg-brand rounded-[2.5rem] p-12 lg:p-20 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                        {/* Abstract Background pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10">
                            <span className="text-[120px] lg:text-[160px] font-black text-white tracking-tighter leading-none drop-shadow-sm">
                                5-7
                            </span>
                            <h3 className="text-3xl md:text-5xl font-bold text-blue-100 mt-2">
                                Business Days
                            </h3>
                            <div className="w-24 h-1.5 bg-white/30 mx-auto my-8 rounded-full"></div>
                            <p className="text-blue-50 text-xl md:text-2xl font-medium">Average claim resolution</p>
                            <p className="text-blue-200 text-base mt-8 italic bg-white/10 py-2 px-6 rounded-full inline-block backdrop-blur-sm">
                                Carrier insurance: 30-60 days
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default HomeSplitFeature;
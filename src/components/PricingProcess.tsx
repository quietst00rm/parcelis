import React from 'react';
import { FileText, Search, CheckCircle, Banknote } from 'lucide-react';

const PricingProcess: React.FC = () => {
  const steps = [
  {
    num: 1,
    icon: <FileText className="w-14 h-14 text-brand" strokeWidth={1.5} />,
    title: "Customer Files Claim",
    text: "Customer submits claim through dedicated portal with tracking number and required documentation."
  },
  {
    num: 2,
    icon: <Search className="w-14 h-14 text-brand" strokeWidth={1.5} />,
    title: "Professional Review",
    text: "Licensed claims team verifies coverage and reviews documentation for fast processing."
  },
  {
    num: 3,
    icon: <CheckCircle className="w-14 h-14 text-brand" strokeWidth={1.5} />,
    title: "Resolution Confirmed",
    text: "Claim approved and customer notified with resolution details and payout timeline."
  },
  {
    num: 4,
    icon: <Banknote className="w-14 h-14 text-brand" strokeWidth={1.5} />,
    title: "Customer Satisfied",
    text: "Fast resolution builds trust, reduces negative reviews, and keeps customers coming back."
  }];


  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Fast, Fair, Hassle-Free Claims</h2>
            <p className="text-gray-500">5-7 business days from claim to resolution — with zero merchant involvement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) - Adjusted top to match center of bigger circles */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gray-200 z-0"></div>

            {steps.map((step, i) =>
          <div key={i} className="flex flex-col items-start relative z-10 bg-gray-50 md:bg-transparent">
                    <div className="w-20 h-20 rounded-full bg-brand text-white flex items-center justify-center font-bold text-3xl mb-6 shadow-md border-4 border-white">
                        {step.num}
                    </div>
                    <div className="mb-4">
                        {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                        {step.text}
                    </p>
                </div>
          )}
        </div>

        




      </div>
    </div>);

};

export default PricingProcess;
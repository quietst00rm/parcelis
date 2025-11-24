import React from 'react';
import { ShieldCheck, Users, Shield } from 'lucide-react';

const AboutAdvantage: React.FC = () => {
  const cards = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-[#1e22aa]" strokeWidth={1.5} />,
        title: "Hassle-Free Protection",
        items: [
            "Zero merchant involvement in claims",
            "Includes porch piracy protection",
            "All carriers supported globally",
            "Fast 5-7 day claim resolution"
        ]
    },
    {
        icon: <Users className="w-10 h-10 text-[#1e22aa]" strokeWidth={1.5} />,
        title: "Operational Efficiency",
        items: [
            "Reduce support ticket volume",
            "Eliminate refund disputes",
            "Streamlined claim process",
            "Focus on growth, not claims"
        ]
    },
    {
        icon: <Shield className="w-10 h-10 text-[#1e22aa]" strokeWidth={1.5} />,
        title: "True Partnership",
        items: [
            "No long-term contracts",
            "No surprise offboarding",
            "Transparent pricing always",
            "Dedicated merchant support"
        ]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-20">The Parcelis Advantage</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-10 hover:shadow-xl transition-all duration-300">
                    <div className="mb-6">
                        {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-8">{card.title}</h3>
                    <ul className="space-y-4">
                        {card.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                <svg className="w-5 h-5 text-[#1e22aa] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAdvantage;

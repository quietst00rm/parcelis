import React from 'react';
import { Shield, Zap, TrendingUp, Smile } from 'lucide-react';

const HomeFeatures: React.FC = () => {
  const features = [
    {
        icon: <Shield className="w-10 h-10 text-brand" strokeWidth={1.5} />,
        title: "Comprehensive Coverage",
        text: "Every order is covered against loss, damage, and porch piracy, across USPS, UPS, FedEx, DHL, and international carriers — ensuring peace of mind for your customers worldwide."
    },
    {
        icon: <Zap className="w-10 h-10 text-brand" strokeWidth={1.5} />,
        title: "Zero Merchant Involvement",
        text: "Customers submit claims directly through our self-service portal. Parcelis handles resolution in 5–7 days, reducing tickets and freeing your support team."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-brand" strokeWidth={1.5} />,
        title: "Boost Conversions and Loyalty",
        text: "When customers see 'Protected by Parcelis' at checkout, they feel secure completing their purchase — leading to higher conversion rates and repeat buyers."
    },
    {
        icon: <Smile className="w-10 h-10 text-brand" strokeWidth={1.5} />,
        title: "Fewer Refunds, Happier Customers",
        text: "Eliminate time-consuming back-and-forth over missing or damaged shipments. Parcelis keeps customers satisfied and protects your bottom line."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-brand mb-4">Protection That Builds Trust.<br/>Automation That Saves Time.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                From checkout to claim resolution, Parcelis ensures a smooth, worry-free experience for both merchants and customers.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
                <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="mb-6">{f.icon}</div>
                    <h3 className="text-xl font-bold text-brand-900 mb-4">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                        {f.text}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;

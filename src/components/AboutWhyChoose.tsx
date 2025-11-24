import React from 'react';
import { Award, Handshake, Zap, Globe2 } from 'lucide-react';

const AboutWhyChoose: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Insurance Expertise",
      text: "Backed by InsureShip with 20+ years of industry leadership and over 200 years of combined insurance expertise."
    },
    {
      icon: <Handshake className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Merchant Trust",
      text: "Trusted by leading e-commerce brands to reduce claim disputes, eliminate refund losses, and protect their bottom line."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Seamless Integration",
      text: "Plug-and-play setup for Shopify, WooCommerce, BigCommerce, Magento, and custom platforms — launch in minutes."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: "Global Coverage",
      text: "Comprehensive protection across all major carriers worldwide — USPS, UPS, FedEx, DHL, and regional services."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Why Leading Brands Choose Parcelis</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#1e22aa] rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutWhyChoose;

import React from 'react';
import uspsLogo from '@/assets/carriers/usps.png';
import upsLogo from '@/assets/carriers/ups.png';
import fedexLogo from '@/assets/carriers/fedex.png';
import dhlLogo from '@/assets/carriers/dhl.png';

const AboutCarriers: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Carrier Coverage</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Full protection across all major carriers with no geographic limitations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* USPS */}
          <div className="bg-white rounded-lg p-8 border border-gray-100 text-center flex flex-col items-center h-full">
            <div className="h-20 flex items-center justify-center mb-6 w-full">
              <img src={uspsLogo} alt="USPS" className="h-12 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">USPS</h3>
            <p className="text-sm text-gray-500">Full domestic coverage including Priority and First-Class Mail</p>
          </div>

          {/* UPS */}
          <div className="bg-white rounded-lg p-8 border border-gray-100 text-center flex flex-col items-center h-full">
            <div className="h-20 flex items-center justify-center mb-6 w-full">
              <img src={upsLogo} alt="UPS" className="h-14 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">UPS</h3>
            <p className="text-sm text-gray-500">Comprehensive coverage for all UPS Ground and Air services</p>
          </div>

          {/* FedEx */}
          <div className="bg-white rounded-lg p-8 border border-gray-100 text-center flex flex-col items-center h-full">
            <div className="h-20 flex items-center justify-center mb-6 w-full">
              <img src={fedexLogo} alt="FedEx" className="h-10 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">FedEx</h3>
            <p className="text-sm text-gray-500">Full protection for Express, Ground, and Home Delivery</p>
          </div>

          {/* DHL */}
          <div className="bg-white rounded-lg p-8 border border-gray-100 text-center flex flex-col items-center h-full">
            <div className="h-20 flex items-center justify-center mb-6 w-full">
              <img src={dhlLogo} alt="DHL" className="h-10 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">DHL</h3>
            <p className="text-sm text-gray-500">International shipping protection across all DHL services</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 font-medium">
            Plus regional carriers and local delivery services worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCarriers;

import React from 'react';
import uspsLogo from '@/assets/carriers/usps.png';
import upsLogo from '@/assets/carriers/ups.png';
import fedexLogo from '@/assets/carriers/fedex.png';
import dhlLogo from '@/assets/carriers/dhl.png';

const HomeCarriers: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-brand mb-4">All Major Carriers Covered</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            Comprehensive protection across USPS, UPS, FedEx, DHL, and all regional and international carriers.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
             {/* USPS Logo */}
             <div className="flex items-center justify-center h-16 w-auto">
                <img src={uspsLogo} alt="USPS" className="h-full w-auto object-contain" />
             </div>
             
             {/* UPS Logo */}
             <div className="flex items-center justify-center h-16 w-auto">
                <img src={upsLogo} alt="UPS" className="h-full w-auto object-contain" />
             </div>
             
             {/* FedEx Logo */}
             <div className="flex items-center justify-center h-16 w-auto">
                <img src={fedexLogo} alt="FedEx" className="h-full w-auto object-contain" />
             </div>
             
             {/* DHL Logo */}
             <div className="flex items-center justify-center h-16 w-auto">
                <img src={dhlLogo} alt="DHL" className="h-full w-auto object-contain" />
             </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarriers;

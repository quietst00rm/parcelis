import React from 'react';
import uspsLogo from '@/assets/carriers/usps.png';
import upsLogo from '@/assets/carriers/ups.png';
import fedexLogo from '@/assets/carriers/fedex.png';
import dhlLogo from '@/assets/carriers/dhl.png';

const AboutLogos: React.FC = () => {
  return (
    <div className="pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100/70 rounded-2xl p-16 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-10">Supported Carriers</h3>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                {/* USPS */}
                <div className="flex flex-col items-center">
                    <img src={uspsLogo} alt="USPS" className="h-12 object-contain" />
                </div>
                
                {/* UPS */}
                <div className="flex flex-col items-center">
                    <img src={upsLogo} alt="UPS" className="h-14 object-contain" />
                </div>

                {/* FedEx */}
                <div className="flex flex-col items-center">
                    <img src={fedexLogo} alt="FedEx" className="h-9 object-contain" />
                </div>

                {/* DHL */}
                <div className="flex flex-col items-center">
                    <img src={dhlLogo} alt="DHL" className="h-9 object-contain" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLogos;

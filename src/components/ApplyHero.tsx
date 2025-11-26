import React from 'react';
import ParallaxParcels from './ParallaxParcels';

const ApplyHero: React.FC = () => {
  return (
    <div className="relative bg-brand overflow-hidden pt-24 md:pt-40 pb-32 flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0"></div>
      
      {/* 3D Parcel Background */}
      <ParallaxParcels />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-8">
          Apply for PARCELIS
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
          Start protecting packages and generating profit. Complete the application below to get started.
        </p>
      </div>
    </div>
  );
};

export default ApplyHero;

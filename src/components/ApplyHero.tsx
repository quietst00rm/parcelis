import React from 'react';
import ParallaxParcels from './ParallaxParcels';
import ScrollReveal from './ScrollReveal';
import shopifyLogo from '@/assets/platforms/shopify.png';

const ApplyHero: React.FC = () => {
  return (
    <div className="relative bg-brand overflow-hidden pt-24 md:pt-40 pb-32 flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0"></div>
      
      {/* 3D Parcel Background */}
      <ParallaxParcels />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-8">
            Apply for PARCELIS
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Start protecting packages and generating profit. Complete the application below to get started.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <a 
            href="https://apps.shopify.com/parcelis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-brand hover:bg-blue-50 font-bold py-5 px-12 rounded-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-2xl transition-all transform hover:-translate-y-1 text-xl flex flex-col items-center justify-center mx-auto min-w-[300px]"
          >
            <span className="text-lg">Install Now On</span>
            <img src={shopifyLogo} alt="Shopify" className="h-8 mt-1" />
          </a>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ApplyHero;

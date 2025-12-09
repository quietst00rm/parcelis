import React from 'react';
import ParallaxParcels from './ParallaxParcels';
import ScrollReveal from './ScrollReveal';

const ApplyHero: React.FC = () => {
  return (
    <div className="relative bg-brand overflow-hidden pt-40 pb-32 flex flex-col items-center justify-center text-center">
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
          <div className="flex justify-center">
            <a 
              href="https://apps.shopify.com/parcelis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-brand hover:bg-gray-50 font-extrabold py-5 px-12 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all transform hover:-translate-y-2 text-2xl flex items-center justify-center gap-4 w-auto inline-flex"
            >
              <svg viewBox="0 0 109.5 124.5" className="w-10 h-10">
                <path fill="#95BF47" d="M74.7,14.8c0,0-1.4,0.4-3.7,1.1c-0.4-1.3-1-2.8-1.8-4.4c-2.6-5-6.5-7.7-11.1-7.7c0,0,0,0,0,0 c-0.3,0-0.6,0-1,0.1c-0.1-0.2-0.3-0.3-0.4-0.5c-2-2.2-4.6-3.2-7.7-3.2c-6,0.2-12,4.5-16.8,12.2c-3.4,5.4-6,12.2-6.7,17.5 c-6.9,2.1-11.7,3.6-11.8,3.7c-3.5,1.1-3.6,1.2-4,4.5c-0.3,2.5-9.5,73.2-9.5,73.2l75.6,13.1V14.6C75.5,14.7,75.1,14.7,74.7,14.8z M57.2,20.2c-4,1.2-8.4,2.6-12.7,3.9c1.2-4.7,3.6-9.4,6.4-12.5c1.1-1.1,2.6-2.4,4.3-3.2C56.9,12,57.3,16.9,57.2,20.2z M49.1,4.3 c1.4,0,2.6,0.3,3.6,0.9c-1.6,0.8-3.2,2.1-4.7,3.6c-3.8,4.1-6.7,10.5-7.9,16.6c-3.6,1.1-7.2,2.2-10.5,3.2 C31.7,19.1,39.8,4.6,49.1,4
import React, { useState, useEffect } from 'react';

const AboutHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-brand overflow-hidden pt-24 md:pt-40 pb-32 flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0"></div>
      
      {/* Parallax Elements - Rolling Squares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-[20%] right-[10%] w-64 h-64 bg-white/5 rounded-lg backdrop-blur-3xl"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute bottom-[10%] left-[10%] w-48 h-48 bg-blue-400/10 rounded-lg backdrop-blur-3xl"
          style={{ 
            transform: `translateY(-${scrollY * 0.1}px) rotate(-${scrollY * 0.15}deg)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute top-[10%] left-[15%] w-24 h-24 bg-indigo-400/10 rounded-lg backdrop-blur-md"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.2}deg)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
        <div 
          className="absolute bottom-[30%] right-[25%] w-32 h-32 bg-white/5 rounded-lg backdrop-blur-xl"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) rotate(-${scrollY * 0.05}deg)`,
            transition: 'transform 0.1s linear'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white font-medium text-sm mb-6 backdrop-blur-sm border border-white/10">
            Established 2023
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
          Built for E-Commerce. <br/> Backed by Insurance Expertise.
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
          Parcelis is a technology-driven protection platform powered by InsureShip, the industry leader in e-commerce shipping insurance.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;

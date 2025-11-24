import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PricingHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-brand overflow-hidden pt-40 pb-32 flex flex-col items-center justify-center text-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0"></div>
      
      {/* Animated Parallax Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div 
            className="absolute top-[20%] left-[5%] w-32 h-32 bg-white/5 rounded-lg backdrop-blur-3xl"
            style={{ 
                transform: `translateY(${scrollY * 0.3}px) rotate(${12 + scrollY * 0.1}deg)`,
                transition: 'transform 0.1s linear'
            }}
          ></div>
          <div 
            className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-white/5 rounded-lg backdrop-blur-3xl"
            style={{ 
                transform: `translateY(${scrollY * 0.2}px) rotate(${-6 - scrollY * 0.1}deg)`,
                transition: 'transform 0.1s linear'
            }}
          ></div>
          <div 
            className="absolute top-[50%] left-[20%] w-20 h-20 bg-blue-400/10 rounded-lg backdrop-blur-xl"
            style={{ 
                transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.2}deg)`,
                transition: 'transform 0.1s linear'
            }}
          ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Simple, Transparent Pricing
        </h1>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          No hidden fees. No surprises. Just straightforward protection for your customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand hover:bg-blue-50 font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                Get Started Today
            </button>
            <Link to="/how-it-works" className="bg-white/10 text-white hover:bg-white/20 font-bold py-3.5 px-8 rounded-lg transition-all">
                See How It Works
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;

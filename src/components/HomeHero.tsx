import React, { useEffect, useState } from 'react';
import { Shield, Users, Award } from 'lucide-react';
import ParallaxParcels from './ParallaxParcels';

const HomeHero: React.FC = () => {
  const [counts, setCounts] = useState({
    packages: 0,
    merchants: 0,
    satisfaction: 0
  });

  useEffect(() => {
    // Counter Animation
    const duration = 2000; // 2 seconds
    const steps = 60;
    const intervalTime = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3); // Cubic ease out
      const factor = easeOut(progress);
      setCounts({
        packages: Math.floor(50 * factor),
        merchants: Math.floor(10 * factor),
        satisfaction: Math.floor(99 * factor)
      });
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative bg-brand overflow-hidden min-h-screen flex flex-col -mt-24 pt-24">
      {/* Background Gradients */}
      <div className="absolute inset-0 -top-24 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0"></div>
      
      {/* 3D Parcel Background */}
      <ParallaxParcels />

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center pt-24 md:pt-48 pb-24 mt-0 sm:px-[24px] mb-px">
        
        {/* Headlines */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
          Deliver Confidence with <br /> Every Shipment.
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-relaxed mb-12 font-light">
          A tech-enabled package protection platform that keeps customers happy, support teams unburdened, and your brand reputation intact — powered by InsureShip.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full">
          <button className="bg-white text-brand hover:bg-blue-50 font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-base md:text-lg">
            Protect Your Customers Today
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold py-4 px-10 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-base md:text-lg">
            See How It Works
          </button>
        </div>
        
      </div>

      {/* Bottom Stats Bar */}
      <div className="relative z-10 bg-[#1a1c6b]/90 backdrop-blur-xl border-t border-white/5 w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            
            <div className="flex flex-col items-center p-4">
              <Shield className="w-10 h-10 text-white mb-4 stroke-1" />
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200">
                ${counts.packages}M+
              </span>
              <span className="text-sm text-blue-200 uppercase tracking-widest font-semibold">Packages Protected</span>
            </div>

            <div className="flex flex-col items-center p-4">
              <Users className="w-10 h-10 text-white mb-4 stroke-1" />
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200">
                {counts.merchants.toLocaleString()}K+
              </span>
              <span className="text-sm text-blue-200 uppercase tracking-widest font-semibold">Active Merchants</span>
            </div>

            <div className="flex flex-col items-center p-4">
              <Award className="w-10 h-10 text-white mb-4 stroke-1" />
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200">
                {counts.satisfaction}%
              </span>
              <span className="text-sm text-blue-200 uppercase tracking-widest font-semibold">Satisfaction Rate</span>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomeHero;

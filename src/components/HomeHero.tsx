import React, { useEffect, useState } from 'react';
import { Shield, Users, Award } from 'lucide-react';

const HomeHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [counts, setCounts] = useState({ packages: 0, merchants: 0, satisfaction: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
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
        merchants: Math.floor(10 * factor), // Target 10 for 10K+
        satisfaction: Math.floor(99 * factor)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative bg-brand overflow-hidden min-h-screen flex flex-col">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#101155] via-[#1e22aa] to-[#2e32d4] z-0"></div>
      
      {/* Background Squares (Parallax, Rolling Animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Square 1 */}
        <div 
          className="absolute top-[10%] left-[5%] w-32 h-32 bg-white/5 rounded-3xl backdrop-blur-3xl"
          style={{ 
              transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.2}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
        {/* Square 2 */}
        <div 
          className="absolute top-[20%] right-[10%] w-48 h-48 bg-blue-400/10 rounded-[2rem] backdrop-blur-3xl"
          style={{ 
              transform: `translateY(${scrollY * 0.1}px) rotate(-${scrollY * 0.15}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
        {/* Square 3 */}
        <div 
          className="absolute bottom-[30%] left-[20%] w-24 h-24 bg-indigo-500/20 rounded-2xl backdrop-blur-xl"
          style={{ 
              transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.3}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
        {/* Square 4 */}
        <div 
          className="absolute top-[50%] right-[25%] w-64 h-64 bg-white/5 rounded-[3rem] backdrop-blur-3xl opacity-40"
          style={{ 
              transform: `translateY(${scrollY * 0.15}px) rotate(-${scrollY * 0.05}deg)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
        {/* Square 5 */}
        <div 
          className="absolute -bottom-[10%] left-[10%] w-80 h-80 bg-blue-600/10 rounded-full blur-3xl opacity-50"
          style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              transition: 'transform 0.1s linear'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-48 pb-24">
        
        {/* Headlines */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
          Deliver Confidence with <br/> Every Shipment.
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-relaxed mb-12 font-light">
          A tech-enabled package protection platform that keeps customers happy, support teams unburdened, and your brand reputation intact — powered by InsureShip.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full">
          <button className="bg-white text-brand hover:bg-blue-50 font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-base md:text-lg">
            Protect Your Customers Today
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold py-4 px-10 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 text-base md:text-lg">
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
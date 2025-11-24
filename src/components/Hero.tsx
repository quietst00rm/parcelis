import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-primary py-16 md:py-24">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[-5%] w-[150px] h-[150px] bg-white/10 rounded-2xl rotate-45 animate-float-1" />
        <div className="absolute top-[60%] left-[15%] w-[120px] h-[120px] bg-white/5 rounded-xl rotate-12 animate-float-2" />
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-white/15 rounded-3xl rotate-[-15deg] animate-float-3" />
        <div className="absolute bottom-[15%] right-[-5%] w-[180px] h-[180px] bg-white/8 rounded-2xl rotate-[30deg] animate-float-4" />
        <div className="absolute top-[40%] right-[25%] w-[100px] h-[100px] bg-white/12 rounded-lg rotate-[20deg] animate-float-1" />
        <div className="absolute bottom-[30%] left-[30%] w-[130px] h-[130px] bg-white/7 rounded-xl rotate-[-25deg] animate-float-3" />
        <div className="absolute top-[70%] right-[40%] w-[110px] h-[110px] bg-white/9 rounded-2xl rotate-[15deg] animate-float-4" />
        <div className="absolute top-[5%] left-[40%] w-[140px] h-[140px] bg-white/6 rounded-xl rotate-[-10deg] animate-float-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6">
              Merchant Risk Assessment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold text-white mb-6">
              The Hidden Risks of Self-Insuring Your Shipments
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Saving a dollar on "free" shipping protection can quietly turn into thousands in losses — and, in many states, potential regulatory penalties.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-white">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg"><strong>Operational risk:</strong> replacement product, shipping, & support time.</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg"><strong>Margin risk:</strong> small loss rates silently cut dollars from every order.</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg"><strong>Compliance risk:</strong> each shipment can count as a separate violation.</span>
              </li>
            </ul>

            <button
              onClick={scrollToCalculator}
              className="btn btn-outline-primary bg-white text-primary hover:bg-white/95 px-8 py-4 text-lg font-semibold"
            >
              Check Your Risk
            </button>
          </div>

          {/* Right Quote Card */}
          <div className="flex-1 lg:max-w-[500px]">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <p className="text-xl md:text-2xl italic text-white leading-relaxed mb-6">
                "Regulatory fines for unlicensed insurance can reach tens of thousands of dollars per violation in states like California and New York."
              </p>
              <div className="flex gap-2 justify-center">
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

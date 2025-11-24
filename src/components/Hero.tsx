import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-primary py-[100px] md:py-[100px]">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        {/* Shape 1 */}
        <div className="absolute top-[10%] left-[-5%] w-[150px] h-[150px] bg-white/10 rounded-2xl rotate-45 animate-float-1" />
        {/* Shape 2 */}
        <div className="absolute top-[60%] left-[15%] w-[120px] h-[120px] bg-white/5 rounded-xl rotate-12 animate-float-2" />
        {/* Shape 3 */}
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-white/15 rounded-3xl rotate-[-15deg] animate-float-3" />
        {/* Shape 4 */}
        <div className="absolute bottom-[15%] right-[-5%] w-[180px] h-[180px] bg-white/8 rounded-2xl rotate-[30deg] animate-float-4" />
        {/* Shape 5 */}
        <div className="absolute top-[40%] right-[25%] w-[100px] h-[100px] bg-white/12 rounded-lg rotate-[20deg] animate-float-1" />
        {/* Additional Shapes */}
        <div className="absolute bottom-[30%] left-[30%] w-[130px] h-[130px] bg-white/7 rounded-xl rotate-[-25deg] animate-float-3" />
        <div className="absolute top-[70%] right-[40%] w-[110px] h-[110px] bg-white/9 rounded-2xl rotate-[15deg] animate-float-4" />
        <div className="absolute top-[5%] left-[40%] w-[140px] h-[140px] bg-white/6 rounded-xl rotate-[-10deg] animate-float-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[56px] md:text-[56px] leading-[1.1] font-bold text-white mb-6">
          The Hidden Costs of "Self-Insuring" Your Shipments
        </h1>
        <p className="text-[22px] md:text-[22px] leading-[1.5] text-white/95 mb-9 max-w-[800px] mx-auto">
          When you promise to replace lost or damaged packages, you may be operating as an unlicensed insurer — with regulatory and financial consequences that grow with every order.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/apply"
            className="btn btn-outline-primary bg-white text-primary hover:bg-white/95"
          >
            Get Started
            <ChevronRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="btn btn-outline-primary border-white text-white hover:bg-white hover:text-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

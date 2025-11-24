import React from 'react';

// Custom Square Arrow SVG component to match "not rounded corners" request
const SquareArrowRight = ({ className }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 12H19" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter"/>
  </svg>
);

const HomeProcess: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-brand">Simple Process, Zero Hassle</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative items-start">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10">
                <div className="text-8xl font-black text-brand opacity-90 mb-4 leading-none">1</div>
                <h3 className="text-2xl font-bold text-brand-900 mb-3">Integrate</h3>
                <p className="text-gray-600 text-lg max-w-xs mx-auto">Connect via Shopify app or other platform integrations in minutes.</p>
                
                {/* Desktop Arrow 1 -> 2 */}
                <div className="hidden md:block absolute top-1/2 -right-10 text-brand transform -translate-y-1/2">
                    <SquareArrowRight className="w-10 h-10" />
                </div>
            </div>

            {/* Step 2 */}
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="text-8xl font-black text-brand opacity-90 mb-4 leading-none">2</div>
                <h3 className="text-2xl font-bold text-brand-900 mb-3">Sell</h3>
                <p className="text-gray-600 text-lg max-w-xs mx-auto">Insurance option appears at checkout automatically - customers opt in.</p>
                
                {/* Desktop Arrow 2 -> 3 */}
                <div className="hidden md:block absolute top-1/2 -right-10 text-brand transform -translate-y-1/2">
                    <SquareArrowRight className="w-10 h-10" />
                </div>
            </div>

            {/* Step 3 */}
             <div className="flex flex-col items-center text-center relative z-10">
                 <div className="text-8xl font-black text-brand opacity-90 mb-4 leading-none">3</div>
                <h3 className="text-2xl font-bold text-brand-900 mb-3">Relax</h3>
                <p className="text-gray-600 text-lg max-w-xs mx-auto">Claims go directly to PARCELIS - you stay focused on growth.</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default HomeProcess;

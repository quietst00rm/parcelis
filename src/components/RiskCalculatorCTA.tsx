import React from 'react';

const RiskCalculatorCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-900 via-brand to-[#2e32d4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to secure your shipments?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Don't let hidden risks sink your business.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="/how-it-works"
              className="inline-block bg-white text-brand hover:bg-blue-50 font-bold py-4 px-12 rounded-lg shadow-xl transition-all transform hover:-translate-y-1 whitespace-nowrap"
            >
              Learn More About Parcelis Protection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskCalculatorCTA;

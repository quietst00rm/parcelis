import { useEffect } from 'react';
import Hero from '@/components/Hero';
import RiskEducation from '@/components/RiskEducation';
import PenaltyCalculator from '@/components/PenaltyCalculator';
import WhyParcelis from '@/components/WhyParcelis';

const RiskCalculatorPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <RiskEducation />
      <PenaltyCalculator />
      <WhyParcelis />
    </div>
  );
};

export default RiskCalculatorPage;

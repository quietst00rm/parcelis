import CalculateHero from "@/components/calculate/CalculateHero";
import ProblemContextStrip from "@/components/calculate/ProblemContextStrip";
import CalculateSectionHeader from "@/components/calculate/CalculateSectionHeader";
import ProfitCalculator from "@/components/calculate/ProfitCalculator";
import VolumeScenarios from "@/components/calculate/VolumeScenarios";
import CalculateTrust from "@/components/calculate/CalculateTrust";
import CalculateHowItWorks from "@/components/calculate/CalculateHowItWorks";
import CalculateFAQ from "@/components/calculate/CalculateFAQ";
import CalculateCTA from "@/components/calculate/CalculateCTA";

const CalculatePage = () => (
  <>
    <CalculateHero />
    <ProblemContextStrip />
    <CalculateSectionHeader />
    <ProfitCalculator />
    <VolumeScenarios />
    <CalculateTrust />
    <CalculateHowItWorks />
    <CalculateFAQ />
    <CalculateCTA />
  </>
);

export default CalculatePage;

import React from 'react';
import HomeHero from '@/components/HomeHero';
import HomeValueProps from '@/components/HomeValueProps';
import HomeSplitFeature from '@/components/HomeSplitFeature';
import HomeIntegrations from '@/components/HomeIntegrations';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HomeHero />
      <HomeValueProps />
      <HomeSplitFeature />
      <HomeIntegrations />
    </div>
  );
};

export default HomePage;

import React from 'react';
import Navbar from '../Navigation/Navbar';
import HeroSection from './sections/HeroSection';
import FeaturesSection from '../Features/FeaturesSection';
import UseCasesSection from '../UseCases/UseCasesSection';
import PricingSection from '../Pricing/PricingSection';
import ResourcesSection from '../Resources/ResourcesSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <UseCasesSection />
          <PricingSection />
          <ResourcesSection />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
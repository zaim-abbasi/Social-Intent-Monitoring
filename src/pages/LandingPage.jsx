import React from 'react';
import Navbar from '../components/Header/Navbar';
import HeroSection from '../components/Hero/HeroSection';
import FeaturesSection from '../components/Features/FeaturesSection';
import UseCasesSection from '../components/UseCases/UseCasesSection';
import PricingSection from '../components/Pricing/PricingSection';
import ResourcesSection from '../components/Resources/ResourcesSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] relative">
      {/* Fixed Background Pattern */}
      <div className="fixed inset-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <ResourcesSection />
      </div>
    </div>
  );
};

export default LandingPage;
import React from 'react';
import Navbar from './components/Header/Navbar';
import HeroSection from './components/Hero/HeroSection';
import FeaturesSection from './components/Features/FeaturesSection';
import UseCasesSection from './components/UseCases/UseCasesSection';
import PricingSection from './components/Pricing/PricingSection';
import ResourcesSection from './components/Resources/ResourcesSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <PricingSection />
      <ResourcesSection />
    </div>
  );
}

export default App;
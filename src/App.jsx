import React from 'react';
import { AuthProvider } from './components/Auth/AuthContext';
import Navbar from './components/Header/Navbar';
import HeroSection from './components/Hero/HeroSection';
import FeaturesSection from './components/Features/FeaturesSection';
import UseCasesSection from './components/UseCases/UseCasesSection';
import PricingSection from './components/Pricing/PricingSection';
import ResourcesSection from './components/Resources/ResourcesSection';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <ResourcesSection />
      </div>
    </AuthProvider>
  );
}

export default App;
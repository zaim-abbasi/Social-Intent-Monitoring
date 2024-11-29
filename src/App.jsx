import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Auth/AuthContext';
import Navbar from './components/Header/Navbar';
import HeroSection from './components/Hero/HeroSection';
import FeaturesSection from './components/Features/FeaturesSection';
import UseCasesSection from './components/UseCases/UseCasesSection';
import PricingSection from './components/Pricing/PricingSection';
import ResourcesSection from './components/Resources/ResourcesSection';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <HeroSection />
              <FeaturesSection />
              <UseCasesSection />
              <PricingSection />
              <ResourcesSection />
            </div>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
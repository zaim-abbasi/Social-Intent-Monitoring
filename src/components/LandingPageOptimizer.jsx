import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './ui/LoadingSpinner';

// Lazy load components
const Hero = React.lazy(() => import('./Hero/HeroSection'));
const Features = React.lazy(() => import('./Features/FeaturesSection'));
const UseCases = React.lazy(() => import('./UseCases/UseCasesSection'));
const Pricing = React.lazy(() => import('./Pricing/PricingSection'));
const Resources = React.lazy(() => import('./Resources/ResourcesSection'));

// Error Fallback Component
const ErrorFallback = ({ error }) => (
  <div className="text-center py-12">
    <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
    <p className="text-gray-600">{error.message}</p>
  </div>
);

const LandingPageOptimizer = () => {
  return (
    <>
      <Helmet>
        {/* Meta tags for SEO */}
        <title>Trend Monitor - Social Media Monitoring Platform</title>
        <meta name="description" content="Transform social conversations into actionable insights with our AI-powered monitoring platform." />
        <meta name="keywords" content="social media monitoring, social analytics, trend analysis, social listening" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Trend Monitor - Social Media Monitoring Platform" />
        <meta property="og:description" content="Transform social conversations into actionable insights with our AI-powered monitoring platform." />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trend Monitor - Social Media Monitoring Platform" />
        <meta name="twitter:description" content="Transform social conversations into actionable insights with our AI-powered monitoring platform." />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/outfit-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/plus-jakarta-sans-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Trend Monitor",
              "applicationCategory": "BusinessApplication",
              "description": "AI-powered social media monitoring platform",
              "offers": {
                "@type": "Offer",
                "price": "49.00",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Features />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <UseCases />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Resources />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default LandingPageOptimizer;
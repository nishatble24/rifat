
import React from 'react';
import { HashRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import DistinctiveServices from './components/DistinctiveServices';
import Contact from './components/Contact';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import PricingPage from './components/PricingPage';
import FAQ from './components/FAQ';
import Workflow from './components/Workflow';
import Impact from './components/Impact';
import WallOfTrust from './components/WallOfTrust';
import SocialProof from './components/SocialProof';
import WhyChooseUs from './components/WhyChooseUs';
import WorkPage from './components/WorkPage';
import UiUxDesignPage from './components/UiUxDesignPage';
import WebDesignPage from './components/WebDesignPage';
import MobileAppDesignPage from './components/MobileAppDesignPage';
import DesignSystemsPage from './components/DesignSystemsPage';
import SaasPlatformPage from './components/SaasPlatformPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import AboutUs from './components/AboutUs';
import WebDesignTechStack from './components/WebDesignTechStack';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SocialProof />
              <AboutUs />
              <Services />
              <WhyChooseUs />
              <Workflow />
              <Comparison />
              <Impact />
              <Work />
              <DistinctiveServices />
              <Pricing />
              <WallOfTrust />
              <FAQ />
              <WebDesignTechStack />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<ProjectDetailPage />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesignPage />} />
          <Route path="/services/web-design" element={<WebDesignPage />} />
          <Route path="/services/mobile-app-design" element={<MobileAppDesignPage />} />
          <Route path="/services/design-systems" element={<DesignSystemsPage />} />
          <Route path="/services/saas-platforms" element={<SaasPlatformPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;

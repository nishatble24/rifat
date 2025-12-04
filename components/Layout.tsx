import React, { ReactNode, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import AnnouncementBanner from './AnnouncementBanner';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = localStorage.getItem('flowrax_banner_dismissed');
    if (!dismissed) {
      setShowBanner(true);
    }
  }, []);

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('flowrax_banner_dismissed', 'true');
  };

  // Height of the banner in pixels (h-12 = 48px)
  const BANNER_HEIGHT = 48;

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-black">
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
         {/* Background Ambient Glows */}
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
         <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>
      
      <AnimatePresence>
        {mounted && showBanner && <AnnouncementBanner onDismiss={handleDismiss} />}
      </AnimatePresence>
      
      <Header bannerOffset={showBanner ? BANNER_HEIGHT : 0} />
      
      <main 
        className="relative z-10 transition-all duration-300 ease-in-out" 
        style={{ paddingTop: showBanner ? `calc(5rem + ${BANNER_HEIGHT}px)` : '5rem' }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
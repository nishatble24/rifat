import React, { ReactNode, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import AnnouncementBanner from './AnnouncementBanner';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
    const dismissed = localStorage.getItem('flowrax_banner_dismissed');
    if (!dismissed) {
      setShowBanner(true);
    }

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('flowrax_banner_dismissed', 'true');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/50 border border-white/10 text-white shadow-lg backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all group"
            aria-label="Back to Top"
          >
            <ArrowUp size={20} strokeWidth={1.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
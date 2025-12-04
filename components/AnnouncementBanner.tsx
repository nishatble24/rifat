
import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

interface AnnouncementBannerProps {
  onDismiss: () => void;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ onDismiss }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-[60] bg-[#0A0A0A] border-b border-white/5 overflow-hidden"
    >
       {/* Background Gradient */}
       <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-center relative text-xs md:text-sm">
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full pr-8">
             <span className="bg-primary/10 text-primary px-1.5 py-0.5 sm:px-2 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider border border-primary/20 shrink-0 shadow-[0_0_10px_-3px_rgba(1,208,245,0.3)]">NEW</span>
             
             <span className="text-white/90 truncate">
               <span className="md:hidden">Ranked top 3% globally.</span>
               <span className="hidden md:inline">Flowrax ranked in the top 3% of global UI/UX agencies for 2025.</span>
             </span>
             
             <a 
               href="https://cal.com/flowrax/project-discussion" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hidden sm:flex items-center gap-1 text-primary hover:text-white transition-colors font-medium whitespace-nowrap ml-1 group shrink-0"
             >
               Book a strategy call <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
             </a>
             <a 
               href="https://cal.com/flowrax/project-discussion" 
               target="_blank" 
               rel="noopener noreferrer"
               className="sm:hidden text-primary font-bold ml-1 shrink-0 whitespace-nowrap"
             >
               Book now
             </a>
          </div>

          <button 
            onClick={onDismiss}
            className="absolute right-2 md:right-4 p-1.5 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Dismiss banner"
          >
            <X size={14} />
          </button>
       </div>
    </motion.div>
  );
};

export default AnnouncementBanner;

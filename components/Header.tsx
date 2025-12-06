
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Layout, Smartphone, Cpu, Layers, ArrowRight, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const SERVICE_ITEMS = [
  { title: 'UI/UX Design', desc: 'Intuitive user-centric interfaces', icon: Palette, href: '/services/ui-ux-design' },
  { title: 'Web Design', desc: 'High-converting landing pages', icon: Layout, href: '/services/web-design' },
  { title: 'Mobile Apps', desc: 'Native iOS & Android', icon: Smartphone, href: '/services/mobile-app-design' },
  { title: 'Design Systems', desc: 'Scalable component libraries', icon: Cpu, href: '/services/design-systems' },
  { title: 'SaaS Platforms', desc: 'Complex dashboards', icon: Layers, href: '/services/saas-platforms' },
];

interface HeaderProps {
  bannerOffset?: number;
}

const Header: React.FC<HeaderProps> = ({ bannerOffset = 0 }) => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <motion.header 
        className="fixed z-50 flex justify-center w-full top-0 md:top-6 left-0 right-0 md:px-4"
        animate={{ y: bannerOffset }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="flex items-center justify-between w-full md:max-w-2xl p-4 md:p-2 rounded-none md:rounded-full border-b md:border border-white/10 bg-black/80 md:bg-black/50 backdrop-blur-xl shadow-glass"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:px-4 group">
             <motion.img 
               src="https://ik.imagekit.io/flowrax/logo-a2.png" 
               alt="Flowrax Logo"
               className="w-6 h-6 md:w-8 md:h-8 object-contain"
               initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
               animate={{ 
                 opacity: 1, 
                 scale: 1, 
                 rotate: 0,
                 y: [0, -3, 0] // Idle float animation
               }}
               transition={{
                 // Entry transition
                 opacity: { duration: 0.8, ease: "easeOut" },
                 scale: { duration: 0.8, type: "spring", stiffness: 200 },
                 rotate: { duration: 0.8, type: "spring" },
                 // Idle loop transition
                 y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
               }}
               whileHover={{ 
                 rotate: 360, 
                 scale: 1.15,
                 filter: "drop-shadow(0 0 12px rgba(16, 185, 129, 0.6))",
                 transition: { duration: 0.6, type: "spring" }
               }}
             />
             <span className="font-bold tracking-tight text-white text-lg">
              Flow<span className="text-primary">rax</span>
            </span>
          </Link>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isServices = item.label === 'Services';

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredPath(item.href);
                    if (isServices) setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredPath(null);
                    if (isServices) setIsServicesOpen(false);
                  }}
                >
                  <Link
                    to={item.href}
                    className="relative block px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    <span className="relative z-10">{item.label}</span>
                    {hoveredPath === item.href && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {isServices && isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px] cursor-default"
                      >
                         <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 grid grid-cols-2 gap-2 overflow-hidden">
                            
                            {/* Left Col: List */}
                            <div className="flex flex-col gap-1 p-2">
                              {SERVICE_ITEMS.map((service, i) => (
                                <motion.div
                                  key={service.title}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  <Link
                                    to={service.href}
                                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                  >
                                    <div className="mt-0.5 text-white/40 group-hover:text-primary transition-colors">
                                      <service.icon size={20} />
                                    </div>
                                    <div>
                                      <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{service.title}</h4>
                                      <p className="text-xs text-gray-500 mt-0.5">{service.desc}</p>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>

                            {/* Right Col: Featured */}
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="relative rounded-xl bg-gradient-to-tr from-cyan-900/20 to-transparent border border-white/5 p-5 flex flex-col justify-between overflow-hidden group/card"
                            >
                               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full pointer-events-none" />
                               
                               <div>
                                 <h4 className="text-sm font-semibold text-white mb-3">Latest Work</h4>
                                 <div className="w-full aspect-video bg-black/40 rounded-lg border border-white/10 mb-3 overflow-hidden relative group-hover/card:border-primary/30 transition-colors">
                                    {/* Real Image instead of placeholder shapes */}
                                    <img 
                                      src="https://ik.imagekit.io/flowrax/ui%20ux%20design%20dd.webp" 
                                      alt="Latest Project"
                                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                                    />
                                    {/* Gradient Overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                                 </div>
                                 
                                 {/* Added Title and Description */}
                                 <h5 className="text-sm font-bold text-white mb-1">Enterprise Design System</h5>
                                 <p className="text-xs text-white-dim mb-3 line-clamp-2 leading-relaxed">
                                   Scalable component library unifying a global fintech ecosystem.
                                 </p>
                               </div>

                               <Link to="/work" className="flex items-center gap-2 text-xs font-bold text-primary hover:text-white transition-colors">
                                 View Case Study <ArrowRight size={14} />
                               </Link>
                            </motion.div>

                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden md:block bg-primary text-black font-semibold text-sm px-5 py-2 rounded-full transition-all hover:shadow-[0_0_20px_-5px_rgba(1,208,245,0.5)] active:scale-95 hover:bg-primary-glow">
              Contact Us
            </Link>
            
            {/* Mobile Toggle */}
             <button 
              className="md:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] p-4 flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
               <span className="text-xl font-bold text-white flex items-center gap-3">
                 <motion.img 
                   src="https://ik.imagekit.io/flowrax/logo-a2.png" 
                   alt="Flowrax Logo"
                   className="w-7 h-7 object-contain"
                   animate={{ 
                     y: [0, -2, 0] 
                   }}
                   transition={{
                     duration: 3, 
                     repeat: Infinity, 
                     ease: "easeInOut" 
                   }}
                 />
                 <span>Flow<span className="text-primary">rax</span></span>
               </span>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white/60 hover:text-white bg-white/5 rounded-full">
                 <X size={24} />
               </button>
            </div>
            
            <nav className="flex flex-col gap-6 items-center flex-1 justify-center">
              {NAV_ITEMS.map((item, i) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="text-3xl font-medium text-white/90 hover:text-primary tracking-tight"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <Link 
                to="/contact"
                className="w-full max-w-xs mt-8 bg-primary text-black font-bold py-4 rounded-full text-lg shadow-[0_0_30px_-5px_rgba(1,208,245,0.3)] text-center flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
            
            <div className="text-center text-white-dim text-sm pb-8">
              &copy; Flowrax Agency
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

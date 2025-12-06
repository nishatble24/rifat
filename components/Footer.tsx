
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020202] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Engaging Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none select-none w-full text-center">
        <span className="text-[18vw] md:text-[12vw] font-bold text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
            FLOWRAX
        </span>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid-white bg-[size:32px_32px] pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/90 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top CTA Section */}
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 pb-16 border-b border-white/5">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
              Ready to <br />
              <span className="text-white-dim">start?</span>
            </h2>
            <p className="text-white-dim text-lg md:text-xl">
               Let's turn your vision into a digital reality.
            </p>
          </div>
          <Link to="/contact" className="w-full md:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full md:w-auto group relative px-8 py-5 bg-primary text-black text-lg font-bold rounded-full overflow-hidden shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] transition-all duration-300"
            >
               <span className="relative z-10 flex items-center justify-center gap-2">
                 Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </Link>
        </AnimatedSection>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 md:gap-8 lg:gap-12 mb-16">
          
          {/* Column 1: Brand (Full width mobile, 4 cols desktop) */}
          <div className="col-span-2 lg:col-span-4 space-y-6 text-center md:text-left">
            <Link to="/" className="inline-block group">
                <h3 className="text-3xl font-bold tracking-tight text-white group-hover:opacity-80 transition-opacity">Flow<span className="text-primary">rax</span></h3>
            </Link>
            <p className="text-white-dim text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              We build digital products that define the future. Speed, aesthetics, and performance in one package.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-start pt-2">
              {SOCIALS.map((social) => (
                <motion.a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white-dim hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all"
                  aria-label={social.platform}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Spacer for Desktop Layout */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Column 2: Sitemap */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Sitemap</h4>
            <ul className="space-y-4 text-sm text-white-dim">
              <li><Link to="/work" className="hover:text-primary transition-colors block py-1">Work</Link></li>
              <li><a href="/#services" className="hover:text-primary transition-colors block py-1">Services</a></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors block py-1">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors block py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Socials (Text) - Hidden on Mobile to reduce clutter since icons exist */}
          <div className="hidden md:block col-span-1 lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Socials</h4>
            <ul className="space-y-4 text-sm text-white-dim">
              <li><a href="https://www.facebook.com/profile.php?id=61581407781074" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block py-1">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/flowrax/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block py-1">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/flowrax.agency/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block py-1">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Twitter (X)</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white-dim">
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 pt-8 border-t border-white/5 relative z-10 text-center md:text-left">
           <p>&copy; {new Date().getFullYear()} Flowrax Design Agency. All rights reserved.</p>
           <p className="flex items-center gap-1.5">
             Designed with <span className="text-primary animate-pulse">♥</span> in San Francisco.
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

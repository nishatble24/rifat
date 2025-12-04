
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020202] pt-24 pb-12 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid-white bg-[size:32px_32px] pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/90 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top CTA Section */}
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-8 mb-24 pb-24 border-b border-white/5">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Ready to <br />
              <span className="text-white-dim">start?</span>
            </h2>
          </div>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group relative px-8 py-4 bg-primary text-black text-lg font-bold rounded-full overflow-hidden shadow-[0_0_0_rgba(16,185,129,0)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] transition-shadow duration-300"
            >
               <span className="relative z-10 flex items-center gap-2">
                 Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </Link>
        </AnimatedSection>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">Flow<span className="text-primary">rax</span></h3>
            <p className="text-white-dim text-sm leading-relaxed">
              We build digital products that define the future. Speed, aesthetics, and performance in one package.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((social) => (
                <motion.a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white-dim hover:text-primary transition-colors p-2 -ml-2 rounded-full hover:bg-white/5"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Sitemaps */}
          <div>
            <h4 className="font-bold text-white mb-6">Sitemap</h4>
            <ul className="space-y-4 text-sm text-white-dim">
              <li><a href="#work" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Socials (Text Links) */}
          <div>
            <h4 className="font-bold text-white mb-6">Socials</h4>
            <ul className="space-y-4 text-sm text-white-dim">
              <li><a href="https://www.facebook.com/profile.php?id=61581407781074" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/flowrax/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/flowrax.agency/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white-dim">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 pt-8 border-t border-white/5">
           <p>&copy; {new Date().getFullYear()} Flowrax Design Agency.</p>
           <p>Designed with <span className="text-primary">♥</span> in San Francisco.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
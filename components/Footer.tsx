
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020202] pt-20 md:pt-32 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white bg-[size:30px_30px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Huge Background Text - Responsive */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[10%] pointer-events-none select-none w-full text-center overflow-hidden">
        <motion.span 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[20vw] md:text-[15vw] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter"
        >
            FLOWRAX
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top CTA Section */}
        <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 mb-20 md:mb-32">
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
              Ready to <br />
              <span className="text-white-dim">start?</span>
            </h2>
            <p className="text-white-dim text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
               Let's turn your vision into a digital reality. The future is built today.
            </p>
          </div>
          
          <Link to="/contact" className="w-full md:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full md:w-auto group relative px-8 py-5 md:px-10 md:py-6 bg-primary text-black text-lg md:text-xl font-bold rounded-full overflow-hidden shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)] transition-all duration-300"
            >
               <span className="relative z-10 flex items-center justify-center gap-3">
                 Get in Touch <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </Link>
        </AnimatedSection>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 mb-16 md:mb-24">
          
          {/* Brand Column (Full width on mobile) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <Link to="/" className="group flex items-center gap-3">
                <img src="https://ik.imagekit.io/flowrax/logo-a2.png" alt="Flowrax Logo" className="w-8 h-8 object-contain" />
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:opacity-80 transition-opacity">Flow<span className="text-primary">rax</span></h3>
            </Link>
            <p className="text-white-dim text-base leading-relaxed max-w-xs mx-auto md:mx-0">
              A global design agency building digital products that define the future. Speed, aesthetics, and performance.
            </p>
            
            {/* Contact Info Snippets */}
            <div className="flex flex-col gap-2 text-sm text-white/60 pt-2">
               <a href="mailto:hello@flowrax.com" className="hover:text-primary transition-colors flex items-center gap-2 justify-center md:justify-start">
                 <Mail size={14} /> hello@flowrax.com
               </a>
               <span className="flex items-center gap-2 justify-center md:justify-start">
                 <MapPin size={14} /> Boston, Massachusetts
               </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {SOCIALS.map((social) => (
                <motion.a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white-dim hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all shadow-lg"
                  aria-label={social.platform}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1 lg:col-span-2" />

          {/* Links Column 1 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-6 text-lg">Sitemap</h4>
            <ul className="space-y-4 text-sm text-white-dim">
              <li><Link to="/work" className="hover:text-primary transition-colors block py-1">Work</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors block py-1">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors block py-1">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors block py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-sm text-white-dim">
              <li><Link to="#" className="hover:text-primary transition-colors block py-1">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors block py-1">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors block py-1">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30 pt-8 border-t border-white/5 relative z-10 text-center md:text-left">
           <p>&copy; {new Date().getFullYear()} Flowrax Agency. All rights reserved.</p>
           <p className="flex items-center gap-1.5">
             Crafted by <span className="text-white font-bold">Flowrax Team</span>
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

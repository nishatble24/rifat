
import React from 'react';
import { motion } from 'framer-motion';
import { Command, Cpu, Globe, Zap, Hexagon, Triangle, Aperture, Layers } from 'lucide-react';

const LOGOS = [
  { name: "Venture X", icon: Command },
  { name: "Future Corp", icon: Cpu },
  { name: "Global Systems", icon: Globe },
  { name: "Nexus Tech", icon: Zap },
  { name: "Orbit Inc", icon: Hexagon },
  { name: "Starlight", icon: Triangle },
  { name: "Quantum AI", icon: Aperture },
  { name: "Hyperion", icon: Layers },
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-10 bg-[#050505] border-y border-white/5 overflow-hidden relative z-20">
      <div className="flex">
        <motion.div 
          className="flex items-center gap-16 md:gap-24 px-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
        >
          {/* Double the array to create a seamless loop */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 opacity-30 hover:opacity-60 transition-opacity grayscale hover:grayscale-0 cursor-default">
              <logo.icon size={24} className="shrink-0" />
              <span className="text-lg font-bold tracking-tight font-mono">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient Masks for smooth fade in/out at edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};

export default SocialProof;

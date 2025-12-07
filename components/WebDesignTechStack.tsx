
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Figma, PenTool, Palette, Layers as LayersIcon, Layout, Box, Code, Triangle, ShoppingBag, Globe, Wind, Zap, Command, BarChart2, Terminal, Database, Hexagon } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

// Tool Data
const TOOLS_RINGS = [
  // Inner Ring (Design)
  {
    radius: 120,
    duration: 30,
    items: [
      { name: 'Figma', icon: Figma, color: '#F24E1E' },
      { name: 'Adobe XD', icon: PenTool, color: '#FF61F6' },
      { name: 'Photoshop', icon: Palette, color: '#31A8FF' },
      { name: 'Illustrator', icon: LayersIcon, color: '#FF9A00' },
    ]
  },
  // Middle Ring (Platforms & Frontend)
  {
    radius: 220,
    duration: 45,
    reverse: true,
    items: [
        { name: 'Webflow', icon: Layout, color: '#4353FF' },
        { name: 'Framer', icon: Box, color: '#0055FF' },
        { name: 'React', icon: Code, color: '#61DAFB' },
        { name: 'Next.js', icon: Triangle, color: '#ffffff' },
        { name: 'Shopify', icon: ShoppingBag, color: '#96BF48' },
        { name: 'WordPress', icon: Globe, color: '#21759B' },
    ]
  },
  // Outer Ring (Dev & Analytics)
  {
    radius: 320,
    duration: 60,
    items: [
        { name: 'Tailwind', icon: Wind, color: '#38B2AC' },
        { name: 'GSAP', icon: Zap, color: '#88CE02' },
        { name: 'Vercel', icon: Command, color: '#000000' },
        { name: 'Analytics', icon: BarChart2, color: '#F4B400' },
        { name: 'HTML5', icon: Code, color: '#E34F26' },
        { name: 'Node.js', icon: Terminal, color: '#339933' },
        { name: 'Supabase', icon: Database, color: '#3ECF8E' },
        { name: 'Three.js', icon: Hexagon, color: '#ffffff' },
    ]
  }
];

const WebDesignTechStack: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-12 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
       <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          
          <AnimatedSection className="text-center mb-8 md:mb-24 relative z-20">
             <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Our Toolkit</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Powered by Industry Standards</h2>
             <p className="text-white-dim text-lg">Always learning, always evolving.</p>
          </AnimatedSection>

          {/* Orbit System Container */}
          <div 
             className="relative w-[800px] h-[800px] flex items-center justify-center transition-transform duration-500 origin-center scale-[0.4] sm:scale-50 md:scale-75 lg:scale-100 -my-[240px] sm:-my-[200px] md:-my-[100px] lg:my-0"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
          >
             
             {/* Center Glow */}
             <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent blur-3xl opacity-30 pointer-events-none" />

             {/* Center Logo */}
             <motion.div 
               className="relative z-20 w-24 h-24 bg-black rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)]"
               whileHover={{ scale: 1.1 }}
             >
                <img src="https://ik.imagekit.io/flowrax/logo-a2.png" alt="Flowrax" className="w-12 h-12 object-contain" />
             </motion.div>

             {/* Rings */}
             {TOOLS_RINGS.map((ring, ringIndex) => (
                <div 
                  key={ringIndex}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                  style={{ width: ring.radius * 2, height: ring.radius * 2 }}
                >
                   {/* Rotating Container */}
                   <motion.div
                      className="w-full h-full relative"
                      animate={{ rotate: ring.reverse ? -360 : 360 }}
                      transition={{ 
                         duration: isHovered ? ring.duration * 2 : ring.duration, 
                         repeat: Infinity, 
                         ease: "linear" 
                      }}
                   >
                      {ring.items.map((tool, itemIndex) => {
                         const angle = (itemIndex / ring.items.length) * 360;
                         
                         return (
                            <div
                               key={tool.name}
                               className="absolute top-1/2 left-1/2 -ml-6 -mt-6 w-12 h-12"
                               style={{ 
                                  transform: `rotate(${angle}deg) translateY(-${ring.radius}px)` 
                               }}
                            >
                               {/* Counter-Rotation */}
                               <motion.div
                                  className="w-12 h-12 bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-neutral-800 transition-all cursor-pointer group relative shadow-lg"
                                  animate={{ rotate: ring.reverse ? 360 : -360 }}
                                  transition={{ 
                                     duration: isHovered ? ring.duration * 2 : ring.duration, 
                                     repeat: Infinity, 
                                     ease: "linear" 
                                  }}
                                  whileHover={{ scale: 1.2 }}
                               >
                                  <tool.icon size={20} className="group-hover:text-primary transition-colors" />
                                  
                                  {/* Tooltip */}
                                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                                     {tool.name}
                                  </div>
                               </motion.div>
                            </div>
                         );
                      })}
                   </motion.div>
                </div>
             ))}

          </div>

       </div>
    </section>
  );
};

export default WebDesignTechStack;

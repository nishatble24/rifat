
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Layers, Grid, ToggleRight, Type, Palette, CheckCircle2, Component } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import WhyChooseUs from './WhyChooseUs';
import WebDesignTechStack from './WebDesignTechStack';

// --- HERO SECTION ---
const DesignSystemHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax transforms
  const rotateX = useTransform(useSpring(mouseY, { stiffness: 50, damping: 20 }), [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(useSpring(mouseX, { stiffness: 50, damping: 20 }), [-0.5, 0.5], [-5, 5]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[60vh] md:h-[75vh] flex items-center bg-[#050505] overflow-hidden pt-24 pb-12 md:py-0"
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.04] pointer-events-none" style={{ backgroundSize: '40px 40px' }} />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* LEFT: Content */}
          <div className="w-full md:w-1/2 text-left">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 border border-purple-500/20 bg-purple-500/10 px-3 py-1 rounded-full">
                <Box size={14} /> Design Systems
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Build once. <br />
                <span className="text-white-dim">Scale forever.</span>
              </h1>
              
              <p className="text-lg text-white-dim mb-8 max-w-md leading-relaxed">
                Unified component libraries and design tokens that keep your product consistent, efficient, and beautiful as you grow.
              </p>
              
              <a 
                href="https://cal.com/flowrax/project-discussion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all active:scale-95 group"
              >
                Start Your System <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          </div>

          {/* RIGHT: Component Harmony Visual */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-md aspect-square"
            >
               {/* Central Source Node */}
               <motion.div 
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0A0A0A] border-2 border-purple-500 rounded-2xl flex flex-col items-center justify-center z-20 shadow-[0_0_30px_rgba(168,85,247,0.3)]"
               >
                  <Component size={32} className="text-purple-500 mb-2" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Core</span>
               </motion.div>

               {/* Connection Lines (SVG) */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                  <motion.path 
                    d="M 50% 50% L 20% 20%" 
                    stroke="rgba(168,85,247,0.3)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path 
                    d="M 50% 50% L 80% 20%" 
                    stroke="rgba(168,85,247,0.3)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path 
                    d="M 50% 50% L 20% 80%" 
                    stroke="rgba(168,85,247,0.3)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <motion.path 
                    d="M 50% 50% L 80% 80%" 
                    stroke="rgba(168,85,247,0.3)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
               </svg>

               {/* Satellite Components */}
               
               {/* 1. Buttons (Top Left) */}
               <motion.div 
                 initial={{ x: 0, y: 0, opacity: 0 }}
                 animate={{ x: "-80%", y: "-80%", opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                 className="absolute top-1/2 left-1/2 w-40 p-3 bg-[#111] border border-white/10 rounded-xl shadow-xl flex flex-col gap-2 z-10"
               >
                  <div className="h-8 bg-purple-600 rounded-md w-full flex items-center justify-center text-[10px] font-bold text-white">Primary Button</div>
                  <div className="h-8 bg-white/5 border border-white/10 rounded-md w-full flex items-center justify-center text-[10px] font-bold text-white">Secondary</div>
               </motion.div>

               {/* 2. Typography (Top Right) */}
               <motion.div 
                 initial={{ x: 0, y: 0, opacity: 0 }}
                 animate={{ x: "80%", y: "-80%", opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                 className="absolute top-1/2 left-1/2 w-32 p-3 bg-[#111] border border-white/10 rounded-xl shadow-xl flex flex-col gap-2 z-10"
               >
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                     <Type size={14} className="text-purple-400" />
                     <span className="text-[10px] text-white">Inter</span>
                  </div>
                  <div className="space-y-1">
                     <div className="h-2 w-20 bg-white/20 rounded" />
                     <div className="h-2 w-16 bg-white/10 rounded" />
                  </div>
               </motion.div>

               {/* 3. Colors (Bottom Left) */}
               <motion.div 
                 initial={{ x: 0, y: 0, opacity: 0 }}
                 animate={{ x: "-80%", y: "80%", opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                 className="absolute top-1/2 left-1/2 w-32 p-3 bg-[#111] border border-white/10 rounded-xl shadow-xl z-10"
               >
                  <div className="flex items-center gap-2 mb-2">
                     <Palette size={14} className="text-purple-400" />
                     <span className="text-[10px] text-white">Tokens</span>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-6 h-6 rounded-full bg-purple-500 border border-white/10" />
                     <div className="w-6 h-6 rounded-full bg-blue-500 border border-white/10" />
                     <div className="w-6 h-6 rounded-full bg-green-500 border border-white/10" />
                  </div>
               </motion.div>

               {/* 4. Controls (Bottom Right) */}
               <motion.div 
                 initial={{ x: 0, y: 0, opacity: 0 }}
                 animate={{ x: "80%", y: "80%", opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
                 className="absolute top-1/2 left-1/2 w-40 p-3 bg-[#111] border border-white/10 rounded-xl shadow-xl flex flex-col gap-3 z-10"
               >
                  <div className="flex items-center justify-between">
                     <div className="h-2 w-12 bg-white/20 rounded" />
                     <ToggleRight size={20} className="text-purple-500" />
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center">
                        <CheckCircle2 size={10} className="text-purple-500" />
                     </div>
                     <div className="h-2 w-16 bg-white/10 rounded" />
                  </div>
               </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const DesignSystemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-purple-500 selection:text-white">
      <DesignSystemHero />
      <WhyChooseUs />
      <WebDesignTechStack />
    </div>
  );
};

export default DesignSystemsPage;

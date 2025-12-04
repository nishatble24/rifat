import React, { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Layout, BarChart3, Box, Code, ArrowRight, MousePointer2 } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

// Spotlight Card Component
const BentoCard = ({ 
  children, 
  className = "", 
  title, 
  description, 
  icon: Icon 
}: { 
  children?: React.ReactNode; 
  className?: string;
  title: string;
  description: string;
  icon: any;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`group relative border border-white/10 bg-[#0A0A0A] overflow-hidden rounded-3xl ${className}`}
      onMouseMove={handleMouseMove}
      initial={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
      whileHover={{ 
        scale: 1.015,
        borderColor: "rgba(16, 185, 129, 0.3)",
        boxShadow: "0 0 30px -5px rgba(16, 185, 129, 0.15)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full flex flex-col z-20">
        {/* Visual Content Area */}
        <div className="flex-1 p-0 flex items-center justify-center overflow-hidden min-h-[250px] relative">
          {children}
        </div>

        {/* Text Content Area */}
        <div className="p-6 pt-0 mt-auto relative z-30 bg-[#0A0A0A]/50 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary mb-4 border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-300">
            <Icon size={20} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white-dim text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const UiUxAnimation = () => {
  return (
    <div className="w-full h-full absolute inset-0 bg-[#050505] flex items-center justify-center overflow-hidden">
      {/* 1. Background Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* 2. Floating Design Nodes (Simulating System) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 border border-white/5 rounded-full flex items-center justify-center backdrop-blur-[2px]"
          animate={{ 
            x: [Math.random() * 40 - 20, Math.random() * 40 - 20],
            y: [Math.random() * 40 - 20, Math.random() * 40 - 20],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          style={{
             top: `${20 + i * 20}%`,
             left: `${10 + i * 30}%`
          }}
        >
           <div className="w-1.5 h-1.5 bg-primary/30 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
           {/* Connecting Line (simulated with absolute div) */}
           <motion.div 
             className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-primary/20 to-transparent origin-left"
             animate={{ rotate: [0, 360] }}
             transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
           />
        </motion.div>
      ))}

      {/* 3. Main Interface Card */}
      <motion.div
        className="relative w-64 md:w-80 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
      >
         {/* Gradient Glow under card */}
         <div className="absolute -inset-1 bg-gradient-to-r from-[#00FFA3]/20 to-[#00875A]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />

         {/* Card Header */}
         <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-white/5">
            <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] opacity-80" />
               <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] opacity-80" />
               <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] opacity-80" />
            </div>
            <div className="h-1.5 w-16 bg-white/10 rounded-full" />
         </div>

         {/* Card Body */}
         <div className="p-5 space-y-5">
            
            {/* Morphing Hero Section */}
            <div className="relative h-24 w-full rounded-xl overflow-hidden border border-white/5 bg-black/50 group-hover:border-primary/30 transition-colors duration-500">
               {/* Wireframe Lines */}
               <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
               </svg>
               
               {/* Filling Animation (Wireframe -> Hi-Fi) */}
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-br from-[#00FFA3]/20 to-[#00875A]/10"
                 animate={{ opacity: [0, 1, 1, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }}
               />
               
               {/* Central Icon Morph */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-primary"
                    animate={{ 
                       backgroundColor: ["rgba(255,255,255,0.05)", "rgba(16, 185, 129, 0.2)", "rgba(16, 185, 129, 0.2)", "rgba(255,255,255,0.05)"],
                       scale: [0.9, 1.1, 1.1, 0.9],
                       rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
                  >
                     <Layout size={20} />
                  </motion.div>
               </div>
            </div>

            {/* Text Placeholders */}
            <div className="space-y-2.5">
               <motion.div 
                 className="h-2 rounded w-2/3"
                 animate={{ 
                    width: ["30%", "70%", "70%", "30%"], 
                    backgroundColor: ["#333", "#e5e5e5", "#e5e5e5", "#333"] 
                 }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }}
               />
               <motion.div 
                 className="h-2 bg-white/5 rounded w-full"
                 animate={{ opacity: [0.3, 0.6, 0.6, 0.3] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.1, times: [0, 0.2, 0.8, 1] }}
               />
               <motion.div 
                 className="h-2 bg-white/5 rounded w-5/6"
                 animate={{ opacity: [0.3, 0.6, 0.6, 0.3] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2, times: [0, 0.2, 0.8, 1] }}
               />
            </div>

            {/* Action Row with Cursor */}
            <div className="pt-2 flex justify-between items-center relative">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                     <div key={i} className="w-6 h-6 rounded-full bg-neutral-800 border border-[#0A0A0A] z-0" />
                  ))}
               </div>
               
               <motion.button
                  className="px-5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wide overflow-hidden relative"
                  animate={{ 
                     backgroundColor: ["rgba(255,255,255,0.05)", "#00FFA3", "#00FFA3", "rgba(255,255,255,0.05)"],
                     color: ["#ffffff80", "#000000", "#000000", "#ffffff80"]
                  }}
                  transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
               >
                  <span>Interact</span>
               </motion.button>
               
               {/* Simulated Cursor Interaction */}
               <motion.div
                  className="absolute pointer-events-none z-50 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
                  animate={{ 
                     x: ["200%", "20%", "20%", "200%"],
                     y: ["40px", "15px", "15px", "40px"],
                     opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                     duration: 6, 
                     repeat: Infinity, 
                     times: [0, 0.3, 0.7, 1],
                     ease: "easeInOut"
                  }}
                  style={{ right: 0, top: -10 }}
               >
                  <MousePointer2 
                    size={24} 
                    className="text-white fill-black" 
                    strokeWidth={1.5}
                  />
                  {/* Pulse Ring on Click */}
                  <motion.div 
                     className="absolute top-0 left-0 w-6 h-6 rounded-full border-2 border-primary opacity-0"
                     animate={{ scale: [1, 2], opacity: [0, 1, 0] }}
                     transition={{ duration: 0.6, delay: 2, repeat: Infinity, repeatDelay: 5.4 }}
                  />
               </motion.div>
            </div>
         </div>
         
         {/* Glass Overlay Highlight */}
         <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
      </motion.div>

    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Design Solutions for Scale.</h2>
          <p className="text-white-dim max-w-xl text-base md:text-lg">
            A comprehensive suite of capabilities designed to elevate your product from concept to market dominance.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: UI Design (Span 2) */}
          <AnimatedSection className="md:col-span-2 h-auto md:h-[400px] min-h-[350px]">
            <BentoCard 
              title="UI/UX Design" 
              description="Crafting intuitive interfaces that delight users on every touchpoint."
              icon={Layout}
              className="h-full"
            >
              <UiUxAnimation />
            </BentoCard>
          </AnimatedSection>

          {/* Card 2: UX Research (Span 1) */}
          <AnimatedSection className="md:col-span-1 h-auto md:h-[400px] min-h-[350px]" delay={0.1}>
            <BentoCard 
              title="UX Research" 
              description="Data-driven insights to validate assumptions."
              icon={BarChart3}
              className="h-full"
            >
              <div className="w-full h-full flex items-center justify-center px-4 relative z-10">
                 <div className="w-full aspect-square relative flex items-end justify-between gap-2 p-4">
                    {[40, 70, 50, 90, 60].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-full bg-white/10 rounded-t-sm relative group-hover:bg-primary/50 transition-colors duration-500"
                        style={{ height: `${h}%` }}
                      >
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
                            {h}%
                         </div>
                      </div>
                    ))}
                    {/* Trend Line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                       <path 
                         d="M10 100 L 50 50 L 90 70 L 130 20 L 170 50" 
                         fill="none" 
                         stroke="#10B981" 
                         strokeWidth="2"
                         vectorEffect="non-scaling-stroke"
                         className="drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                         style={{ transform: 'scaleY(0.6) translateY(30%)' }}
                       />
                    </svg>
                 </div>
              </div>
            </BentoCard>
          </AnimatedSection>

          {/* Card 3: Design Systems (Span 1) */}
          <AnimatedSection className="md:col-span-1 h-auto md:h-[400px] min-h-[350px]" delay={0.2}>
            <BentoCard 
              title="Design Systems" 
              description="Scalable libraries for consistency."
              icon={Box}
              className="h-full"
            >
               <div className="w-full p-6 grid grid-cols-1 gap-3 relative z-10">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-primary/30 bg-primary/10">
                     <div className="w-4 h-4 rounded bg-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                     <div className="h-2 w-16 bg-primary/40 rounded" />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5">
                     <div className="w-4 h-4 rounded border border-white/20" />
                     <div className="h-2 w-16 bg-white/20 rounded" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/5">
                     <div className="h-2 w-12 bg-white/20 rounded" />
                     <div className="w-8 h-4 rounded-full bg-primary/20 border border-primary/30 relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-primary" />
                     </div>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                     <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-80" />
                     <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-yellow-200 opacity-80" />
                     <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-pink-500 to-red-500 opacity-80" />
                  </div>
               </div>
            </BentoCard>
          </AnimatedSection>

          {/* Card 4: Development (Span 2) */}
          <AnimatedSection className="md:col-span-2 h-auto md:h-[400px] min-h-[350px]" delay={0.3}>
            <BentoCard 
              title="Development" 
              description="Clean, performant code built on modern stacks."
              icon={Code}
              className="h-full"
            >
              <div className="w-full max-w-md bg-[#111] rounded-xl border border-white/10 p-4 font-mono text-xs md:text-sm shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
                <div className="flex gap-1.5 mb-4">
                   <div className="w-3 h-3 rounded-full bg-red-500/20" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                   <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="space-y-1 text-gray-400">
                  <div className="flex">
                    <span className="text-purple-400 mr-2">const</span>
                    <span className="text-blue-400 mr-2">Agency</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-300 ml-2">{"{"}</span>
                  </div>
                  <div className="pl-4 flex">
                    <span className="text-white mr-2">name:</span>
                    <span className="text-green-400">'Flowrax'</span>,
                  </div>
                  <div className="pl-4 flex">
                     <span className="text-white mr-2">stack:</span>
                     <span className="text-yellow-300">['Next.js', 'React', 'Tailwind']</span>,
                  </div>
                  <div className="pl-4 flex">
                     <span className="text-white mr-2">mission:</span>
                     <span className="text-white">()</span>
                     <span className="text-purple-400 mx-2">=&gt;</span>
                     <span className="text-green-400">'Build the Future'</span>
                  </div>
                  <div className="text-yellow-300">{"}"}</div>
                </div>
              </div>
            </BentoCard>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Services;
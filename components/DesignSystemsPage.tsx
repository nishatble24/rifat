
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Layers, Grid, ToggleRight, Type, Palette, CheckCircle2, Component, LayoutTemplate, GitBranch, Figma, FileCode2, BookOpen, SearchCheck, Ruler, MousePointer2 } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import WhyChooseUs from './WhyChooseUs';
import WebDesignTechStack from './WebDesignTechStack';

// --- VISUAL COMPONENTS FOR LAYERS ---

const TokensVisual = () => (
  <div className="w-full h-full relative p-6 grid grid-cols-2 gap-4 select-none pointer-events-none">
     {/* Color Swatches */}
     <div className="bg-white/5 rounded-xl p-4 border border-white/5">
        <div className="text-[10px] text-white/40 mb-2 uppercase tracking-wider font-bold">Colors</div>
        <div className="flex flex-wrap gap-2">
           <div className="w-8 h-8 rounded-full bg-purple-500 border border-white/10 shadow-lg" />
           <div className="w-8 h-8 rounded-full bg-blue-500 border border-white/10 shadow-lg" />
           <div className="w-8 h-8 rounded-full bg-white border border-white/10 shadow-lg" />
           <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 shadow-lg" />
        </div>
     </div>
     {/* Typography */}
     <div className="bg-white/5 rounded-xl p-4 border border-white/5">
        <div className="text-[10px] text-white/40 mb-2 uppercase tracking-wider font-bold">Typography</div>
        <div className="space-y-2">
           <div className="h-4 w-3/4 bg-white/20 rounded" />
           <div className="h-3 w-1/2 bg-white/10 rounded" />
           <div className="h-2 w-full bg-white/5 rounded" />
        </div>
     </div>
     {/* Spacing */}
     <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/5 flex items-center justify-between">
         <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold">Spacing</div>
         <div className="flex gap-2 items-end">
            <div className="w-2 h-4 bg-purple-500/20 border border-purple-500/50 rounded-sm" />
            <div className="w-4 h-6 bg-purple-500/20 border border-purple-500/50 rounded-sm" />
            <div className="w-8 h-8 bg-purple-500/20 border border-purple-500/50 rounded-sm" />
            <div className="w-12 h-10 bg-purple-500/20 border border-purple-500/50 rounded-sm" />
         </div>
     </div>
  </div>
);

const ComponentsVisual = () => (
  <div className="w-full h-full relative p-6 flex flex-col justify-center gap-4 select-none pointer-events-none">
     <div className="flex gap-4">
        <div className="px-6 py-2 bg-purple-600 rounded-lg text-white text-xs font-bold flex items-center justify-center shadow-lg border border-purple-500">Button</div>
        <div className="px-6 py-2 border border-white/20 rounded-lg text-white text-xs font-bold flex items-center justify-center bg-white/5">Secondary</div>
     </div>
     <div className="w-full h-10 bg-white/5 border border-white/10 rounded-lg flex items-center px-3 text-xs text-white/30">Input placeholder...</div>
     <div className="flex gap-2 items-center">
        <div className="w-5 h-5 rounded border border-purple-500 bg-purple-500/20 flex items-center justify-center text-purple-500"><CheckCircle2 size={12} /></div>
        <div className="w-5 h-5 rounded border border-white/20" />
        <div className="h-4 w-24 bg-white/10 rounded ml-2" />
        <div className="w-10 h-6 rounded-full bg-white/10 border border-white/20 ml-auto relative"><div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white/50 rounded-full" /></div>
     </div>
  </div>
);

const PatternsVisual = () => (
  <div className="w-full h-full relative p-6 flex items-center justify-center select-none pointer-events-none">
     <div className="w-full max-w-xs bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
        <div className="h-24 bg-white/5 relative border-b border-white/5">
           <div className="absolute -bottom-4 left-4 w-12 h-12 rounded-lg bg-purple-600 border-2 border-[#0A0A0A]" />
        </div>
        <div className="p-4 pt-6 space-y-3">
           <div className="h-3 w-3/4 bg-white/20 rounded" />
           <div className="h-2 w-full bg-white/10 rounded" />
           <div className="h-2 w-1/2 bg-white/10 rounded" />
           <div className="flex gap-2 mt-4">
              <div className="h-8 w-20 bg-purple-600/20 rounded border border-purple-600/30" />
              <div className="h-8 w-20 bg-white/5 rounded border border-white/10" />
           </div>
        </div>
     </div>
  </div>
);

const GovernanceVisual = () => (
  <div className="w-full h-full relative p-6 flex flex-col items-center justify-center select-none pointer-events-none">
     <div className="flex items-center gap-2 mb-8">
        <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 text-xs font-mono shadow-[0_0_10px_rgba(34,197,94,0.2)]">v2.4.0</div>
        <div className="w-8 h-px bg-white/10" />
        <div className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 text-xs font-mono shadow-[0_0_10px_rgba(168,85,247,0.2)]">v2.5.0-beta</div>
     </div>
     <div className="w-full max-w-xs p-4 bg-white/5 rounded-xl border border-white/10 space-y-4">
         <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30"><GitBranch size={16} /></div>
             <div>
                <div className="text-xs text-white font-bold">Main Branch</div>
                <div className="text-[10px] text-white/40">Updated 2h ago</div>
             </div>
         </div>
         <div className="h-px w-full bg-white/5" />
         <div className="flex items-center gap-2 text-[10px] text-white/50">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> All systems operational
         </div>
     </div>
  </div>
);

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

// --- EXPERTISE SECTION ---

const LAYERS = [
  {
    id: '01',
    title: "Foundation",
    subtitle: "Design Tokens & Variables",
    description: "Colors, typography, spacing, and shadows codified into reusable tokens.",
    visual: <TokensVisual />,
    icon: Palette
  },
  {
    id: '02',
    title: "Core Components",
    subtitle: "Component Libraries",
    description: "Buttons, inputs, cards, and navigation built for consistency and flexibility.",
    visual: <ComponentsVisual />,
    icon: Component
  },
  {
    id: '03',
    title: "Patterns",
    subtitle: "Pattern Documentation",
    description: "Reusable patterns and page templates for rapid, consistent creation.",
    visual: <PatternsVisual />,
    icon: LayoutTemplate
  },
  {
    id: '04',
    title: "Governance",
    subtitle: "System Evolution",
    description: "Versioning, contribution guidelines, and evolution strategies.",
    visual: <GovernanceVisual />,
    icon: GitBranch
  }
];

const ADDITIONAL_EXPERTISE = [
    { title: "Figma Libraries", desc: "Auto-layout ready assets.", icon: Figma },
    { title: "Code Integration", desc: "Automated token pipelines.", icon: FileCode2 },
    { title: "Documentation", desc: "Clear guidelines for teams.", icon: BookOpen },
    { title: "Auditing", desc: "Identify gaps & inconsistencies.", icon: SearchCheck }
];

const ExpertiseLayer: React.FC<{ number: string, title: string, subtitle: string, desc: string, visual: React.ReactNode, icon: any }> = ({ number, title, subtitle, desc, visual, icon: Icon }) => (
  <AnimatedSection className="group relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 group-last:hidden" />
      <div className="relative flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-purple-500/30 transition-all duration-300">
         
         {/* Text Side */}
         <div className="w-full md:w-1/2 flex flex-col justify-center pl-4 md:pl-8 relative">
            {/* Connector Dot */}
            <div className="absolute left-[-41px] md:left-[-41px] top-8 w-3 h-3 rounded-full bg-[#0A0A0A] border-2 border-purple-500 z-10" />
            
            <div className="flex items-center gap-3 mb-4">
               <span className="font-mono text-purple-500/50 text-sm font-bold">{number}</span>
               <div className="h-px w-8 bg-purple-500/20" />
               <span className="text-xs font-bold uppercase tracking-wider text-white/40">{title}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{subtitle}</h3>
            <p className="text-white-dim leading-relaxed">{desc}</p>
         </div>

         {/* Visual Side */}
         <div className="w-full md:w-1/2 h-48 md:h-56 bg-white/[0.02] rounded-xl border border-white/5 overflow-hidden group-hover:border-purple-500/20 transition-colors">
            {visual}
         </div>
      </div>
  </AnimatedSection>
);

const DesignSystemExpertise = () => {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-24">
             <span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-4 block">Our Expertise</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Systems Built to Last</h2>
             <p className="text-white-dim text-lg max-w-2xl mx-auto">
                A layered approach to architecture that ensures consistency at every scale.
             </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
             {/* Main Stack */}
             <div className="lg:col-span-8 flex flex-col gap-6 pl-4 md:pl-0">
                {LAYERS.map((layer, i) => (
                    <ExpertiseLayer 
                      key={i}
                      number={layer.id}
                      title={layer.title} 
                      subtitle={layer.subtitle}
                      desc={layer.description}
                      visual={layer.visual}
                      icon={layer.icon}
                    />
                ))}
             </div>
             
             {/* Sidebar Additional Expertise */}
             <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32">
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 pl-1">Additional Capabilities</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {ADDITIONAL_EXPERTISE.map((item, i) => (
                    <AnimatedSection delay={i * 0.1} key={i}>
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all group flex items-start gap-4">
                          <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-white/10 text-purple-400 group-hover:scale-110 transition-transform">
                              <item.icon size={20} />
                          </div>
                          <div>
                              <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                              <p className="text-white-dim text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                    </AnimatedSection>
                  ))}
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}

const DesignSystemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-purple-500 selection:text-white">
      <DesignSystemHero />
      <DesignSystemExpertise />
      <WhyChooseUs />
      <WebDesignTechStack />
    </div>
  );
};

export default DesignSystemsPage;

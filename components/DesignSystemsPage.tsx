import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Layers, Grid, ToggleRight, Type, Palette, CheckCircle2, Component, LayoutTemplate, GitBranch, Figma, FileCode2, BookOpen, SearchCheck, Ruler, MousePointer2, ChevronLeft, ChevronRight, Star, Quote, Landmark, HeartPulse, ShoppingBag, Database, GraduationCap, Building2, Utensils, Plane, CreditCard, PieChart, Activity, User, Zap, Home, MapPin, Calendar, Layout as LayoutIcon, Smartphone, Monitor } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import WhyChooseUs from './WhyChooseUs';
import WebDesignTechStack from './WebDesignTechStack';
import ClientReviews from './ClientReviews';

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

// --- INDUSTRIES SCROLL SECTION ---

const INDUSTRIES_SYSTEMS = [
  {
    id: "fintech",
    name: "Fintech",
    description: "Trust is built on consistency. We architect banking design systems that ensure security, compliance, and clarity across complex financial products.",
    stats: { projects: "40+", clients: "18", rating: "4.9" },
    icon: Landmark,
    color: "#3B82F6",
    gradient: "from-blue-600 to-cyan-500",
    quote: "The unified component library accelerated our feature rollout by 3x.",
    features: ["Secure Input Patterns", "Data Viz Library", "Multi-brand Theming"],
    logos: [CreditCard, PieChart, Activity],
    visual: "phone"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Accessible, high-contrast systems designed for critical environments. Our systems ensure patient data is legible and workflows are error-free.",
    stats: { projects: "25+", clients: "12", rating: "5.0" },
    icon: HeartPulse,
    color: "#06B6D4",
    gradient: "from-teal-500 to-emerald-500",
    quote: "Finally, a system that handles complex clinical data elegantly.",
    features: ["WCAG 2.1 AAA Compliant", "Clinical Data Tables", "Responsive Dashboards"],
    logos: [HeartPulse, Activity, User],
    visual: "tablet"
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Conversion-driven design languages. We build systems that optimize the path to purchase with reusable product cards, checkout flows, and promo engines.",
    stats: { projects: "55+", clients: "30", rating: "4.8" },
    icon: ShoppingBag,
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-500",
    quote: "Our design velocity increased 400% during the holiday season.",
    features: ["Promo Component Sets", "Checkout Flows", "Mobile-First Grid"],
    logos: [ShoppingBag, Star, Zap],
    visual: "phone"
  },
  {
    id: "saas",
    name: "SaaS",
    description: "Enterprise-grade systems for complex tools. Scalable navigation, dense data displays, and theming capabilities for B2B platforms.",
    stats: { projects: "60+", clients: "25", rating: "4.9" },
    icon: Database,
    color: "#6366F1",
    gradient: "from-indigo-500 to-violet-500",
    quote: "A single source of truth for our entire product suite.",
    features: ["Dense Data Grids", "Settings Patterns", "Dark Mode Tokens"],
    logos: [Layers, Box, LayoutIcon],
    visual: "laptop"
  },
  {
    id: "education",
    name: "Education",
    description: "Engaging, playful, yet structured systems for learning. Components that support gamification, progress tracking, and accessible content consumption.",
    stats: { projects: "30+", clients: "15", rating: "4.9" },
    icon: GraduationCap,
    color: "#10B981",
    gradient: "from-green-500 to-teal-400",
    quote: "Students love the new consistency across courses.",
    features: ["Gamification Widgets", "Course Player UI", "Accessibility First"],
    logos: [BookOpen, Star, Zap],
    visual: "tablet"
  },
  {
    id: "realestate",
    name: "Real Estate",
    description: "Immersive systems for property discovery. Map interfaces, gallery components, and listing cards built for high visual impact.",
    stats: { projects: "20+", clients: "8", rating: "4.8" },
    icon: Building2,
    color: "#F97316",
    gradient: "from-orange-500 to-amber-500",
    quote: "Listing uploads are faster and look better than ever.",
    features: ["Map Integration UI", "Gallery Sliders", "Filter Systems"],
    logos: [Home, MapPin, Calendar],
    visual: "laptop"
  },
  {
    id: "foodtech",
    name: "Food Tech",
    description: "Appetizing design systems. Order flows, menu components, and tracking interfaces designed for speed and visual appeal.",
    stats: { projects: "35+", clients: "20", rating: "4.8" },
    icon: Utensils,
    color: "#EF4444",
    gradient: "from-red-500 to-orange-500",
    quote: "Our driver and customer apps finally feel like one family.",
    features: ["Menu Item Cards", "Tracking UI", "Status Indicators"],
    logos: [Utensils, Star, Zap],
    visual: "phone"
  },
  {
    id: "travel",
    name: "Travel",
    description: "Systems that inspire exploration. Booking engines, itinerary timelines, and destination cards built for clarity and inspiration.",
    stats: { projects: "25+", clients: "10", rating: "4.9" },
    icon: Plane,
    color: "#0EA5E9",
    gradient: "from-sky-500 to-blue-500",
    quote: "Complex bookings made simple with smart components.",
    features: ["Calendar Pickers", "Itinerary Timeline", "Card Systems"],
    logos: [Plane, MapPin, Calendar],
    visual: "laptop"
  }
];

const IndustriesScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-700vw"]);
  
  const scrollToIndustry = (index: number) => {
    if (!containerRef.current) return;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = (index / (INDUSTRIES_SYSTEMS.length - 1)) * totalHeight + containerRef.current.offsetTop;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      const index = Math.round(progress * (INDUSTRIES_SYSTEMS.length - 1));
      setActiveIndex(index);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP: Horizontal Scroll Container */}
      <div ref={containerRef} className="hidden lg:block relative h-[800vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-[#050505]">
          
          {/* Progress Bar & Nav */}
          <div className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-start pointer-events-none">
             <div className="flex gap-2 pointer-events-auto bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
                {INDUSTRIES_SYSTEMS.map((_, i) => (
                   <button 
                     key={i}
                     onClick={() => scrollToIndustry(i)}
                     className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/50'}`}
                   />
                ))}
             </div>
             
             {/* Next/Prev Buttons */}
             <div className="pointer-events-auto flex gap-2">
                <button 
                  onClick={() => scrollToIndustry(Math.max(0, activeIndex - 1))}
                  className={`p-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white hover:bg-white/10 transition-all ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={activeIndex === 0}
                >
                   <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => scrollToIndustry(Math.min(INDUSTRIES_SYSTEMS.length - 1, activeIndex + 1))}
                  className={`p-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white hover:bg-white/10 transition-all ${activeIndex === INDUSTRIES_SYSTEMS.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={activeIndex === INDUSTRIES_SYSTEMS.length - 1}
                >
                   <ChevronRight size={24} />
                </button>
             </div>
          </div>

          {/* Horizontal Track */}
          <motion.div style={{ x }} className="flex h-full w-[800vw]">
             {INDUSTRIES_SYSTEMS.map((industry, i) => (
                <div key={industry.id} className="w-[100vw] h-full flex relative overflow-hidden">
                   
                   {/* Background Gradient */}
                   <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-5`} />
                   <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />

                   <div className="w-full max-w-[1600px] mx-auto grid grid-cols-12 h-full items-center px-12 gap-12">
                      
                      {/* Left: Visuals (50% - Refined Size) */}
                      <div className="col-span-6 h-full flex items-center justify-center relative perspective-[1000px]">
                         
                         {/* Background System Card (Decorative) */}
                         <motion.div 
                           className="absolute w-[300px] h-[400px] bg-white/[0.02] border border-white/10 rounded-2xl -z-10 backdrop-blur-sm transform rotate-6"
                           initial={{ opacity: 0, scale: 0.8 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           transition={{ duration: 0.8 }}
                         >
                            <div className="p-4 border-b border-white/5 flex gap-2">
                               <div className="w-2 h-2 rounded-full bg-white/20" />
                               <div className="w-2 h-2 rounded-full bg-white/20" />
                            </div>
                            <div className="p-4 space-y-3">
                               <div className="h-2 w-1/2 bg-white/10 rounded" />
                               <div className="h-2 w-full bg-white/5 rounded" />
                               <div className="h-2 w-3/4 bg-white/5 rounded" />
                               <div className="grid grid-cols-2 gap-2 mt-4">
                                  <div className="h-16 bg-white/5 rounded border border-white/5" />
                                  <div className="h-16 bg-white/5 rounded border border-white/5" />
                               </div>
                            </div>
                         </motion.div>

                         <motion.div 
                           className="relative z-10"
                           initial={{ opacity: 0, y: 20, rotateY: 10 }}
                           whileInView={{ opacity: 1, y: 0, rotateY: -5 }}
                           transition={{ duration: 0.8, delay: 0.2 }}
                         >
                            {/* Refined Device Sizes */}
                            {industry.visual === 'phone' && (
                                <div className="w-[200px] h-[400px] bg-black rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl relative overflow-hidden ring-1 ring-white/10 flex flex-col">
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />
                                    <div className={`h-24 bg-gradient-to-br ${industry.gradient} opacity-20`} />
                                    <div className="flex-1 bg-[#0A0A0A] p-3 space-y-3">
                                        <div className="h-6 w-24 bg-white/10 rounded-md" />
                                        <div className="grid grid-cols-1 gap-2">
                                            {[1,2,3].map(k => <div key={k} className="h-16 bg-white/5 rounded-lg border border-white/5" />)}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {industry.visual === 'tablet' && (
                                <div className="w-[360px] h-[480px] bg-black rounded-[1.5rem] border-[6px] border-[#1a1a1a] shadow-2xl relative overflow-hidden ring-1 ring-white/10 flex flex-col">
                                    <div className="flex h-full">
                                        <div className="w-12 border-r border-white/10 h-full bg-white/5" />
                                        <div className="flex-1 bg-[#0A0A0A] p-4">
                                            <div className={`h-24 w-full rounded-lg bg-gradient-to-br ${industry.gradient} opacity-20 mb-4`} />
                                            <div className="space-y-3">
                                                <div className="h-3 w-1/2 bg-white/10 rounded" />
                                                <div className="h-3 w-3/4 bg-white/5 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {industry.visual === 'laptop' && (
                                <div className="w-[450px] h-[300px] bg-[#0A0A0A] rounded-lg border-[6px] border-[#1a1a1a] shadow-2xl relative overflow-hidden ring-1 ring-white/10 flex flex-col">
                                    <div className="h-6 border-b border-white/10 bg-[#111] flex items-center px-3 gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500/20" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                                        <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                    </div>
                                    <div className="flex-1 p-4 flex gap-4">
                                        <div className="w-1/4 h-full bg-white/5 rounded border border-white/5" />
                                        <div className="flex-1 space-y-3">
                                            <div className={`h-20 w-full rounded bg-gradient-to-br ${industry.gradient} opacity-20`} />
                                            <div className="grid grid-cols-3 gap-3">
                                                <div className="h-16 bg-white/5 rounded" />
                                                <div className="h-16 bg-white/5 rounded" />
                                                <div className="h-16 bg-white/5 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                         </motion.div>

                         {/* Small Floating Feature Pill */}
                         <motion.div 
                           className="absolute -right-4 top-1/2 bg-black/80 backdrop-blur border border-white/10 p-3 rounded-lg shadow-xl z-20"
                           initial={{ x: 30, opacity: 0 }}
                           whileInView={{ x: 0, opacity: 1 }}
                           transition={{ delay: 0.6 }}
                         >
                            <div className="flex items-center gap-2 text-xs text-white">
                               <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: industry.color }} />
                               {industry.features[0]}
                            </div>
                         </motion.div>
                      </div>

                      {/* Right: Content (50% - More space) */}
                      <div className="col-span-6 h-full flex flex-col justify-center relative z-10 pl-8">
                         <div className="mb-6">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 shadow-lg`} style={{ color: industry.color }}>
                               <industry.icon size={28} />
                            </div>
                            <h2 className="text-6xl lg:text-7xl font-bold leading-[0.9] text-white tracking-tighter mb-6">{industry.name}</h2>
                            <p className="text-lg text-white-dim leading-relaxed mb-8 max-w-lg">{industry.description}</p>
                         </div>

                         {/* Stats Row */}
                         <div className="flex gap-8 mb-10 border-t border-white/10 pt-8">
                            <div>
                               <div className="text-3xl font-bold text-white mb-1">{industry.stats.projects}</div>
                               <div className="text-xs text-white/40 uppercase tracking-widest">Projects</div>
                            </div>
                            <div>
                               <div className="text-3xl font-bold text-white mb-1">{industry.stats.clients}</div>
                               <div className="text-xs text-white/40 uppercase tracking-widest">Clients</div>
                            </div>
                            <div>
                               <div className="text-3xl font-bold text-white mb-1 flex items-center gap-1">
                                  {industry.stats.rating} <Star size={16} fill="currentColor" className="text-yellow-500" />
                               </div>
                               <div className="text-xs text-white/40 uppercase tracking-widest">Rating</div>
                            </div>
                         </div>

                         {/* Testimonial */}
                         <div className="mb-10 bg-white/5 p-6 rounded-2xl border border-white/5 relative max-w-lg">
                            <Quote className="absolute top-4 right-4 text-white/10" size={24} />
                            <p className="text-white/80 italic mb-4">"{industry.quote}"</p>
                            <div className="flex gap-3">
                               {industry.logos.map((Logo, idx) => (
                                  <div key={idx} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all cursor-default">
                                     <Logo size={14} />
                                  </div>
                               ))}
                            </div>
                         </div>

                         <Link 
                           to="/work" 
                           className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-all w-fit hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]`}
                           style={{ background: `linear-gradient(to right, ${industry.color}, ${industry.color}dd)` }}
                         >
                            See Case Studies <ArrowRight size={18} />
                         </Link>
                      </div>

                   </div>
                </div>
             ))}
          </motion.div>
        </div>
      </div>

      {/* MOBILE: Horizontal Swipe Cards */}
      <div className="lg:hidden py-24 bg-[#050505] overflow-hidden">
         <div className="px-6 mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Industry Expertise</h2>
            <p className="text-white-dim text-sm">Swipe to explore</p>
         </div>
         
         <div className="flex overflow-x-auto px-6 gap-4 snap-x snap-mandatory pb-8 scrollbar-hide">
            {INDUSTRIES_SYSTEMS.map((industry) => (
               <div 
                 key={industry.id} 
                 className="min-w-[85vw] sm:min-w-[400px] snap-center bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl relative"
               >
                  {/* Card Visual Header */}
                  <div className={`h-48 relative bg-gradient-to-br ${industry.gradient} opacity-20 overflow-hidden`}>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <industry.icon size={80} className="text-white/20" strokeWidth={1} />
                     </div>
                     <div className="absolute top-4 right-4 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                        <span className="text-xs font-bold text-white">{industry.stats.projects} Projects</span>
                     </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                     <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                        <p className="text-white-dim text-sm leading-relaxed">{industry.description}</p>
                     </div>

                     <div className="grid grid-cols-2 gap-4 mb-6 border-t border-white/10 pt-4">
                        <div>
                           <div className="text-white font-bold">{industry.stats.clients}</div>
                           <div className="text-[10px] text-white/40 uppercase">Clients</div>
                        </div>
                        <div>
                           <div className="text-white font-bold flex items-center gap-1">
                              {industry.stats.rating} <Star size={12} fill="currentColor" className="text-yellow-500" />
                           </div>
                           <div className="text-[10px] text-white/40 uppercase">Rating</div>
                        </div>
                     </div>

                     <Link 
                        to="/work" 
                        className="mt-auto w-full py-3 rounded-xl text-white font-bold bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2"
                     >
                        View Projects <ArrowRight size={16} />
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </>
  );
};

const DesignSystemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-purple-500 selection:text-white">
      <DesignSystemHero />
      <DesignSystemExpertise />
      <IndustriesScrollSection />
      <WhyChooseUs />
      <WebDesignTechStack />
      <ClientReviews />
    </div>
  );
};

export default DesignSystemsPage;

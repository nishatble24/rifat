
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Code, Zap, MousePointer2, Image as ImageIcon, CheckCircle2, Globe, Search, Smartphone, ShoppingBag, BarChart, LayoutTemplate, MonitorPlay, Layers as LayersIcon, UserCircle, Rocket, FileSearch, PenTool, Terminal, Target, MessageCircle, TrendingUp, Gauge, Box, Figma, Wind, Database, Triangle, Hexagon, Command, Palette, BarChart2, ChevronLeft, ChevronRight, Star, Quote, Clock, Sparkles, ArrowLeft, Map as MapIcon, Laptop, Tablet, Moon } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import WebDesignTechStack from './WebDesignTechStack';
import ClientReviews from './ClientReviews';

// --- MAGNETIC INTERACTION COMPONENT ---
const MagneticText = ({ children, tooltip }: { children?: React.ReactNode; tooltip: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const center = { x: left + width / 2, y: top + height / 2 };
    
    const distance = { x: clientX - center.x, y: clientY - center.y };
    
    // Magnetic pull strength
    setPosition({ x: distance.x * 0.3, y: distance.y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative inline-block cursor-none text-primary italic z-30"
    >
      {children}
      
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.8,
          y: isHovered ? -40 : 10
        }}
        className="absolute left-1/2 -translate-x-1/2 -top-4 px-3 py-1 bg-white text-black text-[10px] font-sans font-bold uppercase tracking-widest rounded-full whitespace-nowrap pointer-events-none"
      >
        {tooltip}
      </motion.span>
    </motion.span>
  );
};

// --- MANIFESTO SECTION ---
const ManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section ref={containerRef} className="relative py-32 md:py-48 bg-[#050505] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col gap-2 md:gap-6 font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.1] text-white selection:bg-white selection:text-black">
          
          {/* Line 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-wrap gap-x-4 md:gap-x-8"
          >
            <span className="font-light text-white-dim">We don't just design</span>
            <MagneticText tooltip="More than pixels">websites</MagneticText>
          </motion.div>

          {/* Line 2 */}
          <motion.div 
            style={{ x: y2 }} // Subtle parallax drift
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap gap-x-4 md:gap-x-8 md:ml-24"
          >
            <span className="font-light">We craft</span>
            <MagneticText tooltip="Immersive & Fluid">digital experiences</MagneticText>
          </motion.div>

          {/* Line 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-x-4 md:gap-x-8 md:ml-48"
          >
            <span className="text-white-dim font-light">that</span>
            <span className="font-bold border-b-2 border-primary/50">convert visitors</span>
          </motion.div>

          {/* Line 4 */}
          <motion.div 
            style={{ y: y1 }} // Stronger parallax drift
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring" }}
            className="flex flex-wrap gap-x-4 md:gap-x-8 md:ml-auto mt-8 md:mt-16"
          >
            <span className="font-light text-3xl md:text-5xl self-center mr-4">into</span>
            <MagneticText tooltip="Brand Loyalty">BELIEVERS.</MagneticText>
          </motion.div>

        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};


// --- WEB SERVICES TABS ---

const TAB_SERVICES = [
  {
    id: '01',
    title: 'Corporate Websites',
    description: 'Establish authority with a website that reflects your enterprise scale. We build robust, secure, and scalable platforms that serve stakeholders, investors, and customers alike.',
    features: ['Enterprise-grade Security', 'Investor Relations Portals', 'Multi-language Support', 'CMS Integration'],
    icon: LayoutTemplate
  },
  {
    id: '02',
    title: 'Landing Pages',
    description: 'Turn traffic into revenue. Our landing pages are scientifically designed using conversion rate optimization (CRO) principles to maximize your ad spend return.',
    features: ['A/B Testing Ready', 'Fast Loading Speed', 'Persuasive Copywriting', 'Clear Call-to-Actions'],
    icon: MonitorPlay
  },
  {
    id: '03',
    title: 'E-commerce Design',
    description: 'Shopping experiences that sell. We design intuitive product discovery flows and frictionless checkout processes that reduce cart abandonment.',
    features: ['Shopify/WooCommerce', 'Custom Cart Experiences', 'Product 3D Views', 'Mobile-First Checkout'],
    icon: ShoppingBag
  },
  {
    id: '04',
    title: 'Portfolio Websites',
    description: 'Showcase your work with cinematic flair. Designed for agencies, photographers, and creators who need to make a bold visual statement.',
    features: ['Immersive Interactions', 'WebGL Effects', 'Masonry Layouts', 'Case Study Templates'],
    icon: UserCircle
  },
  {
    id: '05',
    title: 'SaaS Dashboards',
    description: 'Complex data made simple. We design product interfaces that are powerful enough for power users but intuitive enough for beginners.',
    features: ['Design Systems', 'Data Visualization', 'User Onboarding Flows', 'Dark/Light Mode'],
    icon: BarChart
  },
  {
    id: '06',
    title: 'Microsites & Campaigns',
    description: 'Create buzz with a standalone experience. Perfect for product launches, events, or annual reports that need to break the mold.',
    features: ['Storytelling Layouts', 'Gamification', 'Event Registration', 'Social Sharing Integrations'],
    icon: LayersIcon
  },
];

const WebServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Expertise</h2>
          <p className="text-white-dim text-lg max-w-2xl">
            From high-conversion landing pages to complex enterprise platforms, we ship world-class web products.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* LEFT: Tabs List */}
          <div className="w-full lg:w-2/5 flex flex-col gap-2">
             {TAB_SERVICES.map((service, index) => {
               const isActive = activeTab === index;
               return (
                 <button
                   key={index}
                   onClick={() => setActiveTab(index)}
                   className={`group text-left px-6 py-5 rounded-xl transition-all duration-300 border-l-2 flex items-center justify-between outline-none ${
                     isActive 
                       ? 'bg-white/5 border-primary text-white' 
                       : 'border-transparent text-white-dim hover:bg-white/[0.02] hover:text-white'
                   }`}
                 >
                   <div className="flex items-center gap-4">
                     <span className={`font-mono text-sm ${isActive ? 'text-primary' : 'text-white/30'}`}>
                       {service.id}
                     </span>
                     <span className={`text-lg font-bold ${isActive ? 'tracking-tight' : ''}`}>
                       {service.title}
                     </span>
                   </div>
                   
                   {isActive && (
                     <motion.div 
                       layoutId="tab-arrow" 
                       className="text-primary"
                     >
                       <ArrowRight size={16} />
                     </motion.div>
                   )}
                 </button>
               )
             })}
          </div>

          {/* RIGHT: Content Panel */}
          <div className="w-full lg:w-3/5 min-h-[500px]">
            <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3 }}
                 className="h-full bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col shadow-2xl"
               >
                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
                  <div className="absolute inset-0 bg-grid-white opacity-[0.05] pointer-events-none" />

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary mb-8 relative z-10 shadow-lg">
                     {React.createElement(TAB_SERVICES[activeTab].icon, { size: 32 })}
                  </div>

                  {/* Text */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
                    {TAB_SERVICES[activeTab].title}
                  </h3>
                  <p className="text-white-dim text-lg leading-relaxed mb-8 relative z-10 max-w-lg">
                    {TAB_SERVICES[activeTab].description}
                  </p>

                  {/* Features List */}
                  <div className="mt-auto relative z-10">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">What's Included</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                       {TAB_SERVICES[activeTab].features.map((feature, i) => (
                         <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {feature}
                         </li>
                       ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-10 pt-8 border-t border-white/5 relative z-10">
                     <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group">
                        Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}


// --- PROCESS SECTION VISUALS ---

const DiscoveryVisual = () => (
  <motion.div className="w-full h-48 md:h-64 relative bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center">
    <motion.div 
      className="absolute inset-0 bg-grid-white opacity-[0.1]" 
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.div 
      animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10"
    >
      <Search size={64} className="text-primary" strokeWidth={1.5} />
      <motion.div 
        className="absolute -right-8 -top-8 bg-white text-black text-xs font-bold px-2 py-1 rounded"
        animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
      >
        Data Found
      </motion.div>
    </motion.div>
  </motion.div>
);

const StrategyVisual = () => (
  <motion.div className="w-full h-48 md:h-64 relative bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center p-8">
     <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
        <motion.div 
          className="h-20 bg-white/10 rounded-lg border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="h-20 bg-white/10 rounded-lg border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.div 
          className="col-span-2 h-12 bg-primary/20 rounded-lg border border-primary/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
     </div>
  </motion.div>
);

const VisualDesignVisual = () => (
  <motion.div className="w-full h-48 md:h-64 relative bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center">
     <motion.div 
       className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-blue-500 blur-2xl opacity-50"
       animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
       transition={{ duration: 4, repeat: Infinity }}
     />
     <div className="absolute inset-0 flex items-center justify-center gap-4">
        <motion.div 
          className="w-12 h-12 rounded-full bg-[#F24E1E]" 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="w-12 h-12 rounded-full bg-[#0055FF]" 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="w-12 h-12 rounded-full bg-[#10B981]" 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
     </div>
  </motion.div>
);

const PrototypingVisual = () => (
  <motion.div className="w-full h-48 md:h-64 relative bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center">
     <div className="relative">
       <motion.div 
         className="w-40 h-12 bg-primary rounded-lg flex items-center justify-center text-black font-bold shadow-lg"
         whileHover={{ scale: 1.05 }}
       >
         Click Me
       </motion.div>
       <motion.div 
         className="absolute top-1/2 left-1/2"
         animate={{ 
           x: [40, 0, 0, 40],
           y: [40, 0, 0, 40],
           scale: [1, 0.9, 0.9, 1]
         }}
         transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
       >
         <MousePointer2 className="text-white drop-shadow-lg fill-black" size={32} />
         <motion.div 
           className="absolute -inset-4 rounded-full border-2 border-white/50"
           animate={{ scale: [0, 1.5], opacity: [1, 0] }}
           transition={{ duration: 1, repeat: Infinity, delay: 1.2 }}
         />
       </motion.div>
     </div>
  </motion.div>
);

const HandoffVisual = () => (
  <motion.div className="w-full h-48 md:h-64 relative bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center font-mono text-sm">
     <div className="bg-black/50 p-6 rounded-xl border border-white/10 shadow-xl backdrop-blur-sm w-3/4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
           <div className="flex gap-2 text-purple-400 mb-2">
              <span>&lt;Component</span>
              <span className="text-blue-400">prop="value"</span>
              <span>/&gt;</span>
           </div>
           <div className="pl-4 text-white-dim mb-1">.button {'{'}</div>
           <div className="pl-8 text-primary">background: #10B981;</div>
           <div className="pl-8 text-primary">border-radius: 8px;</div>
           <div className="pl-4 text-white-dim">{'}'}</div>
        </motion.div>
     </div>
  </motion.div>
);

const LaunchVisual = () => (
  <motion.div className="w-full h-48 md:h-64 relative bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center">
     <motion.div 
       className="relative z-10"
       animate={{ y: [10, -10, 10] }}
       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
     >
        <Rocket size={64} className="text-primary" />
     </motion.div>
     {[...Array(20)].map((_, i) => (
       <motion.div
         key={i}
         className="absolute bg-white/20 w-1 h-1 rounded-full"
         initial={{ y: 200, x: Math.random() * 200 - 100, opacity: 0 }}
         animate={{ y: -200, opacity: [0, 1, 0] }}
         transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: Math.random() }}
         style={{ left: '50%' }}
       />
     ))}
  </motion.div>
);

// --- PROCESS SECTION COMPONENT ---

const PROCESS_STEPS = [
  {
    title: "Discovery & Research",
    description: "We immerse ourselves in your world — understanding your business, audience, and competition to lay the groundwork for success.",
    visual: <DiscoveryVisual />
  },
  {
    title: "Strategy & Wireframing",
    description: "We architect the blueprint — mapping user journeys, content hierarchy, and page structures before pixels are placed.",
    visual: <StrategyVisual />
  },
  {
    title: "Visual Design",
    description: "We bring ideas to life — crafting stunning interfaces that balance beauty with usability.",
    visual: <VisualDesignVisual />
  },
  {
    title: "Prototyping & Testing",
    description: "We validate before we build — creating interactive prototypes and gathering real user feedback.",
    visual: <PrototypingVisual />
  },
  {
    title: "Development Handoff",
    description: "We bridge design and code — delivering pixel-perfect specs and assets for seamless implementation.",
    visual: <HandoffVisual />
  },
  {
    title: "Launch & Support",
    description: "We ensure a flawless debut — and stick around to help you evolve and optimize.",
    visual: <LaunchVisual />
  }
];

const WebDesignProcess: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < PROCESS_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-white-dim text-lg">Six steps to transform your vision into reality.</p>
        </AnimatedSection>

        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-0 min-h-[600px]">
          
          {/* LEFT: Giant Number & Nav */}
          <div className="w-full lg:w-[45%] flex flex-col items-center justify-center relative">
             <div className="relative h-[300px] w-full flex items-center justify-center perspective-[1000px]">
               <AnimatePresence mode="wait">
                 <motion.span
                   key={currentStep}
                   initial={{ opacity: 0, scale: 0.8, rotate: -5, y: 50 }}
                   animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                   exit={{ opacity: 0, scale: 1.1, rotate: 5, y: -50 }}
                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                   className="text-[200px] md:text-[350px] font-black leading-none text-transparent select-none absolute"
                   style={{ 
                     WebkitTextStroke: '2px rgba(255,255,255,0.2)',
                   }}
                 >
                   {String(currentStep + 1).padStart(2, '0')}
                 </motion.span>
               </AnimatePresence>
               
               {/* Active State Fill Overlay (Optional dynamic fill effect) */}
               <AnimatePresence mode="wait">
                 <motion.span
                   key={`fill-${currentStep}`}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 0.1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                   className="text-[200px] md:text-[350px] font-black leading-none text-white select-none absolute blur-xl"
                 >
                   {String(currentStep + 1).padStart(2, '0')}
                 </motion.span>
               </AnimatePresence>
             </div>

             {/* Navigation Controls */}
             <div className="flex flex-col items-center gap-8 mt-8 z-10">
                {/* Dots */}
                <div className="flex gap-3">
                  {PROCESS_STEPS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === currentStep 
                          ? 'w-8 bg-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-6">
                   <button 
                     onClick={prevStep} 
                     disabled={currentStep === 0}
                     className="p-4 rounded-full border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 group"
                   >
                      <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                   </button>
                   <button 
                     onClick={nextStep} 
                     disabled={currentStep === PROCESS_STEPS.length - 1}
                     className="p-4 rounded-full bg-primary text-black hover:bg-primary-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 group shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]"
                   >
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
             </div>
          </div>

          {/* RIGHT: Content Card */}
          <div className="w-full lg:w-[55%] relative flex items-center">
             <div className="relative w-full overflow-hidden p-1"> {/* Padding for shadow clipping */}
                <AnimatePresence mode="wait">
                   <motion.div
                     key={currentStep}
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -50 }}
                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                     className="w-full bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative"
                   >
                      {/* Decorative Gradient */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
                      
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                      >
                        {PROCESS_STEPS[currentStep].title}
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-white-dim text-lg leading-relaxed mb-10 max-w-xl"
                      >
                        {PROCESS_STEPS[currentStep].description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="w-full"
                      >
                         {PROCESS_STEPS[currentStep].visual}
                      </motion.div>
                   </motion.div>
                </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- VALUE PROPOSITION BENTO GRID ---

const ValueIcon = ({ type }: { type: string }) => {
  if (type === 'conversion') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <Target size={32} className="text-white relative z-10" strokeWidth={1.5} />
        <motion.div 
          className="absolute w-full h-1 bg-primary/50"
          style={{ width: 0, top: '50%', left: '0', transformOrigin: 'left' }}
          whileInView={{ width: '60%' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           <div className="absolute right-0 -top-1 w-0 h-0 border-l-[8px] border-l-primary/50 border-y-[4px] border-y-transparent" />
        </motion.div>
      </div>
    );
  }
  if (type === 'mobile') {
    return (
       <div className="w-full h-full flex items-center justify-center">
          <motion.div 
            className="w-8 h-12 border-2 border-white rounded-md relative flex justify-center pt-1"
            animate={{ width: [32, 48, 32], height: [48, 32, 48] }} // Rotate approx
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
             <div className="w-4 h-0.5 bg-white/50 rounded-full" />
             <Smartphone size={16} className="absolute bottom-1 text-white/20" />
          </motion.div>
       </div>
    );
  }
  if (type === 'performance') {
    return (
       <div className="w-full h-full flex items-center justify-center relative">
         <Gauge size={32} className="text-white" strokeWidth={1.5} />
         <motion.div 
           className="absolute bottom-[14px] left-[calc(50%-1px)] h-4 w-0.5 bg-primary origin-bottom"
           animate={{ rotate: [-45, 45, -45] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         />
       </div>
    );
  }
  if (type === 'seo') {
     return (
       <div className="w-full h-full flex items-center justify-center relative">
         <Search size={28} className="text-white relative z-10" />
         <motion.div 
           className="absolute w-8 h-8 border border-primary/50 rounded-full"
           animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
           transition={{ duration: 2, repeat: Infinity }}
         />
       </div>
     );
  }
  if (type === 'scale') {
     return (
       <div className="w-full h-full flex items-center justify-center">
          <Box size={32} className="text-white" strokeWidth={1.5} />
          <motion.div 
             className="absolute -top-1 -right-1"
             initial={{ opacity: 0, x: -10, y: 10 }}
             whileInView={{ opacity: 1, x: 0, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
             <Box size={16} className="text-primary" strokeWidth={2} />
          </motion.div>
       </div>
     );
  }
  if (type === 'support') {
     return (
       <div className="w-full h-full flex items-center justify-center">
          <motion.div
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 1.5, repeat: Infinity }}
          >
             <MessageCircle size={32} className="text-white" strokeWidth={1.5} />
          </motion.div>
       </div>
     );
  }
  return null;
}

const BentoCard = ({ title, desc, type, delay = 0 }: { title: string, desc: string, type: string, delay?: number }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <motion.div 
        className="h-full bg-white/5 border border-white/5 p-6 rounded-3xl flex flex-col justify-between hover:bg-white/10 hover:border-white/10 transition-colors group relative overflow-hidden"
        whileHover={{ y: -5 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100" />
        
        <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/5 mb-4 flex items-center justify-center overflow-hidden">
           <ValueIcon type={type} />
        </div>

        <div>
           <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
           <p className="text-white-dim text-sm leading-relaxed">{desc}</p>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

const WebValueProp: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
       {/* Ambient Light */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="mb-16 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Flowrax?</h2>
             <p className="text-white-dim text-lg">We engineer success into every pixel.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-6">
             
             {/* Feature Cell - Large */}
             <div className="col-span-1 md:col-span-2 row-span-2">
                <AnimatedSection className="h-full">
                   <div className="h-full bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
                      
                      <div className="relative z-10">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                            Proven Results
                         </div>
                         <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">40%</h3>
                         <p className="text-xl md:text-2xl text-white-dim mb-8">Average increase in conversion rates for our redesigns.</p>
                         
                         <div className="h-16 w-full bg-black/50 rounded-xl border border-white/5 flex items-end p-2 gap-2 overflow-hidden">
                            {[20, 35, 30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
                               <motion.div 
                                 key={i}
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${h}%` }}
                                 transition={{ delay: i * 0.05, duration: 0.5 }}
                                 className="flex-1 bg-primary/80 rounded-sm hover:bg-primary transition-colors"
                               />
                            ))}
                         </div>
                      </div>
                   </div>
                </AnimatedSection>
             </div>

             {/* Standard Cells */}
             <BentoCard 
               title="Conversion First" 
               desc="Every element is placed strategically to guide users toward action." 
               type="conversion"
               delay={0.1}
             />
             <BentoCard 
               title="Mobile Native" 
               desc="Responsive design that feels like a native app on phones." 
               type="mobile"
               delay={0.2}
             />
             <BentoCard 
               title="Instant Load" 
               desc="Optimized assets and code for sub-second load times." 
               type="performance"
               delay={0.3}
             />
             <BentoCard 
               title="SEO Ready" 
               desc="Semantic structure that Google loves to rank." 
               type="seo"
               delay={0.4}
             />
             <BentoCard 
               title="Scalable" 
               desc="Built on component systems that grow with you." 
               type="scale"
               delay={0.5}
             />
             <BentoCard 
               title="Lifetime Support" 
               desc="We don't ghost. Ongoing maintenance available." 
               type="support"
               delay={0.6}
             />

          </div>
       </div>
    </section>
  );
};

// --- IMMERSIVE CTA (NEW) ---
const MagneticButton = ({ children, className, href }: { children?: React.ReactNode, className?: string, href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current?.getBoundingClientRect() || { width: 0, height: 0, left: 0, top: 0 };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center
    const x = (clientX - centerX) * 0.3;
    const y = (clientY - centerY) * 0.3;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.a>
  );
};

const WebDesignCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black border-t border-white/5"
    >
        {/* Background Canvas/Elements */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.05]" />
        
        {/* Glowing Cursor Follower */}
        <motion.div 
            className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
            style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }} 
        />

        <div className="relative z-10 text-center px-6 max-w-5xl">
            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]"
            >
                <div className="relative w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                Accepting New Projects
            </motion.div>

            {/* Headline */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
                Let's Build Your <br />
                <span className="text-primary relative inline-block">
                  Next Website.
                  <Sparkles className="absolute -top-6 -right-8 text-primary w-8 h-8 animate-pulse" />
                </span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white-dim text-lg md:text-xl max-w-2xl mx-auto mb-12"
            >
                From concept to launch, we're with you every step of the way. <br className="hidden md:block"/> Join forward-thinking companies scaling with Flowrax.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                 <MagneticButton 
                   href="https://cal.com/flowrax/project-discussion"
                   className="group px-10 py-5 bg-primary text-black text-xl font-bold rounded-full shadow-[0_0_40px_-10px_rgba(1,208,245,0.5)] overflow-hidden"
                 >
                    <span className="relative z-10 flex items-center gap-3">
                      Start a Project <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                 </MagneticButton>
                 
                 <Link to="/pricing">
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-10 py-5 bg-white/5 text-white text-xl font-bold rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                   >
                      View Pricing
                   </motion.button>
                 </Link>
            </div>

             {/* Footer Info */}
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="mt-16 text-white-dim text-sm flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
             >
                <Clock size={16} /> Typically responds within 24 hours
             </motion.div>
        </div>
    </section>
  )
}

const MockBrowserContent = () => (
  <div className="w-full bg-[#050505] text-white font-sans select-none pointer-events-none">
    {/* Navbar Placeholder */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0A0A0A]">
       <div className="flex gap-2 items-center">
          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
             <div className="w-3 h-3 bg-primary rounded-sm" />
          </div>
          <div className="w-16 h-2 bg-white/20 rounded-full" />
       </div>
       <div className="flex gap-4">
          <div className="w-12 h-1.5 bg-white/10 rounded-full" />
          <div className="w-12 h-1.5 bg-white/10 rounded-full" />
          <div className="w-12 h-1.5 bg-white/10 rounded-full" />
       </div>
    </div>

    {/* Hero Section */}
    <div className="p-8 pb-12 flex flex-col items-center text-center border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
       <div className="px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[6px] font-bold uppercase tracking-wider mb-4">
          New Release 2.0
       </div>
       {/* Headline */}
       <div className="space-y-2 mb-6">
          <div className="w-48 h-4 bg-white rounded-md mx-auto" />
          <div className="w-32 h-4 bg-white/50 rounded-md mx-auto" />
       </div>
       {/* Subtext */}
       <div className="space-y-1.5 mb-8">
          <div className="w-64 h-1.5 bg-white/20 rounded-full mx-auto" />
          <div className="w-48 h-1.5 bg-white/20 rounded-full mx-auto" />
       </div>
       
       <div className="flex gap-3">
          <div className="h-6 w-20 bg-primary rounded shadow-lg shadow-primary/20" />
          <div className="h-6 w-20 bg-white/5 rounded border border-white/10" />
       </div>
    </div>

    {/* Dashboard Preview / Bento Grid */}
    <div className="p-6 bg-[#080808]">
       <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Card 1 */}
          <div className="bg-[#111] p-3 rounded-lg border border-white/5 flex flex-col gap-2">
             <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-current rounded-sm" />
             </div>
             <div className="w-16 h-2 bg-white/20 rounded-full" />
             <div className="w-full h-12 bg-white/5 rounded border border-white/5 mt-auto relative overflow-hidden">
                <div className="absolute top-2 left-2 w-full h-full bg-blue-500/10 rounded-tl-md" />
             </div>
          </div>
          {/* Card 2 */}
          <div className="bg-[#111] p-3 rounded-lg border border-white/5 flex flex-col gap-2">
             <div className="w-6 h-6 rounded bg-purple-500/20 text-purple-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-current rounded-sm" />
             </div>
             <div className="w-16 h-2 bg-white/20 rounded-full" />
             <div className="flex gap-1 mt-auto items-end h-12">
                <div className="h-6 w-1.5 bg-purple-500/20 rounded-sm" />
                <div className="h-8 w-1.5 bg-purple-500/20 rounded-sm" />
                <div className="h-10 w-1.5 bg-purple-500 rounded-sm" />
                <div className="h-5 w-1.5 bg-purple-500/20 rounded-sm" />
                <div className="h-7 w-1.5 bg-purple-500/20 rounded-sm" />
             </div>
          </div>
       </div>
       {/* Wide Card */}
       <div className="bg-[#111] p-3 rounded-lg border border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
             <div className="w-4 h-4 bg-green-500 rounded-full" />
          </div>
          <div className="space-y-1.5 flex-1">
             <div className="w-24 h-2 bg-white/20 rounded-full" />
             <div className="w-full h-1.5 bg-white/10 rounded-full" />
          </div>
          <div className="w-12 h-4 bg-white/5 rounded border border-white/5" />
       </div>
    </div>

    {/* Feature List */}
    <div className="p-6 border-t border-white/5 bg-[#050505]">
       <div className="flex justify-between mb-4">
          <div className="w-20 h-2 bg-white/20 rounded-full" />
          <div className="w-4 h-2 bg-white/10 rounded-full" />
       </div>
       {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
             <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                <div className={`w-2 h-2 rounded-full ${i===1?'bg-primary': i===2?'bg-blue-500':'bg-purple-500'}`} />
             </div>
             <div className="space-y-1.5 w-full">
                <div className="w-32 h-2 bg-white/10 rounded-full" />
                <div className="w-20 h-1.5 bg-white/5 rounded-full" />
             </div>
          </div>
       ))}
    </div>
    
    {/* Footer Area */}
    <div className="p-6 bg-[#030303] text-center border-t border-white/5">
        <div className="w-24 h-2 bg-white/10 rounded-full mx-auto mb-3" />
        <div className="w-full h-8 bg-white/5 rounded border border-white/10 flex items-center justify-center">
           <div className="w-16 h-1.5 bg-white/20 rounded-full" />
        </div>
    </div>
  </div>
);

const WebDesignHero = () => {
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

  // Browser tilt logic
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[70vh] flex items-center bg-[#050505] overflow-hidden pt-24 pb-12 md:py-0"
    >
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT: Content */}
          <div className="w-full md:w-[55%] text-left relative z-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20 bg-primary/10 px-3 py-1 rounded-full">
                <Layout size={14} /> Web Design
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Websites that work <br />
                <span className="text-white-dim">as hard as you do.</span>
              </h1>
              
              <p className="text-lg text-white-dim mb-8 max-w-xl leading-relaxed">
                Fast, responsive, conversion-focused websites that look stunning on every device and drive real business results.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://cal.com/flowrax/project-discussion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                >
                  Start Your Website <ArrowRight size={18} />
                </a>
                <Link 
                  to="/work" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  View Recent Work
                </Link>
              </div>

              <div className="flex items-center gap-4 text-white/40 text-xs font-medium">
                 <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-primary" /> 100+ websites launched</div>
                 <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-primary" /> Avg. 40% conversion increase</div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: Visual (Browser Mockup) */}
          <div className="w-full md:w-[50%] relative h-[450px] md:h-[550px] flex items-center justify-center perspective-[1200px] md:-ml-12">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-lg"
            >
               {/* Floating Badge (Performance) */}
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.8 }}
                 className="absolute -right-4 top-20 z-30 bg-black border border-green-500/30 rounded-lg p-3 shadow-2xl flex flex-col items-center"
               >
                  <div className="text-[10px] text-white/60 uppercase font-bold tracking-widest mb-1">Performance</div>
                  <div className="text-3xl font-mono font-bold text-green-500">100</div>
               </motion.div>

               {/* Browser Window */}
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="w-full aspect-[4/3] bg-[#0A0A0A] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative z-20"
               >
                  {/* Browser Chrome */}
                  <div className="h-10 bg-[#111] border-b border-white/5 flex items-center gap-2 px-4 relative z-10">
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                     </div>
                     <div className="flex-1 mx-4 bg-[#000] h-6 rounded-md border border-white/5 flex items-center px-2">
                        <div className="w-3 h-3 rounded-full bg-white/20 mr-2" />
                        <div className="h-1.5 w-24 bg-white/10 rounded-full" />
                     </div>
                  </div>

                  {/* Inner Content Scrolling Container */}
                  <div className="flex-1 bg-[#050505] relative overflow-hidden">
                     <motion.div 
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                        className="w-full"
                     >
                        {/* Mock Page Content (Doubled for loop) */}
                        {[1, 2].map((iter) => (
                           <MockBrowserContent key={iter} />
                        ))}
                     </motion.div>

                     {/* Cursor Interaction */}
                     <motion.div 
                        className="absolute z-30 pointer-events-none top-0 left-0"
                        animate={{ 
                           x: [50, 200, 200, 100, 50],
                           y: [200, 230, 230, 350, 200],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                     >
                        <MousePointer2 className="text-white fill-black drop-shadow-lg" size={24} />
                        {/* Click Effect */}
                        <motion.div 
                           className="absolute top-0 left-0 w-8 h-8 bg-white/30 rounded-full"
                           initial={{ scale: 0, opacity: 0 }}
                           animate={{ scale: [0, 1.5], opacity: [0.8, 0] }}
                           transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3.5 }}
                        />
                     </motion.div>
                  </div>
               </motion.div>

               {/* Background Layer (Tablet/Mobile Hint) */}
               <motion.div 
                 style={{ x: -20, y: 20, z: -10 }}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
                 className="absolute top-10 -left-10 w-full h-full bg-[#111] rounded-xl border border-white/5 -z-10 opacity-50 blur-[1px]"
               />

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const WebDesignPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden selection:bg-primary selection:text-black">
      
      {/* ---------------- REFINED COMPACT HERO (NEW) ---------------- */}
      <WebDesignHero />

      {/* ---------------- MANIFESTO SECTION ---------------- */}
      <ManifestoSection />

      {/* ---------------- WEB SERVICES TABS ---------------- */}
      <WebServicesTabs />

      {/* ---------------- CINEMATIC PROCESS ---------------- */}
      <WebDesignProcess />

      {/* ---------------- VALUE PROPOSITION BENTO GRID ---------------- */}
      <WebValueProp />

      {/* ---------------- TECH STACK ---------------- */}
      <WebDesignTechStack />

      {/* ---------------- ELEGANT TESTIMONIALS ---------------- */}
      <ClientReviews />

      {/* ---------------- IMMERSIVE CTA ---------------- */}
      <WebDesignCTA />

    </div>
  );
};

export default WebDesignPage;

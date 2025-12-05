import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Code, Zap, MousePointer2, Image as ImageIcon, CheckCircle2, Globe, Search, Smartphone, ShoppingBag, BarChart, LayoutTemplate, MonitorPlay, Layers as LayersIcon, UserCircle, Rocket, FileSearch, PenTool, Terminal, Target, MessageCircle, TrendingUp, Gauge, Box, Figma, Wind, Database, Triangle, Hexagon, Command, Palette, BarChart2, ChevronLeft, ChevronRight, Star, Quote, Clock, Sparkles } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

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


// --- VERTICAL TIMELINE PROCESS (NEW) ---

const TIMELINE_STEPS = [
  {
    id: "01",
    title: "Discovery & Research",
    description: "We dive deep into your business, goals, audience, and competitors to build a solid foundation.",
    icon: FileSearch
  },
  {
    id: "02",
    title: "Strategy & Wireframing",
    description: "We map out the structure, user flows, and layout before any visual design begins.",
    icon: Layout
  },
  {
    id: "03",
    title: "Visual Design",
    description: "We craft the look and feel, bringing your brand to life through stunning visuals.",
    icon: PenTool
  },
  {
    id: "04",
    title: "Prototyping & Testing",
    description: "We build interactive prototypes and test with real users to refine the experience.",
    icon: MousePointer2
  },
  {
    id: "05",
    title: "Development Handoff",
    description: "We prepare detailed specs and assets for seamless developer implementation.",
    icon: Code
  },
  {
    id: "06",
    title: "Launch & Support",
    description: "We help you launch successfully and provide ongoing support as you grow.",
    icon: Rocket
  }
];

const WebDesignTimeline: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <AnimatedSection className="text-center mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">From Idea to Launch</h2>
        </AnimatedSection>

        <div className="relative">
          {/* Center Line (Left on mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-24">
            {TIMELINE_STEPS.map((step, index) => {
              const isEven = index % 2 === 1;
              
              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-center w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0, backgroundColor: "#050505" }}
                    whileInView={{ scale: 1, backgroundColor: "#10B981" }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-primary z-20 -translate-x-1/2"
                  />

                  {/* Spacer for Desktop Layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`relative ${isEven ? 'md:text-right' : 'md:text-left'}`}
                    >
                      <div className={`text-4xl md:text-5xl font-bold text-white/10 mb-2 font-mono ${isEven ? 'md:ml-auto' : ''}`}>
                        {step.id}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3 md:inline-flex">
                        {step.title}
                      </h3>
                      <p className="text-white-dim text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
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

// --- ORBITING TECH STACK ---

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
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
       <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
          
          <AnimatedSection className="text-center mb-16 md:mb-24 relative z-20">
             <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Our Toolkit</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Powered by Industry Standards</h2>
             <p className="text-white-dim text-lg">Always learning, always evolving.</p>
          </AnimatedSection>

          {/* Orbit System Container */}
          <div 
             className="relative w-[800px] h-[800px] max-w-full flex items-center justify-center scale-[0.6] md:scale-75 lg:scale-100 transition-transform duration-500"
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
                  className="absolute rounded-full border border-white/5"
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
                         const radian = (angle * Math.PI) / 180;
                         
                         // Calculate position on circumference logic isn't needed if we use rotation transform on parent
                         // We place items at top:0, left: 50%, then rotate the container.
                         // BUT to space them out, we need to rotate each item's container to its starting angle.
                         
                         return (
                            <div
                               key={tool.name}
                               className="absolute top-0 left-1/2 -ml-6 -mt-6 w-12 h-12"
                               style={{ 
                                  transform: `rotate(${angle}deg) translateY(-${ring.radius}px)` 
                               }}
                            >
                               {/* Counter-Rotation to keep icon upright */}
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

// --- ELEGANT TESTIMONIALS (NEW) ---
const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "Flowrax didn't just redesign our website; they completely reimagined how we communicate our value. The result was a platform that felt alive, intuitive, and remarkably fast.",
    name: "Jonathan Reeves",
    role: "CMO",
    company: "Apex Digital",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "#"
  },
  {
    id: 2,
    quote: "The attention to detail is staggering. Every interaction, every animation felt purposeful. It wasn't just design; it was an exercise in brand elevation.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Lumina",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    link: "#"
  },
  {
    id: 3,
    quote: "We needed a site that could scale with our rapid growth. Flowrax delivered a robust design system that our internal team now uses daily. A true partnership.",
    name: "Marcus Thorne",
    role: "Product Lead",
    company: "Nexus Systems",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    link: "#"
  }
];

const WebDesignTestimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(nextSlide, 6000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
       <div className="absolute inset-0 bg-gradient-to-b from-black to-[#080808]" />
       
       <div 
         className="max-w-5xl mx-auto px-6 relative z-10"
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}
       >
          {/* Large Quote Mark Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-white/5">
             <Quote size={120} fill="currentColor" />
          </div>

          <div className="relative min-h-[400px] flex flex-col items-center justify-center text-center">
             <AnimatePresence mode='wait'>
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                   {/* Star Rating */}
                   <div className="flex gap-1 mb-8">
                      {[1,2,3,4,5].map((s, i) => (
                         <motion.div
                           key={i}
                           initial={{ opacity: 0, scale: 0 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ delay: i * 0.05 + 0.3 }}
                         >
                            <Star size={18} className="text-primary fill-primary" />
                         </motion.div>
                      ))}
                   </div>

                   {/* The Quote */}
                   <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white/90 leading-tight md:leading-snug max-w-4xl mb-12 italic">
                      "{TESTIMONIALS_DATA[current].quote}"
                   </h3>

                   {/* Client Info */}
                   <div className="flex items-center gap-4 text-left bg-white/5 pr-6 pl-2 py-2 rounded-full border border-white/5">
                      <img 
                        src={TESTIMONIALS_DATA[current].avatar} 
                        alt={TESTIMONIALS_DATA[current].name} 
                        className="w-12 h-12 rounded-full object-cover border border-white/10"
                      />
                      <div>
                         <div className="text-white font-bold leading-none mb-1">{TESTIMONIALS_DATA[current].name}</div>
                         <div className="text-white-dim text-xs uppercase tracking-wider">{TESTIMONIALS_DATA[current].role}, {TESTIMONIALS_DATA[current].company}</div>
                      </div>
                   </div>

                   {/* Read Case Study Link */}
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.6 }}
                     className="mt-8"
                   >
                      <Link to="/work" className="text-white-dim text-sm hover:text-white border-b border-transparent hover:border-white transition-all pb-0.5">
                         Read full case study →
                      </Link>
                   </motion.div>

                </motion.div>
             </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 hidden md:block">
             <button onClick={prevSlide} className="p-3 rounded-full text-white/20 hover:text-white hover:bg-white/5 transition-all">
                <ChevronLeft size={32} />
             </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 hidden md:block">
             <button onClick={nextSlide} className="p-3 rounded-full text-white/20 hover:text-white hover:bg-white/5 transition-all">
                <ChevronRight size={32} />
             </button>
          </div>
          
          {/* Mobile Dots */}
          <div className="flex justify-center gap-3 mt-8 md:hidden">
             {TESTIMONIALS_DATA.map((_, i) => (
               <button 
                 key={i}
                 onClick={() => setCurrent(i)}
                 className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-primary w-6' : 'bg-white/20'}`}
               />
             ))}
          </div>

       </div>
    </section>
  )
}

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

const WebDesignPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // --- 3D Tilt Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  
  // Elements move at different speeds for parallax depth
  const textX = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);
  const browserZ = useTransform(springY, [-0.5, 0.5], [0, 50]);

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

  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden selection:bg-primary selection:text-black">
      
      {/* ---------------- IMMERSIVE HERO ---------------- */}
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden perspective-[2000px]"
      >
        {/* Background Ambience */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-gradient-radial from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        {/* --- MAIN CONTENT LAYER --- */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 md:px-6 flex flex-col items-center justify-center h-full">
            
            {/* Split Typography (Behind Browser) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-between items-center px-4 md:px-20 lg:px-32 pointer-events-none select-none z-0">
               <motion.h1 
                 style={{ x: textX }}
                 className="hidden md:block text-[10vw] md:text-[12vw] font-black text-white/5 leading-none tracking-tighter mix-blend-overlay"
               >
                 WEB
               </motion.h1>
               <motion.h1 
                 style={{ x: useTransform(textX, (v) => `calc(${v} * -1)`) }}
                 className="hidden md:block text-[10vw] md:text-[12vw] font-black text-white/5 leading-none tracking-tighter mix-blend-overlay"
               >
                 DESIGN
               </motion.h1>
            </div>

            {/* Mobile Title (Visible only on small screens) */}
            <div className="md:hidden text-center mb-12">
               <h1 className="text-6xl font-black text-white tracking-tighter leading-none mb-2">
                 WEB <span className="text-primary">DESIGN</span>
               </h1>
               <p className="text-white-dim text-sm">Websites that work as good as they look.</p>
            </div>


            {/* --- 3D BROWSER MOCKUP --- */}
            <motion.div
               style={{ 
                 rotateX, 
                 rotateY,
                 z: browserZ,
                 transformStyle: "preserve-3d"
               }}
               initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
               animate={{ opacity: 1, scale: 1, rotateX: 0 }}
               transition={{ duration: 1, type: "spring" }}
               className="relative w-full max-w-4xl aspect-[16/10] bg-[#0A0A0A] rounded-xl md:rounded-2xl border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden z-10 group"
            >
               {/* Reflection/Sheen */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20 pointer-events-none z-50" />

               {/* Browser Toolbar */}
               <div className="h-8 md:h-12 bg-[#111] border-b border-white/5 flex items-center px-4 gap-4">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/20" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                     <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <div className="flex-1 max-w-lg mx-auto h-6 md:h-8 bg-[#050505] rounded-md flex items-center px-3 text-[10px] md:text-xs text-white/20 font-mono border border-white/5">
                     https://flowrax.com/design-preview
                  </div>
               </div>

               {/* Browser Content (Animated) */}
               <div className="relative w-full h-full bg-[#050505] overflow-hidden">
                  
                  {/* Wireframe Layer (Fades Out) */}
                  <motion.div 
                    className="absolute inset-0 p-8 md:p-12 flex flex-col gap-8 opacity-20 pointer-events-none"
                    animate={{ opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                     <div className="w-2/3 h-12 bg-white/20 rounded-lg" />
                     <div className="flex gap-4">
                        <div className="w-1/2 h-64 bg-white/10 rounded-lg" />
                        <div className="w-1/2 h-64 bg-white/10 rounded-lg" />
                     </div>
                  </motion.div>

                  {/* Real UI Layer (Assembles) */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-center text-center">
                      
                      {/* Hero Text Assembly */}
                      <div className="overflow-hidden mb-6">
                         <motion.h2 
                           initial={{ y: 50, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ delay: 0.5, duration: 0.8 }}
                           className="text-3xl md:text-5xl font-bold text-white mb-2"
                         >
                           Elevate Your Brand
                         </motion.h2>
                      </div>
                      
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-white-dim max-w-lg mb-8"
                      >
                        Experience the next generation of web design. Fast, fluid, and built for conversion.
                      </motion.p>

                      {/* Interactive Buttons */}
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex gap-4"
                      >
                         <div className="px-6 py-3 bg-primary text-black font-bold rounded-lg shadow-lg shadow-primary/20">
                            Get Started
                         </div>
                         <div className="px-6 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/10">
                            Learn More
                         </div>
                      </motion.div>

                      {/* Cursor Simulation */}
                      <motion.div
                        className="absolute z-50 pointer-events-none"
                        animate={{ 
                           x: ["-100%", "0%", "0%", "100%"],
                           y: ["100%", "20%", "20%", "-50%"],
                           scale: [1, 1, 0.9, 1] // Click
                        }}
                        transition={{ 
                           duration: 4, 
                           repeat: Infinity,
                           times: [0, 0.4, 0.5, 1],
                           repeatDelay: 1 
                        }}
                        style={{ top: '60%', left: '50%' }}
                      >
                         <MousePointer2 className="text-white fill-black drop-shadow-lg" size={24} />
                      </motion.div>

                  </div>

               </div>
               
               {/* Floating Orbitals (Outside Browser) */}
               <motion.div 
                 className="absolute -right-12 top-20 bg-[#111] p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 z-50"
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                     <CheckCircle2 size={16} />
                  </div>
                  <div>
                     <div className="text-xs text-white-dim">Performance</div>
                     <div className="text-sm font-bold text-white">99/100</div>
                  </div>
               </motion.div>

               <motion.div 
                 className="absolute -left-8 bottom-20 bg-[#111] p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 z-50"
                 animate={{ y: [10, -10, 10] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                     <Search size={16} />
                  </div>
                  <div>
                     <div className="text-xs text-white-dim">SEO Status</div>
                     <div className="text-sm font-bold text-white">Optimized</div>
                  </div>
               </motion.div>

            </motion.div>


            {/* Bottom Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-16 text-center relative z-20"
            >
               <p className="text-lg md:text-xl text-white-dim font-medium mb-6">
                 Websites that work as good as they look.
               </p>
               <div className="flex justify-center gap-6">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                     <Layout size={16} className="text-primary" /> Responsive
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                     <Zap size={16} className="text-primary" /> Fast
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                     <Code size={16} className="text-primary" /> Clean Code
                  </div>
               </div>
            </motion.div>

        </div>
      </section>

      {/* ---------------- MANIFESTO SECTION (NEW) ---------------- */}
      <ManifestoSection />

      {/* ---------------- WEB SERVICES TABS (NEW) ---------------- */}
      <WebServicesTabs />

      {/* ---------------- CINEMATIC PROCESS (NEW) ---------------- */}
      <WebDesignTimeline />

      {/* ---------------- VALUE PROPOSITION BENTO GRID ---------------- */}
      <WebValueProp />

      {/* ---------------- TECH STACK (NEW) ---------------- */}
      <WebDesignTechStack />

      {/* ---------------- ELEGANT TESTIMONIALS (NEW) ---------------- */}
      <WebDesignTestimonials />

      {/* ---------------- IMMERSIVE CTA (NEW) ---------------- */}
      <WebDesignCTA />

    </div>
  );
};

export default WebDesignPage;
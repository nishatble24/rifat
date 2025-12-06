
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Figma, PenTool, Palette, Layers, Box, Layout, Search, Smartphone, Monitor, CheckCircle2, ArrowRight, Compass, FileSearch, Code2, PlayCircle, Gem, Image, Video, Move, Share, Globe, FileCode, Target, Briefcase, Users, Clock, Star, Trophy, Component, ArrowUpRight, Landmark, HeartPulse, ShoppingBag, Database, GraduationCap, Building2, Utensils, Plane } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import WhyChooseUs from './WhyChooseUs';
import FounderCTA from './FounderCTA';
import { PROJECTS } from '../constants';

const FloatingIcon = ({ icon: Icon, delay = 0, xOffset = 0, yOffset = 0, color = "#fff" }: any) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className="absolute flex items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
    style={{ 
        transformStyle: "preserve-3d",
        top: `calc(50% + ${yOffset}px)`, 
        left: `calc(50% + ${xOffset}px)`
    }}
  >
    <Icon size={32} style={{ color }} />
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
  </motion.div>
);

const ServicesHero: React.FC = () => {
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

  const rotateX = useTransform(useSpring(mouseY, { stiffness: 50, damping: 20 }), [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(useSpring(mouseX, { stiffness: 50, damping: 20 }), [-0.5, 0.5], [-10, 10]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[85vh] flex items-center justify-center bg-[#0A0A0F] overflow-hidden pt-24 pb-12"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#6C3CE9]/10 blur-[120px] rounded-full mix-blend-screen" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#3B82F6]/10 blur-[120px] rounded-full mix-blend-screen" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
         <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <AnimatedSection className="order-2 lg:order-1">
           {/* Breadcrumb */}
           <nav className="flex items-center gap-2 text-sm text-white/40 mb-8 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[#3B82F6]">Services</span>
           </nav>

           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Design Services That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C3CE9] to-[#3B82F6]">
                 Transform Ideas
              </span> <br />
              Into Experiences.
           </h1>

           <p className="text-lg text-white-dim mb-8 max-w-lg leading-relaxed">
              We provide comprehensive design solutions that blend strategic insight with world-class aesthetics. From discovery to delivery, we build digital products that scale.
           </p>

           <div className="flex flex-wrap gap-4">
              <a 
                href="https://cal.com/flowrax/project-discussion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#3B82F6] text-white font-bold rounded-full hover:bg-[#2563EB] transition-all shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.6)]"
              >
                 Start a Project
              </a>
              <a href="#services-list" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                 Explore Services
              </a>
           </div>
        </AnimatedSection>

        {/* RIGHT: 3D ISOMETRIC ILLUSTRATION */}
        <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] flex items-center justify-center perspective-[1000px]">
           <motion.div
             style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
             className="relative w-full max-w-[500px] aspect-square"
           >
              {/* Base Plane */}
              <motion.div 
                 initial={{ rotateX: 60, rotateZ: 45, scale: 0.8, opacity: 0 }}
                 animate={{ rotateX: 60, rotateZ: 45, scale: 1, opacity: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[3rem] shadow-2xl backdrop-blur-sm"
              >
                 <div className="absolute inset-0 bg-grid-white opacity-20 rounded-[3rem]" />
                 {/* Glowing Core */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#6C3CE9]/30 blur-[60px] rounded-full" />
              </motion.div>

              {/* Floating Elements - Positioned relative to center */}
              <div className="absolute inset-0" style={{ transform: "rotateX(0deg) rotateZ(0deg) translateZ(50px)" }}>
                 
                 {/* Main Center Card (Figma) */}
                 <FloatingIcon 
                    icon={Figma} 
                    xOffset={0} 
                    yOffset={-40} 
                    color="#F24E1E" 
                    delay={0}
                 />

                 {/* Left Card (Pen Tool) */}
                 <FloatingIcon 
                    icon={PenTool} 
                    xOffset={-120} 
                    yOffset={60} 
                    color="#3B82F6" 
                    delay={1.5}
                 />

                 {/* Right Card (Palette) */}
                 <FloatingIcon 
                    icon={Palette} 
                    xOffset={120} 
                    yOffset={40} 
                    color="#6C3CE9" 
                    delay={0.8}
                 />

                 {/* Top Floating Shapes */}
                 <motion.div
                    animate={{ y: [-15, 15, -15], rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] right-[20%] w-16 h-16 border-4 border-[#3B82F6]/30 rounded-full"
                 />
                 <motion.div
                    animate={{ y: [10, -10, 10], rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[20%] left-[10%] w-12 h-12 border-2 border-[#6C3CE9]/50 transform rotate-45"
                 />
              </div>
           </motion.div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, y: [0, 10, 0] }}
         transition={{ delay: 2, duration: 2, repeat: Infinity }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
         <span className="text-[10px] uppercase tracking-widest">Scroll</span>
         <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
            <motion.div 
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="w-1 h-1 bg-white/50 rounded-full"
            />
         </div>
      </motion.div>
    </section>
  );
};

// --- VISUALS ---

const UiDesignVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8">
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl" />
    <div className="relative w-full h-full perspective-[1000px]">
      <motion.div 
        animate={{ y: [-10, 10, -10], rotateX: [5, -5, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] bg-[#111] rounded-xl border border-white/10 shadow-2xl p-4 flex flex-col"
      >
        <div className="h-4 w-full flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg border border-white/5" />
          <div className="bg-white/5 rounded-lg border border-white/5" />
          <div className="col-span-2 bg-blue-500/20 rounded-lg border border-blue-500/30" />
        </div>
      </motion.div>
      <motion.div 
        animate={{ y: [10, -10, 10], x: [10, 0, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-4 top-1/3 w-32 p-3 bg-[#1A1A1A] rounded-lg border border-white/20 shadow-xl"
      >
        <div className="h-2 w-20 bg-white/20 rounded mb-2" />
        <div className="h-8 w-full bg-blue-600 rounded" />
      </motion.div>
    </div>
  </div>
);

const UxDesignVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8">
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl" />
    <svg className="w-full h-full overflow-visible">
      <motion.path 
        d="M 50 100 Q 150 50 250 100 T 450 100"
        fill="none"
        stroke="#10B981"
        strokeWidth="2"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <circle cx="50" cy="100" r="6" fill="#10B981" />
      <circle cx="250" cy="100" r="6" fill="#10B981" />
      <circle cx="450" cy="100" r="6" fill="#10B981" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center gap-12">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          className="w-24 h-32 bg-[#111] border border-emerald-500/30 rounded-lg flex flex-col items-center justify-center p-2 shadow-lg"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 mb-2" />
          <div className="w-16 h-2 bg-white/10 rounded" />
        </motion.div>
      ))}
    </div>
  </div>
);

const WebDesignVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8">
    <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 to-red-500/10 rounded-3xl" />
    <motion.div 
      className="w-full h-4/5 bg-[#111] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative"
      whileHover={{ scale: 1.02 }}
    >
      <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-3 gap-2">
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-32 h-4 bg-black rounded-full ml-2 opacity-50" />
      </div>
      <div className="p-4 grid grid-cols-3 gap-4">
        <div className="col-span-2 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-white/5" />
        <div className="col-span-1 h-32 bg-white/5 rounded-lg" />
        <div className="col-span-1 h-24 bg-white/5 rounded-lg" />
        <div className="col-span-1 h-24 bg-white/5 rounded-lg" />
        <div className="col-span-1 h-24 bg-white/5 rounded-lg" />
      </div>
    </motion.div>
  </div>
);

const MobileDesignVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8">
    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-3xl" />
    <div className="flex gap-4 items-center">
      <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-64 bg-black border-4 border-[#222] rounded-[2rem] overflow-hidden shadow-2xl relative"
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-full z-10" />
        <div className="w-full h-full bg-[#111] pt-8 p-3 space-y-2">
          <div className="w-full h-16 bg-pink-500/20 rounded-lg" />
          <div className="w-full h-8 bg-white/5 rounded-lg" />
          <div className="w-full h-8 bg-white/5 rounded-lg" />
        </div>
      </motion.div>
      <motion.div 
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="w-32 h-64 bg-black border-4 border-[#222] rounded-[2rem] overflow-hidden shadow-2xl relative opacity-80 scale-90"
      >
        <div className="w-full h-full bg-[#111] pt-8 p-3 space-y-2">
          <div className="grid grid-cols-2 gap-2">
             <div className="h-12 bg-white/5 rounded-lg" />
             <div className="h-12 bg-white/5 rounded-lg" />
             <div className="h-12 bg-white/5 rounded-lg" />
             <div className="h-12 bg-white/5 rounded-lg" />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const BrandingVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8">
    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 rounded-3xl" />
    <div className="grid grid-cols-2 gap-4 rotate-6">
      <motion.div 
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-32 h-32 bg-amber-500 rounded-2xl flex items-center justify-center shadow-xl text-black font-bold text-4xl"
      >
        Aa
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-32 h-32 bg-[#111] border border-white/10 rounded-2xl flex items-center justify-center shadow-xl"
      >
        <div className="grid grid-cols-2 gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-500" />
          <div className="w-8 h-8 rounded-full bg-white" />
          <div className="w-8 h-8 rounded-full bg-gray-500" />
          <div className="w-8 h-8 rounded-full bg-black border border-white/20" />
        </div>
      </motion.div>
    </div>
  </div>
);

const DesignSystemsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center p-8">
    <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/10 to-violet-500/10 rounded-3xl" />
    <div className="relative">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-48 h-48 rounded-full border border-dashed border-indigo-500/30 flex items-center justify-center"
      >
        <div className="w-32 h-32 rounded-full border border-dashed border-indigo-500/50" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#111] border border-indigo-500 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)]">
        <Component className="text-indigo-500" />
      </div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-0 right-0 w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-xs shadow-lg"
      >
        Btn
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-8 h-8 bg-[#111] border border-white/20 rounded-lg flex items-center justify-center text-white text-xs shadow-lg"
      >
        Inp
      </motion.div>
    </div>
  </div>
);

// --- SERVICE DATA ---

const SERVICES_DATA = [
  {
    title: "UI Interface Design",
    description: "We craft visually stunning, pixel-perfect interfaces that align with your brand identity and captivate your users from the first interaction.",
    deliverables: ["Wireframes", "High-fidelity mockups", "Interactive Prototypes", "Design specs & Handoff"],
    gradient: "from-blue-400 to-purple-600",
    icon: Layout,
    Visual: UiDesignVisual,
    link: "/services/ui-ux-design"
  },
  {
    title: "UX Research & Strategy",
    description: "Deep user insights driven by data. We validate assumptions and map out intuitive journeys that solve real user problems.",
    deliverables: ["User Research & Personas", "User Journey Maps", "Information Architecture", "Usability Testing"],
    gradient: "from-emerald-400 to-cyan-600",
    icon: Search,
    Visual: UxDesignVisual,
    link: "/services/ui-ux-design"
  },
  {
    title: "Web Design & Dev",
    description: "High-performance websites that tell your brand story. We build responsive, SEO-optimized platforms that convert visitors into customers.",
    deliverables: ["Responsive Layouts", "Landing Pages", "CMS Integration", "Web Animations"],
    gradient: "from-orange-400 to-red-600",
    icon: Monitor,
    Visual: WebDesignVisual,
    link: "/services/web-design"
  },
  {
    title: "Mobile App Design",
    description: "Native iOS and Android experiences built for engagement. We design fluid, intuitive apps that feel at home on any device.",
    deliverables: ["iOS & Android UI", "Cross-platform Design", "App Prototyping", "Design Systems"],
    gradient: "from-pink-400 to-rose-600",
    icon: Smartphone,
    Visual: MobileDesignVisual,
    link: "/services/mobile-app-design"
  },
  {
    title: "Brand Identity",
    description: "Memorable visual identities that stand out. We create cohesive brand systems that forge a lasting emotional connection with your audience.",
    deliverables: ["Logo Design", "Brand Guidelines", "Typography Systems", "Visual Assets"],
    gradient: "from-amber-400 to-yellow-600",
    icon: Palette,
    Visual: BrandingVisual,
    link: "/services/branding"
  },
  {
    title: "Design Systems",
    description: "Scalable component libraries to supercharge your team. We build governance and documentation to ensure consistency as you grow.",
    deliverables: ["Component Libraries", "Design Tokens", "Documentation", "Governance"],
    gradient: "from-indigo-400 to-violet-600",
    icon: Box,
    Visual: DesignSystemsVisual,
    link: "/services/design-systems"
  }
];

const ServiceSection = ({ data, index }: { data: any, index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <AnimatedSection className="py-16 md:py-24">
      <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
         
         {/* VISUAL SIDE */}
         <motion.div 
           className="w-full lg:w-1/2"
           initial={{ opacity: 0, x: isEven ? 50 : -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-[#0F0F0F] border border-white/5 overflow-hidden group">
               <data.Visual />
               {/* Hover Shine */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" />
            </div>
         </motion.div>

         {/* CONTENT SIDE */}
         <div className="w-full lg:w-1/2 text-left">
            <motion.div
               initial={{ opacity: 0, x: isEven ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
               <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <data.icon size={24} />
               </div>
               
               <h2 className={`text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${data.gradient}`}>
                  {data.title}
               </h2>
               
               <p className="text-white-dim text-lg leading-relaxed mb-8">
                  {data.description}
               </p>

               <div className="mb-10">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 opacity-70">Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {data.deliverables.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                           <CheckCircle2 size={16} className={`text-transparent bg-clip-text bg-gradient-to-r ${data.gradient}`} />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <Link 
                 to="/contact" 
                 className={`inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r ${data.gradient} hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-1`}
               >
                  Get a Quote <ArrowRight size={18} />
               </Link>
            </motion.div>
         </div>

      </div>
    </AnimatedSection>
  );
};

// --- PROCESS TIMELINE SECTION ---

const PROCESS_STEPS = [
  { id: '01', title: 'Discovery', desc: 'Understanding your goals and users through deep-dive sessions.', icon: Compass },
  { id: '02', title: 'Research', desc: 'Market analysis and user research to find your competitive edge.', icon: FileSearch },
  { id: '03', title: 'Wireframing', desc: 'Low-fidelity layouts and structure to map user journeys.', icon: Layout },
  { id: '04', title: 'Design', desc: 'High-fidelity visual designs that align with your brand identity.', icon: Palette },
  { id: '05', title: 'Prototype', desc: 'Interactive clickable prototypes to validate flows and interactions.', icon: PlayCircle },
  { id: '06', title: 'Handoff', desc: 'Developer-ready assets and comprehensive documentation.', icon: Code2 },
];

const ProcessTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5">
       {/* Background Orbs */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C3CE9]/10 rounded-full blur-[100px] pointer-events-none" />
       <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-[80px] pointer-events-none" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
             <p className="text-white-dim text-lg max-w-2xl mx-auto">
                A structured approach to bringing your vision to life, ensuring clarity and quality at every step.
             </p>
          </AnimatedSection>

          <div className="relative">
             {/* Progress Line Container - Desktop */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  style={{ scaleX }} 
                  className="h-full bg-gradient-to-r from-[#3B82F6] via-[#6C3CE9] to-[#10B981] origin-left"
                />
             </div>

             {/* Steps Grid */}
             <div className="flex overflow-x-auto md:overflow-visible gap-8 md:grid md:grid-cols-6 pb-8 md:pb-0 px-4 md:px-0 snap-x snap-mandatory scrollbar-hide">
                {PROCESS_STEPS.map((step, i) => (
                   <div key={i} className="relative min-w-[220px] md:min-w-0 snap-center group">
                      {/* Dot */}
                      <div className="hidden md:flex items-center justify-center w-6 h-6 bg-[#050505] border-2 border-white/20 rounded-full absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:border-[#3B82F6] group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_#050505]">
                         <div className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-[#3B82F6] transition-colors" />
                      </div>
                      
                      {/* Content Card */}
                      <div className="pt-0 md:pt-24 text-center group-hover:-translate-y-2 transition-transform duration-300 h-full">
                         <div className="w-full h-full bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:bg-transparent md:border-0 md:p-0">
                            <div className="w-16 h-16 mx-auto bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-[#3B82F6]/50 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300 relative">
                                <step.icon size={28} className="text-white/70 group-hover:text-white transition-colors" />
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center text-xs font-bold text-white/50 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/50 transition-colors shadow-lg">
                                {step.id}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">{step.title}</h3>
                            <p className="text-sm text-white-dim leading-relaxed">{step.desc}</p>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  )
}

// --- TOOLS WE USE MARQUEE ---

const TOOLS_ROWS = [
  [
    { name: "Figma", icon: Figma, color: "#F24E1E" },
    { name: "Sketch", icon: Gem, color: "#F7B500" },
    { name: "Adobe XD", icon: Layers, color: "#FF61F6" },
    { name: "Photoshop", icon: Image, color: "#31A8FF" },
  ],
  [
    { name: "Illustrator", icon: PenTool, color: "#FF9A00" },
    { name: "After Effects", icon: Video, color: "#9999FF" },
    { name: "Principle", icon: Move, color: "#00D2D3" },
    { name: "InVision", icon: Share, color: "#FF3366" },
  ],
  [
    { name: "Framer", icon: Box, color: "#0055FF" },
    { name: "Webflow", icon: Globe, color: "#4353FF" },
    { name: "Zeplin", icon: FileCode, color: "#F7B500" },
    { name: "Maze", icon: Target, color: "#FF5E5E" },
  ]
];

interface ToolItem {
  name: string;
  icon: any;
  color: string;
}

const ToolCard: React.FC<{ tool: ToolItem }> = ({ tool }) => (
  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/5 rounded-xl mx-4 min-w-[200px] cursor-pointer group/card hover:bg-white/10 transition-all">
    <div className="text-white/30 group-hover/card:text-[var(--tool-color)] group-hover/card:scale-110 transition-all duration-300" style={{ '--tool-color': tool.color } as any}>
      <tool.icon size={28} />
    </div>
    <span className="text-base font-bold text-white/40 group-hover/card:text-white transition-colors duration-300">
      {tool.name}
    </span>
  </div>
);

const ToolsSection = () => {
  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-white/[0.02] to-[#0A0A0F]" />
       
       <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Powered by Industry-Leading Tools</h2>
          <p className="text-white-dim text-lg">The software stack that enables our creativity.</p>
       </div>

       <div className="flex flex-col gap-8">
          {TOOLS_ROWS.map((row, i) => (
             <div key={i} className="flex overflow-hidden relative group">
                <div 
                  className={`flex gap-0 w-max animate-marquee ${i % 2 === 1 ? 'animate-marquee-reverse' : ''} group-hover:[animation-play-state:paused]`}
                  style={{ animationDuration: '40s' }}
                >
                   {[...row, ...row, ...row, ...row].map((tool, index) => (
                      <ToolCard key={index} tool={tool} />
                   ))}
                </div>
             </div>
          ))}
       </div>
       
       <style>{`
         @keyframes marquee {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); }
         }
         @keyframes marquee-reverse {
           0% { transform: translateX(-50%); }
           100% { transform: translateX(0); }
         }
         .animate-marquee {
           animation: marquee linear infinite;
         }
         .animate-marquee-reverse {
           animation: marquee-reverse linear infinite;
         }
       `}</style>
    </section>
  );
};

// --- STATS SECTION ---

const STATS_DATA = [
  { value: 150, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 50, suffix: "+", label: "Happy Clients", icon: Users },
  { value: 5, suffix: "+", label: "Years Experience", icon: Clock },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: Star },
  { value: 10, suffix: "+", label: "Team Members", icon: Trophy },
];

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-20%" });
  
  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    
    const node = nodeRef.current;
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      node.textContent = Math.floor(easeProgress * value).toLocaleString();
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={nodeRef}>0</span>;
};

const StatCard = ({ stat, index }: { stat: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden group w-full"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors">
            <stat.icon size={24} />
        </div>
        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-2 tracking-tight">
            <Counter value={stat.value} />{stat.suffix}
        </div>
        <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
            {stat.label}
        </div>
    </div>
  </motion.div>
);

const StatsSection = () => {
  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden border-t border-white/5">
       {/* Abstract Mesh Gradient Background */}
       <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/30 blur-[100px] rounded-full -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/30 blur-[100px] rounded-full -translate-y-1/2" />
       </div>
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="mb-16 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Impact in Numbers</h2>
             <p className="text-white-dim text-lg">Delivering consistent results across every project.</p>
          </AnimatedSection>

          {/* Grid Layout: 3 Top, 2 Bottom Centered */}
          <div className="flex flex-wrap justify-center gap-6">
             {/* First Row (3 Items) */}
             {STATS_DATA.slice(0, 3).map((stat, i) => (
                <div key={i} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                   <StatCard stat={stat} index={i} />
                </div>
             ))}
             
             {/* Second Row (2 Items) */}
             {STATS_DATA.slice(3, 5).map((stat, i) => (
                <div key={i + 3} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                   <StatCard stat={stat} index={i + 3} />
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  return (
    <section className="py-24 bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-white-dim text-lg">Showcasing our best digital products.</p>
          </div>
          <Link to="/work" className="flex items-center gap-2 text-primary hover:text-white transition-colors">
            View All Projects <ArrowUpRight size={18} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 4).map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 border border-white/10">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Action */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-[#0A0A0A]/90 backdrop-blur rounded-full flex items-center justify-center text-primary">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white-dim text-sm">{project.category}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded border border-white/10 text-white-dim">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- INDUSTRIES SECTION ---

const INDUSTRIES = [
  { name: "Fintech & Banking", icon: Landmark },
  { name: "Healthcare & Medical", icon: HeartPulse },
  { name: "E-commerce & Retail", icon: ShoppingBag },
  { name: "SaaS & Technology", icon: Database },
  { name: "Education & E-learning", icon: GraduationCap },
  { name: "Real Estate", icon: Building2 },
  { name: "Food & Restaurant", icon: Utensils },
  { name: "Travel & Hospitality", icon: Plane },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden border-t border-white/5">
      {/* Background connection lines - simulated with SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
         <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
         </pattern>
         <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Designing for Every Industry</h2>
           <p className="text-white-dim text-lg">Versatile expertise adapted to your specific market challenges.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
           {INDUSTRIES.map((ind, i) => (
              <IndustryCard key={i} industry={ind} index={i} />
           ))}
        </div>
      </div>
    </section>
  )
}

const IndustryCard = ({ industry, index }: { industry: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    className="flex flex-col items-center text-center group cursor-default"
  >
     <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
        {/* Glow */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Circle */}
        <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-300">
           <industry.icon size={32} className="text-white/50 group-hover:text-blue-400 transition-colors" />
        </div>

        {/* Orbiting dot/line effect? */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none rotate-0 group-hover:rotate-180 transition-transform duration-700">
           <circle cx="50%" cy="50%" r="38" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
        </svg>
     </div>
     
     <h3 className="text-white font-medium text-lg group-hover:text-blue-400 transition-colors">{industry.name}</h3>
  </motion.div>
)

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] selection:bg-[#6C3CE9] selection:text-white">
      <ServicesHero />
      
      {/* Anchor for "Explore" button */}
      <div id="services-list" className="max-w-7xl mx-auto px-6 pb-24">
         {SERVICES_DATA.map((service, index) => (
            <div key={index} className={index !== 0 ? 'border-t border-white/5' : ''}>
               <ServiceSection data={service} index={index} />
            </div>
         ))}
      </div>
      
      <ProcessTimeline />

      <ToolsSection />

      <StatsSection />

      <CaseStudiesSection />

      <IndustriesSection />

      <WhyChooseUs />
      
      <FounderCTA />
    </div>
  );
};

export default ServicesPage;


import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MousePointer2, Palette, Layers, Search, GitBranch, CheckCircle2, Eye, FileCode, Monitor, Layout as LayoutIcon, User, Sparkles, Rocket, FileText, BrainCircuit, Component, MessageCircle, ArrowUpRight, Landmark, HeartPulse, ShoppingBag, Database, GraduationCap, Building2, Utensils, Plane, BookOpen, Globe, Map as MapIcon, Activity, Cross, Command, Zap, Triangle } from 'lucide-react';
import WhyChooseUs from './WhyChooseUs';
import AnimatedSection from './ui/AnimatedSection';
import { PROJECTS } from '../constants';
import ClientReviews from './ClientReviews';

// --- EXPERTISE DATA ---
const EXPERTISE_AREAS = [
  { id: 1, title: "User Research", desc: "Deep user interviews, surveys, and behavioral analysis to uncover real needs.", icon: Search },
  { id: 2, title: "Info Architecture", desc: "Logical content structures and navigation systems that users understand intuitively.", icon: GitBranch },
  { id: 3, title: "Wireframing", desc: "Strategic blueprints that solve problems before pixels are placed.", icon: LayoutIcon },
  { id: 4, title: "Visual Design", desc: "Stunning, accessible interfaces that balance beauty with usability.", icon: Palette },
  { id: 5, title: "Interaction Design", desc: "Meaningful animations and micro-interactions that guide and delight.", icon: MousePointer2 },
  { id: 6, title: "Usability Testing", desc: "Real user validation to refine and perfect every experience.", icon: CheckCircle2 },
  { id: 7, title: "Accessibility", desc: "Inclusive experiences that work for everyone, everywhere.", icon: Eye },
  { id: 8, title: "Design Handoff", desc: "Developer-ready specs and assets for seamless implementation.", icon: FileCode },
];

const UiUxExpertise: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);

  return (
    <section className="py-24 bg-[#050505] overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything UX. Covered.</h2>
          <p className="text-white-dim text-lg">From first research to final pixel.</p>
        </AnimatedSection>

        {/* Desktop Radial Layout */}
        <div className="hidden lg:flex justify-center items-center relative min-h-[800px]">
           <div 
             className="relative w-[700px] h-[700px] flex items-center justify-center"
             onMouseEnter={() => setIsHoveringContainer(true)}
             onMouseLeave={() => {
                setIsHoveringContainer(false);
                setActiveNode(null);
             }}
           >
              {/* Central Core */}
              <div className="absolute z-20 w-80 h-80 rounded-full bg-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center text-center p-8 shadow-[0_0_60px_-20px_rgba(16,185,129,0.2)] transition-all duration-500">
                 <AnimatePresence mode="wait">
                    {activeNode === null ? (
                       <motion.div
                         key="default"
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.9 }}
                         className="flex flex-col items-center"
                       >
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                             <Layers size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">Human-Centered<br/>Design</h3>
                          <p className="text-white-dim text-sm">Hover over an area to explore.</p>
                       </motion.div>
                    ) : (
                       <motion.div
                         key="active"
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.9 }}
                         className="flex flex-col items-center"
                       >
                          {(() => {
                             const node = EXPERTISE_AREAS.find(n => n.id === activeNode);
                             return node ? (
                                <>
                                   <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                      {React.createElement(node.icon, { size: 32 })}
                                   </div>
                                   <h3 className="text-2xl font-bold text-white mb-4">{node.title}</h3>
                                   <p className="text-white-dim text-sm leading-relaxed">{node.desc}</p>
                                </>
                             ) : null;
                          })()}
                       </motion.div>
                    )}
                 </AnimatePresence>
                 
                 {/* Subtle Pulse Ring */}
                 <div className="absolute inset-0 border border-primary/20 rounded-full animate-ping opacity-20 pointer-events-none" style={{ animationDuration: '3s' }} />
              </div>

              {/* Orbiting Nodes */}
              <motion.div
                 className="absolute inset-0"
                 animate={{ rotate: isHoveringContainer ? 0 : 360 }} // Pause on hover, else rotate
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                 {EXPERTISE_AREAS.map((item, index) => {
                    const angle = (index / EXPERTISE_AREAS.length) * 360;
                    const radius = 300; // Distance from center
                    const isActive = activeNode === item.id;

                    return (
                       <div
                          key={item.id}
                          className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8"
                          style={{
                             transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` // Position and counter-rotate
                          }}
                       >
                          {/* Counter-rotation container for the node itself to stay upright */}
                          <motion.div
                             className="w-full h-full"
                             animate={{ rotate: isHoveringContainer ? 0 : -360 }}
                             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                          >
                             <button
                                onMouseEnter={() => setActiveNode(item.id)}
                                className={`w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-300 relative group z-30 bg-[#050505]
                                   ${isActive 
                                      ? 'border-primary bg-primary/10 text-primary shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-110' 
                                      : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                                   }
                                `}
                             >
                                {React.createElement(item.icon, { size: 24 })}
                                
                                {/* Connecting Line to Center (Only visible when active) */}
                                <div 
                                   className={`absolute top-1/2 left-1/2 w-[300px] h-px bg-gradient-to-r from-primary to-transparent origin-left -z-10 transition-opacity duration-300 pointer-events-none
                                      ${isActive ? 'opacity-100' : 'opacity-0'}
                                   `}
                                   style={{ 
                                      transform: `rotate(${180 + angle}deg)`, // Point back to center. 
                                   }}
                                />
                                
                                {/* Label (Visible on Hover/Active) */}
                                <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-all duration-300 ${isActive ? 'text-primary opacity-100 translate-y-0' : 'text-white/40 opacity-0 -translate-y-2'}`}>
                                   {item.title}
                                </div>
                             </button>
                          </motion.div>
                       </div>
                    );
                 })}
              </motion.div>

              {/* Static decorative rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
              <div className="absolute top-[15%] left-[15%] right-[15%] bottom-[15%] rounded-full border border-white/5 border-dashed pointer-events-none" />

           </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="lg:hidden grid grid-cols-1 gap-4">
           <div className="p-6 bg-[#0A0A0A] rounded-2xl border border-white/10 text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                 <Layers size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Human-Centered Design</h3>
              <p className="text-white-dim text-sm">Our core philosophy applied to every discipline.</p>
           </div>

           {EXPERTISE_AREAS.map((item) => (
              <AnimatedSection key={item.id}>
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/5 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0 text-primary">
                       {React.createElement(item.icon, { size: 20 })}
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                       <p className="text-sm text-white-dim leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
              </AnimatedSection>
           ))}
        </div>

      </div>
    </section>
  );
};

// --- INDUSTRIES FLIP CARDS SECTION ---

const INDUSTRIES_FLIP_DATA = [
  { 
    id: 1, 
    name: "Fintech", 
    gradient: "from-[#6C3CE9] to-[#3B82F6]", 
    shadow: "shadow-[#6C3CE9]/25",
    icon: Landmark, 
    count: "40+", 
    desc: "Secure, compliant, and user-friendly financial platforms built for trust.", 
    clients: [LayoutIcon, Triangle, CheckCircle2] 
  },
  { 
    id: 2, 
    name: "Healthcare", 
    gradient: "from-[#0D9488] to-[#06B6D4]", 
    shadow: "shadow-[#0D9488]/25",
    icon: HeartPulse, 
    count: "25+", 
    desc: "HIPAA-compliant telemedicine and patient management systems.", 
    clients: [Activity, HeartPulse, Cross] 
  },
  { 
    id: 3, 
    name: "E-commerce", 
    gradient: "from-[#F97316] to-[#EC4899]", 
    shadow: "shadow-[#F97316]/25",
    icon: ShoppingBag, 
    count: "55+", 
    desc: "High-conversion storefronts and frictionless checkout flows.", 
    clients: [ShoppingBag, Sparkles, Zap] 
  },
  { 
    id: 4, 
    name: "SaaS", 
    gradient: "from-[#3B82F6] to-[#6366F1]", 
    shadow: "shadow-[#3B82F6]/25",
    icon: Database, 
    count: "60+", 
    desc: "Complex data dashboards simplified for daily productivity.", 
    clients: [Database, Layers, Command] 
  },
  { 
    id: 5, 
    name: "Education", 
    gradient: "from-[#10B981] to-[#14B8A6]", 
    shadow: "shadow-[#10B981]/25",
    icon: GraduationCap, 
    count: "30+", 
    desc: "LMS and learning platforms that engage and retain students.", 
    clients: [GraduationCap, BookOpen, User] 
  },
  { 
    id: 6, 
    name: "Real Estate", 
    gradient: "from-[#F59E0B] to-[#F97316]", 
    shadow: "shadow-[#F59E0B]/25",
    icon: Building2, 
    count: "20+", 
    desc: "Property portals with immersive map-based viewing experiences.", 
    clients: [Building2, MapIcon, Search] 
  },
  { 
    id: 7, 
    name: "Food Tech", 
    gradient: "from-[#EF4444] to-[#F97316]", 
    shadow: "shadow-[#EF4444]/25",
    icon: Utensils, 
    count: "35+", 
    desc: "Delivery apps and POS systems for modern dining experiences.", 
    clients: [Utensils, Sparkles, HeartPulse] 
  },
  { 
    id: 8, 
    name: "Travel", 
    gradient: "from-[#06B6D4] to-[#3B82F6]", 
    shadow: "shadow-[#06B6D4]/25",
    icon: Plane, 
    count: "25+", 
    desc: "Booking engines that inspire wanderlust and simplify planning.", 
    clients: [Plane, Globe, MapIcon] 
  },
];

const FlipCard = ({ data, index }: { data: any, index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Random float duration for "different timing each"
  const floatDuration = 4 + Math.random() * 2; 

  return (
    <div 
      className="relative w-full aspect-[4/5] md:aspect-square perspective-[1000px] group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isFlipped ? 0 : [0, -10, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full relative transition-transform duration-700"
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT SIDE */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${data.gradient} p-1 overflow-hidden shadow-xl ${data.shadow}`} style={{ backfaceVisibility: 'hidden' }}>
           <div className="absolute inset-0 bg-black/10" /> {/* Slight tint */}
           
           {/* Grain Overlay */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
           
           {/* Particles */}
           <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                 <motion.div
                   key={i}
                   className="absolute bottom-0 w-1 h-1 bg-white/40 rounded-full"
                   style={{ left: `${Math.random() * 100}%` }}
                   animate={{ y: [0, -300], opacity: [0, 1, 0] }}
                   transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
                 />
              ))}
           </div>

           <div className="relative h-full w-full bg-white/5 backdrop-blur-[2px] rounded-[22px] p-6 flex flex-col justify-between border border-white/20">
              
              <div className="flex justify-between items-start">
                 <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                    <data.icon size={32} className="text-white drop-shadow-md" />
                 </div>
                 <div className="px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                    {data.count} Projects
                 </div>
              </div>

              <div>
                 <h3 className="text-3xl font-bold text-white mb-1 drop-shadow-md">{data.name}</h3>
                 <div className="h-1 w-12 bg-white/50 rounded-full" />
              </div>
           </div>
        </div>

        {/* BACK SIDE */}
        <div 
          className="absolute inset-0 rounded-3xl bg-[#0A0A0A] overflow-hidden border border-white/10"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: 'hidden' }}
        >
           {/* Mock Video Background */}
           <div className="absolute inset-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-20`} />
              <motion.div 
                 className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ duration: 10, repeat: Infinity }}
              />
              {/* Animated abstract shapes to simulate video content */}
              <motion.div 
                 className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-white/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
           </div>
           
           {/* Dark Overlay */}
           <div className="absolute inset-0 bg-black/60" />

           {/* Content */}
           <div className="relative h-full p-6 flex flex-col items-center justify-center text-center z-10">
              <div className="text-sm font-bold text-white/50 uppercase tracking-widest mb-2">{data.name}</div>
              <p className="text-white text-lg font-medium leading-relaxed mb-6">{data.desc}</p>
              
              {/* Clients */}
              <div className="flex gap-4 mb-8">
                 {data.clients.map((ClientIcon: any, i: number) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70">
                       <ClientIcon size={14} />
                    </div>
                 ))}
              </div>

              <div className="mt-auto">
                 <Link to="/work" className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform flex items-center gap-2">
                    Explore Projects <ArrowRight size={14} />
                 </Link>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

const IndustriesFlipSection = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <AnimatedSection className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Industries We've <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">Transformed</span>
             </h2>
             <p className="text-white-dim text-xl">8 Industries. Endless Possibilities.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {INDUSTRIES_FLIP_DATA.map((industry, index) => (
                <AnimatedSection key={industry.id} delay={index * 0.1}>
                   <FlipCard data={industry} index={index} />
                </AnimatedSection>
             ))}
          </div>

       </div>
    </section>
  );
};

// --- SELECTED UI/UX WORK SECTION ---

const UIUX_PROJECTS = PROJECTS.filter(p => ['7', '1', '4', '2'].includes(p.id));

const UiUxSelectedWork: React.FC = () => {
  return (
    <section className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected UI/UX Work</h2>
            <p className="text-white-dim">Strategic interfaces that drive engagement.</p>
          </div>
          <Link to="/work" className="flex items-center gap-2 text-primary hover:text-white transition-colors">
            View All Projects <ArrowUpRight size={18} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UIUX_PROJECTS.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Link to={`/work/${project.id}`} className="block group cursor-pointer">
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
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white-dim text-sm">{project.category}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded border border-white/10 text-white-dim">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const UiUxCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#080808] border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
             
             {/* Left Content */}
             <div className="w-full md:w-[55%]">
                <AnimatedSection>
                   <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      Ready to design something <span className="text-primary italic">meaningful?</span>
                   </h2>
                   <p className="text-lg md:text-xl text-white-dim mb-10 max-w-xl leading-relaxed">
                      Your users are waiting for an experience that feels intuitive and right. Whether you're starting fresh or improving what exists, let's build it together.
                   </p>
                   
                   <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
                      <a 
                        href="https://cal.com/flowrax/project-discussion" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-primary text-black font-bold rounded-full transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] flex items-center gap-3"
                      >
                         Start a Conversation
                         <MessageCircle size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <Link 
                        to="/work" 
                        className="text-white font-medium hover:text-primary transition-colors flex items-center gap-2 border-b border-transparent hover:border-primary pb-0.5"
                      >
                         Explore Our Work <ArrowRight size={16} />
                      </Link>
                   </div>

                   <div className="flex items-center gap-3 text-sm text-white/40">
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </div>
                      <span className="font-mono">Currently accepting new projects</span>
                   </div>
                </AnimatedSection>
             </div>

             {/* Right Visual - Founder Image */}
             <div className="w-full md:w-[45%] h-[400px] md:h-[500px] relative flex items-end justify-center">
                <AnimatedSection delay={0.2} className="w-full h-full relative flex items-end justify-center">
                   
                   {/* Gradient Accent Base */}
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1.2, ease: "easeOut" }}
                     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[70%] z-0 pointer-events-none"
                   >
                      {/* Vibrant Conic Gradient Mix for Organic Feel */}
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,_#22D3EE_0deg,_#3B82F6_120deg,_#8B5CF6_240deg,_#E879F9_360deg)] opacity-20 blur-[80px] rounded-full mix-blend-screen" />
                      {/* Deeper Base for Grounding */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-gradient-to-t from-blue-600/30 to-purple-500/30 blur-[60px] rounded-full" />
                   </motion.div>

                   {/* Image */}
                   <motion.img 
                      src="https://ik.imagekit.io/flowrax/rimagrd.png"
                      alt="Rima Aktar - COO & Co-Founder"
                      className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-2xl"
                      initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                   />

                   {/* Name Overlay */}
                   <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="absolute bottom-8 right-0 md:-right-8 z-20"
                   >
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-glass flex items-center gap-3">
                         <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                         <div>
                            <p className="text-white font-bold text-sm leading-none mb-1">Rima Aktar</p>
                            <p className="text-white-dim text-xs font-medium tracking-wide">COO & Co-Founder</p>
                         </div>
                      </div>
                   </motion.div>

                </AnimatedSection>
             </div>

          </div>
       </div>
    </section>
  );
};

const UiUxDesignPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Parallax Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Transformations for Layers (Parallax effect)
  // Background moves slightly
  const bgMoveX = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);
  const bgMoveY = useTransform(springY, [-0.5, 0.5], ["-2%", "2%"]);

  // Middle Layer (Glass UI) moves moderately and rotates
  const midRotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const midRotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const midMoveX = useTransform(springX, [-0.5, 0.5], ["-5%", "5%"]);

  // Foreground (Text) stays relatively stable or moves opposite for depth
  const textMoveX = useTransform(springX, [-0.5, 0.5], ["1%", "-1%"]);
  const textMoveY = useTransform(springY, [-0.5, 0.5], ["1%", "-1%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div 
      className="min-h-screen bg-[#050505] overflow-x-hidden selection:bg-primary selection:text-black"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24 pb-12 md:py-0">
        
        {/* Visual Background Split */}
        <div className="absolute inset-0 flex">
           <div className="w-full md:w-1/2 h-full bg-[#050505] relative border-r border-white/5">
              <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />
           </div>
           <div className="hidden md:block w-1/2 h-full bg-[#080808] relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
           <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              
              {/* LEFT: Content */}
              <div className="w-full md:w-1/2">
                 <AnimatedSection>
                    <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20 bg-primary/10 px-3 py-1 rounded-full">
                       <Palette size={14} /> UI/UX Design
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                       Designed around <br/>
                       <span className="text-white-dim">your users.</span>
                    </h1>
                    
                    <p className="text-lg text-white-dim mb-8 max-w-md leading-relaxed">
                       Research-driven interfaces that solve real problems and create meaningful experiences for your users.
                    </p>
                    
                    <Link to="/contact">
                       <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-colors shadow-lg"
                       >
                          Start Your Project
                       </motion.button>
                    </Link>
                 </AnimatedSection>
              </div>

              {/* RIGHT: Research to Refinement Visual */}
              <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
                 {/* Connection Line */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                    <motion.path 
                       d="M 20% 60% Q 50% 30% 80% 50%" 
                       fill="none" 
                       stroke="#10B981" 
                       strokeWidth="2" 
                       strokeDasharray="6 6"
                       initial={{ pathLength: 0, opacity: 0 }}
                       animate={{ pathLength: 1, opacity: 0.5 }}
                       transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    />
                 </svg>

                 <div className="relative w-full h-full flex items-center justify-between px-4 perspective-[1000px]">
                    
                    {/* Research Side (Left) */}
                    <motion.div 
                       className="relative w-40 h-48 md:w-48 md:h-56"
                       whileHover={{ scale: 1.05, rotateZ: -2 }}
                    >
                       {/* Sticky Note 1 */}
                       <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 text-black p-3 text-[10px] font-handwriting shadow-lg rotate-6 rounded-sm z-10 font-bold">
                          User needs simple nav
                       </div>
                       {/* Sticky Note 2 */}
                       <div className="absolute bottom-10 left-4 w-24 h-24 bg-rose-200 text-black p-3 text-[10px] font-handwriting shadow-lg -rotate-3 rounded-sm z-10 font-bold">
                          Mobile first approach?
                       </div>
                       {/* Sketch Wireframe */}
                       <div className="absolute inset-0 bg-white border-2 border-dashed border-gray-400 p-2 opacity-80 rounded shadow-xl rotate-1">
                          <div className="w-full h-4 bg-gray-200 mb-2 rounded-sm" />
                          <div className="w-1/2 h-20 bg-gray-100 mb-2 rounded-sm inline-block mr-2" />
                          <div className="w-1/3 h-20 bg-gray-100 rounded-sm inline-block" />
                          <div className="w-full h-12 bg-gray-200 mt-2 rounded-sm" />
                       </div>
                    </motion.div>

                    {/* Arrow Indicator */}
                    <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center z-20 shadow-xl relative">
                       <ArrowRight size={20} className="text-primary" />
                    </div>

                    {/* Refinement Side (Right) */}
                    <motion.div 
                       className="relative w-40 h-64 md:w-48 md:h-80"
                       whileHover={{ scale: 1.05, y: -5 }}
                    >
                       <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col">
                          {/* App Header */}
                          <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between">
                             <div className="w-4 h-4 rounded-full bg-white/10" />
                             <div className="w-16 h-2 bg-white/10 rounded-full" />
                          </div>
                          {/* App Content */}
                          <div className="p-4 flex-1">
                             <div className="w-full h-24 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl mb-4 border border-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm" />
                             </div>
                             <div className="space-y-2">
                                <div className="w-3/4 h-3 bg-white/20 rounded" />
                                <div className="w-1/2 h-3 bg-white/10 rounded" />
                             </div>
                             <div className="mt-6 flex gap-2">
                                <div className="flex-1 h-10 bg-primary text-black text-[10px] font-bold flex items-center justify-center rounded-lg">Action</div>
                                <div className="flex-1 h-10 bg-white/5 text-white text-[10px] font-bold flex items-center justify-center rounded-lg border border-white/10">Details</div>
                             </div>
                          </div>
                          {/* Tab Bar */}
                          <div className="h-12 border-t border-white/5 flex items-center justify-around px-4">
                             <div className="w-8 h-8 rounded-lg bg-white/5" />
                             <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center"><CheckCircle2 size={14} /></div>
                             <div className="w-8 h-8 rounded-lg bg-white/5" />
                          </div>
                       </div>
                       
                       {/* Glow Behind */}
                       <div className="absolute inset-0 bg-primary/20 blur-[40px] -z-10 rounded-full" />
                    </motion.div>

                 </div>
              </div>

           </div>
        </div>
      </section>
      
      {/* Our Expertise Radial Section */}
      <UiUxExpertise />

      {/* Selected Work Section */}
      <UiUxSelectedWork />

      {/* Industries We Serve Section (NEW) */}
      <IndustriesFlipSection />

      {/* Why Flowrax Section */}
      <WhyChooseUs />

      {/* Client Reviews Section */}
      <ClientReviews />

      {/* New Conversational CTA */}
      <UiUxCTA />

    </div>
  );
};

export default UiUxDesignPage;

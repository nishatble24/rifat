import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MousePointer2, Palette, Layers, Search, GitBranch, CheckCircle2, Eye, FileCode, Monitor, Layout as LayoutIcon } from 'lucide-react';
import WhyChooseUs from './WhyChooseUs';
import AnimatedSection from './ui/AnimatedSection';

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
                                      // Note: Since this is inside a counter-rotated div, we need to compensate.
                                      // Actually, the easier way is to render lines in a separate SVG layer that doesn't rotate, but let's try CSS logic.
                                      // If parent rotates 360, this div rotates -360. 
                                      // The `transform` above puts it in place.
                                      // To point to center: calculate angle relative to current rotation? Complex.
                                      // Simplified: Just use a glow effect for now or absolute SVG lines.
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

      {/* Why Flowrax Section */}
      <WhyChooseUs />

    </div>
  );
};

export default UiUxDesignPage;
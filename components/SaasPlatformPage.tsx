
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, BarChart3, Users, Settings, Bell, Search, Activity, CheckCircle2 } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import WhyChooseUs from './WhyChooseUs';
import WebDesignTechStack from './WebDesignTechStack';

// --- HERO SECTION ---
const SaasHero: React.FC = () => {
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
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);
  
  // Layer translations for depth
  const backLayerX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const backLayerY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const frontLayerX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const frontLayerY = useTransform(springY, [-0.5, 0.5], [-5, 5]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[70vh] flex items-center bg-[#050505] overflow-hidden pt-24 pb-12 md:py-0"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
      <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT: Content (55%) */}
          <div className="w-full md:w-[55%] text-left">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full">
                <Layers size={14} /> SaaS Platform Design
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Complex made <br />
                <span className="text-white-dim">simple.</span>
              </h1>
              
              <p className="text-lg text-white-dim mb-8 max-w-xl leading-relaxed">
                We transform complex data and workflows into intuitive experiences that users master quickly and enjoy daily.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://cal.com/flowrax/project-discussion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                >
                  Plan Your Platform <ArrowRight size={18} />
                </a>
                <Link 
                  to="/work" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  See Case Studies
                </Link>
              </div>

              <div className="flex items-center gap-2 text-white/40 text-xs font-medium">
                 <CheckCircle2 size={12} className="text-blue-500" /> Trusted by 30+ SaaS companies worldwide
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: Visual (45%) */}
          <div className="w-full md:w-[45%] relative h-[450px] md:h-[600px] flex items-center justify-center perspective-[1200px]">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-lg aspect-[4/3]"
            >
               
               {/* Back Layer (Secondary Screen) */}
               <motion.div 
                 style={{ x: backLayerX, y: backLayerY, z: -50 }}
                 initial={{ opacity: 0, x: 50, scale: 0.9 }}
                 animate={{ opacity: 1, x: 60, scale: 0.9 }}
                 transition={{ duration: 1, delay: 0.3 }}
                 className="absolute top-0 right-0 w-full h-full bg-[#0F0F0F] rounded-xl border border-white/5 shadow-2xl overflow-hidden opacity-40 blur-[1px]"
               >
                  {/* Wireframe Mockup Content */}
                  <div className="h-10 border-b border-white/5 bg-white/5 flex items-center gap-2 px-4">
                     <div className="w-3 h-3 rounded-full bg-white/10" />
                     <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="p-6 grid grid-cols-2 gap-4">
                     <div className="h-32 bg-white/5 rounded-lg" />
                     <div className="h-32 bg-white/5 rounded-lg" />
                     <div className="h-32 col-span-2 bg-white/5 rounded-lg" />
                  </div>
               </motion.div>

               {/* Front Layer (Main Dashboard) */}
               <motion.div 
                 style={{ x: frontLayerX, y: frontLayerY, z: 20 }}
                 initial={{ opacity: 0, x: -50, y: 20 }}
                 animate={{ opacity: 1, x: 0, y: 0 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 className="absolute top-10 left-0 w-full h-full bg-[#0A0A0A] rounded-xl border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col"
               >
                  {/* Top Bar */}
                  <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-white/[0.02]">
                     <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                           <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="w-px h-4 bg-white/10 mx-1" />
                        <div className="flex items-center gap-2 text-white/40 text-[10px] bg-white/5 px-2 py-1 rounded">
                           <Search size={10} /> Search...
                        </div>
                     </div>
                     <div className="flex gap-3 text-white/40">
                        <Bell size={14} />
                        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                     </div>
                  </div>

                  <div className="flex flex-1 overflow-hidden">
                     {/* Sidebar */}
                     <div className="w-16 border-r border-white/10 flex flex-col items-center py-4 gap-4 bg-white/[0.01]">
                        <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500"><Activity size={18} /></div>
                        <div className="p-2 rounded-lg text-white/40"><BarChart3 size={18} /></div>
                        <div className="p-2 rounded-lg text-white/40"><Users size={18} /></div>
                        <div className="p-2 rounded-lg text-white/40 mt-auto"><Settings size={18} /></div>
                     </div>

                     {/* Main Content */}
                     <div className="flex-1 p-6 relative">
                        <div className="flex justify-between items-end mb-6">
                           <div>
                              <div className="text-[10px] text-white/40 font-bold uppercase tracking-wider mb-1">Total Revenue</div>
                              <div className="text-2xl font-bold text-white">$124,500.00</div>
                           </div>
                           <div className="text-xs text-green-500 font-bold bg-green-500/10 px-2 py-1 rounded">+12.5%</div>
                        </div>

                        {/* Animated Chart */}
                        <div className="h-40 w-full relative mb-6">
                           <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                              {/* Grid Lines */}
                              <line x1="0" y1="0%" x2="100%" y2="0%" stroke="rgba(255,255,255,0.05)" />
                              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.05)" />
                              <line x1="0" y1="100%" x2="100%" y2="100%" stroke="rgba(255,255,255,0.05)" />
                              
                              {/* Chart Path */}
                              <motion.path 
                                 d="M0 100 Q 50 80 100 40 T 200 60 T 300 20"
                                 fill="none"
                                 stroke="#3B82F6"
                                 strokeWidth="2"
                                 initial={{ pathLength: 0 }}
                                 animate={{ pathLength: 1 }}
                                 transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
                              />
                              {/* Area Fill */}
                              <motion.path 
                                 d="M0 100 Q 50 80 100 40 T 200 60 T 300 20 V 160 H 0 Z"
                                 fill="url(#chartGradient)"
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 0.5 }}
                                 transition={{ duration: 1, delay: 0.5 }}
                              />
                              <defs>
                                 <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                                 </linearGradient>
                              </defs>
                           </svg>
                        </div>

                        {/* Recent Activity List */}
                        <div className="space-y-3">
                           {[1, 2].map(i => (
                              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                                 <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-white/10" />
                                    <div className="space-y-1">
                                       <div className="h-2 w-20 bg-white/20 rounded" />
                                       <div className="h-1.5 w-12 bg-white/10 rounded" />
                                    </div>
                                 </div>
                                 <div className="h-2 w-8 bg-white/10 rounded" />
                              </div>
                           ))}
                        </div>

                        {/* Floating Interaction Cursor */}
                        <motion.div 
                           className="absolute z-20 pointer-events-none"
                           animate={{ 
                              x: [50, 200, 200, 50],
                              y: [100, 50, 150, 100],
                           }}
                           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        >
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                              <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z" fill="black" stroke="white" strokeWidth="1.5"/>
                           </svg>
                        </motion.div>

                     </div>
                  </div>
               </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SaasPlatformPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500 selection:text-white">
      <SaasHero />
      <WhyChooseUs />
      <WebDesignTechStack />
    </div>
  );
};

export default SaasPlatformPage;

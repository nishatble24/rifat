
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, BarChart3, Users, Settings, Bell, Search, Activity, CheckCircle2, MoreHorizontal, Filter, Download, ChevronDown, Layout, Database, Lock, MousePointer2, CreditCard, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';
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

// --- EXPERTISE HOTSPOT SECTION ---

const HOTSPOTS = [
  {
    id: 1,
    title: "Navigation & IA",
    description: "Complex hierarchies flattened into intuitive, scalable navigation systems.",
    position: { top: '50%', left: '8%' },
    targetArea: "sidebar",
    icon: Layout,
    label: "IA & Nav"
  },
  {
    id: 2,
    title: "Data Visualization",
    description: "Charts and metrics designed for instant comprehension and decision making.",
    position: { top: '35%', left: '60%' },
    targetArea: "chart",
    icon: BarChart3,
    label: "Analytics"
  },
  {
    id: 3,
    title: "Table Design",
    description: "Powerful data grids with filtering, sorting, and bulk actions users master quickly.",
    position: { top: '80%', left: '55%' },
    targetArea: "table",
    icon: Database,
    label: "Data Tables"
  },
  {
    id: 4,
    title: "Role-Based Access",
    description: "Adaptive interfaces that transform based on user permissions and roles.",
    position: { top: '6%', left: '92%' },
    targetArea: "header",
    icon: Lock,
    label: "Security"
  },
   {
    id: 5,
    title: "System Config",
    description: "Deep settings made manageable through progressive disclosure patterns.",
    position: { top: '92%', left: '8%' },
    targetArea: "settings",
    icon: Settings,
    label: "Settings"
  },
];

const SaasExpertise: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Auto-activate first hotspot when scrolled into view
  useEffect(() => {
    if (isInView && activeId === null) {
      const timer = setTimeout(() => setActiveId(1), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#080808]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-24">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 block">Platform Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">We Know SaaS Inside Out</h2>
          <p className="text-white-dim text-lg">Every feature. Every edge case. Designed for scale.</p>
        </AnimatedSection>

        <div className="relative">
          
          {/* Dashboard Visual Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/5] md:aspect-[16/9] shadow-2xl flex flex-col group select-none"
          >
             
             {/* --- DASHBOARD MOCKUP UI --- */}
             {/* NOTE: We separate the UI into an inner container with overflow-hidden to clip content, 
                 while keeping the main container free so tooltips can extend outside boundaries. */}
             
             <div className="absolute inset-0 bg-[#0A0A0A] rounded-2xl border border-white/10 overflow-hidden flex flex-col">
                 
                 {/* Header */}
                 <motion.div 
                   className={`h-16 border-b border-white/10 flex items-center justify-between px-6 transition-all duration-500 bg-[#0A0A0A] z-20 ${activeId && activeId !== 4 ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}
                 >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-500 flex items-center justify-center"><Activity size={18} /></div>
                      <div className="w-px h-6 bg-white/10" />
                      <div className="text-sm font-medium text-white/50">Dashboard / Analytics</div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="relative hidden md:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                          <Search size={14} className="text-white/40" />
                          <span className="text-xs text-white/40">Search clients...</span>
                       </div>
                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border border-white/20 shadow-lg flex items-center justify-center text-[10px] font-bold">JD</div>
                    </div>
                 </motion.div>

                 <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <motion.div 
                      className={`w-20 border-r border-white/10 flex flex-col items-center py-6 gap-6 bg-white/[0.01] transition-all duration-500 z-10 ${activeId && activeId !== 1 && activeId !== 5 ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}
                    >
                       <div className="group/icon relative">
                          <div className="p-3 rounded-xl bg-blue-600/10 text-blue-500"><Layout size={20} /></div>
                          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none">Dashboard</div>
                       </div>
                       <div className="group/icon relative">
                          <div className="p-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-colors"><Users size={20} /></div>
                       </div>
                       <div className="group/icon relative">
                          <div className="p-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-colors"><Database size={20} /></div>
                       </div>
                       <div className="group/icon relative">
                          <div className="p-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-colors"><CreditCard size={20} /></div>
                       </div>
                       
                       <div className="mt-auto group/icon relative">
                          <div className="p-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-colors"><Settings size={20} /></div>
                       </div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="flex-1 p-6 md:p-10 bg-[#080808] relative overflow-hidden flex flex-col">
                       
                       {/* KPI Grid - Realistic Data */}
                       <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-500 ${activeId ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}>
                          
                          {/* KPI 1 */}
                          <div className="bg-[#111] border border-white/5 p-5 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-3 opacity-20"><Users size={40} /></div>
                             <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider mb-2">Active Users</div>
                             <div>
                                <div className="text-2xl font-bold text-white mb-1">24,593</div>
                                <div className="flex items-center gap-1.5">
                                   <span className="text-xs text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
                                      <ArrowUpRight size={10} /> 12%
                                   </span>
                                   <span className="text-[10px] text-white/30">vs last month</span>
                                </div>
                             </div>
                          </div>

                          {/* KPI 2 */}
                          <div className="bg-[#111] border border-white/5 p-5 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-3 opacity-20"><PieChart size={40} /></div>
                             <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider mb-2">Churn Rate</div>
                             <div>
                                <div className="text-2xl font-bold text-white mb-1">1.2%</div>
                                <div className="flex items-center gap-1.5">
                                   <span className="text-xs text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
                                      <ArrowDownRight size={10} /> 0.4%
                                   </span>
                                   <span className="text-[10px] text-white/30">improvement</span>
                                </div>
                             </div>
                          </div>

                          {/* KPI 3 */}
                          <div className="bg-[#111] border border-white/5 p-5 rounded-xl flex flex-col justify-between h-32 relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-3 opacity-20"><CreditCard size={40} /></div>
                             <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider mb-2">MRR</div>
                             <div>
                                <div className="text-2xl font-bold text-white mb-1">$124.5k</div>
                                <div className="flex items-center gap-1.5">
                                   <span className="text-xs text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded font-bold flex items-center gap-1">
                                      <ArrowUpRight size={10} /> 8.4%
                                   </span>
                                   <span className="text-[10px] text-white/30">growth</span>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* Main Chart Area */}
                       <motion.div 
                         className={`h-64 bg-[#111] border border-white/5 rounded-xl p-6 mb-8 relative transition-all duration-500 ${activeId && activeId !== 2 ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}
                       >
                          <div className="flex justify-between items-center mb-6">
                             <div>
                                <h4 className="text-sm font-bold text-white">Revenue Overview</h4>
                                <div className="text-[10px] text-white/40">Jan 01 - Dec 31, 2024</div>
                             </div>
                             <div className="flex gap-2">
                                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded text-[10px] text-white/60">
                                   <div className="w-2 h-2 rounded-full bg-blue-500" /> Current
                                </div>
                                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded text-[10px] text-white/60">
                                   <div className="w-2 h-2 rounded-full bg-white/20" /> Previous
                                </div>
                             </div>
                          </div>
                          
                          <div className="absolute inset-x-6 bottom-6 top-20 flex items-end gap-2 md:gap-4">
                             {[30, 50, 45, 70, 60, 85, 80, 55, 65, 90, 75, 50, 60, 40, 70].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full group/bar relative">
                                   <div className="w-full bg-blue-600 rounded-t-sm transition-all duration-1000 relative hover:bg-blue-500" style={{ height: `${h}%` }}>
                                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                         ${h}k
                                      </div>
                                   </div>
                                </div>
                             ))}
                          </div>
                          
                          {/* Y-Axis Lines (Decorative) */}
                          <div className="absolute inset-x-6 top-20 bottom-6 pointer-events-none flex flex-col justify-between">
                             <div className="w-full h-px bg-white/5" />
                             <div className="w-full h-px bg-white/5" />
                             <div className="w-full h-px bg-white/5" />
                             <div className="w-full h-px bg-white/5" />
                          </div>
                       </motion.div>

                       {/* Data Table */}
                       <motion.div 
                         className={`bg-[#111] border border-white/5 rounded-xl overflow-hidden flex-1 transition-all duration-500 ${activeId && activeId !== 3 ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}
                       >
                          <div className="h-10 border-b border-white/5 flex items-center px-6 gap-4 bg-white/[0.02] text-[10px] text-white/40 uppercase font-bold tracking-wider">
                             <div className="w-1/3">Company</div>
                             <div className="w-1/6">Status</div>
                             <div className="w-1/4">Amount</div>
                             <div className="w-1/4 text-right">Date</div>
                          </div>
                          {[
                             { name: "Acme Corp", status: "Active", amount: "$12,500", date: "Oct 24" },
                             { name: "Stark Ind", status: "Pending", amount: "$4,200", date: "Oct 22" },
                             { name: "Wayne Ent", status: "Active", amount: "$8,900", date: "Oct 21" },
                             { name: "Cyberdyne", status: "Cancelled", amount: "$1,100", date: "Oct 19" },
                          ].map((row, i) => (
                             <div key={i} className="h-12 border-b border-white/5 flex items-center px-6 gap-4 last:border-0 hover:bg-white/[0.02] transition-colors group/row">
                                <div className="w-1/3 flex items-center gap-3">
                                   <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/60">{row.name.charAt(0)}</div>
                                   <span className="text-xs text-white/80 font-medium">{row.name}</span>
                                </div>
                                <div className="w-1/6">
                                   <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                                      row.status === 'Active' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                      row.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                      'bg-red-500/10 text-red-500 border-red-500/20'
                                   }`}>
                                      {row.status}
                                   </span>
                                </div>
                                <div className="w-1/4 text-xs text-white/60 font-mono">{row.amount}</div>
                                <div className="w-1/4 text-right text-xs text-white/40">{row.date}</div>
                             </div>
                          ))}
                       </motion.div>

                    </div>
                 </div>
             </div>

             {/* --- HOTSPOTS OVERLAY (Outside overflow-hidden) --- */}
             <div className="absolute inset-0 pointer-events-none md:pointer-events-auto">
                {HOTSPOTS.map((spot) => {
                  const isActive = activeId === spot.id;
                  
                  return (
                    <div 
                      key={spot.id}
                      className="absolute z-30"
                      style={{ top: spot.position.top, left: spot.position.left }}
                    >
                       <button
                         onClick={() => setActiveId(isActive ? null : spot.id)}
                         onMouseEnter={() => setActiveId(spot.id)}
                         className="relative group focus:outline-none"
                         aria-label={`View ${spot.title} details`}
                       >
                          {/* Pulse Effect */}
                          <span className={`absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping ${isActive ? 'paused' : 'running'}`} />
                          
                          {/* Dot */}
                          <div className={`relative w-4 h-4 md:w-6 md:h-6 rounded-full border-2 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] ${isActive ? 'bg-white border-blue-500 scale-125' : 'bg-blue-500 border-white hover:scale-110'}`} />
                          
                          {/* Connecting Line (Optional, for style) */}
                          <AnimatePresence>
                            {isActive && (
                               <motion.div 
                                 initial={{ opacity: 0, height: 0 }}
                                 animate={{ opacity: 1, height: 40 }}
                                 exit={{ opacity: 0, height: 0 }}
                                 className="absolute top-full left-1/2 w-px bg-blue-500/50 -translate-x-1/2 origin-top"
                               />
                            )}
                          </AnimatePresence>
                       </button>

                       {/* Detail Card (Popover) */}
                       <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 20, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className={`absolute w-64 md:w-72 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-xl p-5 shadow-2xl z-40
                                ${spot.position.left > '50%' ? 'right-0 -mr-2 md:-mr-4' : 'left-0 -ml-2 md:-ml-4'}
                                pointer-events-auto
                              `}
                            >
                               <div className="flex items-start gap-3 mb-3">
                                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                     {React.createElement(spot.icon, { size: 16 })}
                                  </div>
                                  <div>
                                     <h4 className="text-white font-bold text-sm leading-tight">{spot.title}</h4>
                                     <span className="text-[10px] text-blue-400 uppercase font-bold tracking-wider">{spot.label}</span>
                                  </div>
                               </div>
                               <p className="text-white-dim text-xs leading-relaxed border-t border-white/10 pt-3">
                                  {spot.description}
                               </p>
                            </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                  )
                })}
             </div>

             {/* Overlay Gradient for Mobile Readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent md:hidden pointer-events-none" />

          </motion.div>

          {/* Mobile List View (Alternative to hotspots on small screens) */}
          <div className="md:hidden mt-8 grid grid-cols-1 gap-4">
             {HOTSPOTS.map((spot) => (
                <div key={spot.id} className="bg-[#111] border border-white/10 rounded-xl p-5 flex gap-4">
                   <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 border border-blue-500/20">
                      {React.createElement(spot.icon, { size: 20 })}
                   </div>
                   <div>
                      <h4 className="text-white font-bold mb-1">{spot.title}</h4>
                      <p className="text-white-dim text-sm leading-relaxed">{spot.description}</p>
                   </div>
                </div>
             ))}
          </div>

        </div>

        {/* Closing */}
        <div className="mt-16 text-center">
           <p className="text-lg text-white mb-6 font-medium">Ready to simplify your complexity?</p>
           <a 
             href="https://cal.com/flowrax/project-discussion" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors group"
           >
              Book a Platform Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </div>

      </div>
    </section>
  );
};

const SaasPlatformPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500 selection:text-white">
      <SaasHero />
      <SaasExpertise />
      <WhyChooseUs />
      <WebDesignTechStack />
    </div>
  );
};

export default SaasPlatformPage;

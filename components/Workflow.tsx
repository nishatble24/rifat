
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, GitBranch, Zap, CheckCircle2, Search, ShieldCheck } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

// --- VISUAL COMPONENTS ---

const StrategyVisual = () => (
  <div className="relative md:absolute right-0 top-0 w-full md:w-1/2 h-48 md:h-full min-h-[200px] overflow-hidden flex items-center justify-center p-4 mt-6 md:mt-0">
    <div className="relative w-full max-w-[300px] aspect-video">
       {/* Connecting Lines */}
       <svg className="absolute inset-0 w-full h-full overflow-visible">
          <motion.path 
             d="M 50 40 L 250 80" 
             stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4"
             initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
          />
          <motion.path 
             d="M 50 140 L 250 80" 
             stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4"
             initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }}
          />
          <motion.path 
             d="M 50 40 L 50 140" 
             stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4"
             initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4 }}
          />
       </svg>

       {/* Floating Nodes */}
       <motion.div 
         animate={{ y: [-5, 5, -5] }} 
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-0 left-0 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-2 shadow-xl"
       >
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <span className="text-[10px] font-mono text-white/70">Research</span>
       </motion.div>

       <motion.div 
         animate={{ y: [5, -5, 5] }} 
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         className="absolute bottom-0 left-0 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-2 shadow-xl"
       >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-[10px] font-mono text-white/70">Data</span>
       </motion.div>

       <motion.div 
         animate={{ scale: [1, 1.05, 1] }} 
         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#111] border border-primary/30 p-4 rounded-xl flex flex-col items-center gap-2 shadow-2xl z-10"
       >
          <Search size={20} className="text-primary" />
          <span className="text-xs font-bold text-white">Strategy</span>
       </motion.div>
    </div>
  </div>
);

const DevVisual = () => (
  <div className="w-full h-40 bg-[#0F0F0F] rounded-xl border border-white/10 p-4 font-mono text-[10px] md:text-xs flex flex-col gap-2 relative overflow-hidden shadow-inner">
     {/* Terminal Header */}
     <div className="flex gap-1.5 mb-2 opacity-50">
       <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
       <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
     </div>
     
     {/* Code Lines */}
     <div className="space-y-1.5 opacity-80">
        <div className="flex gap-2">
           <span className="text-purple-400">const</span>
           <span className="text-blue-400">App</span>
           <span className="text-white">=</span>
           <span className="text-yellow-300">()</span>
           <span className="text-purple-400">=&gt;</span>
           <span className="text-white">{`{`}</span>
        </div>
        <div className="pl-4 flex gap-2">
           <span className="text-purple-400">return</span>
           <span className="text-white">(</span>
        </div>
        <div className="pl-8 flex gap-2">
           <span className="text-gray-500">&lt;</span>
           <span className="text-green-400">Future</span>
           <span className="text-blue-300">mode</span>
           <span className="text-white">=</span>
           <span className="text-orange-300">"on"</span>
           <span className="text-gray-500">/&gt;</span>
        </div>
        <div className="pl-4 text-white">);</div>
        <div className="text-white">{'}'}</div>
     </div>

     {/* Build Success Badge */}
     <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-auto self-start px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 flex items-center gap-2"
     >
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        Build Successful
     </motion.div>
  </div>
);

const QAVisual = () => (
  <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-xl bg-[#0F0F0F] border border-white/5">
     {/* Radar Grid */}
     <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />
     
     {/* Radar Sweep */}
     <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 bg-gradient-to-t from-transparent via-green-500/5 to-transparent rounded-full opacity-50"
        style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(16, 185, 129, 0.1) 60deg, transparent 60deg)' }}
     />

     {/* Central Shield */}
     <div className="relative z-10 w-16 h-16 bg-[#0A0A0A] rounded-full border border-green-500/30 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
        <ShieldCheck size={32} className="text-green-500" />
     </div>

     {/* Scanning Particles */}
     {[...Array(3)].map((_, i) => (
        <motion.div
           key={i}
           className="absolute w-1 h-1 bg-green-400 rounded-full"
           initial={{ opacity: 0 }}
           animate={{ opacity: [0, 1, 0] }}
           transition={{ duration: 2, delay: i * 0.7, repeat: Infinity }}
           style={{ 
              top: `${20 + Math.random() * 60}%`, 
              left: `${20 + Math.random() * 60}%` 
           }}
        />
     ))}
  </div>
);

const MockAppContent = () => (
  <div className="p-3 space-y-3 pb-8">
     {/* Fake Header */}
     <div className="flex justify-between items-center mb-4">
        <div className="w-6 h-6 bg-white/10 rounded-full" />
        <div className="w-16 h-3 bg-white/10 rounded" />
        <div className="w-6 h-6 bg-white/10 rounded-full" />
     </div>
     {/* Fake Hero */}
    <div className="w-full h-24 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-xl border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 skew-x-12 -translate-x-full animate-shine" />
    </div>
     {/* Fake List */}
    <div className="space-y-2">
      <div className="w-3/4 h-2 bg-neutral-800 rounded" />
      <div className="w-1/2 h-2 bg-neutral-800 rounded" />
    </div>
    <div className="flex gap-2 pt-2">
      <div className="w-8 h-8 rounded-lg bg-neutral-800" />
      <div className="flex-1 space-y-1.5 py-1">
        <div className="w-full h-1.5 bg-neutral-800 rounded" />
        <div className="w-5/6 h-1.5 bg-neutral-800 rounded" />
      </div>
    </div>
     <div className="w-full h-20 bg-neutral-800 rounded-xl mt-2" />
  </div>
);

const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="process">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Workflow</h2>
          <p className="text-white-dim text-lg max-w-2xl mx-auto">
            From chaos to clarity. A structured approach to building world-class products.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Strategy (Span 2) */}
          <AnimatedSection className="md:col-span-2 rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden group hover:border-primary/30 transition-colors min-h-[250px]">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 border border-purple-500/20">
                 <GitBranch size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">1. Strategy & Research</h3>
              <p className="text-white-dim mb-6">We map out the user journey, define personas, and structure the information architecture before touching a single pixel.</p>
              
              <div className="flex gap-2">
                 {['Discovery', 'User Flows', 'Wireframing'].map((tag) => (
                   <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white border border-white/5">{tag}</span>
                 ))}
              </div>
            </div>
            
            <StrategyVisual />
            
          </AnimatedSection>

          {/* Card 2: Visual Design (Span 1) - Modified to be shorter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 rounded-3xl bg-[#0A0A0A] border border-white/10 p-5 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">2. Visual Design</h3>
                <p className="text-white-dim text-sm mb-4">Pixel-perfect designs ready for any screen size.</p>
                
                {/* Phone Mockup - Shortened/Clipped */}
                <div className="relative w-full mt-auto h-28 overflow-hidden flex justify-center">
                  <div className="w-full max-w-[200px] bg-black border-[4px] border-[#1a1a1a] rounded-[2rem] overflow-hidden relative shadow-2xl ring-1 ring-white/10 transform translate-y-4">
                     {/* Notch */}
                     <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />
                     
                     {/* Scrolling Content */}
                     <div className="w-full h-full bg-[#050505]">
                         <motion.div 
                           animate={{ y: ["0%", "-50%"] }}
                           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                           className="w-full pt-8 px-2"
                         >
                            <MockAppContent />
                            <MockAppContent />
                         </motion.div>
                     </div>
                  </div>
                  {/* Fade Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
                </div>
             </div>
             
             {/* Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Card 3: Development (Span 2) - Expanded to fill row */}
          <AnimatedSection delay={0.2} className="md:col-span-2 rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 group hover:border-blue-500/30 transition-colors flex flex-col justify-between">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div className="max-w-sm">
                   <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 mb-4">
                       <Zap size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">3. Development</h3>
                   <p className="text-white-dim text-sm">Clean code, fast load times, and SEO optimized architecture. We build on modern stacks like React and Next.js for maximum performance.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <DevVisual />
                </div>
             </div>
          </AnimatedSection>
          
           {/* Card 4: Quality Assurance (Span 1) */}
          <AnimatedSection delay={0.3} className="md:col-span-1 rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 group hover:border-green-500/30 transition-colors flex flex-col">
             <div className="mb-6">
               <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                   <CheckCircle2 size={24} />
               </div>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">4. Quality Assurance</h3>
             <p className="text-white-dim text-sm mb-6">Rigorous testing across devices to ensure perfection.</p>
             <div className="mt-auto">
                <QAVisual />
             </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Workflow;

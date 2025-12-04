
import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Play, FileCode, Smartphone, Zap, Search, Map, Target } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const Workflow: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">From Concept to Code.</h2>
          <p className="text-white-dim text-base md:text-lg max-w-2xl">
             Our streamlined workflow ensures transparency, speed, and pixel-perfect execution at every stage.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]">
          
          {/* Card 1: Discovery & Strategy (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              borderColor: "rgba(16, 185, 129, 0.8)",
              boxShadow: "0 0 30px -5px rgba(16, 185, 129, 0.2)"
            }}
            className="md:col-span-2 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-md p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[300px]"
          >
            <div className="relative z-20 h-full flex flex-col justify-between pointer-events-none">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/5 mb-4 group-hover:scale-110 transition-transform">
                <Map size={24} />
              </div>
              <div className="relative z-20">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Discovery & Strategy</h3>
                <p className="text-white-dim text-sm md:text-base max-w-xs md:max-w-md">Mapping out the user journey and information architecture before a single pixel is placed.</p>
              </div>
            </div>

            {/* Background Node Graph Visualization */}
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute inset-0 bg-grid-white opacity-[0.05]" />
               
               {/* Visual Wrapper */}
               <div className="absolute top-1/2 right-0 md:right-12 -translate-y-1/2 w-64 h-48 scale-75 md:scale-100 origin-right opacity-60 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                   
                   {/* Central Node */}
                   <motion.div 
                     initial={{ scale: 0.8 }}
                     whileInView={{ scale: 1 }}
                     transition={{ duration: 0.5 }}
                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center backdrop-blur-md z-10 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]"
                   >
                      <div className="text-center">
                        <div className="text-[10px] uppercase font-bold text-primary tracking-wider">Core</div>
                        <div className="text-xs font-bold text-white">Goal</div>
                      </div>
                   </motion.div>

                   {/* Connector Lines */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                      <motion.path d="M 128 96 L 30 40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" 
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
                      <motion.path d="M 128 96 L 220 50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} />
                      <motion.path d="M 128 96 L 128 160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
                   </svg>

                   {/* Node 1: Research */}
                   <motion.div 
                     animate={{ y: [0, -8, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-0 left-0 w-28 p-2 rounded-lg bg-neutral-900/90 border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-2"
                   >
                      <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-purple-400"><Search size={12} /></div>
                      <span className="text-xs font-medium text-white-dim">Research</span>
                   </motion.div>

                   {/* Node 2: Analysis */}
                   <motion.div 
                     animate={{ y: [0, 8, 0] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                     className="absolute top-4 right-0 w-28 p-2 rounded-lg bg-neutral-900/90 border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-2"
                   >
                      <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400"><Target size={12} /></div>
                      <span className="text-xs font-medium text-white-dim">Definition</span>
                   </motion.div>

                   {/* Node 3: Roadmap */}
                   <motion.div 
                     animate={{ y: [0, -5, 0] }}
                     transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                     className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 p-2 rounded-lg bg-neutral-900/90 border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-2"
                   >
                      <div className="w-6 h-6 rounded bg-yellow-500/20 flex items-center justify-center text-yellow-400"><GitBranch size={12} /></div>
                      <span className="text-xs font-medium text-white-dim">Roadmap</span>
                   </motion.div>
                </div>
            </div>
          </motion.div>

          {/* Card 2: High-Fidelity UI (Spans 1 col, 2 rows - Tall) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ 
              borderColor: "rgba(16, 185, 129, 0.8)",
              boxShadow: "0 0 30px -5px rgba(16, 185, 129, 0.2)"
            }}
            className="md:col-span-1 md:row-span-2 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-md p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[400px] md:min-h-0"
          >
             <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/5 mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">High-Fidelity UI</h3>
                <p className="text-white-dim text-sm mb-8">Pixel-perfect designs ready for any screen size.</p>
                
                {/* Phone Mockup with Scroll Animation */}
                <div className="flex-1 relative flex justify-center">
                  <div className="w-48 h-full bg-black border-4 border-neutral-800 rounded-t-3xl overflow-hidden relative shadow-2xl">
                     {/* Notch */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-800 rounded-b-xl z-20" />
                     
                     {/* Scrolling Content */}
                     <div className="w-full animate-[scroll_5s_linear_infinite] hover:pause">
                        {/* Mock App Content */}
                        <div className="h-32 bg-neutral-900 p-4 pt-8">
                           <div className="h-2 w-8 bg-white/20 rounded mb-4" />
                           <div className="h-6 w-24 bg-white rounded mb-2" />
                           <div className="h-3 w-32 bg-white/30 rounded" />
                        </div>
                        <div className="p-4 space-y-3 bg-neutral-950 min-h-[400px]">
                           {[1,2,3,4].map(i => (
                             <div key={i} className="h-24 rounded-xl bg-neutral-900 border border-white/5 p-3 flex gap-3">
                                <div className="w-12 h-12 rounded-lg bg-white/5" />
                                <div className="space-y-2 flex-1">
                                   <div className="h-2 w-full bg-white/10 rounded" />
                                   <div className="h-2 w-2/3 bg-white/10 rounded" />
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
                </div>
             </div>
             
             {/* Gradient Overlay at bottom of phone container to blend */}
             <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none z-20" />
          </motion.div>

          {/* Card 3: Prototyping */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ 
              borderColor: "rgba(16, 185, 129, 0.8)",
              boxShadow: "0 0 30px -5px rgba(16, 185, 129, 0.2)"
            }}
            className="md:col-span-1 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-md p-6 md:p-8 relative overflow-hidden group transition-all duration-300 flex flex-col justify-between min-h-[300px]"
          >
             <div className="relative z-20 pointer-events-none">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/5 mb-4 group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Prototyping</h3>
                <p className="text-white-dim text-sm">Interactive flows that feel like the real thing.</p>
             </div>

             {/* Figma Connection Style Visual */}
             <div className="absolute inset-0 overflow-hidden flex items-end justify-center pb-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="relative w-48 h-32">
                     {/* Screen A */}
                     <motion.div 
                       className="absolute left-0 bottom-4 w-20 h-24 bg-neutral-800 border border-white/10 rounded-lg p-2 shadow-lg z-10"
                       whileHover={{ scale: 1.05 }}
                     >
                        <div className="w-full h-2 bg-white/10 rounded mb-2" />
                        <div className="w-2/3 h-2 bg-white/10 rounded mb-4" />
                        <div className="w-full h-6 bg-primary/20 rounded border border-primary/30 flex items-center justify-center">
                           <div className="w-8 h-1 bg-primary/50 rounded-full" />
                        </div>
                        {/* Connection Node */}
                        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-blue-500 rounded-full border border-white z-20" />
                     </motion.div>

                     {/* Screen B */}
                     <motion.div 
                       className="absolute right-0 top-0 w-20 h-24 bg-neutral-800 border border-white/10 rounded-lg p-2 shadow-lg"
                       initial={{ opacity: 0.5, x: 10 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.5, duration: 0.5 }}
                     >
                        <div className="w-full h-full bg-white/5 rounded flex items-center justify-center">
                           <Zap size={16} className="text-white/20" />
                        </div>
                     </motion.div>

                     {/* Connection Line */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                        <motion.path 
                           d="M 80 80 C 110 80, 110 40, 130 40" 
                           fill="none" 
                           stroke="#3B82F6" 
                           strokeWidth="2" 
                           strokeDasharray="4 4"
                           initial={{ pathLength: 0, opacity: 0 }}
                           whileInView={{ pathLength: 1, opacity: 1 }}
                           transition={{ duration: 1, delay: 0.5 }}
                        />
                     </svg>

                     {/* Cursor Animation */}
                     <motion.div
                        className="absolute z-30 pointer-events-none"
                        initial={{ x: 100, y: 100, opacity: 0 }}
                        whileInView={{ 
                           x: [100, 50, 50], // Move to button
                           y: [100, 90, 90], 
                           opacity: [0, 1, 1],
                           scale: [1, 1, 0.9, 1] // Click effect
                        }}
                        transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
                     >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                           <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z" fill="black" stroke="white" strokeWidth="1.5"/>
                        </svg>
                     </motion.div>
                 </div>
             </div>
          </motion.div>

          {/* Card 4: Handoff */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ 
              borderColor: "rgba(16, 185, 129, 0.8)",
              boxShadow: "0 0 30px -5px rgba(16, 185, 129, 0.2)"
            }}
            className="md:col-span-1 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-md p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[300px]"
          >
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/5 mb-4 group-hover:scale-110 transition-transform">
                     <FileCode size={24} />
                   </div>
                   <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Dev Handoff</h3>
                </div>

                {/* Code Block Visual */}
                <div className="bg-black/80 rounded-lg p-3 text-[10px] font-mono border border-white/5 w-full shadow-inner opacity-80 group-hover:opacity-100 transition-opacity">
                   <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                   </div>
                   <div className="text-purple-400">export const <span className="text-yellow-300">Button</span> = () =&gt; (</div>
                   <div className="pl-2 text-blue-300">&lt;button className="</div>
                   <div className="pl-4 text-green-300">px-4 py-2 bg-emerald-500</div>
                   <div className="pl-4 text-green-300">rounded-lg text-white</div>
                   <div className="pl-2 text-blue-300">"&gt;</div>
                   <div className="pl-4 text-white">Click Me</div>
                   <div className="pl-2 text-blue-300">&lt;/button&gt;</div>
                   <div className="text-purple-400">);</div>
                </div>
             </div>
          </motion.div>

        </div>
        
        {/* Style for the scrolling animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
        `}} />
      </div>
    </section>
  );
};

export default Workflow;

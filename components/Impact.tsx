
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';
import { TrendingUp, ArrowUp } from 'lucide-react';

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

const Impact: React.FC = () => {
  return (
    <section className="py-24 relative">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

       <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection className="mb-12 text-center">
             <h2 className="text-3xl md:text-5xl font-bold mb-4">Measurable Impact</h2>
             <p className="text-white-dim text-lg">We don't just design pretty screens. We drive numbers.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {/* Main Dashboard Container */}
            <div className="rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl shadow-2xl overflow-hidden relative">
               {/* Grid Pattern Background */}
               <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" style={{ backgroundSize: '30px 30px' }} />
               
               {/* Dashboard Header */}
               <div className="h-12 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                     <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="font-mono text-xs text-white/40 tracking-widest uppercase">Analytics View</div>
                  <div className="w-4" />
               </div>

               {/* Widgets Container */}
               <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  
                  {/* Widget 1: Graph */}
                  <div className="bg-black/40 border border-white/10 rounded-xl p-6 flex flex-col justify-between min-h-[250px] relative overflow-hidden group">
                     <div className="z-10 relative">
                        <h4 className="text-white-dim text-sm font-medium mb-1">Conversion Rate</h4>
                        <div className="text-3xl font-mono font-bold text-white flex items-center gap-2">
                           +<Counter value={145} />%
                           <TrendingUp className="text-primary w-5 h-5" />
                        </div>
                     </div>
                     
                     {/* SVG Graph */}
                     <div className="absolute bottom-0 left-0 right-0 h-32 px-2">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                           <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                 <stop offset="0%" stopColor="#01D0F5" stopOpacity="0.2" />
                                 <stop offset="100%" stopColor="#01D0F5" stopOpacity="0" />
                              </linearGradient>
                              
                              {/* Shimmer Gradient */}
                              <linearGradient id="shimmerGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">
                                <stop offset="0" stopColor="transparent" />
                                <stop offset="0.5" stopColor="white" stopOpacity="1" />
                                <stop offset="1" stopColor="transparent" />
                              </linearGradient>
                              
                              <mask id="shimmerMask">
                                <motion.rect 
                                   x="-50" y="0" width="50" height="50" 
                                   fill="url(#shimmerGradient)"
                                   animate={{ x: [0, 150] }}
                                   transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
                                />
                              </mask>
                           </defs>
                           
                           {/* Fill Area */}
                           <motion.path 
                              d="M0 50 L 10 45 L 20 48 L 30 35 L 40 40 L 50 25 L 60 30 L 70 15 L 80 20 L 90 5 L 100 10 V 50 H 0 Z"
                              fill="url(#gradient)"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 1 }}
                           />
                           
                           {/* Main Line with Glow */}
                           <motion.path
                              d="M0 50 L 10 45 L 20 48 L 30 35 L 40 40 L 50 25 L 60 30 L 70 15 L 80 20 L 90 5 L 100 10"
                              fill="none"
                              stroke="#01D0F5"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              filter="drop-shadow(0 0 4px #01D0F5)"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                           />
                           
                           {/* Shimmer Overlay Line */}
                           <motion.path
                              d="M0 50 L 10 45 L 20 48 L 30 35 L 40 40 L 50 25 L 60 30 L 70 15 L 80 20 L 90 5 L 100 10"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              mask="url(#shimmerMask)"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 1.5, duration: 0.5 }}
                           />
                        </svg>
                     </div>
                  </div>

                  {/* Widget 2: ROI Stat */}
                  <div className="bg-black/40 border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[250px]">
                     <div className="absolute inset-0 bg-primary/5 rounded-xl animate-pulse" />
                     <h4 className="text-white-dim text-sm font-medium mb-4 relative z-10">Average ROI</h4>
                     <div className="text-5xl md:text-6xl font-mono font-bold text-white tracking-tighter relative z-10 text-shadow-neon">
                        <Counter value={300} />%
                     </div>
                     <div className="text-primary text-xs font-mono mt-2 flex items-center gap-1 relative z-10">
                        <ArrowUp size={12} />
                        <span>Year over Year</span>
                     </div>
                  </div>

                  {/* Widget 3: Comparison */}
                  <div className="bg-black/40 border border-white/10 rounded-xl p-6 flex flex-col relative min-h-[250px]">
                     <h4 className="text-white-dim text-sm font-medium mb-6">Engagement Time</h4>
                     <div className="flex-1 flex items-end justify-center gap-8 px-4">
                        {/* Before */}
                        <div className="flex flex-col items-center gap-2 w-16 group">
                           <div className="text-xs text-white-dim font-mono mb-1 group-hover:text-white transition-colors">1.2m</div>
                           <motion.div 
                              className="w-full bg-white/10 rounded-t-lg border border-white/5"
                              initial={{ height: 0 }}
                              whileInView={{ height: '30%' }}
                              transition={{ duration: 1, delay: 0.2 }}
                           />
                           <span className="text-xs text-white-dim mt-2">Before</span>
                        </div>
                        {/* After */}
                        <div className="flex flex-col items-center gap-2 w-16 group">
                           <div className="text-xs text-primary font-mono mb-1 font-bold">4.8m</div>
                           <motion.div 
                              className="w-full bg-primary rounded-t-lg shadow-[0_0_20px_-5px_rgba(1,208,245,0.5)]"
                              initial={{ height: 0 }}
                              whileInView={{ height: '80%' }}
                              transition={{ duration: 1, delay: 0.4, type: "spring" }}
                           />
                           <span className="text-xs text-primary font-bold mt-2">After</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
          </AnimatedSection>
       </div>
    </section>
  );
};

export default Impact;

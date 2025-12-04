
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MousePointer2, Palette, Layers } from 'lucide-react';

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
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        
        {/* LAYER 1: Background (Faint Geometric Pattern) */}
        <motion.div 
          style={{ x: bgMoveX, y: bgMoveY }}
          className="absolute inset-0 z-0"
        >
           <div className="absolute inset-0 bg-[#050505]" />
           <div className="absolute inset-0 bg-grid-white opacity-[0.03]" style={{ backgroundSize: '50px 50px' }} />
           
           {/* Ambient Glows */}
           <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
           <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        </motion.div>

        <div className="max-w-[90rem] mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LAYER 3: Foreground (Text Content) */}
          <motion.div 
            style={{ x: textMoveX, y: textMoveY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative z-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Palette size={14} /> UI/UX Design Services
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9] mb-8">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-blue-500 drop-shadow-[0_0_20px_rgba(1,208,245,0.3)]">
                Intuitive
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-blue-500 drop-shadow-[0_0_20px_rgba(1,208,245,0.3)]">
                Digital
              </span> <br />
              Experiences
            </h1>

            <p className="text-white-dim text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              We deconstruct complex user problems to build interface systems that are beautiful, accessible, and scientifically designed to convert.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-black font-bold rounded-full shadow-[0_0_20px_-5px_rgba(1,208,245,0.4)] hover:shadow-[0_0_30px_-5px_rgba(1,208,245,0.6)] transition-shadow flex items-center gap-2"
                >
                  Start a Project <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/work">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  View Case Studies
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* LAYER 2: Middle Layer (Glassmorphic Mockups) */}
          <div className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center perspective-[1000px]">
             {/* The Floating Composition */}
             <motion.div
               style={{ 
                 rotateX: midRotateX, 
                 rotateY: midRotateY,
                 x: midMoveX
               }}
               initial={{ opacity: 0, scale: 0.8, z: -100 }}
               animate={{ opacity: 1, scale: 1, z: 0 }}
               transition={{ duration: 1, delay: 0.1, type: "spring" }}
               className="relative w-full max-w-lg aspect-square"
             >
                {/* Abstract Design System Card (Back) */}
                <motion.div 
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ x: 40, y: -40, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl -rotate-6 z-0"
                >
                   <div className="h-2 w-20 bg-white/20 rounded mb-6" />
                   <div className="space-y-3">
                      <div className="h-8 w-full bg-white/5 rounded-lg border border-white/5" />
                      <div className="h-8 w-full bg-white/5 rounded-lg border border-white/5" />
                      <div className="h-8 w-full bg-primary/20 rounded-lg border border-primary/30" />
                   </div>
                   <div className="mt-6 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded bg-primary" />
                      <div className="h-10 rounded bg-blue-500" />
                      <div className="h-10 rounded bg-purple-500" />
                   </div>
                </motion.div>

                {/* Main Interface Mockup (Front) */}
                <motion.div 
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] z-10 flex flex-col justify-between"
                   style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px rgba(0,0,0,0.5)" }}
                >
                   {/* Mock Header */}
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                           <Layers size={14} className="text-white" />
                        </div>
                        <div className="h-2 w-16 bg-white/20 rounded-full" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10" />
                   </div>

                   {/* Mock Content */}
                   <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                            <MousePointer2 size={18} />
                         </div>
                         <div>
                            <div className="h-2 w-24 bg-white/30 rounded mb-1.5" />
                            <div className="h-1.5 w-16 bg-white/10 rounded" />
                         </div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 opacity-60">
                         <div className="w-10 h-10 rounded-lg bg-white/10" />
                         <div>
                            <div className="h-2 w-24 bg-white/20 rounded mb-1.5" />
                            <div className="h-1.5 w-16 bg-white/5 rounded" />
                         </div>
                      </div>
                   </div>

                   {/* Mock Button */}
                   <div className="mt-auto pt-6 border-t border-white/5">
                      <div className="w-full h-12 bg-primary text-black font-bold rounded-xl flex items-center justify-center text-sm shadow-[0_0_20px_-5px_rgba(1,208,245,0.4)]">
                         Confirm Action
                      </div>
                   </div>

                   {/* Glow Effect */}
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
                </motion.div>

                {/* Floating Elements (Badges) */}
                <motion.div 
                   initial={{ scale: 0, x: -50 }}
                   animate={{ scale: 1, x: 0 }}
                   transition={{ delay: 0.6, type: "spring" }}
                   className="absolute top-[20%] left-[-10%] px-4 py-2 bg-black/80 backdrop-blur border border-primary/30 rounded-lg text-primary text-xs font-mono shadow-lg z-20"
                >
                   Accessibility Score: 100
                </motion.div>
                <motion.div 
                   initial={{ scale: 0, x: 50 }}
                   animate={{ scale: 1, x: 0 }}
                   transition={{ delay: 0.7, type: "spring" }}
                   className="absolute bottom-[20%] right-[-15%] px-4 py-2 bg-black/80 backdrop-blur border border-white/10 rounded-lg text-white text-xs font-mono shadow-lg z-20"
                >
                   Design System: Active
                </motion.div>

             </motion.div>
          </div>

        </div>
      </section>
      
      {/* Placeholder for further content */}
      <section className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold mb-4">Our UI/UX Process</h2>
           <p className="text-white-dim">More content coming soon...</p>
        </div>
      </section>

    </div>
  );
};

export default UiUxDesignPage;

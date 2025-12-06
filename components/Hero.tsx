
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from 'framer-motion';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Particles from './ui/Particles';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Scroll Parallax for Video Scale
  const dashboardScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const dashboardOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  const dashboardY = useTransform(scrollY, [0, 500], [0, 100]);

  // --- 3D Tilt Logic ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [8, -8]); 
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const wordVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-start pt-28 md:pt-32 pb-12 md:pb-24 overflow-hidden bg-[#050505]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Core Staging & Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Particles Layer */}
        <div className="absolute inset-0 opacity-40">
           <Particles />
        </div>

        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />

        {/* Rotating Aurora Gradient */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,#050505_0deg,#10B9811A_120deg,#3B82F61A_240deg,#050505_360deg)] animate-[spin_60s_linear_infinite] opacity-40 blur-[100px]" />

        {/* Primary Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-[80px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* 2. Dynamic Typography */}
        <motion.div 
          className="text-center mb-10 md:mb-16 relative z-20 w-full flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={wordVariants} className="flex justify-center mb-6 md:mb-8">
              <div className="px-3 py-1.5 md:px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)] flex items-center gap-2">
                 <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
                 Global Design Agency
              </div>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col items-center gap-1 md:gap-2 mb-6 md:mb-8">
             {/* Line 1 */}
             <div className="flex flex-wrap justify-center items-baseline gap-x-2 md:gap-x-5 px-1">
                <motion.span variants={wordVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white">
                  We
                </motion.span>
                <motion.span variants={wordVariants} className="text-4xl sm:text-5xl md:text-7xl font-serif italic font-medium tracking-tight text-white-dim">
                  Design
                </motion.span>
                <motion.span variants={wordVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white">
                  Products
                </motion.span>
             </div>
             
             {/* Line 2 */}
             <div className="flex flex-wrap justify-center items-baseline gap-x-2 md:gap-x-5 px-1">
                 <motion.span variants={wordVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white">
                   That
                 </motion.span>
                 <motion.span variants={wordVariants} className="text-4xl sm:text-5xl md:text-7xl font-serif italic font-medium tracking-tight text-white-dim">
                   Drive
                 </motion.span>
                 <motion.span 
                   variants={wordVariants}
                   className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary-glow drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                 >
                   Results.
                 </motion.span>
             </div>
          </div>

          {/* Description Text */}
          <motion.p 
            variants={wordVariants}
            className="text-white-dim text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed text-center font-light px-4"
          >
            Flowrax is a strategic design partner for forward-thinking companies. We blend aesthetics with architecture to build systems that drive growth.
          </motion.p>
          
          {/* Social Proof */}
          <motion.div 
            variants={wordVariants}
            className="flex items-center gap-4 p-2 pr-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default scale-90 md:scale-100"
          >
             <div className="flex -space-x-3 items-center">
               {[
                  "https://ik.imagekit.io/flowrax/cl%20(2)%20dd.webp?updatedAt=1764806666639",
                  "https://ik.imagekit.io/flowrax/cl.jpg",
                  "https://ik.imagekit.io/flowrax/cl%20(1)%20dd_1.webp?updatedAt=1764806666597"
                ].map((src, i) => (
                 <div key={i} className="relative w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#050505] overflow-hidden shadow-lg">
                   <img src={src} alt={`Trusted Founder ${i+1}`} className="w-full h-full object-cover" />
                 </div>
               ))}
               <div className="relative w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#050505] bg-white flex items-center justify-center shadow-lg z-10">
                 <span className="text-black font-extrabold text-[10px]">50+</span>
               </div>
             </div>
             <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                   {[1,2,3,4,5].map(i => <span key={i} className="text-[#FFB800] text-[10px]">★</span>)}
                </div>
                <p className="text-white text-xs font-medium">Trusted by Founders</p>
             </div>
          </motion.div>
        </motion.div>

        {/* 4. Dual CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-16 md:mb-20 relative z-20 w-full sm:w-auto px-6 sm:px-0"
        >
          <a 
            href="https://cal.com/flowrax/project-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold text-base rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-center shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-10" />
             <span className="relative z-20 flex items-center justify-center gap-2">
               Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </span>
          </a>

          <Link to="/work" className="group relative w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-base rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 active:scale-95 text-center backdrop-blur-sm">
             <span className="relative z-10 flex items-center justify-center gap-2">
               View Case Studies
             </span>
          </Link>
        </motion.div>

        {/* 3. Interactive Video Centerpiece with Floating Widgets */}
        <div className="perspective-[2000px] w-full max-w-6xl flex justify-center pb-8 md:pb-24 px-2 sm:px-0">
          <motion.div
            style={{ 
              rotateX, 
              rotateY,
              scale: dashboardScale,
              opacity: dashboardOpacity,
              y: dashboardY,
              transformStyle: "preserve-3d" // Crucial for 3D children
            }}
            className="w-full relative aspect-video md:aspect-[21/9] bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
          >
             {/* Main Video Content */}
             <div className="absolute inset-0 rounded-xl md:rounded-3xl overflow-hidden ring-1 ring-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/10 pointer-events-none z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                <video 
                  src="https://ik.imagekit.io/flowrax/herov.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
             </div>

             {/* --- FLOATING WIDGETS (PARALLAX) --- */}
             {/* Note: Hidden on mobile to prevent clutter and overlay issues on small screens */}
             
             {/* Left Widget: Revenue Graph */}
             <motion.div 
                className="hidden md:flex absolute -left-12 top-16 w-48 p-4 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-2xl flex-col gap-3 z-30"
                style={{ translateZ: 60 }} // Pushes it forward in 3D
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             >
                <div className="flex items-center justify-between mb-1">
                   <div className="p-1.5 rounded-lg bg-primary/20 text-primary"><TrendingUp size={16} /></div>
                   <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">+124%</span>
                </div>
                <div>
                   <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Total Revenue</div>
                   <div className="text-xl font-bold text-white">$84,320</div>
                </div>
                {/* Tiny Graph Line */}
                <div className="h-8 w-full flex items-end gap-1">
                   {[40, 70, 50, 90, 60, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/50 rounded-t-sm" style={{ height: `${h}%` }} />
                   ))}
                </div>
             </motion.div>

             {/* Right Widget: Active Users */}
             <motion.div 
                className="hidden md:flex absolute -right-8 bottom-12 w-auto p-4 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-2xl items-center gap-4 z-30"
                style={{ translateZ: 40 }} // Pushes it forward slightly less
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             >
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-neutral-800 flex items-center justify-center text-[10px] text-white/50">
                         <Users size={12} />
                      </div>
                   ))}
                </div>
                <div className="flex flex-col">
                   <span className="text-white font-bold text-sm">2.4k+</span>
                   <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Active Users</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2" />
             </motion.div>

             {/* Top Highlight Reflection */}
             <div className="absolute -top-px left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;


import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Scroll Parallax for content
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Video Animation: Scale up as user scrolls
  // Adjusted for a more fluid zoom-in effect starting smaller
  const videoScale = useTransform(scrollY, [0, 400], [0.6, 1]);
  // Adding a slight opacity transition for the video as well to make it pop in
  const videoOpacity = useTransform(scrollY, [0, 300], [0.8, 1]);

  // --- 3D Tilt Logic for Dashboard (Kept as requested for layout structure) ---
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
    x.set((e.clientX - rect.left) / width - 0.5);
    y.set((e.clientY - rect.top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const wordVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#02030a]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ================= BACKGROUND LAYERS ================= */}
      
      {/* 1. Technical Grid Layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
        }}
      />

      {/* 2. Soft Radial Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Center: Desaturated Blue/Green behind heading */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-teal-900/10 blur-[120px] rounded-full mix-blend-screen" />
        {/* Bottom Center: Emerald/Teal behind CTAs */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[50vh] bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* 3. Analytics Graph Lines (SVG) */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full flex items-center justify-center opacity-60">
        <svg className="w-full h-full min-w-[1000px]" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#059669" stopOpacity="0" />
              <stop offset="20%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#2DD4BF" stopOpacity="1" />
              <stop offset="80%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Graph Line 1 (Main) */}
          <motion.path
            d="M-100,600 C200,580 400,450 720,400 C1040,350 1200,200 1540,150"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Graph Line 2 (Secondary) */}
          <motion.path
            d="M-100,700 C300,680 500,600 720,550 C940,500 1300,450 1540,300"
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            strokeOpacity="0.5"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Glowing Data Points */}
          <motion.circle 
            cx="720" cy="400" r="3" fill="#2DD4BF" filter="url(#glow)"
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="1040" cy="350" r="2" fill="#10B981" filter="url(#glow)"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* ================= CONTENT ================= */}
        <motion.div 
          style={{ y: contentY, opacity }}
          className="text-center mb-16 md:mb-20 relative z-20 w-full flex flex-col items-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={wordVariants} className="flex justify-center mb-8">
              <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs font-bold uppercase tracking-widest text-white/70 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 GLOBAL DESIGN AGENCY
              </div>
          </motion.div>

          {/* Heading */}
          <h1 className="flex flex-col items-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
             {/* Line 1 */}
             <motion.div variants={wordVariants} className="flex flex-wrap justify-center gap-x-3 md:gap-x-5">
                <span>We</span>
                <span className="font-serif italic font-medium text-white/90">Design</span>
                <span>Products</span>
             </motion.div>
             
             {/* Line 2 */}
             <motion.div variants={wordVariants} className="flex flex-wrap justify-center gap-x-3 md:gap-x-5">
                 <span>That</span>
                 <span className="font-serif italic font-medium text-white/90">Drive</span>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                   Results.
                 </span>
             </motion.div>
          </h1>

          {/* Description */}
          <motion.p 
            variants={wordVariants}
            className="text-white-dim text-sm md:text-lg max-w-xl md:max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Flowrax is a strategic design partner for forward-thinking companies. We blend aesthetics with architecture to build systems that drive growth.
          </motion.p>
          
          {/* Social Proof Pill */}
          <motion.div 
            variants={wordVariants}
            className="inline-flex items-center gap-4 p-1.5 pr-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12"
          >
             <div className="flex -space-x-3 pl-1">
               {[
                  "https://ik.imagekit.io/flowrax/cl%20(2)%20dd.webp?updatedAt=1764806666639",
                  "https://ik.imagekit.io/flowrax/cl.jpg",
                  "https://ik.imagekit.io/flowrax/cl%20(1)%20dd_1.webp?updatedAt=1764806666597"
                ].map((src, i) => (
                 <div key={i} className="relative w-8 h-8 rounded-full border-2 border-[#02030a] overflow-hidden">
                   <img src={src} alt="User" className="w-full h-full object-cover" />
                 </div>
               ))}
               <div className="relative w-8 h-8 rounded-full border-2 border-[#02030a] bg-white flex items-center justify-center text-[9px] font-bold text-black">
                 50+
               </div>
             </div>
             <div className="flex flex-col items-start text-left">
                <div className="flex text-[#FFB800] gap-0.5">
                   {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" strokeWidth={0} />)}
                </div>
                <span className="text-xs text-white/90 font-medium">
                  Trusted by <span className="font-bold text-white">50+</span> Founders
                </span>
             </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            variants={wordVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="https://cal.com/flowrax/project-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold text-base rounded-full overflow-hidden transition-transform active:scale-95 text-center shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)]"
            >
               <span className="relative z-10 flex items-center justify-center gap-2">
                 Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </span>
            </a>

            <Link 
              to="/work" 
              className="group relative w-full sm:w-auto px-8 py-4 bg-[#0A0A0A] border border-white/10 text-white font-semibold text-base rounded-full overflow-hidden transition-all hover:bg-white/5 active:scale-95 text-center"
            >
               <span className="relative z-10">
                 View Case Studies
               </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* 3. Interactive Video Centerpiece (Scalable) */}
        <div className="perspective-[2000px] w-full max-w-6xl flex justify-center pb-8 md:pb-24 px-2 sm:px-0">
          <motion.div
            style={{ 
              rotateX, 
              rotateY,
              scale: videoScale,
              opacity: videoOpacity,
              transformStyle: "preserve-3d" 
            }}
            className="w-full relative aspect-video md:aspect-[21/9] bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
          >
             <div className="absolute inset-0 rounded-xl md:rounded-3xl overflow-hidden ring-1 ring-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/10 pointer-events-none z-10" />
                <video 
                  src="https://ik.imagekit.io/flowrax/herov.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

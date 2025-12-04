
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Scroll Parallax for Video Scale
  // "Reverse": Starts smaller (0.9) and grows "open in big way" (1.1) as user scrolls down
  const dashboardScale = useTransform(scrollY, [0, 500], [0.9, 1.1]);
  // Opacity stays 1 (fully visible) instead of fading out
  const dashboardOpacity = useTransform(scrollY, [0, 300], [1, 1]);
  // Move down slightly to enhance the growing effect
  const dashboardY = useTransform(scrollY, [0, 500], [0, 50]);

  // --- 3D Tilt Logic ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out the mouse values
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse values to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]); 
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

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
    hidden: { y: 50, opacity: 0 },
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
      className="relative min-h-[100vh] flex flex-col items-center justify-start pt-20 md:pt-28 pb-12 md:pb-20 overflow-hidden bg-[#050505]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Core Staging & Backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-grid-white opacity-[0.03]" />

        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] bg-gradient-radial from-cyan-900/20 via-transparent to-transparent blur-[100px] pointer-events-none"
        />
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* 2. Dynamic Typography */}
        <motion.div 
          className="text-center mb-8 md:mb-12 relative z-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={wordVariants} className="flex justify-center mb-8">
              <img src="https://ik.imagekit.io/flowrax/hhh.png" alt="Agency Logo" className="h-24 md:h-32 w-auto opacity-90" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-6 gap-y-2 mb-4">
             {["We", "Design", "Products", "That", "Drive"].map((word, i) => (
               <motion.span 
                 key={i} 
                 variants={wordVariants}
                 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white"
               >
                 {word}
               </motion.span>
             ))}
             <motion.span 
               variants={wordVariants}
               className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-600 drop-shadow-[0_0_15px_rgba(1,208,245,0.5)]"
             >
               Results.
             </motion.span>
          </div>
          
          <motion.div 
            variants={wordVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10"
          >
             <div className="flex -space-x-4 items-center">
               {[
                  "https://ik.imagekit.io/flowrax/cl%20(2)%20dd.webp?updatedAt=1764806666639",
                  "https://ik.imagekit.io/flowrax/cl.jpg",
                  "https://ik.imagekit.io/flowrax/cl%20(1)%20dd_1.webp?updatedAt=1764806666597"
                ].map((src, i) => (
                 <div key={i} className="relative w-12 h-12 rounded-full border-2 border-[#050505] overflow-hidden shadow-lg">
                   <img src={src} alt={`Trusted Founder ${i+1}`} className="w-full h-full object-cover" />
                 </div>
               ))}
               <div className="relative w-12 h-12 rounded-full border-2 border-[#050505] bg-white flex items-center justify-center shadow-lg z-10">
                 <span className="text-black font-extrabold text-sm">50+</span>
               </div>
             </div>
             <p className="text-white-dim text-base md:text-lg font-medium">
               Trusted by <span className="text-white font-bold">50+ founders</span>
             </p>
          </motion.div>
        </motion.div>

        {/* 4. Dual CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-12 md:mb-20 relative z-20 w-full sm:w-auto"
        >
          <a 
            href="https://cal.com/flowrax/project-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold text-lg rounded-full overflow-hidden transition-transform active:scale-95 text-center"
          >
             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
             <span className="relative z-10 flex items-center justify-center gap-2">
               Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </span>
             <div className="absolute inset-0 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] bg-primary/30 z-[-1]" />
          </a>

          <Link to="/work" className="group relative w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-lg rounded-full overflow-hidden transition-all hover:border-primary hover:text-primary active:scale-95 text-center">
             <span className="relative z-10 flex items-center justify-center gap-2">
               See Our Work
             </span>
          </Link>
        </motion.div>

        {/* 3. Interactive Video Centerpiece */}
        <div className="perspective-[2000px] w-full max-w-6xl flex justify-center pb-12 md:pb-20">
          <motion.div
            style={{ 
              rotateX, 
              rotateY,
              scale: dashboardScale,
              opacity: dashboardOpacity,
              y: dashboardY,
            }}
            className="w-full relative aspect-[16/10] md:aspect-[21/9] bg-black/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden group"
          >
             {/* Inner Glow Gradient */}
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none z-10" />
             
             {/* Video Content */}
             <div className="relative w-full h-full">
                <video 
                  src="https://ik.imagekit.io/flowrax/herov.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Optional Overlay to blend video with dark theme */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

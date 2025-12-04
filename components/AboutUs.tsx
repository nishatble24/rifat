
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// --- Utils ---
const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

// --- Components ---

interface FloatingLetterProps {
  char: string;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  xOffset: number;
}

const FloatingLetter: React.FC<FloatingLetterProps> = ({ 
  char, 
  index, 
  progress, 
  range, 
  xOffset 
}) => {
  // Randomize exit trajectories for "explosion" effect
  const randomX = (Math.random() - 0.5) * 800;
  const randomY = (Math.random() - 0.5) * 800;
  const randomRotate = (Math.random() - 0.5) * 180;
  const randomZ = Math.random() * 500;

  const x = useTransform(progress, range, [0, xOffset + randomX]);
  const y = useTransform(progress, range, [0, randomY]);
  const z = useTransform(progress, range, [0, randomZ]);
  const rotate = useTransform(progress, range, [0, randomRotate]);
  const opacity = useTransform(progress, [range[0], range[0] + 0.1], [1, 0]);

  return (
    <motion.span
      style={{ x, y, z, rotate, opacity }}
      className="inline-block font-black text-[12vw] leading-none text-white mix-blend-difference"
    >
      {char}
    </motion.span>
  );
};

const AboutUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // --- Mouse Parallax Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // --- SCROLL RANGES ---
  // 0.0 - 0.2: Intro & Explosion
  // 0.2 - 0.5: Narrative & Philosophy
  // 0.5 - 0.8: Team/Human Element
  // 0.8 - 1.0: Manifesto & Exit

  // Scene Transforms
  const sceneRotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const sceneRotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  // Section 1: Hero Text Explosion
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 1.5]);

  // Section 2: Narrative Float
  const narrativeOpacity = useTransform(smoothProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const narrativeZ = useTransform(smoothProgress, [0.15, 0.55], [100, 0]);
  const narrativeBlur = useTransform(smoothProgress, [0.15, 0.25, 0.45, 0.55], ["10px", "0px", "0px", "10px"]);

  // Section 3: Abstract Visuals
  const visualOpacity = useTransform(smoothProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
  const orbScale = useTransform(smoothProgress, [0.5, 0.8], [0.5, 1.5]);
  
  // Section 4: Manifesto
  const manifestoY = useTransform(smoothProgress, [0.75, 1], ["100%", "0%"]);
  const manifestoOpacity = useTransform(smoothProgress, [0.75, 0.85], [0, 1]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black hidden lg:block">
      {/* Sticky Camera Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden perspective-[1000px]">
        
        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>

        {/* Global Scene Container */}
        <motion.div 
          style={{ rotateX: sceneRotateX, rotateY: sceneRotateY, transformStyle: "preserve-3d" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          
          {/* --- SCENE 1: THE ORIGIN (FLOWRAX) --- */}
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale, transformStyle: "preserve-3d" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none"
          >
            <div className="relative flex items-center justify-center gap-[0.5vw]">
               {['F','L','O','W','R','A','X'].map((char, i) => (
                 <FloatingLetter 
                   key={i} 
                   char={char} 
                   index={i} 
                   progress={smoothProgress} 
                   range={[0.05, 0.25]}
                   xOffset={(i - 3) * 100} 
                 />
               ))}
            </div>
            <motion.p 
              style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
              className="mt-8 text-white-dim text-sm uppercase tracking-[0.5em]"
            >
              We Design What's Next
            </motion.p>
            <motion.div
               style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
               className="absolute bottom-12 text-white/30 animate-bounce"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>


          {/* --- SCENE 2: THE NARRATIVE (Floating Text) --- */}
          <motion.div 
            style={{ 
              opacity: narrativeOpacity, 
              z: narrativeZ, 
              filter: `blur(${narrativeBlur})`, // This might need a custom motion value for string interpolation
              transformStyle: "preserve-3d" 
            }}
            className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 text-center"
          >
             <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight max-w-5xl mix-blend-screen">
               Logic is our foundation. <br />
               <span className="italic text-primary">Emotion</span> is our language.
             </h2>
             <p className="mt-8 text-lg md:text-xl text-white-dim max-w-2xl leading-relaxed">
               We don't just build interfaces. We architect digital environments where human intuition meets technological precision.
             </p>

             {/* Floating Particles in Background */}
             {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/5 font-bold text-9xl pointer-events-none"
                  style={{
                    x: Math.random() * 1000 - 500,
                    y: Math.random() * 600 - 300,
                    z: -200 - Math.random() * 400,
                    rotate: useTransform(smoothProgress, [0.2, 0.6], [0, 90])
                  }}
                >
                  {['UX', 'UI', 'CODE', 'ART'][i % 4]}
                </motion.div>
             ))}
          </motion.div>


          {/* --- SCENE 3: THE HUMAN ELEMENT (Abstract Reveal) --- */}
          <motion.div 
            style={{ opacity: visualOpacity, transformStyle: "preserve-3d" }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
             {/* Central Glowing Orb */}
             <motion.div 
               style={{ scale: orbScale }}
               className="w-[40vw] h-[40vw] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-[80px]"
             />
             
             {/* Floating "Cards" in 3D Space */}
             <div className="absolute inset-0 perspective-[1000px]">
                <motion.div 
                  style={{ 
                    x: useTransform(smoothProgress, [0.5, 0.8], ["-50%", "-100%"]),
                    rotateY: 15,
                    z: 100
                  }}
                  className="absolute top-1/3 left-1/4 w-64 h-80 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                   <img src="https://ik.imagekit.io/flowrax/mccrif.webp" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Team" />
                </motion.div>
                
                <motion.div 
                   style={{ 
                    x: useTransform(smoothProgress, [0.5, 0.8], ["50%", "100%"]),
                    rotateY: -15,
                    z: 50
                   }}
                   className="absolute bottom-1/3 right-1/4 w-64 h-80 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                   <img src="https://ik.imagekit.io/flowrax/mccrim.webp" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Team" />
                </motion.div>
             </div>
             
             <div className="absolute text-center">
                <h3 className="text-3xl font-bold text-white tracking-widest uppercase">The Architects</h3>
             </div>
          </motion.div>


          {/* --- SCENE 4: THE MANIFESTO (Final Lock) --- */}
          <motion.div 
             style={{ y: manifestoY, opacity: manifestoOpacity }}
             className="absolute inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-xl"
          >
             <div className="max-w-4xl px-6 text-center">
                <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-8 leading-none">
                   MAKE IT <br /> MEMORABLE.
                </h2>
                <div className="h-1 w-32 bg-primary mx-auto mb-8" />
                <p className="text-xl text-white-dim">
                   In a world of templates, we choose to be the anomaly.
                </p>
             </div>
          </motion.div>

        </motion.div>

        {/* --- AUDIO VISUALIZER (Decor) --- */}
        <div className="absolute bottom-8 left-8 flex gap-1 items-end h-8">
           {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                className="w-1 bg-primary/50 rounded-full"
                animate={{ height: ["20%", "80%", "40%"] }}
                transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, repeatType: "mirror" }}
              />
           ))}
        </div>
        
        {/* --- COORDINATES (Decor) --- */}
        <div className="absolute bottom-8 right-8 font-mono text-[10px] text-white/30 flex flex-col items-end">
           <span>LAT: 37.7749° N</span>
           <span>LNG: 122.4194° W</span>
           <span>EST: 2024</span>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;

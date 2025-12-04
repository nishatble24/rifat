
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces that delight users on every touchpoint, ensuring accessibility and engagement.",
    blobColor: "rgba(56, 189, 248, 0.2)", // Sky Blue Glow
    accent: "#38BDF8",
    image: "https://ik.imagekit.io/flowrax/service%20section%20row/uiuxdesign%20dd.webp"
  },
  {
    id: '02',
    title: "Web Design",
    description: "Beautiful, responsive websites tailored to your brand's unique story and conversion goals.",
    blobColor: "rgba(168, 85, 247, 0.2)", // Purple Glow
    accent: "#A855F7",
    image: "https://ik.imagekit.io/flowrax/service%20section%20row/webdesign%20dd.webp"
  },
  {
    id: '03',
    title: "Mobile App Design",
    description: "Native experiences for iOS and Android platforms that feel natural, fluid, and robust.",
    blobColor: "rgba(245, 158, 11, 0.2)", // Amber Glow
    accent: "#F59E0B",
    image: "https://ik.imagekit.io/flowrax/service%20section%20row/appdesign%20dd.webp"
  },
  {
    id: '04',
    title: "Branding",
    description: "Comprehensive visual identity systems that forge a lasting emotional connection.",
    blobColor: "rgba(244, 63, 94, 0.2)", // Rose Glow
    accent: "#F43F5E",
    image: "https://ik.imagekit.io/flowrax/service%20section%20row/branding%20dd.webp"
  },
  {
    id: '05',
    title: "Design & Dev",
    description: "End-to-end product delivery, taking your vision from pixel-perfect design to production code.",
    blobColor: "rgba(16, 185, 129, 0.2)", // Emerald Glow
    accent: "#10B981",
    image: "https://ik.imagekit.io/flowrax/service%20section%20row/design&dev%20dd.webp"
  },
  {
    id: '06',
    title: "Webflow & Framer",
    description: "Rapid, high-quality development using the latest modern no-code and low-code tools.",
    blobColor: "rgba(99, 102, 241, 0.2)", // Indigo Glow
    accent: "#6366F1",
    image: "https://ik.imagekit.io/flowrax/service%20section%20row/Webflow&Framer%20dd.webp"
  }
];

interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - left) / width - 0.5;
    const yPct = (e.clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  return (
    <motion.div
      ref={cardRef}
      className="relative flex-shrink-0 w-full md:w-[380px] h-[450px] md:h-[500px] perspective-[1000px] group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: 10 - index }}
    >
      <motion.div
        className="w-full h-full bg-[#0A0A0A] rounded-[2rem] border border-white/10 overflow-hidden relative flex flex-col justify-between p-6 md:p-8 transition-colors duration-500 hover:border-white/20"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px -10px rgba(0,0,0,0.5)`
        }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"
            style={{ transition: 'transform 0.7s ease-out, opacity 0.5s ease' }}
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
          
          {/* Color Tint on Hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay"
            style={{ backgroundColor: service.accent }}
          />
        </div>

        {/* Animated Glow Blob (Reduced intensity for image compatibility) */}
        <motion.div 
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[80px] opacity-20 mix-blend-screen pointer-events-none"
          style={{ backgroundColor: service.blobColor }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Background Grid Texture */}
        <div className="absolute inset-0 bg-grid-white opacity-[0.05] pointer-events-none" />

        {/* Card Content */}
        <div className="relative z-10 transform translate-z-20">
          <div className="flex justify-between items-start mb-8 md:mb-10">
            <span className="font-mono text-3xl md:text-4xl font-bold text-white/20">{service.id}</span>
            <motion.div 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </motion.div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300 drop-shadow-lg">
            {service.title}
          </h3>
          
          {/* Decorative Line */}
          <div 
            className="w-12 h-0.5 bg-white/20 my-4 md:my-6 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)]" 
            style={{ backgroundColor: service.accent }}
          />
        </div>

        <div className="relative z-10 mt-auto transform translate-z-10 overflow-hidden">
           {/* Description - Hidden by default, slides up on hover */}
           <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
              <div className="overflow-hidden">
                 <p className="text-white-dim text-sm md:text-base leading-relaxed pb-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                   {service.description}
                 </p>
              </div>
           </div>
           
           <div className="mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-all duration-500 translate-y-0">
              <Sparkles size={14} style={{ color: service.accent }} /> 
              <span style={{ color: service.accent }}>Explore</span>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DistinctiveServices: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate transform range based on array length
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className={`relative bg-[#050505] border-t border-white/5 ${isDesktop ? 'h-[350vh]' : 'py-24'}`}>
      
      {/* Sticky Container */}
      <div className={`${isDesktop ? 'sticky top-0 h-screen overflow-hidden' : 'relative'} flex flex-col md:flex-row`}>
        
        {/* LEFT COLUMN: Static Title Section */}
        <div className={`w-full md:w-[40%] ${isDesktop ? 'h-full' : 'h-auto mb-16'} flex flex-col justify-center px-6 md:px-12 lg:px-16 relative z-20 bg-[#050505] border-b md:border-b-0 md:border-r border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] pb-12 md:pb-0`}>
           {/* Background Ambient Effects (Confined to Left Col) */}
           <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="absolute top-[-20%] left-[-20%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
           </div>

           <div className="relative z-10 pt-12 md:pt-0">
              <span className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Our Capabilities
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
                Design <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  Meets
                </span> <br/>
                Function.
              </h2>
              <p className="text-white-dim text-base md:text-lg leading-relaxed mb-8 max-w-md">
                A deep dive into our core services. We blend aesthetics with architecture to build digital products that scale.
              </p>
              
              <div className="hidden md:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center animate-pulse text-white">
                    <ArrowRight size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">Scroll to Explore</span>
              </div>
           </div>
        </div>

        {/* RIGHT COLUMN: Horizontal Scroll Area (Desktop) / Vertical Stack (Mobile) */}
        <div className={`w-full md:w-[60%] ${isDesktop ? 'h-full' : 'h-auto'} relative z-10 overflow-hidden bg-[#050505] flex items-center`}>
            
            {/* Track */}
            <motion.div 
              style={{ x: isDesktop ? x : 0 }} 
              className={`${isDesktop ? 'flex-row gap-12 px-12 items-center flex-nowrap' : 'flex-col gap-8 px-4 w-full'} flex`}
            >
              {SERVICES.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
              
              {/* End Card CTA */}
              <div className={`flex-shrink-0 ${isDesktop ? 'w-[380px] h-[500px]' : 'w-full h-[400px]'} flex flex-col items-center justify-center text-center p-8 rounded-[2rem] border border-white/5 bg-white/[0.02]`}>
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
                    <h3 className="relative text-3xl md:text-5xl font-bold text-white mb-6">Ready to <br/>Start?</h3>
                </div>
                <a 
                  href="https://cal.com/flowrax/project-discussion" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                      Book a Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>

            {/* Fade Overlay on Right Edge (Desktop only) */}
            {isDesktop && <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-20" />}
            
        </div>

      </div>
    </section>
  );
};

export default DistinctiveServices;

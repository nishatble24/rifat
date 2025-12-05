
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, MessageSquare, Bell, Star, Zap, Layers, CheckCircle2, Apple, Play, GitMerge, MousePointerClick, Box, LayoutGrid } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import WhyChooseUs from './WhyChooseUs';
import WebDesignTechStack from './WebDesignTechStack';
import WebDesignTestimonials from './WebDesignPage'; // Reusing for now, can be separate if needed

// --- COMPACT HERO SECTION ---
const MobileAppHero: React.FC = () => {
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

  // Smooth tilt effect
  const rotateX = useTransform(useSpring(mouseY, { stiffness: 100, damping: 20 }), [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(useSpring(mouseX, { stiffness: 100, damping: 20 }), [-0.5, 0.5], [-5, 5]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[60vh] md:h-[75vh] flex items-center bg-[#050505] overflow-hidden pt-24 pb-12 md:py-0"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* LEFT: Content */}
          <div className="w-full md:w-1/2 text-left">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Smartphone size={14} /> Mobile App Design
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Apps people actually <br />
                <span className="text-white-dim">love to use.</span>
              </h1>
              
              <p className="text-lg text-white-dim mb-8 max-w-md leading-relaxed">
                We design intuitive mobile experiences for iOS and Android that users love and businesses rely on.
              </p>
              
              <a 
                href="https://cal.com/flowrax/project-discussion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all active:scale-95"
              >
                Discuss Your App <ArrowRight size={18} />
              </a>
            </AnimatedSection>
          </div>

          {/* RIGHT: Interactive Visual */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center perspective-[1000px]">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: -10 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="w-[280px] h-[560px] bg-black rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
                
                {/* Screen Content */}
                <div className="w-full h-full bg-[#0A0A0A] relative overflow-hidden flex flex-col">
                   {/* App Header */}
                   <div className="h-24 bg-gradient-to-b from-blue-900/20 to-transparent p-6 pt-12 flex justify-between items-center">
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                   </div>

                   {/* Animated Scrolling Content */}
                   <div className="flex-1 p-4 space-y-4 overflow-hidden mask-gradient-b">
                      <motion.div 
                        animate={{ y: [0, -100] }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="space-y-4"
                      >
                         {/* Hero Card */}
                         <div className="w-full h-40 bg-white/5 rounded-2xl border border-white/5 p-4 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50" />
                            <div className="relative z-10 space-y-2">
                               <div className="w-1/2 h-4 bg-white/10 rounded" />
                               <div className="w-1/3 h-3 bg-white/5 rounded" />
                            </div>
                            <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold shadow-lg">
                               <ArrowRight size={16} />
                            </div>
                         </div>

                         {/* List Items */}
                         {[1, 2, 3].map(i => (
                           <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                              <div className="w-10 h-10 rounded-lg bg-white/5" />
                              <div className="space-y-1.5 flex-1">
                                 <div className="w-2/3 h-3 bg-white/10 rounded" />
                                 <div className="w-1/2 h-2 bg-white/5 rounded" />
                              </div>
                           </div>
                         ))}
                      </motion.div>
                   </div>

                   {/* Tab Bar */}
                   <div className="h-20 bg-[#0A0A0A] border-t border-white/5 flex justify-around items-center pb-4 px-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className={`w-12 h-12 rounded-full flex items-center justify-center ${i===1 ? 'text-primary bg-primary/10' : 'text-white/20'}`}>
                           <div className="w-5 h-5 rounded bg-current" />
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Floating Elements (Orbiting) */}
              <motion.div 
                className="absolute top-20 -left-12 p-3 bg-black/80 backdrop-blur border border-white/10 rounded-xl shadow-xl flex items-center gap-3 z-30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                 <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                    <CheckCircle2 size={16} />
                 </div>
                 <span className="text-xs font-bold text-white pr-2">Task Complete</span>
              </motion.div>

              <motion.div 
                className="absolute bottom-32 -right-8 p-3 bg-black/80 backdrop-blur border border-white/10 rounded-xl shadow-xl flex items-center gap-3 z-30"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                 <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
                    <Bell size={16} />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] text-white-dim uppercase tracking-wider">New Alert</span>
                    <span className="text-xs font-bold text-white">System Updated</span>
                 </div>
              </motion.div>

              {/* Decorative Glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-primary/20 blur-[80px] -z-10 rounded-full" />

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- EXPERTISE SECTION ---

interface DeviceMockupProps {
  type: 'iphone' | 'android';
  visualType: 'ios' | 'android' | 'cross' | 'gesture' | 'proto' | 'system';
}

const DeviceMockup: React.FC<DeviceMockupProps> = ({ type, visualType }) => {
  const isIphone = type === 'iphone';
  const borderRadius = isIphone ? 'rounded-[2.5rem]' : 'rounded-[2rem]';
  const borderColor = isIphone ? 'border-[#1a1a1a]' : 'border-[#222]';

  const ScreenContent = () => {
    switch (visualType) {
      case 'ios':
        return (
          <div className="p-4 space-y-4 pt-12">
            <div className="flex justify-between items-center mb-6">
              <div className="text-xl font-bold text-white">Settings</div>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-xs">Edit</div>
            </div>
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white/10 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-md ${i===1 ? 'bg-blue-500' : i===2 ? 'bg-green-500' : 'bg-red-500'}`} />
                  <div className="w-20 h-2 bg-white/20 rounded" />
                </div>
                <div className="w-4 h-4 rounded-full border border-white/20" />
              </div>
            ))}
            <div className="w-full h-32 bg-white/5 rounded-2xl mt-4 border border-white/5 p-4 flex items-center justify-center">
               <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse">
                  <Apple size={24} className="text-blue-500" />
               </div>
            </div>
          </div>
        );
      case 'android':
        return (
          <div className="p-4 space-y-4 pt-12 relative h-full">
            <div className="w-full h-12 bg-white/5 rounded-full mb-6 flex items-center px-4">
               <div className="w-4 h-4 rounded-full bg-white/20" />
            </div>
            <div className="grid grid-cols-2 gap-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-square bg-white/5 rounded-2xl border border-white/5 p-3 flex flex-col justify-end">
                    <div className="w-full h-2 bg-white/10 rounded mb-1" />
                    <div className="w-1/2 h-2 bg-white/10 rounded" />
                 </div>
               ))}
            </div>
            <div className="absolute bottom-8 right-4 w-12 h-12 rounded-xl bg-[#3DDC84] shadow-lg flex items-center justify-center text-black">
               <Play size={20} fill="black" />
            </div>
          </div>
        );
      case 'gesture':
        return (
          <div className="relative h-full w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
             {/* Background elements */}
             <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-20">
                {[...Array(12)].map((_, i) => <div key={i} className="bg-white/5" />)}
             </div>
             {/* Gesture Indicator */}
             <motion.div 
               className="relative z-10 w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center"
               animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
               transition={{ duration: 1.5, repeat: Infinity }}
             >
                <div className="w-2 h-2 bg-white rounded-full" />
                <motion.div 
                  className="absolute inset-0 rounded-full border border-white/30"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
             </motion.div>
             <motion.div 
               className="absolute z-20 pointer-events-none"
               animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
                <MousePointerClick size={32} className="text-primary fill-black/50" />
             </motion.div>
          </div>
        );
      case 'proto':
        return (
          <div className="p-4 pt-12 relative h-full flex flex-col items-center">
             <div className="w-24 h-32 border-2 border-blue-500/50 rounded-lg mb-8 relative bg-blue-500/10">
                {/* Connection Line */}
                <motion.div 
                  className="absolute top-full left-1/2 w-0.5 h-8 bg-blue-500 origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
             </div>
             <div className="flex gap-4">
                <div className="w-20 h-24 border border-white/20 rounded-lg bg-white/5" />
                <div className="w-20 h-24 border border-white/20 rounded-lg bg-white/5" />
             </div>
             <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)]" />
          </div>
        );
      case 'system':
        return (
          <div className="p-4 pt-12 h-full flex flex-col items-center justify-center space-y-4">
             <motion.button 
               className="px-6 py-2 bg-primary text-black rounded-lg font-bold w-3/4"
               whileHover={{ scale: 1.05 }}
               animate={{ scale: [1, 1.02, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
             >
               Primary
             </motion.button>
             <div className="px-6 py-2 border border-white/20 text-white rounded-lg w-3/4 text-center">Secondary</div>
             <div className="px-6 py-2 bg-white/10 text-white/50 rounded-lg w-3/4 text-center">Disabled</div>
             
             <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary" />
                <div className="w-8 h-8 rounded-full bg-blue-500" />
                <div className="w-8 h-8 rounded-full bg-purple-500" />
             </div>
          </div>
        );
      default:
        return <div className="w-full h-full bg-neutral-900" />;
    }
  };

  return (
    <div className={`relative w-[220px] h-[440px] bg-black ${borderRadius} ${borderColor} border-[6px] shadow-2xl overflow-hidden`}>
      {/* Notch/Camera */}
      {isIphone ? (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
      ) : (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-20 ring-1 ring-white/10" />
      )}
      
      {/* Screen */}
      <div className="w-full h-full bg-[#0A0A0A] relative overflow-hidden">
        <ScreenContent />
      </div>
      
      {/* Glare */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[2rem]" />
    </div>
  );
};

const EXPERTISE_ITEMS = [
  {
    id: "01",
    title: "iOS App Design",
    description: "Native experiences crafted for Apple's ecosystem with precise attention to Human Interface Guidelines. We leverage iOS-specific patterns for familiarity and elegance.",
    visualType: "ios",
    device: "iphone",
    icon: Apple
  },
  {
    id: "02",
    title: "Android App Design",
    description: "Material Design expertise for seamless Android experiences across all device sizes. We build adaptive layouts that feel at home on Pixel, Samsung, and beyond.",
    visualType: "android",
    device: "android",
    icon: Play
  },
  {
    id: "03",
    title: "Cross-Platform Design",
    description: "Unified design systems that feel native on both platforms while maintaining brand consistency. Build once, delight everywhere.",
    visualType: "cross",
    device: "iphone", // Will render split visual
    icon: GitMerge
  },
  {
    id: "04",
    title: "Gesture & Interaction",
    description: "Intuitive touch patterns and micro-interactions that make apps feel alive. We design for the thumb zone and natural gestures.",
    visualType: "gesture",
    device: "iphone",
    icon: MousePointerClick
  },
  {
    id: "05",
    title: "App Prototyping",
    description: "Interactive prototypes that test ideas before development begins. Validate user flows and get stakeholder buy-in early.",
    visualType: "proto",
    device: "android",
    icon: Box
  },
  {
    id: "06",
    title: "Mobile Design Systems",
    description: "Scalable component libraries built for your app's growth. Ensure consistency as you add features and scale your team.",
    visualType: "system",
    device: "iphone",
    icon: LayoutGrid
  }
];

const MobileExpertise: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <AnimatedSection className="text-center mb-24">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">What We Master</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Mobile Expertise</h2>
          <p className="text-white-dim text-lg max-w-2xl mx-auto">Years of crafting mobile experiences across platforms and industries.</p>
        </AnimatedSection>

        <div className="space-y-32">
          {EXPERTISE_ITEMS.map((item, index) => {
            const isEven = index % 2 !== 0;
            return (
              <AnimatedSection key={item.id} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2">
                   <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-white/30 text-xl font-bold">{item.id}</span>
                      <div className="h-px flex-1 bg-white/10" />
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
                         {React.createElement(item.icon, { size: 18 })}
                      </div>
                   </div>
                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{item.title}</h3>
                   <p className="text-white-dim text-lg leading-relaxed">{item.description}</p>
                </div>

                {/* Visual Side */}
                <div className="w-full md:w-1/2 flex justify-center relative group perspective-[1000px]">
                   {/* Background Glow */}
                   <div className="absolute inset-0 bg-primary/5 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
                   
                   <motion.div
                     initial={{ rotateY: isEven ? -15 : 15, rotateX: 5 }}
                     whileInView={{ rotateY: isEven ? -5 : 5, rotateX: 0 }}
                     transition={{ duration: 1 }}
                     className="relative z-10"
                   >
                      {item.visualType === 'cross' ? (
                        // Special Layout for Cross Platform
                        <div className="relative w-[300px] h-[460px]">
                           <div className="absolute top-0 right-0 transform translate-x-4 -rotate-6 opacity-60 scale-90 blur-[1px]">
                              <DeviceMockup type="android" visualType="android" />
                           </div>
                           <div className="absolute bottom-0 left-0 transform -translate-x-4 rotate-3 z-10 shadow-2xl">
                              <DeviceMockup type="iphone" visualType="ios" />
                           </div>
                        </div>
                      ) : (
                        <div className="transform transition-transform duration-500 group-hover:scale-105">
                           <DeviceMockup 
                             type={item.device as 'iphone' | 'android'} 
                             visualType={item.visualType as any} 
                           />
                        </div>
                      )}
                   </motion.div>

                   {/* Floating Elements based on type */}
                   {item.visualType === 'system' && (
                      <>
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/4 -right-8 p-3 bg-neutral-900 rounded-lg border border-white/10 shadow-xl z-20">
                           <Box size={20} className="text-purple-500" />
                        </motion.div>
                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 -left-8 p-3 bg-neutral-900 rounded-lg border border-white/10 shadow-xl z-20">
                           <LayoutGrid size={20} className="text-blue-500" />
                        </motion.div>
                      </>
                   )}
                </div>

              </AnimatedSection>
            );
          })}
        </div>

        {/* Closing CTA */}
        <AnimatedSection className="mt-32 text-center">
           <h3 className="text-2xl font-bold text-white mb-6">All expertise. One seamless experience.</h3>
           <Link to="/work" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group">
              See Our App Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </AnimatedSection>

      </div>
    </section>
  );
};

const MobileAppDesignPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-primary selection:text-black">
      <MobileAppHero />
      <MobileExpertise />
      <WhyChooseUs />
      <WebDesignTechStack />
    </div>
  );
};

export default MobileAppDesignPage;

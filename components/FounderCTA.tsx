import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const FounderCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#080808] border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
             
             {/* Left Content */}
             <div className="w-full md:w-[55%]">
                <AnimatedSection>
                   <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      Ready to design something <span className="text-primary italic">meaningful?</span>
                   </h2>
                   <p className="text-lg md:text-xl text-white-dim mb-10 max-w-xl leading-relaxed">
                      Your users are waiting for an experience that feels intuitive and right. Whether you're starting fresh or improving what exists, let's build it together.
                   </p>
                   
                   <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
                      <a 
                        href="https://cal.com/flowrax/project-discussion" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group w-full sm:w-auto justify-center px-8 py-4 bg-primary text-black font-bold rounded-full transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] flex items-center gap-3"
                      >
                         Start a Conversation
                         <MessageCircle size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <Link 
                        to="/pricing" 
                        className="text-white font-medium hover:text-primary transition-colors flex items-center gap-2 border-b border-transparent hover:border-primary pb-0.5"
                      >
                         View Pricing <ArrowRight size={16} />
                      </Link>
                   </div>

                   <div className="flex items-center gap-3 text-sm text-white/40">
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </div>
                      <span className="font-mono">Currently accepting new projects</span>
                   </div>
                </AnimatedSection>
             </div>

             {/* Right Visual - Founder Image */}
             <div className="w-full md:w-[45%] h-[400px] md:h-[500px] relative flex items-end justify-center">
                <AnimatedSection delay={0.2} className="w-full h-full relative flex items-end justify-center">
                   
                   {/* Gradient Accent Base */}
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1.2, ease: "easeOut" }}
                     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[70%] z-0 pointer-events-none"
                   >
                      {/* Vibrant Conic Gradient Mix for Organic Feel */}
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,_#22D3EE_0deg,_#3B82F6_120deg,_#8B5CF6_240deg,_#E879F9_360deg)] opacity-20 blur-[80px] rounded-full mix-blend-screen" />
                      {/* Deeper Base for Grounding */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-gradient-to-t from-blue-600/30 to-purple-500/30 blur-[60px] rounded-full" />
                   </motion.div>

                   {/* Image */}
                   <motion.img 
                      src="https://ik.imagekit.io/flowrax/rimagrd.png"
                      alt="Rima Aktar - COO & Co-Founder"
                      className="relative z-10 h-full w-auto object-contain object-bottom drop-shadow-2xl"
                      initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                   />

                   {/* Name Overlay */}
                   <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="absolute bottom-8 right-0 md:-right-8 z-20"
                   >
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-glass flex items-center gap-3">
                         <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                         <div>
                            <p className="text-white font-bold text-sm leading-none mb-1">Rima Aktar</p>
                            <p className="text-white-dim text-xs font-medium tracking-wide">COO & Co-Founder</p>
                         </div>
                      </div>
                   </motion.div>

                </AnimatedSection>
             </div>

          </div>
       </div>
    </section>
  );
};

export default FounderCTA;
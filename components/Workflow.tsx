import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, GitBranch, Zap, CheckCircle2 } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const MockAppContent = () => (
  <div className="p-3 space-y-3 pb-8">
     {/* Fake Header */}
     <div className="flex justify-between items-center mb-4">
        <div className="w-8 h-8 bg-white/10 rounded-full" />
        <div className="w-20 h-4 bg-white/10 rounded" />
        <div className="w-8 h-8 bg-white/10 rounded-full" />
     </div>
     {/* Fake Hero */}
    <div className="w-full h-32 bg-neutral-800 rounded-xl" />
     {/* Fake List */}
    <div className="space-y-2">
      <div className="w-3/4 h-3 bg-neutral-800 rounded" />
      <div className="w-1/2 h-3 bg-neutral-800 rounded" />
    </div>
    <div className="flex gap-2 pt-2">
      <div className="w-10 h-10 rounded-full bg-neutral-800" />
      <div className="flex-1 space-y-2 py-1">
        <div className="w-full h-2 bg-neutral-800 rounded" />
        <div className="w-5/6 h-2 bg-neutral-800 rounded" />
      </div>
    </div>
     <div className="w-full h-24 bg-neutral-800 rounded-xl" />
  </div>
);

const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Workflow</h2>
          <p className="text-white-dim text-lg max-w-2xl mx-auto">
            From chaos to clarity. A structured approach to building world-class products.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Card 1: Strategy */}
          <AnimatedSection className="md:col-span-2 rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-between group hover:border-primary/30 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 border border-white/5">
                 <GitBranch size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">1. Strategy & Research</h3>
              <p className="text-white-dim">We map out the user journey, define personas, and structure the information architecture before touching a single pixel.</p>
            </div>
            <div className="mt-8 flex gap-2">
               {['Discovery', 'User Flows', 'Wireframing'].map((tag) => (
                 <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white border border-white/5">{tag}</span>
               ))}
            </div>
          </AnimatedSection>

          {/* Card 2: High-Fidelity UI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ 
              borderColor: "rgba(16, 185, 129, 0.4)",
              boxShadow: "0 0 30px -5px rgba(16, 185, 129, 0.1)"
            }}
            className="md:col-span-1 md:row-span-2 rounded-3xl bg-[#0A0A0A] border border-white/10 p-6 md:p-8 relative overflow-hidden group transition-all duration-300 min-h-[450px] md:min-h-0 flex flex-col"
          >
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary border border-white/5 mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">2. Visual Design</h3>
                <p className="text-white-dim text-sm mb-8">Pixel-perfect designs ready for any screen size.</p>
                
                {/* Phone Mockup with Scroll Animation */}
                <div className="flex-1 relative flex justify-center w-full">
                  <div className="w-full max-w-[240px] h-[320px] md:h-full bg-black border-[4px] border-neutral-800 rounded-t-[2rem] overflow-hidden relative shadow-2xl">
                     {/* Notch */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-800 rounded-b-lg z-20" />
                     
                     {/* Scrolling Content */}
                     <div className="w-full h-full overflow-hidden bg-[#050505]">
                         <motion.div 
                           animate={{ y: ["0%", "-50%"] }}
                           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                           className="w-full"
                         >
                            <MockAppContent />
                            <MockAppContent />
                         </motion.div>
                     </div>
                  </div>
                </div>
             </div>
             
             {/* Gradient Overlay at bottom */}
             <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-20" />
          </motion.div>

          {/* Card 3: Development */}
          <AnimatedSection delay={0.2} className="md:col-span-1 rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 group hover:border-primary/30 transition-colors flex flex-col justify-between">
             <div>
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 border border-white/5">
                   <Zap size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">3. Development</h3>
               <p className="text-white-dim text-sm">Clean code, fast load times, and SEO optimized.</p>
             </div>
          </AnimatedSection>
          
           {/* Card 4: Quality Assurance */}
          <AnimatedSection delay={0.3} className="md:col-span-1 rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 group hover:border-primary/30 transition-colors flex flex-col justify-between">
             <div>
               <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 border border-white/5">
                   <CheckCircle2 size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">4. Quality Assurance</h3>
               <p className="text-white-dim text-sm">Rigorous testing across devices to ensure perfection.</p>
             </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Workflow;
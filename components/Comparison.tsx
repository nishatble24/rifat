import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const TRADITIONAL_FEATURES = [
  "Slow turnaround times",
  "Unpredictable hourly billing",
  "Bloated project management",
  "Legacy tech stacks",
  "Limited revisions",
];

const AGENCY_FEATURES = [
  "48-hour delivery sprint",
  "Flat monthly fee",
  "Direct async communication",
  "Modern, scalable tech",
  "Unlimited iterations",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

const Comparison: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
       {/* Background noise */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why We Are Different</h2>
          <p className="text-white-dim max-w-2xl mx-auto text-lg">
            We've reimagined the agency model to eliminate inefficiencies and focus purely on shipping world-class products.
          </p>
        </AnimatedSection>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Central VS Badge (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-black rounded-full border border-white/10 items-center justify-center shadow-glass">
            <span className="font-bold text-xl italic bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent pr-1">VS</span>
          </div>

          {/* Left Column: Traditional */}
          <AnimatedSection delay={0.1} className="h-full">
            <div className="h-full p-8 rounded-3xl bg-surface/50 border border-white/5 opacity-70 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full pointer-events-none" />
               
               <h3 className="text-2xl font-bold text-gray-400 mb-2">Traditional Agencies</h3>
               <p className="text-sm text-gray-500 mb-8">The old way of doing things.</p>
               
               <motion.ul 
                 className="space-y-4"
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
               >
                 {TRADITIONAL_FEATURES.map((feature, i) => (
                   <motion.li key={i} variants={itemVariants} className="flex items-center gap-3 text-gray-400">
                     <XCircle className="text-red-500/50 shrink-0" size={20} />
                     <span>{feature}</span>
                   </motion.li>
                 ))}
               </motion.ul>
            </div>
          </AnimatedSection>

          {/* Right Column: Our Agency */}
          <AnimatedSection delay={0.3} className="h-full">
            <div className="h-full p-8 rounded-3xl bg-[#080808] border border-primary/30 shadow-neon relative overflow-hidden group">
               {/* Internal Glow */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
               
               <div className="flex items-center gap-2 mb-2">
                 <h3 className="text-2xl font-bold text-white">Flowrax</h3>
                 <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                   The Future
                 </span>
               </div>
               <p className="text-sm text-primary/60 mb-8">Optimized for speed and quality.</p>
               
               <motion.ul 
                 className="space-y-4"
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
               >
                 {AGENCY_FEATURES.map((feature, i) => (
                   <motion.li key={i} variants={itemVariants} className="flex items-center gap-3 text-white">
                     <div className="rounded-full bg-primary/20 p-1">
                        <CheckCircle2 className="text-primary shrink-0" size={16} />
                     </div>
                     <span className="font-medium">{feature}</span>
                   </motion.li>
                 ))}
               </motion.ul>

               {/* Decorative Gradient Line */}
               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
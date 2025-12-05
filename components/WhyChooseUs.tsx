
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Smartphone, Gauge, Search, Box, MessageCircle } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const ValueIcon = ({ type }: { type: string }) => {
  if (type === 'conversion') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <Target size={32} className="text-white relative z-10" strokeWidth={1.5} />
        <motion.div 
          className="absolute w-full h-1 bg-primary/50"
          style={{ width: 0, top: '50%', left: '0', transformOrigin: 'left' }}
          whileInView={{ width: '60%' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           <div className="absolute right-0 -top-1 w-0 h-0 border-l-[8px] border-l-primary/50 border-y-[4px] border-y-transparent" />
        </motion.div>
      </div>
    );
  }
  if (type === 'mobile') {
    return (
       <div className="w-full h-full flex items-center justify-center">
          <motion.div 
            className="w-8 h-12 border-2 border-white rounded-md relative flex justify-center pt-1"
            animate={{ width: [32, 48, 32], height: [48, 32, 48] }} // Rotate approx
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
             <div className="w-4 h-0.5 bg-white/50 rounded-full" />
             <Smartphone size={16} className="absolute bottom-1 text-white/20" />
          </motion.div>
       </div>
    );
  }
  if (type === 'performance') {
    return (
       <div className="w-full h-full flex items-center justify-center relative">
         <Gauge size={32} className="text-white" strokeWidth={1.5} />
         <motion.div 
           className="absolute bottom-[14px] left-[calc(50%-1px)] h-4 w-0.5 bg-primary origin-bottom"
           animate={{ rotate: [-45, 45, -45] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         />
       </div>
    );
  }
  if (type === 'seo') {
     return (
       <div className="w-full h-full flex items-center justify-center relative">
         <Search size={28} className="text-white relative z-10" />
         <motion.div 
           className="absolute w-8 h-8 border border-primary/50 rounded-full"
           animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
           transition={{ duration: 2, repeat: Infinity }}
         />
       </div>
     );
  }
  if (type === 'scale') {
     return (
       <div className="w-full h-full flex items-center justify-center">
          <Box size={32} className="text-white" strokeWidth={1.5} />
          <motion.div 
             className="absolute -top-1 -right-1"
             initial={{ opacity: 0, x: -10, y: 10 }}
             whileInView={{ opacity: 1, x: 0, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
             <Box size={16} className="text-primary" strokeWidth={2} />
          </motion.div>
       </div>
     );
  }
  if (type === 'support') {
     return (
       <div className="w-full h-full flex items-center justify-center">
          <motion.div
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 1.5, repeat: Infinity }}
          >
             <MessageCircle size={32} className="text-white" strokeWidth={1.5} />
          </motion.div>
       </div>
     );
  }
  return null;
}

const BentoCard = ({ title, desc, type, delay = 0 }: { title: string, desc: string, type: string, delay?: number }) => {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <motion.div 
        className="h-full bg-white/5 border border-white/5 p-6 rounded-3xl flex flex-col justify-between hover:bg-white/10 hover:border-white/10 transition-colors group relative overflow-hidden"
        whileHover={{ y: -5 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-opacity opacity-50 group-hover:opacity-100" />
        
        <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/5 mb-4 flex items-center justify-center overflow-hidden">
           <ValueIcon type={type} />
        </div>

        <div>
           <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
           <p className="text-white-dim text-sm leading-relaxed">{desc}</p>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">
       {/* Ambient Light */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="mb-16 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Flowrax?</h2>
             <p className="text-white-dim text-lg">We engineer success into every pixel.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-6">
             
             {/* Feature Cell - Large */}
             <div className="col-span-1 md:col-span-2 row-span-2">
                <AnimatedSection className="h-full">
                   <div className="h-full bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
                      
                      <div className="relative z-10">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                            Proven Results
                         </div>
                         <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">40%</h3>
                         <p className="text-xl md:text-2xl text-white-dim mb-8">Average increase in conversion rates for our redesigns.</p>
                         
                         <div className="h-16 w-full bg-black/50 rounded-xl border border-white/5 flex items-end p-2 gap-2 overflow-hidden">
                            {[20, 35, 30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
                               <motion.div 
                                 key={i}
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${h}%` }}
                                 transition={{ delay: i * 0.05, duration: 0.5 }}
                                 className="flex-1 bg-primary/80 rounded-sm hover:bg-primary transition-colors"
                               />
                            ))}
                         </div>
                      </div>
                   </div>
                </AnimatedSection>
             </div>

             {/* Standard Cells */}
             <BentoCard 
               title="Conversion First" 
               desc="Every element is placed strategically to guide users toward action." 
               type="conversion"
               delay={0.1}
             />
             <BentoCard 
               title="Mobile Native" 
               desc="Responsive design that feels like a native app on phones." 
               type="mobile"
               delay={0.2}
             />
             <BentoCard 
               title="Instant Load" 
               desc="Optimized assets and code for sub-second load times." 
               type="performance"
               delay={0.3}
             />
             <BentoCard 
               title="SEO Ready" 
               desc="Semantic structure that Google loves to rank." 
               type="seo"
               delay={0.4}
             />
             <BentoCard 
               title="Scalable" 
               desc="Built on component systems that grow with you." 
               type="scale"
               delay={0.5}
             />
             <BentoCard 
               title="Lifetime Support" 
               desc="We don't ghost. Ongoing maintenance available." 
               type="support"
               delay={0.6}
             />

          </div>
       </div>
    </section>
  );
};

export default WhyChooseUs;

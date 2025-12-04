
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Zap, HeartHandshake, Users, Sparkles } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Unlimited Revisions",
    description: "We are committed to your satisfaction. We iterate until the design matches your vision perfectly."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Receive updates every 24-48 hours. We keep the momentum going so you can launch faster."
  },
  {
    icon: Zap,
    title: "High-Velocity Systems",
    description: "We build scalable design systems that allow your product to grow without technical debt."
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Support",
    description: "We don't disappear after handoff. We provide ongoing guidance to ensure smooth implementation."
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Work directly with senior designers. No middlemen, just pure creative collaboration."
  },
  {
    icon: Sparkles,
    title: "Top 1% Quality",
    description: "Our designs are crafted to compete with global standards, ensuring your brand stands out."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
         <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            We Design for the Future to Drive Today's Success
          </h2>
          <p className="text-white-dim text-lg max-w-2xl mx-auto">
            Partner with an agency that prioritizes speed, quality, and scalable results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="h-full">
              <motion.div 
                whileHover={{ y: -5 }}
                className="h-full p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(1,208,245,0.2)]">
                    <reason.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-white-dim text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

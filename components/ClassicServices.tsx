import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Monitor, Smartphone, Palette, Code, Zap } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const SERVICES = [
  {
    title: "UI/UX Design",
    description: "User-centric interfaces that are intuitive, accessible, and scientifically designed to convert.",
    icon: Layout
  },
  {
    title: "Web Design",
    description: "Beautiful, responsive websites tailored to your brand's unique story and goals.",
    icon: Monitor
  },
  {
    title: "Mobile App Design",
    description: "Native experiences for iOS and Android platforms that feel natural and fluid.",
    icon: Smartphone
  },
  {
    title: "Branding",
    description: "Comprehensive visual identity systems that forge a lasting connection with your audience.",
    icon: Palette
  },
  {
    title: "Design & Development",
    description: "End-to-end product delivery, taking your vision from pixel-perfect design to production code.",
    icon: Code
  },
  {
    title: "Webflow & Framer",
    description: "Rapid, high-quality development using the latest modern no-code and low-code tools.",
    icon: Zap
  }
];

const ClassicServices: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-20 text-center">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">What we bring to the table</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1} className="h-full">
                    <motion.div
                        className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors duration-300 h-full group"
                        whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
                    >
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                            <service.icon size={26} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-white-dim text-sm leading-relaxed">{service.description}</p>
                    </motion.div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ClassicServices;
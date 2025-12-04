
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer: "Speed is our signature. A high-converting landing page sprint typically takes 1-2 weeks, while a comprehensive product design cycle usually spans 4-8 weeks. We provide a detailed roadmap during our initial discovery call."
  },
  {
    id: 2,
    question: "Do you handle development as well?",
    answer: "Yes. We are a full-service agency. Our 'Development' and 'Enterprise' plans include high-performance frontend implementation using React, Next.js, and Tailwind CSS, ensuring the final product matches the design pixel-perfectly."
  },
  {
    id: 3,
    question: "How does the subscription model work?",
    answer: "It's simple: one flat monthly fee for unlimited requests. You get a dedicated design team for less than the cost of a single senior hire. You can pause or cancel anytime—no long-term contracts or hidden fees."
  },
  {
    id: 4,
    question: "What if I'm not satisfied with the design?",
    answer: "We keep iterating until you're obsessed with it. Unlimited revisions are included in every plan. We don't stop working until the design meets your exact vision and quality standards."
  },
  {
    id: 5,
    question: "Can you work with our existing design system?",
    answer: "Absolutely. We can audit, update, or completely overhaul your existing design system. We build atomic, scalable component libraries that ensure consistency across your entire product ecosystem as you scale."
  },
  {
    id: 6,
    question: "What is your primary tech stack?",
    answer: "For design, we live in Figma. For development, we specialize in the modern React ecosystem (Next.js, TypeScript, Tailwind CSS, Framer Motion) and Supabase for backend needs."
  }
];

interface FAQItemProps {
  item: typeof FAQS[0];
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen ? "rgba(10, 10, 10, 1)" : "rgba(255, 255, 255, 0)",
        borderColor: isOpen ? "rgba(16, 185, 129, 0.5)" : "rgba(255, 255, 255, 0.05)",
      }}
      className={`border rounded-2xl overflow-hidden transition-shadow duration-300 ${
        isOpen ? 'shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]' : ''
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start gap-6 p-6 md:p-8 text-left group"
      >
        <span className={`text-sm font-mono mt-1 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white/30'}`}>
          {String(index + 1).padStart(2, '0')}
        </span>
        
        <div className="flex-1">
          <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
            {item.question}
          </h3>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="pt-4 text-white-dim leading-relaxed text-base md:text-lg">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-primary text-black border-primary' 
            : 'bg-transparent text-white/50 border-white/10 group-hover:border-white/30 group-hover:text-white'
        }`}>
           <Plus size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
        </div>
      </button>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden" id="faq">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white-dim text-xs font-bold uppercase tracking-widest mb-6">
                <MessageCircle size={14} className="text-primary" /> FAQ
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Questions? <br/>
                <span className="text-white-dim">Answers.</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-sm">
                Everything you need to know about working with Flowrax. Can't find what you're looking for?
              </p>
              
              <a 
                href="https://cal.com/flowrax/project-discussion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group"
              >
                Chat with our team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {FAQS.map((faq, index) => (
              <AnimatedSection key={faq.id} delay={index * 0.1}>
                <FAQItem 
                  item={faq} 
                  index={index}
                  isOpen={openId === faq.id}
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              </AnimatedSection>
            ))}
            
            {/* Last Item: Custom CTA */}
             <AnimatedSection delay={0.6}>
               <Link 
                 to="/contact" 
                 className="block mt-4 p-8 rounded-2xl border border-dashed border-white/10 hover:border-primary/30 hover:bg-white/5 transition-all group text-center"
               >
                 <h3 className="text-white font-bold text-lg mb-1">Have another question?</h3>
                 <p className="text-white-dim text-sm mb-4">We're here to help you get started.</p>
                 <span className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                   Contact Support <ArrowRight size={16} />
                 </span>
               </Link>
             </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;

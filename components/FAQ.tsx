import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const FAQS = [
  {
    question: "What is your typical engagement timeline?",
    answer: "Our sprints are designed for speed. A typical design sprint for a landing page or feature set takes 1-2 weeks. Full product design projects usually span 4-8 weeks depending on complexity."
  },
  {
    question: "Do you offer development services?",
    answer: "Yes. While we are design-first, our 'Development' and 'Enterprise' plans include frontend implementation using Next.js, React, and Tailwind CSS to ensure the final product matches the design perfectly."
  },
  {
    question: "How does the subscription model work?",
    answer: "It's simple. You subscribe to a plan, and we become your design team. You can pause or cancel anytime. There are no long-term contracts or hidden fees, just a flat monthly rate."
  },
  {
    question: "What if I don't like the design?",
    answer: "We offer unlimited revisions on all plans. We will continue iterating on the design until you are 100% satisfied with the result. Your happiness is our priority."
  },
  {
    question: "Do you work with existing design systems?",
    answer: "Absolutely. We can audit, update, and expand your existing design system, or build a new one from scratch that aligns with your brand's future goals."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
        <p className="text-white-dim">Everything you need to know about working with us.</p>
      </AnimatedSection>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <AnimatedSection key={index} delay={index * 0.05}>
            <div 
              onClick={() => toggleFAQ(index)}
              className="group cursor-pointer border-b border-white/5 pb-4 transition-colors hover:border-white/20"
            >
              <div className="flex items-center justify-between py-4">
                <h3 className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-primary' : 'text-white group-hover:text-white/90'}`}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-white-dim group-hover:text-white ${openIndex === index ? 'text-primary' : ''}`}
                >
                  <Plus size={20} />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-white-dim pb-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
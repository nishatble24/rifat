import React from 'react';
import { TESTIMONIALS } from '../constants';
import AnimatedSection from './ui/AnimatedSection';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Feedback</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <div className="bg-surface p-8 rounded-2xl border border-white/5 relative">
                <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12" />
                <p className="text-lg text-white/90 leading-relaxed mb-8 relative z-10">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{t.name}</h4>
                    <p className="text-sm text-white-dim">{t.role} at {t.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
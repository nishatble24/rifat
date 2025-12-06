
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "Flowrax didn't just redesign our website; they completely reimagined how we communicate our value. The result was a platform that felt alive, intuitive, and remarkably fast.",
    name: "Jonathan Reeves",
    role: "CMO",
    company: "Apex Digital",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "#"
  },
  {
    id: 2,
    quote: "The attention to detail is staggering. Every interaction, every animation felt purposeful. It wasn't just design; it was an exercise in brand elevation.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Lumina",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    link: "#"
  },
  {
    id: 3,
    quote: "We needed a site that could scale with our rapid growth. Flowrax delivered a robust design system that our internal team now uses daily. A true partnership.",
    name: "Marcus Thorne",
    role: "Product Lead",
    company: "Nexus Systems",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    link: "#"
  }
];

const ClientReviews: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(nextSlide, 6000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
       <div className="absolute inset-0 bg-gradient-to-b from-black to-[#080808]" />
       
       <div 
         className="max-w-5xl mx-auto px-6 relative z-10"
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}
       >
          {/* Large Quote Mark Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-white/5">
             <Quote size={120} fill="currentColor" />
          </div>

          <div className="relative min-h-[400px] flex flex-col items-center justify-center text-center">
             <AnimatePresence mode='wait'>
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                   {/* Star Rating */}
                   <div className="flex gap-1 mb-8">
                      {[1,2,3,4,5].map((s, i) => (
                         <motion.div
                           key={i}
                           initial={{ opacity: 0, scale: 0 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ delay: i * 0.05 + 0.3 }}
                         >
                            <Star size={18} className="text-primary fill-primary" />
                         </motion.div>
                      ))}
                   </div>

                   {/* The Quote */}
                   <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white/90 leading-tight md:leading-snug max-w-4xl mb-12 italic">
                      "{TESTIMONIALS_DATA[current].quote}"
                   </h3>

                   {/* Client Info */}
                   <div className="flex items-center gap-4 text-left bg-white/5 pr-6 pl-2 py-2 rounded-full border border-white/5">
                      <img 
                        src={TESTIMONIALS_DATA[current].avatar} 
                        alt={TESTIMONIALS_DATA[current].name} 
                        className="w-12 h-12 rounded-full object-cover border border-white/10"
                      />
                      <div>
                         <div className="text-white font-bold leading-none mb-1">{TESTIMONIALS_DATA[current].name}</div>
                         <div className="text-white-dim text-xs uppercase tracking-wider">{TESTIMONIALS_DATA[current].role}, {TESTIMONIALS_DATA[current].company}</div>
                      </div>
                   </div>

                   {/* Read Case Study Link */}
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.6 }}
                     className="mt-8"
                   >
                      <Link to="/work" className="text-white-dim text-sm hover:text-white border-b border-transparent hover:border-white transition-all pb-0.5">
                         Read full case study →
                      </Link>
                   </motion.div>

                </motion.div>
             </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 hidden md:block">
             <button onClick={prevSlide} className="p-3 rounded-full text-white/20 hover:text-white hover:bg-white/5 transition-all">
                <ChevronLeft size={32} />
             </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 hidden md:block">
             <button onClick={nextSlide} className="p-3 rounded-full text-white/20 hover:text-white hover:bg-white/5 transition-all">
                <ChevronRight size={32} />
             </button>
          </div>
          
          {/* Mobile Dots */}
          <div className="flex justify-center gap-3 mt-8 md:hidden">
             {TESTIMONIALS_DATA.map((_, i) => (
               <button 
                 key={i}
                 onClick={() => setCurrent(i)}
                 className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-primary w-6' : 'bg-white/20'}`}
               />
             ))}
          </div>

       </div>
    </section>
  )
}

export default ClientReviews;

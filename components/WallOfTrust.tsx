
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Hexagon, Triangle, Circle } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

type CardType = 'quote' | 'result' | 'logo';

interface TrustCardProps {
  type: CardType;
  content: any;
  featured?: boolean;
}

const TrustCard: React.FC<TrustCardProps> = ({ type, content, featured }) => {
  const baseClasses = `w-full rounded-2xl p-6 md:p-8 backdrop-blur-sm border transition-all duration-300 hover:border-white/10 ${
    featured 
      ? 'bg-gradient-to-br from-cyan-900/20 to-transparent border-cyan-500/20' 
      : 'bg-white/5 border-white/5'
  }`;

  if (type === 'result') {
    return (
      <div className={`${baseClasses} flex flex-col justify-center items-center text-center min-h-[200px] group relative`}>
        {featured && (
          <div className="absolute top-6 right-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Featured Result</span>
          </div>
        )}
        
        <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
           <TrendingUp size={28} />
        </div>
        
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {content.value}
          </h3>
          <p className="text-white-dim text-sm font-medium">{content.label}</p>
        </div>
      </div>
    );
  }

  if (type === 'logo') {
    return (
      <div className={`${baseClasses} flex items-center justify-center min-h-[160px] opacity-60 hover:opacity-100 transition-opacity`}>
        <content.icon size={48} className="text-white" strokeWidth={1} />
        <span className="ml-3 text-xl font-bold tracking-tight text-white">{content.name}</span>
      </div>
    );
  }

  // Default: Quote
  return (
    <div className={`${baseClasses} flex flex-col gap-6`}>
      <p className="text-white/90 leading-relaxed text-lg">"{content.quote}"</p>
      <div className="flex items-center gap-3">
        <img 
          src={content.avatar} 
          alt={content.author} 
          className="w-10 h-10 rounded-full border border-white/10"
        />
        <div>
          <h4 className="text-sm font-semibold text-white">{content.author}</h4>
          <p className="text-xs text-white-dim">{content.role}</p>
        </div>
      </div>
    </div>
  );
};

// Data for Columns
const COL_1 = [
  {
    type: 'quote',
    content: {
      quote: "The level of detail in their design systems is unmatched. It scaled perfectly.",
      author: "Alex Rivera",
      role: "Product Lead at Stripe",
      avatar: "https://picsum.photos/100/100?random=20"
    }
  },
  {
    type: 'result',
    content: { value: "3x", label: "Faster Dev Handoff" },
    featured: false
  },
  {
    type: 'logo',
    content: { name: "Acme Corp", icon: Hexagon }
  }
];

const COL_2 = [
  {
    type: 'result',
    content: { value: "$1.2M", label: "Generated Revenue" },
    featured: true
  },
  {
    type: 'quote',
    content: {
      quote: "We redefined our entire brand identity in just 4 weeks. The velocity was insane.",
      author: "Elena Foster",
      role: "CEO at Novus",
      avatar: "https://picsum.photos/100/100?random=21"
    }
  },
  {
    type: 'quote',
    content: {
      quote: "A true partnership. They didn't just take orders, they challenged our assumptions.",
      author: "David Kim",
      role: "Founder at Stack",
      avatar: "https://picsum.photos/100/100?random=22"
    }
  }
];

const COL_3 = [
  {
    type: 'logo',
    content: { name: "Vertex", icon: Triangle }
  },
  {
    type: 'quote',
    content: {
      quote: "Our user retention jumped 40% after the UX overhaul.",
      author: "Sarah Jenkins",
      role: "Head of Growth",
      avatar: "https://picsum.photos/100/100?random=23"
    },
    featured: true
  },
  {
    type: 'logo',
    content: { name: "Orbit", icon: Circle }
  }
];

const WallOfTrust: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax: Middle column moves up slightly faster as you scroll past
  const yMiddle = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // Outer columns move up slower
  const yOuter = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative bg-black/50 overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 md:px-6">
         <AnimatedSection className="mb-16 md:mb-24 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built on Trust.</h2>
            <p className="text-white-dim text-lg">The results speak for themselves.</p>
         </AnimatedSection>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            
            {/* Column 1 */}
            <motion.div style={{ y: isDesktop ? yOuter : 0 }} className="flex flex-col gap-6">
              {COL_1.map((item, i) => (
                <TrustCard key={i} type={item.type as CardType} content={item.content} featured={item.featured} />
              ))}
            </motion.div>

            {/* Column 2 - Parallax Middle */}
            {/* Added top margin compensation to prevent overlap even with parallax */}
            <motion.div style={{ y: isDesktop ? yMiddle : 0 }} className="flex flex-col gap-6 md:-mt-12 md:pt-12">
              {COL_2.map((item, i) => (
                <TrustCard key={i} type={item.type as CardType} content={item.content} featured={item.featured} />
              ))}
            </motion.div>

            {/* Column 3 */}
            <motion.div style={{ y: isDesktop ? yOuter : 0 }} className="flex flex-col gap-6">
              {COL_3.map((item, i) => (
                <TrustCard key={i} type={item.type as CardType} content={item.content} featured={item.featured} />
              ))}
            </motion.div>

         </div>
       </div>
    </section>
  );
};

export default WallOfTrust;


import React, { useRef, useEffect } from 'react';
import { Figma, Github, Slack, Chrome, Terminal, Database, Server, Layers } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const TOOLS = [
  { name: 'Figma', icon: Figma },
  { name: 'React', icon: Terminal },
  { name: 'GitHub', icon: Github },
  { name: 'Slack', icon: Slack },
  { name: 'Vercel', icon: Server },
  { name: 'Supabase', icon: Database },
  { name: 'Chrome', icon: Chrome },
  { name: 'Systems', icon: Layers },
];

const TechStack: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = grid.getElementsByClassName('tech-card');
      
      for (const card of cards as any) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    grid.addEventListener('mousemove', handleMouseMove);
    return () => grid.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-24 bg-black relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Powered by the Best.</h2>
          <p className="text-neutral-500 text-sm uppercase tracking-widest">Our Industrial Grade Stack</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div 
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-4 bg-neutral-900 border border-neutral-900"
          >
            {TOOLS.map((tool, i) => (
              <div 
                key={i}
                className="tech-card group relative h-32 md:h-40 bg-black flex items-center justify-center overflow-hidden border border-white/5"
              >
                {/* Spotlight Overlay */}
                <div 
                  className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)`
                  }}
                />
                
                {/* Border Highlight (Simulated via smaller inner background or separate layer) */}
                 <div 
                  className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(16, 185, 129, 0.4), transparent 40%)`
                  }}
                />
                
                {/* Content */}
                <div className="relative z-20 flex flex-col items-center gap-3 transition-colors">
                  <tool.icon 
                    size={32} 
                    strokeWidth={1.5}
                    className="text-neutral-600 transition-colors duration-300 group-hover:text-white" 
                  />
                  <span className="text-xs font-mono font-medium text-neutral-600 uppercase tracking-wider opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {tool.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechStack;

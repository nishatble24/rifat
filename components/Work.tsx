
import React from 'react';
import { PROJECTS } from '../constants';
import AnimatedSection from './ui/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
            <p className="text-white-dim">Showcasing our best digital products.</p>
          </div>
          <Link to="/work" className="flex items-center gap-2 text-primary hover:text-white transition-colors">
            View All Projects <ArrowUpRight size={18} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 4).map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 border border-white/10">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Action */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-surface/90 backdrop-blur rounded-full flex items-center justify-center text-primary">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white-dim text-sm">{project.category}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded border border-white/10 text-white-dim">
                        {tag}
                      </span>
                    ))}
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

export default Work;

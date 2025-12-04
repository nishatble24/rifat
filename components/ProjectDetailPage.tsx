
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, ArrowUpRight, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import AnimatedSection from './ui/AnimatedSection';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <Link to="/work" className="text-primary hover:underline">Back to Work</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-24 relative selection:bg-primary selection:text-black">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-neutral-900 to-[#050505] -z-10" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation */}
        <AnimatedSection className="mb-8">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-white-dim hover:text-primary transition-colors text-sm font-medium group"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
               <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Back to All Projects
          </Link>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection className="mb-12 md:mb-20">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
              <div>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
                >
                  {project.category}
                </motion.span>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                  {project.title}
                </h1>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-colors">
                Visit Live Site <ArrowUpRight size={18} />
              </a>
           </div>

           {/* Hero Image */}
           <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
           </div>
        </AnimatedSection>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           {/* Sidebar Info */}
           <div className="lg:col-span-4 order-2 lg:order-1 space-y-8">
              <AnimatedSection delay={0.2} className="p-8 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm">
                 <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-4">Project Info</h3>
                 
                 <div className="space-y-6">
                    <div>
                       <div className="flex items-center gap-2 text-white-dim text-xs uppercase tracking-wider font-bold mb-1">
                          <User size={14} /> Client
                       </div>
                       <p className="text-white">Confidential / NDA</p>
                    </div>
                    <div>
                       <div className="flex items-center gap-2 text-white-dim text-xs uppercase tracking-wider font-bold mb-1">
                          <Calendar size={14} /> Timeline
                       </div>
                       <p className="text-white">8 Weeks</p>
                    </div>
                    <div>
                       <div className="flex items-center gap-2 text-white-dim text-xs uppercase tracking-wider font-bold mb-1">
                          <Tag size={14} /> Services
                       </div>
                       <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map(tag => (
                             <span key={tag} className="px-2 py-1 bg-white/5 rounded border border-white/5 text-xs text-white-dim">
                                {tag}
                             </span>
                          ))}
                       </div>
                    </div>
                 </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
                 <h4 className="font-bold text-white mb-2">Need similar results?</h4>
                 <p className="text-sm text-white-dim mb-4">We can build a similar system for your business in less than 4 weeks.</p>
                 <a 
                   href="https://cal.com/flowrax/project-discussion" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-primary text-sm font-bold flex items-center gap-2 hover:underline"
                 >
                    Book a Strategy Call <ArrowRight size={14} />
                 </a>
              </AnimatedSection>
           </div>

           {/* Main Content Area (Placeholder for Case Study) */}
           <div className="lg:col-span-8 order-1 lg:order-2">
              <AnimatedSection delay={0.2} className="prose prose-invert prose-lg max-w-none">
                 <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                 <p className="text-white-dim leading-relaxed mb-8">
                    This is a placeholder for the case study content. In a real application, this would contain a detailed description of the problem the client was facing. It would discuss the complexities of the market, the user pain points, and the technical constraints that made this project unique.
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    <div className="aspect-[4/3] bg-neutral-800 rounded-xl border border-white/5"></div>
                    <div className="aspect-[4/3] bg-neutral-800 rounded-xl border border-white/5"></div>
                 </div>

                 <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
                 <p className="text-white-dim leading-relaxed mb-6">
                    Here we would describe the design process. How we conducted user research, created wireframes, and iterated on high-fidelity prototypes.
                 </p>
                 <ul className="list-disc pl-5 space-y-2 text-white-dim mb-8">
                    <li>Conducted 15+ user interviews to identify core friction points.</li>
                    <li>Developed a scalable design system with 200+ components.</li>
                    <li>Implemented dark mode for better accessibility in low-light environments.</li>
                 </ul>

                 <h2 className="text-2xl font-bold text-white mb-4">The Result</h2>
                 <p className="text-white-dim leading-relaxed">
                    The final product resulted in a significant increase in user engagement and a reduction in support tickets. The client was able to secure their Series A funding shortly after launch.
                 </p>
              </AnimatedSection>

              {/* Bottom Nav (Mobile) */}
              <div className="mt-12 pt-12 border-t border-white/10 md:hidden">
                 <a href="#" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white text-black font-bold rounded-xl">
                   Visit Live Site <ArrowUpRight size={18} />
                 </a>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

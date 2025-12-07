
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import AnimatedSection from './ui/AnimatedSection';
import { ArrowUpRight, Quote, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhyChooseUs from './WhyChooseUs';
import WebDesignTechStack from './WebDesignTechStack';
import FounderCTA from './FounderCTA';
import Team from './Team';

const FILTERS = ['All Projects', 'UI/UX', 'Branding', 'Mobile Apps'];

const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  // Simple filtering logic based on project tags or category
  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'All Projects') return true;
    if (activeFilter === 'Mobile Apps') return project.category.includes('Mobile') || project.tags.includes('Mobile');
    if (activeFilter === 'Branding') return project.tags.includes('Marketing') || project.category.includes('Brand');
    if (activeFilter === 'UI/UX') return !project.category.includes('Mobile') && !project.tags.includes('Marketing');
    return true;
  });

  return (
    <div className="pt-32 pb-0 min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white opacity-[0.05] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 relative z-10 mb-24">
        
        {/* Header Section */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_0_25px_rgba(1,208,245,0.4)] tracking-tight">
            Featured Digital Systems
          </h1>
          <p className="text-white-dim text-lg md:text-xl max-w-2xl mx-auto">
            Explore our defining work in UI/UX, Branding, and Product Strategy.
          </p>
        </AnimatedSection>

        {/* Filtering Component */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-3 p-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                    isActive ? 'text-black font-bold' : 'text-white hover:text-white/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 rounded-full border border-primary/0 hover:border-primary/30 transition-colors -z-10" />
                  )}
                  {filter}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Robust Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full"
              >
                <Link to={`/work/${project.id}`} className="block h-full group">
                  {/* Card Container */}
                  <div className="h-full bg-[#0A0A0A] p-5 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors duration-300 flex flex-col relative overflow-hidden">
                    
                    {/* Hover Glow Behind Thumbnail */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" 
                         style={{ background: 'radial-gradient(circle, rgba(1,208,245,0.15) 0%, transparent 70%)' }} 
                    />

                    {/* Thumbnail Container */}
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/50 z-10">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                      {/* Overlay Text Content */}
                      <div className="absolute bottom-0 left-0 w-full p-6">
                        <motion.span 
                          className="inline-block px-3 py-1 mb-3 text-xs font-bold text-black bg-primary rounded-full"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {project.category}
                        </motion.span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex gap-2 text-white-dim text-sm">
                           {project.tags.slice(0, 2).join(' • ')}
                        </div>
                      </div>

                      {/* Corner Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-white-dim">
            <p>No projects found in this category.</p>
          </div>
        )}

      </div>

      <div className="max-w-[90rem] mx-auto px-6 relative z-10 mb-24">
        {/* Testimonial Spotlight Section */}
        <AnimatedSection className="py-24 relative rounded-3xl overflow-hidden border border-white/5 bg-[#080808]">
          {/* Backgrounds */}
          <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              <Quote size={64} className="text-primary/50 mb-8 fill-primary/10" strokeWidth={1.5} />
              
              <blockquote className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight mb-12 relative max-w-4xl">
                "Flowrax didn't just redesign our product; they fundamentally reimagined how our users interact with data. The result was a <span className="text-primary not-italic decoration-clone">300% increase</span> in daily engagement."
              </blockquote>
              
              <div className="flex flex-col items-center md:items-end w-full md:pr-12">
                <cite className="not-italic text-2xl font-bold text-white mb-1">Alexander V.</cite>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">VP of Product at FinTech Global</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Why Flowrax Section */}
      <WhyChooseUs />

      {/* Our Toolkit Section */}
      <WebDesignTechStack />

      {/* Meet Our Team Section (New) */}
      <Team />

      {/* Final Call-to-Action Section */}
      <FounderCTA />

    </div>
  );
};

export default WorkPage;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Dribbble, ArrowRight, ChevronDown, ChevronUp, Briefcase, Award, Clock, Star, Zap } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const TEAM_MEMBERS = [
  {
    id: 'rifat',
    name: 'Rifat Amin',
    role: 'CEO & Co-Founder',
    badge: 'Co-Founder',
    bio: 'Turning complex problems into elegant design solutions.',
    fullBio: "With 8+ years in digital design, Rifat leads our team with a user-first philosophy. He's passionate about creating products that make a real difference in people's lives. Previously led design at multiple high-growth startups.",
    image: 'https://ik.imagekit.io/flowrax/ricn.webp',
    social: [
      { name: 'LinkedIn', icon: Linkedin, url: '#' },
      { name: 'Twitter', icon: Twitter, url: '#' },
      { name: 'Dribbble', icon: Dribbble, url: '#' }
    ],
    accent: '#6C3CE9', // Purple
    stats: [
      { label: 'Experience', value: '8+ Years', icon: Clock },
      { label: 'Projects', value: '150+', icon: Briefcase },
      { label: 'Tool', value: 'Figma', icon: Zap }
    ],
    skills: ['UI Strategy', 'Product Vision', 'Team Leadership'],
    funFact: 'Designs best after midnight with lo-fi music.'
  },
  {
    id: 'rima',
    name: 'Rima Aktar',
    role: 'COO & Co-Founder',
    badge: 'Co-Founder',
    bio: 'Making sure every project runs smoothly and clients stay happy.',
    fullBio: "Rima is the operational backbone of our agency. Her client-focused approach and process optimization skills have helped us achieve 98% client satisfaction. She builds relationships that last.",
    image: 'https://ik.imagekit.io/flowrax/rimagrd.png',
    social: [
      { name: 'LinkedIn', icon: Linkedin, url: '#' },
      { name: 'Twitter', icon: Twitter, url: '#' }
    ],
    accent: '#0D9488', // Teal
    stats: [
      { label: 'Experience', value: '7+ Years', icon: Clock },
      { label: 'Retention', value: '98%', icon: Star },
      { label: 'Focus', value: 'Process', icon: Zap }
    ],
    skills: ['Operations', 'Client Mgmt', 'Strategy'],
    funFact: 'Morning yoga enthusiast and book collector.'
  },
  {
    id: 'shakil',
    name: 'Shakil Adnan',
    role: 'Senior Product Designer',
    badge: 'Design Lead',
    bio: 'Crafting pixel-perfect interfaces that users love.',
    fullBio: "Shakil brings creativity and precision to every project. Specializing in mobile and web interfaces, his work has won multiple design awards. He believes great design is invisible—it just works.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80',
    social: [
      { name: 'Dribbble', icon: Dribbble, url: '#' },
      { name: 'LinkedIn', icon: Linkedin, url: '#' }
    ],
    accent: '#3B82F6', // Blue
    stats: [
      { label: 'Experience', value: '5+ Years', icon: Clock },
      { label: 'Projects', value: '100+', icon: Briefcase },
      { label: 'Awards', value: '5', icon: Award }
    ],
    skills: ['UI Design', 'Prototyping', 'Motion'],
    funFact: 'Sneaker collector with 50+ pairs.'
  },
  {
    id: 'zara',
    name: 'Zara Ahmed',
    role: 'Project Manager',
    badge: 'Agile Certified',
    bio: 'Keeping projects on track and teams in sync.',
    fullBio: "Zara is the bridge between clients and our design team. Her meticulous planning and communication skills ensure every project is delivered on time and exceeds expectations. Scrum Master certified.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80',
    social: [
      { name: 'LinkedIn', icon: Linkedin, url: '#' },
      { name: 'Twitter', icon: Twitter, url: '#' }
    ],
    accent: '#EC4899', // Pink
    stats: [
      { label: 'Experience', value: '4+ Years', icon: Clock },
      { label: 'Delivery', value: '100%', icon: Star },
      { label: 'Managed', value: '75+', icon: Briefcase }
    ],
    skills: ['Agile', 'Planning', 'Risk Mgmt'],
    funFact: 'Travel blogger who visited 15 countries.'
  }
];

const TeamCard = ({ member }: { member: typeof TEAM_MEMBERS[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="group bg-[#1A1A2E] border border-white/10 rounded-[20px] overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative flex flex-col"
      style={{ 
        boxShadow: isExpanded 
          ? `0 20px 40px -10px ${member.accent}15` 
          : '0 10px 20px -5px rgba(0,0,0,0.3)' 
      }}
    >
      {/* Top Border Accent */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ backgroundColor: member.accent }}
      />

      <div className="p-6 flex flex-col h-full">
        {/* Photo & Badge */}
        <motion.div layout="position" className="flex justify-between items-start mb-6">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/5 group-hover:border-white/10 transition-colors">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Color Overlay on Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
              style={{ backgroundColor: member.accent }}
            />
          </div>
          
          <div 
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
            style={{ 
              backgroundColor: `${member.accent}15`, 
              color: member.accent,
              borderColor: `${member.accent}30`
            }}
          >
            {member.badge}
          </div>
        </motion.div>

        {/* Basic Info */}
        <motion.div layout="position" className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">{member.name}</h3>
          <p className="text-sm font-medium mb-3" style={{ color: member.accent }}>{member.role}</p>
          <p className="text-sm text-[#A0A0B0] leading-relaxed">{member.bio}</p>
        </motion.div>

        {/* Social Icons (Always visible) */}
        <motion.div layout="position" className="flex gap-2 mb-6">
          {member.social.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
              aria-label={`${member.name}'s ${social.name}`}
              style={{ hover: { color: member.accent } } as any}
            >
              <social.icon size={16} />
            </a>
          ))}
        </motion.div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-6 border-t border-white/5 space-y-6">
                
                {/* Full Bio */}
                <p className="text-sm text-white/80 leading-relaxed">
                  {member.fullBio}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-white/70 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {member.stats.map(stat => (
                    <div key={stat.label} className="bg-white/[0.02] p-2 rounded-lg border border-white/5 text-center">
                      <stat.icon size={12} className="mx-auto mb-1 opacity-50" style={{ color: member.accent }} />
                      <div className="text-xs font-bold text-white mb-0.5">{stat.value}</div>
                      <div className="text-[9px] text-white/30 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Fun Fact */}
                <div className="p-3 rounded-lg bg-gradient-to-r from-white/[0.03] to-transparent border-l-2 border-white/10 text-xs text-white/60 italic">
                  💡 {member.funFact}
                </div>

                {/* CTA */}
                <a 
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 mt-2"
                  style={{ backgroundColor: member.accent, color: '#000' }}
                >
                  Connect Now <ArrowRight size={14} />
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand Trigger */}
        <motion.button 
          layout="position"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto w-full py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp size={14} /></>
          ) : (
            <>View Full Profile <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" /></>
          )}
        </motion.button>

      </div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <AnimatedSection className="mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Meet The Team</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The passionate people<br/>behind your success</h2>
          <p className="text-white-dim text-lg max-w-2xl">
            We are a collective of strategists, designers, and engineers obsessed with quality.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {TEAM_MEMBERS.map((member, index) => (
            <AnimatedSection key={member.id} delay={index * 0.1}>
              <TeamCard member={member} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;

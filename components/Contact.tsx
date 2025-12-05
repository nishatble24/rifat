
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

const BUDGET_OPTIONS = [
  "Less than $2K",
  "$2K - $5K",
  "$5K - $10K",
  "$10K - $20K",
  "More than $20K"
];

const Contact: React.FC = () => {
  const [selectedBudget, setSelectedBudget] = useState("$5K - $10K");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Ambient Background Glows */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
       
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl">
            
            {/* Left Column: Information / Lead Magnet */}
            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-[#080808] overflow-hidden">
               {/* Radial Glow Background */}
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(1,208,245,0.1),_transparent_60%)] pointer-events-none" />
               
               <div className="relative z-10">
                 {/* Header Tag */}
                 <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_15px_-3px_rgba(1,208,245,0.3)]">
                   Claim a $799 Consultation, on Us!
                 </div>

                 {/* Headline */}
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                   Elevate Your UI UX Design Potential At <span className="text-primary relative inline-block">
                     No Cost!
                     <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                       <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                     </svg>
                   </span>
                 </h2>

                 {/* Checklist */}
                 <ul className="space-y-5 mb-12">
                    {[
                      "Expect a response from us within 24 hours.",
                      "We're happy to sign an NDA upon request.",
                      "Get access to a team of dedicated product specialists."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-white/90 text-lg">{item}</span>
                      </li>
                    ))}
                 </ul>
               </div>

               {/* Profile & CTA */}
               <div className="relative z-10 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative group cursor-pointer">
                      <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary to-blue-600 rounded-full opacity-70 group-hover:opacity-100 blur-[2px] transition-opacity" />
                      <img 
                        src="https://ik.imagekit.io/flowrax/rim_coo.webp" 
                        alt="Rima Aktar" 
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-black"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Rima Aktar</h4>
                      <p className="text-primary text-sm font-medium">COO & Co-founder</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-white hover:text-primary transition-colors w-fit font-medium">
                    <Mail size={18} className="text-primary" />
                    <a href="mailto:info@flowrax.com">info@flowrax.com</a>
                  </div>
                  
                  <a 
                    href="https://cal.com/flowrax/project-discussion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-bold group"
                  >
                    <Calendar size={18} />
                    Book a Call Directly
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
               </div>
            </div>

            {/* Right Column: Form Fields */}
            <div className="bg-[#0A0A0A] p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
               <form 
                 className="space-y-6"
                 action="https://formspree.io/f/mqarlpwy"
                 method="POST"
               >
                  {/* Hidden Inputs for Formspree */}
                  <input type="hidden" name="budget" value={selectedBudget} />
                  <input type="hidden" name="_redirect" value="/thank-you" />

                  {/* Name */}
                  <div className="group">
                    <label className="block text-xs font-bold text-white-dim uppercase tracking-wider mb-2 ml-1">Your Name</label>
                    <div className={`flex items-center bg-white/5 border rounded-xl px-4 py-3 transition-all duration-300 ${focusedField === 'name' ? 'border-primary shadow-[0_0_15px_-5px_rgba(1,208,245,0.3)] bg-white/10' : 'border-white/10'}`}>
                       <User size={18} className={`mr-3 transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-white/40'}`} />
                       <input 
                         type="text" 
                         name="name"
                         placeholder="John Doe"
                         required
                         className="bg-transparent w-full text-white placeholder:text-white/20 focus:outline-none"
                         onFocus={() => setFocusedField('name')}
                         onBlur={() => setFocusedField(null)}
                       />
                    </div>
                  </div>

                  {/* Email & Whatsapp Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs font-bold text-white-dim uppercase tracking-wider mb-2 ml-1">Your Email</label>
                      <div className={`flex items-center bg-white/5 border rounded-xl px-4 py-3 transition-all duration-300 ${focusedField === 'email' ? 'border-primary shadow-[0_0_15px_-5px_rgba(1,208,245,0.3)] bg-white/10' : 'border-white/10'}`}>
                         <Mail size={18} className={`mr-3 transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-white/40'}`} />
                         <input 
                           type="email" 
                           name="email"
                           placeholder="john@company.com"
                           required
                           className="bg-transparent w-full text-white placeholder:text-white/20 focus:outline-none"
                           onFocus={() => setFocusedField('email')}
                           onBlur={() => setFocusedField(null)}
                         />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-bold text-white-dim uppercase tracking-wider mb-2 ml-1">Whatsapp Number</label>
                      <div className={`flex items-center bg-white/5 border rounded-xl px-4 py-3 transition-all duration-300 ${focusedField === 'phone' ? 'border-primary shadow-[0_0_15px_-5px_rgba(1,208,245,0.3)] bg-white/10' : 'border-white/10'}`}>
                         <Phone size={18} className={`mr-3 transition-colors ${focusedField === 'phone' ? 'text-primary' : 'text-white/40'}`} />
                         <input 
                           type="tel" 
                           name="whatsapp"
                           placeholder="+1 (555) 000-0000"
                           className="bg-transparent w-full text-white placeholder:text-white/20 focus:outline-none"
                           onFocus={() => setFocusedField('phone')}
                           onBlur={() => setFocusedField(null)}
                         />
                      </div>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-bold text-white-dim uppercase tracking-wider mb-3 ml-1">Project Budget</label>
                    <div className="flex flex-wrap gap-2">
                       {BUDGET_OPTIONS.map((option) => {
                         const isActive = selectedBudget === option;
                         
                         return (
                           <button
                             key={option}
                             type="button"
                             onClick={() => setSelectedBudget(option)}
                             className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border 
                               ${isActive 
                                 ? 'bg-primary text-black border-primary shadow-[0_0_15px_-5px_rgba(1,208,245,0.5)]' 
                                 : 'bg-white/5 text-white-dim border-white/10 hover:bg-white/10 hover:border-white/20'
                               }
                             `}
                           >
                             {option}
                           </button>
                         )
                       })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="group">
                    <label className="block text-xs font-bold text-white-dim uppercase tracking-wider mb-2 ml-1">Project Details</label>
                    <div className={`flex items-start bg-white/5 border rounded-xl px-4 py-3 transition-all duration-300 ${focusedField === 'details' ? 'border-primary shadow-[0_0_15px_-5px_rgba(1,208,245,0.3)] bg-white/10' : 'border-white/10'}`}>
                       <MessageSquare size={18} className={`mr-3 mt-1 transition-colors ${focusedField === 'details' ? 'text-primary' : 'text-white/40'}`} />
                       <textarea 
                         name="details"
                         rows={4}
                         placeholder="Tell us about your goals, timeline, and current challenges..."
                         className="bg-transparent w-full text-white placeholder:text-white/20 focus:outline-none resize-none"
                         onFocus={() => setFocusedField('details')}
                         onBlur={() => setFocusedField(null)}
                       />
                    </div>
                  </div>

                  {/* Submit Button - Cyan Primary */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-black bg-primary shadow-[0_0_30px_-5px_rgba(1,208,245,0.5)] hover:shadow-[0_0_40px_-5px_rgba(1,208,245,0.7)] hover:bg-primary-glow transition-all flex items-center justify-center gap-2 group text-lg"
                  >
                    Let's Connect <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

               </form>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;

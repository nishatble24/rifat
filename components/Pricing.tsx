
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';

type BillingCycle = 'monthly' | 'quarterly';

const PLANS = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Perfect for early-stage startups needing quick design iterations.',
    price: { monthly: 1800, quarterly: 5220 },
    features: [
      '40 hours per month',
      'Full-Stack Delivery Team',
      'All design services included',
      '2 meetings per month',
      'Daily communication Slack + Loom',
      'Weekly updates and monthly reports',
      'Unlimited requests',
      '1 active request per team member'
    ],
    popular: false
  },
  {
    id: 'accelerate',
    name: 'Accelerate',
    description: 'Dedicated design support for growing product teams.',
    price: { monthly: 3400, quarterly: 9820 },
    features: [
      '80 hours per month',
      'Dedicated design team',
      '4 meetings per month',
      'All design services included',
      'Daily communication Slack + Loom',
      'Weekly updates and monthly reports',
      'Unlimited requests',
      '1 active request per team member'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full-scale design operations for large organizations.',
    price: { monthly: "Custom", quarterly: "Custom" },
    features: [
      '40 hours per month',
      'Full-Stack Delivery Team',
      'All design services included',
      '2 meetings per month',
      'Daily communication Slack + Loom',
      'Weekly updates and monthly reports',
      'Unlimited requests',
      '1 active request per team member'
    ],
    popular: false
  }
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  return (
    <section id="pricing" className="py-24 relative">
       {/* Background Glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-white-dim text-lg mb-8">
            No hidden fees. No contracts. Just pure design velocity.
          </p>
          
          {/* Toggle Control */}
          <div className="flex items-center justify-center gap-4">
             <span className={`text-sm font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-white-dim'}`}>Monthly</span>
             
             <button 
               onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'quarterly' : 'monthly')}
               className="relative w-16 h-8 bg-white/10 rounded-full p-1 transition-colors hover:bg-white/20"
             >
                <motion.div 
                  className="w-6 h-6 bg-primary rounded-full shadow-lg"
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
                />
             </button>
             
             <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${billingCycle === 'quarterly' ? 'text-white' : 'text-white-dim'}`}>
               Quarterly 
               <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary uppercase border border-primary/20">
                 Save 20%
               </span>
             </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PLANS.map((plan, index) => {
             const isPopular = plan.popular;
             const price = plan.price[billingCycle];
             const isCustom = price === "Custom";
             
             return (
              <AnimatedSection 
                key={plan.id} 
                delay={index * 0.1} 
                className={`relative flex flex-col h-full rounded-3xl p-8 transition-all duration-300
                  ${isPopular 
                    ? 'bg-black border-2 border-primary shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] md:scale-105 z-10' 
                    : 'bg-[#0A0A0A] border border-white/10 hover:border-white/20'
                  }
                `}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-white-dim h-10">{plan.description}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {!isCustom && "$"}
                    {typeof price === 'number' ? price.toLocaleString() : price}
                  </span>
                  {!isCustom && <span className="text-white-dim">/mo</span>}
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <div className={`mt-0.5 rounded-full p-0.5 ${isPopular ? 'bg-primary text-black' : 'bg-white/10 text-primary'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold transition-all
                    ${isPopular 
                      ? 'bg-primary text-black shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }
                  `}
                >
                  Get Started
                </motion.button>
              </AnimatedSection>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;


import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './ui/AnimatedSection';

type BillingCycle = 'monthly' | 'quarterly' | 'yearly';

const BILLING_OPTIONS: { label: string; value: BillingCycle; discount?: string }[] = [
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly', discount: '20% OFF' },
  { label: 'Yearly', value: 'yearly' },
];

const PLANS = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Perfect for early-stage startups needing quick design iterations.',
    prices: { monthly: 1800, quarterly: 5220, yearly: 21600 },
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
    prices: { monthly: 3400, quarterly: 9820, yearly: 40800 },
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
    prices: { monthly: "Custom", quarterly: "Custom", yearly: "Custom" },
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

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Our Design Team, Always On Call, For <span className="text-primary">One Flat Monthly Rate.</span>
          </h1>
          <p className="text-white-dim text-lg md:text-xl max-w-2xl mx-auto">
            An all-in-one product design plan with unlimited requests. Fast, expert work for one flat monthly fee. No hourly billing, no hidden costs.
          </p>
        </AnimatedSection>

        {/* Rate Toggle Component */}
        <AnimatedSection className="flex justify-center mb-20" delay={0.1}>
          <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 flex items-center relative">
            {BILLING_OPTIONS.map((option) => {
              const isActive = billingCycle === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => setBillingCycle(option.value)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 z-10 flex items-center gap-2 ${
                    isActive ? 'text-black' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeRate"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_20px_-5px_rgba(1,208,245,0.4)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {option.label}
                  {option.discount && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full border ${
                      isActive 
                        ? 'bg-black/20 text-black border-black/10' 
                        : 'bg-primary/10 text-primary border-primary/20'
                    }`}>
                      {option.discount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          {PLANS.map((plan) => {
            const isPopular = plan.popular;
            const price = plan.prices[billingCycle];
            const isCustom = price === "Custom";
            
            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500
                  ${isPopular 
                    ? 'bg-[#080808] border-2 border-primary z-10 scale-100 lg:-translate-y-4 shadow-2xl' 
                    : 'bg-neutral-900/80 border border-white/10 hover:border-white/20'
                  }
                `}
              >
                {/* Popular Glow Effect */}
                {isPopular && (
                  <>
                    <div className="absolute -inset-1 bg-primary/20 blur-3xl -z-10 rounded-[2rem] opacity-50" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-bold text-xs px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide flex items-center gap-1">
                      <Sparkles size={12} fill="black" /> Popular Choice
                    </div>
                  </>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-sm text-white-dim h-10 leading-relaxed">{plan.description}</p>
                </div>

                {/* Price Display with AnimatePresence */}
                <div className="mb-8 flex items-baseline gap-1 overflow-hidden">
                  <span className="text-5xl font-bold text-white tracking-tight flex">
                    {!isCustom && "$"}
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={String(price)}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {typeof price === 'number' ? price.toLocaleString() : price}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  {!isCustom && <span className="text-white-dim font-medium">/Month</span>}
                </div>

                {/* CTA Button */}
                <a 
                  href="https://cal.com/flowrax/project-discussion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-10 block"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group
                      ${isPopular 
                        ? 'bg-primary text-black shadow-[0_0_20px_-5px_rgba(1,208,245,0.4)] hover:shadow-[0_0_30px_-5px_rgba(1,208,245,0.6)]' 
                        : 'bg-transparent text-white border border-white/20 hover:border-primary hover:text-primary'
                      }
                    `}
                  >
                    Book a Free Call
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-8" />

                {/* Feature List */}
                <ul className="space-y-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed group">
                      <div className={`mt-0.5 rounded-full p-0.5 shrink-0 transition-colors ${isPopular ? 'bg-primary text-black' : 'bg-white/10 text-primary group-hover:bg-primary group-hover:text-black'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enterprise Note */}
        <AnimatedSection delay={0.4} className="mt-16 text-center">
            <p className="text-white-dim">
              Need a custom plan for a large organization? <Link to="/contact" className="text-primary hover:underline">Contact our sales team</Link>.
            </p>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default PricingPage;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, X, CreditCard, Calendar, BadgeDollarSign, ShieldCheck } from 'lucide-react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    
    const pricingPlans = [
        {
            name: "Basic",
            description: "Essential features for individual users",
            monthlyPrice: 0,
            yearlyPrice: 0,
            features: [
                { text: "Invisible during screen sharing", included: true },
                { text: "Basic meeting notes", included: true },
                { text: "Limited to 5 meetings per month", included: true },
                { text: "Real-time AI insights", included: false },
                { text: "Advanced meeting analytics", included: false },
                { text: "Integrations with CRM tools", included: false },
                { text: "Priority support", included: false },
            ],
            cta: "Get Started",
            color: "from-cyan-500/10 to-blue-500/10",
            popular: false
        },
        {
            name: "Pro",
            description: "Perfect for sales professionals and teams",
            monthlyPrice: 29,
            yearlyPrice: 290, // ~20% discount for yearly
            features: [
                { text: "Invisible during screen sharing", included: true },
                { text: "Comprehensive meeting notes", included: true },
                { text: "Unlimited meetings", included: true },
                { text: "Real-time AI insights", included: true },
                { text: "Advanced meeting analytics", included: true },
                { text: "Integrations with CRM tools", included: true },
                { text: "Priority support", included: true },
            ],
            cta: "Start Free Trial",
            color: "from-purple-500/10 to-pink-500/10",
            popular: true
        },
        {
            name: "Enterprise",
            description: "Customized solution for large teams",
            monthlyPrice: 79,
            yearlyPrice: 790, // ~20% discount for yearly
            features: [
                { text: "All Pro features", included: true },
                { text: "Custom AI model training", included: true },
                { text: "Advanced security features", included: true },
                { text: "Team analytics dashboard", included: true },
                { text: "Admin controls", included: true },
                { text: "Dedicated account manager", included: true },
                { text: "Custom integrations", included: true },
            ],
            cta: "Contact Sales",
            color: "from-amber-500/10 to-orange-500/10",
            popular: false
        }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 py-20" id="pricing">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl floating-animation"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full mb-6"
                    >
                        <BadgeDollarSign className="text-cyan-400" size={18} />
                        <span className="text-white/90 font-medium">Simple Pricing</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 gradient-text tracking-tight"
                    >
                        Choose Your Plan
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-white/70 max-w-3xl mx-auto mb-12"
                    >
                        Start with a 14-day free trial. No credit card required. 
                        Cancel anytime.
                    </motion.p>

                    {/* Billing Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center justify-center gap-3 mb-12"
                    >
                        <div className="flex items-center">
                            <CreditCard size={18} className="text-cyan-400 mr-2" />
                            <span className={`text-lg ${!isYearly ? 'text-white font-medium' : 'text-white/60'}`}>
                                Monthly
                            </span>
                        </div>
                        
                        <div 
                            className="w-16 h-8 bg-black/50 rounded-full p-1 cursor-pointer flex items-center"
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <motion.div 
                                className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                                animate={{ x: isYearly ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </div>
                        
                        <div className="flex items-center">
                            <Calendar size={18} className="text-cyan-400 mr-2" />
                            <span className={`text-lg ${isYearly ? 'text-white font-medium' : 'text-white/60'}`}>
                                Yearly
                            </span>
                            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-green-400/20 to-green-500/20 text-green-400 border border-green-500/20">
                                Save 20%
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className={`relative rounded-2xl overflow-hidden glass-effect border border-white/10 ${
                                plan.popular ? 'transform lg:-translate-y-4' : ''
                            }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute top-0 right-0">
                                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}
                            
                            {/* Card glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-20 z-0`}></div>
                            
                            {/* Card content */}
                            <div className="p-8 relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-white/70 mb-6">{plan.description}</p>
                                
                                <div className="mb-6">
                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-bold text-white">
                                            ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                        </span>
                                        <span className="text-white/60 ml-2">
                                            {plan.monthlyPrice === 0 ? '' : `/${isYearly ? 'year' : 'month'}`}
                                        </span>
                                    </div>
                                    {isYearly && plan.monthlyPrice > 0 && (
                                        <p className="text-green-400 text-sm mt-1">
                                            ${Math.round(plan.yearlyPrice / 12)} per month, billed annually
                                        </p>
                                    )}
                                </div>
                                
                                <motion.button
                                    className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 mb-8 ${
                                        plan.popular 
                                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/20' 
                                            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                                    }`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {plan.cta}
                                </motion.button>
                                
                                <div className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            {feature.included ? (
                                                <Check size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                                            ) : (
                                                <X size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                            )}
                                            <span className={feature.included ? "text-white/90" : "text-white/40"}>
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Enterprise Note */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center glass-effect rounded-2xl border border-white/10 p-6 max-w-3xl">
                        <ShieldCheck size={24} className="text-cyan-400 mr-4 flex-shrink-0" />
                        <div className="text-left">
                            <h4 className="text-lg font-medium text-white mb-1">Need a custom plan?</h4>
                            <p className="text-white/70">
                                Contact our sales team for custom enterprise pricing and features tailored to your organization's needs.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* FAQ Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-12 text-center"
                >
                    <a href="#faq" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center">
                        Have questions? Visit our FAQ
                        <Zap size={16} className="ml-2" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;

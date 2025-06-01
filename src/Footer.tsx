import { FaApple, FaWindows, FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { Zap, Mail, ArrowRight, MessageSquare, EyeOff, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black pt-20 pb-10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Column 1: About & CTA */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <Zap className="text-cyan-400" size={24} />
                            <span className="text-2xl font-bold gradient-text">Nexus-V</span>
                        </div>
                        
                        <p className="text-white/70 text-lg max-w-lg">
                            Your invisible AI assistant for meetings and sales calls, providing real-time insights while remaining completely undetectable during screen sharing.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a href="#" className="flex items-center gap-2 glass-effect rounded-lg px-5 py-3 text-white/90 hover:text-white transition-colors hover:bg-white/5">
                                <FaApple size={18} />
                                <span>Mac</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 glass-effect rounded-lg px-5 py-3 text-white/90 hover:text-white transition-colors hover:bg-white/5">
                                <FaWindows size={18} className="text-blue-400" />
                                <span>Windows</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Column 2: Site Map */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Site Map</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#use-cases" className="text-white/70 hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <MessageSquare size={14} />
                                    Use Cases
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-white/70 hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <Video size={14} />
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <EyeOff size={14} />
                                    Manifesto
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <MessageSquare size={14} />
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 3: Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
                        <p className="text-white/70 mb-4">Get the latest updates and news about Nexus-V</p>
                        
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full glass-effect bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-6">
                            <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                                <FaDiscord size={20} />
                            </a>
                            <a href="mailto:info@nexus-v.com" className="text-white/60 hover:text-cyan-400 transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* CTA Banner */}
                <motion.div 
                    className="glass-effect rounded-2xl border border-white/10 p-8 mb-16 text-center max-w-4xl mx-auto"
                    whileInView={{ y: [20, 0], opacity: [0, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Ready to transform your calls?</h3>
                    <p className="text-white/70 text-lg mb-6 max-w-xl mx-auto">
                        Start your 14-day free trial today and experience the power of invisible AI assistance.
                    </p>
                    <div className="relative inline-block">
                        <motion.div
                            className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/40 to-purple-500/40 rounded-xl opacity-70"
                            animate={{ 
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <button className="relative bg-black/80 backdrop-blur-md px-8 py-3 font-semibold rounded-xl border border-white/10 text-white">
                            Get Started Free
                        </button>
                    </div>
                </motion.div>
                
                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
                    <p className="text-white/40 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Nexus-V. All rights reserved.
                    </p>
                    
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/40 hover:text-white/70 text-sm">Privacy Policy</a>
                        <a href="#" className="text-white/40 hover:text-white/70 text-sm">Terms of Service</a>
                        <button 
                            onClick={handleScrollToTop}
                            className="text-white/40 hover:text-cyan-400 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 19V5M5 12l7-7 7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

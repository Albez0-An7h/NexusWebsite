import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Zap, Users, DollarSign, FileText, HelpCircle, Video, MessageSquare, EyeOff } from 'lucide-react';
import { FaApple, FaWindows } from 'react-icons/fa';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navItems = [
        { label: 'Use Cases', icon: Users, href: '#use-cases' },
        { label: 'Pricing', icon: DollarSign, href: '#pricing' },
        { label: 'Manifesto', icon: FileText, href: '#manifesto' },
        { label: 'Help Center', icon: HelpCircle, href: '#help' }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen relative bg-gradient-to-b from-black to-gray-900" id="home">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl floating-animation"></div>
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500/15 to-purple-500/15 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
            </div>
            
            {/* Navigation */}
            <motion.nav
                className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled
                        ? 'w-[95%] max-w-7xl glass-effect rounded-2xl mt-4 backdrop-blur-xl bg-black/40 border border-white/10 shadow-xl'
                        : 'w-full bg-transparent mt-0'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="px-6 py-4 md:px-8 md:py-5">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div 
                            className="text-2xl md:text-3xl font-bold gradient-text flex items-center gap-2 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('#home')}
                        >
                            <motion.div
                                animate={{
                                    x: [0, -2, 3, -3, 0],
                                    y: [0, 2, -1, 2, 0],
                                    opacity: [1, 0.85, 1, 0.9, 1],
                                    scale: [1, 1.05, 0.98, 1.02, 1],
                                    skew: [0, 2, -1, 1, 0]
                                }}
                                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 5, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 1] }}
                                className="text-cyan-400"
                            >
                                <Zap className="text-cyan-400" size={28} />
                            </motion.div>
                            Nexus-V
                        </motion.div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className="text-white/80 hover:text-white transition-all duration-300 relative group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                >
                                    <item.icon size={16} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                                </motion.a>
                            ))}
                        </div>
                        {/* Auth Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <motion.button
                                className="text-white/80 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Log In
                            </motion.button>
                            <motion.button 
                                className="btn-primary shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sign Up
                            </motion.button>
                        </div>
                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden text-white glass-effect p-2 rounded-lg border border-white/20 hover:bg-white/10"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="md:hidden mt-4 pt-4 border-t border-white/20 glass-effect rounded-lg p-4 backdrop-blur-xl bg-black/40"
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                        className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <item.icon size={18} className="text-cyan-400" />
                                        {item.label}
                                    </motion.a>
                                ))}
                                <motion.div 
                                    className="flex flex-col space-y-3 pt-4 border-t border-white/10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <button className="text-white/80 hover:text-white transition-colors duration-200 text-left p-3 rounded-lg hover:bg-white/10">
                                        Log In
                                    </button>
                                    <button className="btn-primary w-full">
                                        Sign Up
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 md:space-y-8 text-center lg:text-left"
                        >
                            {/* Badge */}
                            <motion.div 
                                className="inline-flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full mb-6 pulse-glow"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <EyeOff className="text-purple-400" size={18} />
                                <span className="text-white/90 font-medium">Invisible during screen sharing</span>
                            </motion.div>
                            
                            {/* Main Heading */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 md:mb-8 gradient-text leading-tight tracking-tight">
                                Your AI Assistant
                                <br /> 
                                <span className="relative inline-block mt-2">
                                    For Every Call
                                    <motion.div
                                        className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-2xl rounded-lg"
                                        animate={{ 
                                            scale: [1, 1.1, 1],
                                            opacity: [0.5, 0.8, 0.5]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </span>
                            </h1>
                            
                            {/* Description */}
                            <motion.p
                                className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 md:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Nexus-V is an AI assistant that enhances your meeting and sales calls, 
                                providing real-time insights while remaining completely invisible during Google Meet and Zoom screen sharing.
                            </motion.p>
                            
                            {/* Feature Cards */}
                            <motion.div 
                                className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-10 md:mb-12"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                {[
                                    { icon: EyeOff, text: "Undetectable in Calls" },
                                    { icon: Video, text: "Works with Zoom & Meet" },
                                    { icon: MessageSquare, text: "Real-time AI Insights" }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature.text}
                                        className="glass-effect px-5 py-4 rounded-xl flex items-center gap-3 hover:bg-white/15 transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 + index * 0.1 }}
                                    > 
                                        <feature.icon className="text-cyan-400" size={20} />
                                        <span className="text-white/90 font-medium">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                            
                            {/* Download Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-center mb-8 md:mb-10"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                            >
                                <div className="relative w-full sm:w-auto group">
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
                                    <motion.button
                                        className="relative bg-black/80 backdrop-blur-md flex items-center gap-3 text-base md:text-lg px-8 py-4 md:px-10 md:py-5 text-white font-semibold w-full sm:w-auto rounded-xl border border-white/10"
                                        whileHover={{ 
                                            y: -2,
                                            boxShadow: "0 10px 25px -5px rgba(8, 145, 178, 0.2)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <FaApple size={22} className="text-white" />
                                        Download for Mac
                                    </motion.button>
                                </div>

                                <div className="relative w-full sm:w-auto group">
                                    <motion.div
                                        className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-xl opacity-70"
                                        animate={{ 
                                            opacity: [0.3, 0.5, 0.3],
                                        }}
                                        transition={{ 
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1.5
                                        }}
                                    />
                                    <motion.button
                                        className="relative bg-black/80 backdrop-blur-md flex items-center gap-3 text-base md:text-lg px-8 py-4 md:px-10 md:py-5 font-semibold w-full sm:w-auto rounded-xl border border-white/10"
                                        whileHover={{ 
                                            y: -2,
                                            boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.2)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <FaWindows size={20} className="text-blue-400" />
                                        Download for Windows
                                    </motion.button>
                                </div>
                            </motion.div>
                            
                            {/* Platform Logos */}
                            <motion.div
                                className="flex flex-col items-center lg:items-start space-y-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                            >
                                <p className="text-white/50 text-sm uppercase tracking-wider">Works seamlessly with</p>
                                <div className="flex items-center gap-6 justify-center lg:justify-start">
                                    <motion.div 
                                        className="flex items-center justify-center h-8 w-24 glass-effect rounded-lg px-2 opacity-70 hover:opacity-100 transition-opacity"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Zap className="text-blue-400 mr-2" size={18} />
                                        <span className="text-white/90 text-sm">Zoom</span>
                                    </motion.div>
                                    <motion.div 
                                        className="flex items-center justify-center h-8 w-24 glass-effect rounded-lg px-2 opacity-70 hover:opacity-100 transition-opacity"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Video className="text-red-400 mr-2" size={18} />
                                        <span className="text-white/90 text-sm">Meet</span>
                                    </motion.div>
                                    <motion.div 
                                        className="flex items-center justify-center h-8 w-24 glass-effect rounded-lg px-2 opacity-70 hover:opacity-100 transition-opacity"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Users className="text-purple-400 mr-2" size={18} />
                                        <span className="text-white/90 text-sm">Teams</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                        
                        {/* Right Column - Image/Mockup */}
                        <motion.div
                            className="relative hidden lg:block"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {/* Main Product Screenshot */}
                            <motion.div
                                className="relative z-10"
                                initial={{ y: 0 }}
                                animate={{ y: [0, -15, 0] }}
                                transition={{ 
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Main app mockup */}
                                <div className="rounded-2xl shadow-2xl border border-white/10 glass-effect overflow-hidden h-[500px] w-full bg-gradient-to-br from-black/60 to-black/40">
                                    <div className="h-10 bg-black/40 flex items-center px-4 border-b border-white/10">
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="mx-auto text-white/60 text-sm">Nexus-V Assistant</div>
                                    </div>
                                    <div className="p-6 flex flex-col gap-4">
                                        <div className="glass-effect p-4 rounded-xl border border-white/10">
                                            <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
                                            <div className="h-4 w-1/2 bg-white/20 rounded"></div>
                                        </div>
                                        <div className="glass-effect p-4 rounded-xl border border-white/10">
                                            <div className="h-4 w-2/3 bg-white/20 rounded mb-2"></div>
                                            <div className="h-4 w-5/6 bg-white/20 rounded mb-2"></div>
                                            <div className="h-4 w-1/3 bg-white/20 rounded"></div>
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="glass-effect p-4 rounded-xl border border-white/10 w-3/4">
                                                <div className="h-4 w-full bg-cyan-400/30 rounded mb-2"></div>
                                                <div className="h-4 w-2/3 bg-cyan-400/30 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating UI Elements */}
                                <motion.div
                                    className="absolute -top-10 -right-10 glass-effect p-4 rounded-xl border border-white/10 shadow-lg"
                                    animate={{ y: [0, -7, 0], x: [0, 5, 0] }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className="w-48 p-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles className="text-yellow-400" size={16} />
                                            <div className="h-3 bg-white/40 rounded w-20"></div>
                                        </div>
                                        <div className="h-3 bg-white/20 rounded w-full mb-1.5"></div>
                                        <div className="h-3 bg-white/20 rounded w-3/4 mb-1.5"></div>
                                        <div className="h-3 bg-white/20 rounded w-5/6"></div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-5 -left-16 glass-effect p-4 rounded-xl border border-white/10 shadow-lg"
                                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                                    transition={{ 
                                        duration: 4.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                >
                                    <div className="w-40 p-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <MessageSquare className="text-cyan-400" size={16} />
                                            <div className="h-3 bg-white/40 rounded w-16"></div>
                                        </div>
                                        <div className="h-3 bg-white/20 rounded w-full mb-1.5"></div>
                                        <div className="h-3 bg-white/20 rounded w-4/5"></div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full transform scale-90 -z-10"></div>
                        </motion.div>
                    </div>

                    {/* Bottom Info Section */}
                    <motion.div
                        className="mt-16 text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6 }}
                    >
                        <div className="glass-effect px-6 py-4 md:px-8 md:py-5 rounded-2xl border border-white/10">
                            <p className="text-white/70 text-sm flex flex-col sm:flex-row items-center gap-4 justify-center">
                                <span className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    Free 14-day trial
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    No credit card required
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    Works with all meeting platforms
                                </span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;

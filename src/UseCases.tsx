import { motion } from 'framer-motion';
import { MessageSquare, Zap, Video, EyeOff, BrainCircuit, ChevronRight, ArrowRight } from 'lucide-react';

const UseCases = () => {
    const useCases = [
        {
            title: "Real-time Insights During Sales Calls",
            description: "Get live information about your prospects, competitive intelligence, and smart responses while on calls without your clients ever knowing.",
            icon: MessageSquare,
            image: "/Image Extractor Archive/sales.webp",
            features: [
                "Prospect information automatically fetched",
                "Competitive battle cards",
                "Smart response suggestions"
            ],
            color: "from-cyan-500/40 to-blue-500/40"
        },
        {
            title: "Meeting Assistance & Summaries",
            description: "Focus on the conversation while Nexus-V takes notes, creates action items, and provides a comprehensive summary after your meeting.",
            icon: Video,
            image: "/Image Extractor Archive/meetings.webp",
            features: [
                "Automatic note taking",
                "Action item extraction",
                "Meeting transcription",
                "Key point summaries"
            ],
            color: "from-purple-500/40 to-pink-500/40"
        },
        {
            title: "Completely Invisible During Screen Sharing",
            description: "Nexus-V remains 100% undetectable when you share your screen on Zoom, Google Meet, or Microsoft Teams.",
            icon: EyeOff,
            image: "/Cluely Image Extractor/screen.8c07aba8.png",
            features: [
                "Auto-hide during screen sharing",
                "Zero visual footprint",
                "Works with all major meeting platforms",
                "No extension detection"
            ],
            color: "from-emerald-500/40 to-teal-500/40"
        },
        {
            title: "AI-Powered Deal Intelligence",
            description: "Analyze your pipeline, identify risks, and get AI coaching to improve your close rates and sales performance.",
            icon: BrainCircuit,
            image: "/Cluely Image Extractor/works.2bbce57b.png",
            features: [
                "Deal risk analysis",
                "Competitive insights",
                "Coaching recommendations",
                "Performance metrics"
            ],
            color: "from-amber-500/40 to-orange-500/40"
        }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black" id="use-cases">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl floating-animation"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Section Header */}
                <div className="text-center mb-16 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full mb-6"
                    >
                        <Zap className="text-cyan-400" size={18} />
                        <span className="text-white/90 font-medium">Powerful Use Cases</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 gradient-text tracking-tight"
                    >
                        Transform How You Handle Calls
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-white/70 max-w-3xl mx-auto"
                    >
                        Nexus-V adapts to your workflow, providing intelligent assistance across different scenarios while remaining completely invisible during screen sharing.
                    </motion.p>
                </div>

                {/* Use Cases - Full-screen Cards */}
                <div className="flex flex-col space-y-24 mb-20">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative rounded-3xl overflow-hidden min-h-[500px] group"
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                {/* Reduce the darkness of the overlay to make images more visible */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-sm z-10"></div>
                                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-40 mix-blend-overlay z-0`}></div>
                                <img 
                                    src={useCase.image} 
                                    alt={useCase.title} 
                                    className="w-full h-full object-cover opacity-70 scale-110 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="relative z-20 p-8 md:p-12 h-full flex flex-col justify-between">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full">
                                    {/* Left Column - Text Content */}
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${useCase.color.replace('/40', '')} flex items-center justify-center shadow-lg`}>
                                                <useCase.icon size={24} className="text-white" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-white">{useCase.title}</h3>
                                        </div>

                                        <p className="text-white/80 text-xl mb-8 leading-relaxed">{useCase.description}</p>

                                        {/* Features List */}
                                        <ul className="mb-8 space-y-3">
                                            {useCase.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <ChevronRight size={18} className="text-cyan-400 mt-1.5 flex-shrink-0" />
                                                    <span className="text-white/90 text-lg">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <motion.button
                                            className="mt-4 self-start flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group/btn"
                                            whileHover={{ x: 5 }}
                                        >
                                            Learn more 
                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </div>

                                    {/* Right Column - UI Elements */}
                                    <div className="relative hidden lg:flex items-center justify-center">
                                        {/* Floating UI Elements */}
                                        <div className="relative w-full h-96">
                                            {/* Main Floating Element */}
                                            <motion.div
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass-effect p-6 rounded-xl border border-white/20 shadow-2xl w-80"
                                                animate={{ 
                                                    y: [0, -15, 0],
                                                    rotate: [0, 1, 0, -1, 0],
                                                }}
                                                transition={{ 
                                                    duration: 6,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <div className="flex items-center gap-3 mb-4">
                                                    <useCase.icon size={22} className="text-cyan-400" />
                                                    <div className="h-4 bg-white/40 rounded w-3/4"></div>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="h-3 bg-white/20 rounded w-full"></div>
                                                    <div className="h-3 bg-white/20 rounded w-5/6"></div>
                                                    <div className="h-3 bg-white/20 rounded w-4/5"></div>
                                                </div>
                                            </motion.div>

                                            {/* Small Floating Element 1 */}
                                            <motion.div
                                                className="absolute top-1/4 right-1/4 glass-effect p-3 rounded-lg border border-white/10 shadow-lg"
                                                animate={{ 
                                                    y: [0, -10, 0],
                                                    x: [0, 10, 0],
                                                    opacity: [0.7, 1, 0.7] 
                                                }}
                                                transition={{ 
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: index * 0.3
                                                }}
                                            >
                                                <div className="w-12 h-12 flex items-center justify-center">
                                                    <useCase.icon size={24} className="text-cyan-400" />
                                                </div>
                                            </motion.div>

                                            {/* Small Floating Element 2 */}
                                            <motion.div
                                                className="absolute bottom-1/4 left-1/4 glass-effect p-3 rounded-lg border border-white/10 shadow-lg"
                                                animate={{ 
                                                    y: [0, 10, 0],
                                                    x: [0, -10, 0],
                                                    opacity: [0.7, 1, 0.7] 
                                                }}
                                                transition={{ 
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: index * 0.5 + 1
                                                }}
                                            >
                                                <div className="w-12 h-12 flex items-center justify-center">
                                                    <Zap size={20} className="text-yellow-400" />
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center relative z-20"
                >
                    <motion.div className="relative inline-block group">
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
                            className="relative bg-black/80 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-xl border border-white/10"
                            whileHover={{ 
                                y: -2,
                                boxShadow: "0 10px 25px -5px rgba(8, 145, 178, 0.2)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Get Started Free
                        </motion.button>
                    </motion.div>
                    <p className="mt-4 text-white/60 text-sm">No credit card required. 14-day free trial.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default UseCases;

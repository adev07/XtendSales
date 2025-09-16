import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, Settings, Wifi, CheckCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import hero from "@/assets/images/Hero-section.png";
import heroImg from "@/assets/images/Hero.png";

function HeroSection() {
    return (
        <div className="min-h-screen bg-[#043873] relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={hero} alt="hero background" className="w-full h-full object-cover" />
            </div>
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-140px)]">
                    {/* Left Content */}
                    <motion.div
                        className="text-white space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Company Info */}
                        <motion.div
                            className="flex items-center space-x-2 text-base text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <MapPin className="w-4 h-4" />
                            <span>SaaS Mobility Technology LLC • Dubai, UAE</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-5xl lg:text-6xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-gray-300">Sell Above Goals</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            We help large manufacturing and distribution businesses simplify their sales and delivery operations with our end-to-end automation suite. From inventory management to workforce tracking, our mobile-first solutions ensure your team works smarter, not harder.
                        </motion.p>

                        {/* Features Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-4 py-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-gray-200">Real-time updates</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Settings className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <span className="text-gray-200">Seamless ERP integrations</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <RefreshCw className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                <span className="text-gray-200">No-code customisation</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Wifi className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                <span className="text-gray-200">Offline-capable POS</span>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button
                                size="lg"
                                className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base px-8 py-6 rounded-lg"
                            >
                                Get Started Today
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image/Illustration */}
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.img
                            src={heroImg}
                            alt="Hero illustration"
                            className="w-full max-w-lg h-auto object-contain"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;

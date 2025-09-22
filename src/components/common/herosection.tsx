import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, Settings, Wifi, CheckCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import hero from "@/assets/images/Hero-section.png";
import heroImg from "@/assets/images/Shared.png";

function HeroSection() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/contact');
    };

    return (
        <div className="min-h-screen bg-[#043873] relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={hero} alt="hero background" className="w-full h-full object-cover" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-2 lg:py-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-140px)]">
                    {/* Left Content */}
                    <motion.div
                        className="text-white space-y-6 sm:space-y-8 order-1 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Company Info */}
                        <motion.div
                            className="flex items-center space-x-2 text-sm sm:text-base text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">SaaS Mobility Technology LLC • Dubai, UAE</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-gray-300">Sell Above Goals</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            We help large manufacturing and distribution businesses simplify their sales and delivery operations with our end-to-end automation suite. From inventory management to workforce tracking, our mobile-first solutions ensure your team works smarter, not harder.
                        </motion.p>

                        {/* Features Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-gray-200">Real time updates - Sales & Delivery</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-gray-200">Unique Offline Capable POS</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-gray-200">Increased productivity - Boosting Revenue</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm sm:text-base text-gray-200">Seamless Back-end (ERP) Integrations</span>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 sm:px-0 px-[100px]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button
                                size="default"
                                onClick={handleGetStarted}
                                className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-6 rounded-lg w-full sm:w-auto"
                            >
                                Get Started Today
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image/Illustration */}
                    <motion.div
                        className="flex justify-center items-center order-2 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.img
                            src={heroImg}
                            alt="Hero illustration"
                            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain rounded-lg"
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

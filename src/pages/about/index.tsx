import Navbar from "@/components/common/navbar";
import WhoWeAreSection from "@/components/common/whoweareSection";
import WorkTogetherSection from "@/components/common/workTogetherSection";
import Footer from "@/components/common/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Target,
    Eye,
    Users,
    Award,
    Globe,
    CheckCircle,
    ArrowRight,
    Shield,
    Zap,
    Heart,
    Lightbulb
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/contact');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-[#050e4c] text-white py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            About <span className="relative">Us
                                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 mx-auto h-1.5 sm:h-2 w-12 sm:w-16 bg-yellow-300 rounded-full"></span>
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                            Empowering businesses across the Middle East with innovative mobile-first solutions that transform sales and delivery operations.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                            <div className="flex items-center justify-center gap-2">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                <span>6+ Years Experience</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                                <span>10+ Happy Clients</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                                <span>6 Countries</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <WhoWeAreSection />

            {/* Mission & Vision */}
            <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Mission & <span className="relative">Vision
                                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 mx-auto h-1.5 sm:h-2 w-24 sm:w-32 bg-yellow-300 rounded-full"></span>
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Mission */}
                        <motion.div
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                To empower businesses with innovative mobile-first solutions that streamline operations,
                                enhance productivity, and drive sustainable growth. We are committed to delivering
                                cutting-edge technology that transforms how companies manage their sales, delivery,
                                and workforce operations across the Middle East and beyond.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="bg-purple-100 p-2 sm:p-3 rounded-lg">
                                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                To be the leading provider of intelligent business automation solutions in the Middle East,
                                recognized for our innovation, reliability, and customer-centric approach. We envision a
                                future where every business, regardless of size, has access to enterprise-grade technology
                                that drives efficiency and growth.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-white py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Core <span className="relative">Values
                                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 mx-auto h-1.5 sm:h-2 w-24 sm:w-32 bg-yellow-300 rounded-full"></span>
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do and shape our company culture
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                icon: Lightbulb,
                                title: "Innovation",
                                description: "We continuously push boundaries to deliver cutting-edge solutions that solve real business challenges."
                            },
                            {
                                icon: Heart,
                                title: "Customer-Centric",
                                description: "Our customers' success is our success. We listen, understand, and deliver solutions that exceed expectations."
                            },
                            {
                                icon: Shield,
                                title: "Reliability",
                                description: "We build robust, secure solutions that businesses can depend on for their critical operations."
                            },
                            {
                                icon: Zap,
                                title: "Efficiency",
                                description: "We streamline processes and eliminate complexity to help businesses operate more efficiently."
                            },
                            {
                                icon: Users,
                                title: "Collaboration",
                                description: "We believe in the power of teamwork and build solutions that enhance collaboration across organizations."
                            },
                            {
                                icon: Award,
                                title: "Excellence",
                                description: "We strive for excellence in everything we do, from product development to customer service."
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-4 sm:p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <WorkTogetherSection />

            {/* CTA Section */}
            <section className="bg-[#050e4c] py-12 sm:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Join hundreds of businesses that trust XtendSales to streamline their operations and drive growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Button
                                size="default"
                                onClick={handleGetStarted}
                                className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-6"
                            >
                                Get Started Today
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default About;

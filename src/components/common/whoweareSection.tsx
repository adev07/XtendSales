import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function WhoWeAreSection() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Main Heading */}
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Who We <span className="relative">Are
                                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-2 w-32 bg-yellow-300 rounded-full"></span>
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-lg text-gray-600 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            We're a team of industry experts with decades of experience in Oracle consulting, IT solutions, and business process transformation. We combine innovation and deep domain knowledge to deliver intelligent solutions that drive real business impact.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                size="lg"
                                className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base px-8 py-6 rounded-lg"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Placeholder */}
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                            alt="Professional team collaboration"
                            className="w-full max-w-lg h-80 rounded-lg object-cover shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default WhoWeAreSection;

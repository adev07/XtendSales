import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import workTogetherImg from "@/assets/images/Work Together Image.png";

function WorkTogetherSection() {
    return (
        <section className="bg-gray-100 sm:py-20 py-10">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
                    {/* Left Content - Image */}
                    <motion.div
                        className="flex justify-start items-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src={workTogetherImg}
                            alt="Work together illustration"
                            className="w-full max-w-lg h-auto object-contain"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Right Content - Text */}
                    <motion.div
                        className="space-y-8 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Main Heading */}
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center sm:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Work <span className="relative">together
                                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-2 w-32 bg-yellow-300 rounded-full"></span>
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-lg text-gray-600 leading-relaxed text-center sm:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            With XtendSales, connect your sales teams across locations and streamline operations in real-time.
                            Our unified platform enables seamless collaboration between field teams, managers, and back-office operations for maximum efficiency.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex justify-center sm:justify-start"
                        >
                            <Button
                                size="lg"
                                className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base px-8 py-6 rounded-lg"
                            >
                                Try it now
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default WorkTogetherSection;

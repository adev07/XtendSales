import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Testimonial = {
    quote: string;
    name: string;
    title: string;
    avatar: string;
};

const testimonials: Testimonial[] = [
    {
        quote:
            "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
        name: "Oberon Shaw, MCH",
        title: "Head of Talent Acquisition, North America",
        avatar:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
        name: "Oberon Shaw, MCH",
        title: "Head of Talent Acquisition, North America",
        avatar:
            "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
        name: "Oberon Shaw, MCH",
        title: "Head of Talent Acquisition, North America",
        avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

function TestimonialsSection() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        What Our Clients <span className="relative">Says
                            <span className="absolute -bottom-2 left-0 right-0 mx-auto h-2 w-32 bg-yellow-300 rounded-full"></span>
                        </span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            className={`${idx === 0 ? "bg-white" : "bg-[#4F9CF9]"} rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 border border-gray-100`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 mb-6">
                                <Quote className={`${idx === 0 ? "text-[#4F9CF9]" : "text-blue-700"} w-7 h-7`} />
                            </div>

                            <p className={`${idx === 0 ? "text-gray-700" : "text-white"} text-sm leading-relaxed mb-6`}>
                                {t.quote}
                            </p>

                            <div className={`${idx === 0 ? "bg-gray-200" : "bg-blue-300/50"} h-px w-full mb-6`} />

                            <div className="flex items-center gap-3">
                                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                                <div>
                                    <p className={`${idx === 0 ? "text-gray-900" : "text-white"} font-semibold text-sm`}>{t.name}</p>
                                    <p className={`${idx === 0 ? "text-gray-500" : "text-white/80"} text-xs`}>{t.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="w-2 h-2 rounded-full bg-blue-300" />
                    <span className="w-2 h-2 rounded-full bg-blue-300" />
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;


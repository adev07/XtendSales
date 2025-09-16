import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Smartphone,
    Truck,
    Package,
    MapPin,
    CreditCard,
    Building2,
    ArrowRight
} from "lucide-react";

interface Solution {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: React.ElementType;
    color: string;
}

const solutions: Solution[] = [
    {
        id: 1,
        title: "XtendSales",
        subtitle: "Mobile Sales Force Automation",
        description: "Empower your field sales and delivery teams with a central platform that ensures real-time updates, smarter documentation, live inventory data, and better communication across departments.",
        features: [],
        icon: Smartphone,
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 2,
        title: "Xtend Van Sales",
        subtitle: "On-the-Go Sales Management",
        description: "Designed for field reps and van sales agents, this app helps track orders, manage listings, and boost productivity while on the road.",
        features: [],
        icon: Truck,
        color: "from-green-500 to-green-600"
    },
    {
        id: 3,
        title: "XtendSales Delivery Management",
        subtitle: "Smarter Logistics with Real-Time Control",
        description: "Simplify logistics with tools to assign deliveries, track stock, and manage agents, all while keeping teams aligned with real-time order status.",
        features: [],
        icon: Package,
        color: "from-purple-500 to-purple-600"
    },
    {
        id: 4,
        title: "Xtend Attendance",
        subtitle: "Workforce Monitoring",
        description: "Ensure transparency and productivity with a GPS-based attendance system that prevents punching near home and traces field movement responsibly.",
        features: [],
        icon: MapPin,
        color: "from-orange-500 to-orange-600"
    },
    {
        id: 5,
        title: "AIXPOS",
        subtitle: "Point of Sale (POS) System",
        description: "Our offline-capable POS solution ensures zero buffering at billing counters, keeping your customers happy and operations smooth.",
        features: [],
        icon: CreditCard,
        color: "from-red-500 to-red-600"
    },
    {
        id: 6,
        title: "XtendB2B",
        subtitle: "Made for B2B. Designed for Simplicity.",
        description: "We know B2B comes with its own set of needs: bigger orders, tailored pricing, and lasting relationships. XtendB2B helps you manage it all with ease.",
        features: [],
        icon: Building2,
        color: "from-indigo-500 to-indigo-600"
    }
];

function SolutionsSection() {
    return (
        <section className="bg-[#050e4c] py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our <span className="relative">Solutions
                            <span className="absolute -bottom-2 left-0 right-0 mx-auto h-2 w-32 bg-yellow-300 rounded-full"></span>
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Comprehensive suite of tools designed to streamline your business operations
                        and enhance productivity across all departments.
                    </motion.p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <solution.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {solution.title}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-600 mb-3">
                                        {solution.subtitle}
                                    </p>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>

                                {/* Learn More Button */}
                                <div className="mt-4">
                                    <Button
                                        variant="outline"
                                        className="w-full group-hover:bg-[#4F9CF9] group-hover:text-white group-hover:border-[#4F9CF9] transition-all duration-300"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Optional: Add a note about flowcharts/mind maps */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-300 text-sm">
                        Interactive flowcharts and mind maps available to demonstrate how each solution benefits your business.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default SolutionsSection;

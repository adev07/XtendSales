import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Smartphone,
    Truck,
    Package,
    CreditCard,
    ArrowRight,
    CheckCircle,
    Settings,
    RefreshCw,
    Wifi,
    Monitor,
    BarChart3,
    Shield,
    Clock,
    Users,
    ShoppingCart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
        features: [
            "Real-time task updates",
            "Warehouse & stock visibility",
            "Documentation on the go",
            "Works seamlessly with ERP systems"
        ],
        icon: Smartphone,
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 2,
        title: "Xtend Van Sales",
        subtitle: "On-the-Go Sales Management",
        description: "Designed for field reps and van sales agents, this app helps track orders, manage listings, and boost productivity while on the road.",
        features: [
            "Order tracking",
            "SKU listing",
            "Route planning & performance reports"
        ],
        icon: Truck,
        color: "from-green-500 to-green-600"
    },
    {
        id: 3,
        title: "Xtendsales Delivery Management",
        subtitle: "Smarter Logistics with Real-Time Control",
        description: "Simplify logistics with tools to assign deliveries, track stock, and manage agents, all while keeping teams aligned with real-time order status.",
        features: [
            "Vehicle & delivery assignment",
            "Inventory and order tracking",
            "Status updates for all stakeholders"
        ],
        icon: Package,
        color: "from-purple-500 to-purple-600"
    },
    {
        id: 4,
        title: "Xtend Attendance",
        subtitle: "Workforce Monitoring",
        description: "Ensure transparency and productivity with a GPS-based attendance system that prevents punching near home and traces field movement responsibly.",
        features: [
            "Geo-fencing attendance",
            "Live location tracking",
            "Performance analytics"
        ],
        icon: Users,
        color: "from-orange-500 to-orange-600"
    },
    {
        id: 5,
        title: "AIXPOS",
        subtitle: "Point of Sale (POS) System",
        description: "Our offline-capable POS solution ensures zero buffering at billing counters, keeping your customers happy and operations smooth.",
        features: [
            "Fast and reliable billing",
            "Works offline",
            "Easy to integrate"
        ],
        icon: CreditCard,
        color: "from-emerald-500 to-emerald-600"
    },
    {
        id: 6,
        title: "XtendB2B",
        subtitle: "Made for B2B. Designed for Simplicity.",
        description: "We know B2B comes with its own set of needs: bigger orders, tailored pricing, and lasting relationships. XtendB2B helps you manage it all with ease.",
        features: [
            "Bulk Ordering & Discounts",
            "Detailed Product Catalogue",
            "Account-Specific Pricing",
            "Business Account Management",
            "Loyalty offers",
            "Mobile Friendly (Android & iOS)"
        ],
        icon: ShoppingCart,
        color: "from-indigo-500 to-indigo-600"
    }
];

function Solutions() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/contact');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-[#050e4c] text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            Our <span className="relative">Solutions
                                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-2 w-32 bg-yellow-300 rounded-full"></span>
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                            Comprehensive suite of tools designed to streamline your business operations and enhance productivity across all verticals.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>ERP Integration</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Settings className="w-5 h-5 text-blue-400" />
                                <span>Offline Capable</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RefreshCw className="w-5 h-5 text-purple-400" />
                                <span>Real-time Updates</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wifi className="w-5 h-5 text-orange-400" />
                                <span>Cloud-based</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={solution.id}
                                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Solution Header */}
                                <div className={`bg-gradient-to-r ${solution.color} p-6 text-white`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-white/20 p-3 rounded-lg">
                                            <solution.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">{solution.title}</h3>
                                            <p className="text-white/90">{solution.subtitle}</p>
                                        </div>
                                    </div>
                                    <p className="text-white/95 leading-relaxed">{solution.description}</p>
                                </div>

                                {/* Solution Content */}
                                <div className="p-6">
                                    {/* Features */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                                        <div className="space-y-2">
                                            {solution.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Why Choose <span className="relative">XtendSales
                                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-2 w-40 bg-yellow-300 rounded-full"></span>
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We deliver cutting-edge technology solutions that drive real business results
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Monitor,
                                title: "Easy Integration",
                                description: "Seamlessly integrate with your existing ERP systems"
                            },
                            {
                                icon: Shield,
                                title: "Enterprise Security",
                                description: "Bank-level security with data encryption and compliance"
                            },
                            {
                                icon: Clock,
                                title: "24/7 Support",
                                description: "Round-the-clock technical support and assistance"
                            },
                            {
                                icon: BarChart3,
                                title: "Analytics & Insights",
                                description: "Powerful reporting and business intelligence tools"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#050e4c] py-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Join thousands of businesses that have already revolutionized their operations with XtendSales
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

export default Solutions;

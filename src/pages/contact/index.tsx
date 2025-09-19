import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageSquare,
    Calendar,
    CheckCircle,
    Globe
} from "lucide-react";
import { useState } from "react";

interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    serviceType: string;
}

function Contact() {
    const [formData, setFormData] = useState<ContactForm>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        serviceType: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
                            Contact <span className="relative">Us
                                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-2 w-16 bg-yellow-300 rounded-full"></span>
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                            Ready to transform your business? Let's discuss how XtendSales can help you achieve your goals.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>Free Consultation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-blue-400" />
                                <span>Expert Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-purple-400" />
                                <span>Flexible Scheduling</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                                <p className="text-gray-600">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F9CF9] focus:border-[#4F9CF9] focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F9CF9] focus:border-[#4F9CF9] focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F9CF9] focus:border-[#4F9CF9] focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                                            placeholder="john.doe@company.com"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F9CF9] focus:border-[#4F9CF9] focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                                                placeholder="+971 50 123 4567"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F9CF9] focus:border-[#4F9CF9] focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Interest *
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="serviceType"
                                                name="serviceType"
                                                value={formData.serviceType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F9CF9] focus:border-[#4F9CF9] focus:bg-white transition-all duration-300 text-gray-900 appearance-none cursor-pointer pr-12"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="xtendsales">XtendSales - Mobile Sales Force Automation</option>
                                                <option value="vansales">Xtend Van Sales - On-the-Go Sales Management</option>
                                                <option value="delivery">Xtendsales Delivery Management</option>
                                                <option value="attendance">Xtend Attendance - Workforce Monitoring</option>
                                                <option value="aixpos">AIXPOS - Point of Sale System</option>
                                                <option value="xtendb2b">XtendB2B - B2B Solutions</option>
                                                <option value="consultation">General Consultation</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4F9CF9] focus:border-[#4F9CF9] focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                                            placeholder="Tell us about your business needs and how we can help..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                                    >
                                        Send Message
                                        <Send className="w-5 h-5 ml-2" />
                                    </Button>
                                </form>
                            ) : (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Thank you for contacting us. We'll get back to you within 24 hours.
                                    </p>
                                    <Button
                                        onClick={() => setIsSubmitted(false)}
                                        variant="outline"
                                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                                    >
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Contact Details */}
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <MapPin className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                                            <p className="text-gray-600">
                                                SaaS Mobility Technology LLC<br />
                                                Dubai, United Arab Emirates
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-100 p-3 rounded-lg">
                                            <Phone className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                            <p className="text-gray-600">+971 50 123 4567</p>
                                            <p className="text-gray-600">+971 4 234 5678</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-purple-100 p-3 rounded-lg">
                                            <Mail className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                            <p className="text-gray-600">info@xtendsales.com</p>
                                            <p className="text-gray-600">support@xtendsales.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-100 p-3 rounded-lg">
                                            <Clock className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                                            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                                            <p className="text-gray-600">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Global Presence */}
                            <div className="bg-gradient-to-r from-[#043873] to-[#4F9CF9] rounded-2xl p-8 text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <Globe className="w-8 h-8" />
                                    <h3 className="text-2xl font-bold">Global Reach</h3>
                                </div>
                                <p className="text-white/90 mb-4">
                                    Serving businesses across the Middle East, Asia, and beyond with cutting-edge mobility solutions.
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="font-semibold">UAE</p>
                                        <p className="text-white/80">Primary Operations</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Oman</p>
                                        <p className="text-white/80">Regional Office</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Saudi Arabia</p>
                                        <p className="text-white/80">Partner Network</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">India</p>
                                        <p className="text-white/80">Development Center</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
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
                            Frequently Asked <span className="relative">Questions
                                <span className="absolute -bottom-2 left-0 right-0 mx-auto h-2 w-32 bg-yellow-300 rounded-full"></span>
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                question: "How quickly can we implement XtendSales?",
                                answer: "Implementation typically takes 2-4 weeks depending on the complexity of your requirements and existing systems."
                            },
                            {
                                question: "Do you provide training for our team?",
                                answer: "Yes, we provide comprehensive training for your team including user manuals, video tutorials, and hands-on sessions."
                            },
                            {
                                question: "Can XtendSales integrate with our ERP?",
                                answer: "Absolutely! We have extensive experience integrating with popular ERP systems like Tally, SAP, Oracle, and others."
                            },
                            {
                                question: "What kind of support do you offer?",
                                answer: "We offer 24/7 technical support, regular system updates, and dedicated account management for enterprise clients."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-lg p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;

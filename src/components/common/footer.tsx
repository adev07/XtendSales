import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Globe, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-br from-[#050e4c] via-[#0a1454] to-[#1e2563] text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Main footer content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                        {/* Company Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <img src={logo} alt="XtendSales" className="h-12 sm:h-14 w-auto" />
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                                </div>
                                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                    XtendSales
                                </span>
                            </div>

                            <p className="text-gray-300 leading-relaxed max-w-lg text-lg">
                                Empowering businesses with innovative sales solutions for the modern workspace.
                                Transform your sales process and accelerate growth.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <span>info@xtendsales.com</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                    <span>+971 50 653 7140</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                    <span>Dubai, UAE</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Links */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white relative">
                                Product
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="/solutions"
                                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                                    >
                                        <span className="relative">
                                            Overview
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#testimonials"
                                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                                    >
                                        <span className="relative">
                                            Customer Stories
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white relative">
                                Company
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="/about"
                                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                                    >
                                        <span className="relative">
                                            About Us
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                                    >
                                        <span className="relative">
                                            Contact Us
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-white/10 backdrop-blur-sm">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">

                            {/* Left side - Legal links and copyright */}
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <Globe className="w-4 h-4" />
                                    <span className="text-sm">English</span>
                                </div>

                                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                                    <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                                    <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                                    <a href="#" className="hover:text-white transition-colors duration-200">Security</a>
                                    <span>© 2025 XtendSales. All rights reserved.</span>
                                </div>
                            </div>

                            {/* Right side - Social links and scroll to top */}
                            <div className="flex items-center justify-between sm:justify-end space-x-6">
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-110"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                </div>

                                {/* Scroll to top button */}
                                <button
                                    onClick={scrollToTop}
                                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full flex items-center justify-center text-white transition-all duration-200 transform hover:scale-110 shadow-lg"
                                    aria-label="Scroll to top"
                                >
                                    <ArrowUp className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

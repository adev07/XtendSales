import { Facebook, Twitter, Linkedin, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

function Footer() {
    return (
        <footer className="bg-[#050e4c] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                    <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
                        <div className="flex items-center space-x-2">
                            <img src={logo} alt="XtendSales" className="h-10 sm:h-12 w-auto" />
                            <span className="text-lg sm:text-xl font-bold">XtendSales</span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                            XtendSales was created for the new ways we live and work. We make a better
                            workspace around the world
                        </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Product</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                    Customer stories
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                    Guides & tutorials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                    Help center
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h3>
                        <ul className="space-y-3 sm:space-y-4 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200 text-sm sm:text-base">
                                    Media kit
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                            <div className="flex items-center space-x-2 text-gray-300">
                                <span className="text-xs sm:text-sm">🌐 English</span>
                                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>

                            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Terms & privacy
                                </a>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Security
                                </a>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Status
                                </a>
                                <span>©2025 XtendSales.</span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

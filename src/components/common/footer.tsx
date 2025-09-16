import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Twitter, Linkedin, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

function Footer() {
    return (
        <footer className="bg-[#050e4c] text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center space-x-2">
                            <img src={logo} alt="XtendSales" className="h-12 w-auto" />
                            <span className="text-xl font-bold">XtendSales</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed max-w-md">
                            XtendSales was created for the new ways we live and work. We make a better
                            workspace around the world
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-6">Product</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Customer stories
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-6">Resources</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Guides & tutorials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Help center
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Media kit
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="mt-16 pt-8 border-t border-gray-700">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                        <div className="lg:max-w-md">
                            <h3 className="text-2xl font-bold mb-4">Try It Today</h3>
                            <p className="text-gray-300">
                                Get started for free. Add your whole team as your needs grow.
                            </p>
                        </div>
                        <div>
                            <Button
                                size="lg"
                                className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base px-8 py-6 rounded-lg"
                            >
                                Start today
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="border-t border-gray-700">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                            <div className="flex items-center space-x-2 text-gray-300">
                                <span className="text-sm">🌐 English</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>


                            <div className="flex space-x-6 text-sm text-gray-400">
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
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

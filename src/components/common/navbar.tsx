import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import { Calendar, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-[#050e4c] h-16 sm:h-20 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 text-white flex items-center h-full">
                {/* Logo */}
                <img
                    onClick={handleHome}
                    className="cursor-pointer h-12 sm:h-[70px] object-contain"
                    src={logo} alt="logo"
                />

                {/* Centered Navigation - Desktop */}
                <nav className="hidden lg:flex flex-1 justify-center space-x-6 xl:space-x-8">
                    <Link to="/" className="hover:text-blue-300 transition-colors duration-200 text-sm xl:text-base">
                        Home
                    </Link>
                    <Link to="/solutions" className="hover:text-blue-300 transition-colors duration-200 text-sm xl:text-base">
                        Solutions
                    </Link>
                    <Link to="/about" className="hover:text-blue-300 transition-colors duration-200 text-sm xl:text-base">
                        About Us
                    </Link>
                    <Link to="/contact" className="hover:text-blue-300 transition-colors duration-200 text-sm xl:text-base">
                        Contact Us
                    </Link>
                </nav>

                {/* Schedule Call Button - Desktop */}
                <div className="hidden lg:block">
                    <Button
                        onClick={() => window.location.href = 'tel:+971506537140'}
                        className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm xl:text-base px-3 xl:px-4 py-3 xl:py-5 rounded-lg"
                    >
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="hidden xl:inline">Schedule Call</span>
                        <span className="xl:hidden">Call</span>
                    </Button>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden ml-auto">
                    <button
                        className="text-white hover:text-blue-300 transition-colors duration-200 p-2"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[#050e4c] z-50 transform transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col h-full">
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                                <img
                                    className="h-10 object-contain"
                                    src={logo} alt="logo"
                                />
                                <button
                                    className="text-white hover:text-blue-300 transition-colors duration-200 p-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close mobile menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Drawer Content */}
                            <div className="flex-1 px-4 py-6">
                                <nav className="flex flex-col space-y-6">
                                    <Link
                                        to="/"
                                        className="text-white hover:text-blue-300 transition-colors duration-200 text-lg py-3 border-b border-gray-700"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/solutions"
                                        className="text-white hover:text-blue-300 transition-colors duration-200 text-lg py-3 border-b border-gray-700"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Solutions
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="text-white hover:text-blue-300 transition-colors duration-200 text-lg py-3 border-b border-gray-700"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="text-white hover:text-blue-300 transition-colors duration-200 text-lg py-3 border-b border-gray-700"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </nav>

                                {/* Mobile Schedule Call Button */}
                                <div className="mt-8">
                                    <Button
                                        className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base px-6 py-4 rounded-lg w-full"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            window.location.href = 'tel:+971506537140';
                                        }}
                                    >
                                        <Calendar className="w-5 h-5 mr-2" />
                                        Schedule Call
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default navbar
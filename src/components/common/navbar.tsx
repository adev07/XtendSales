import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import { Calendar, Menu } from "lucide-react"

function navbar() {
    return (
        <div className="bg-[#050e4c] h-20 sticky top-0 z-50">
            <div className="container mx-auto px-4 text-white flex items-center h-full">
                {/* Logo */}
                <img
                    className="cursor-pointer h-16 object-contain"
                    src={logo} alt="logo"
                />

                {/* Centered Navigation */}
                <nav className="hidden md:flex flex-1 justify-center space-x-8">
                    <a href="#home" className="hover:text-blue-300 transition-colors duration-200">
                        Home
                    </a>
                    <a href="#products" className="hover:text-blue-300 transition-colors duration-200">
                        Products
                    </a>
                    <a href="#about" className="hover:text-blue-300 transition-colors duration-200">
                        About Us
                    </a>
                    <a href="#contact" className="hover:text-blue-300 transition-colors duration-200">
                        Contact Us
                    </a>
                </nav>

                {/* Schedule Call Button */}
                <div className="hidden md:block">
                    <Button
                        size="lg"
                        variant="default"
                        className="bg-[#4F9CF9] hover:bg-[#4F9CF9]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base px-8 py-6 rounded-lg"
                    >
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Call
                    </Button>

                </div>

                {/* Mobile menu button */}
                <div className="md:hidden ml-auto">
                    <button className="text-white hover:text-blue-300 transition-colors duration-200">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default navbar

"use client"
import { Menu, User, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // Dynamically set the favicon
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = "https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/Hostizi-Icon.png";
        document.head.appendChild(link);

        // Handle sticky navbar effect
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            document.head.removeChild(link);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col">
            {/* Sticky Nav Bar */}
            <nav className={`px-6 py-4 fixed top-0 left-0 right-0 z-50 *shadow-md* w-full transition-all duration-300 ${isSticky
                ? "bg-[#001c3c]/80 backdrop-blur-md"
                : "bg-transparent"
                }`}
            >
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/Hostizi-logo-White.svg"
                            alt="Hostizi Logo"
                            className="w-[70%] md:w-[80%] h-auto"
                        />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8 text-white">
                        <Link href="/" className="hover:text-blue-200">Home</Link>
                        <Link href="/domains" className="hover:text-blue-200">Domains</Link>
                        <Link href="/hosting" className="hover:text-blue-200">Hosting</Link>
                        <Link href="/features" className="hover:text-blue-200">Features</Link>
                        <Link href="/pricing" className="hover:text-blue-200">Pricing</Link>
                    </div>

                    {/* Client Area Button */}
                    <Link
                        href="https://app.hostizi.com/index.php?rp=/login"
                        target="_blank"
                        className="hidden md:flex items-center bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                        <User className="w-6 h-6 mr-2 text-blue-600" />
                        Client Area
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        } md:hidden z-50`}
                >
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-bold text-blue-600">Menu</span>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-gray-800 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/domains"
                                className="text-gray-800 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Domains
                            </Link>
                            <Link
                                href="/hosting"
                                className="text-gray-800 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Hosting
                            </Link>
                            <Link
                                href="/features"
                                className="text-gray-800 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-gray-800 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="https://app.hostizi.com/index.php?rp=/login"
                                target="_blank"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <User className="w-6 h-6 mr-2" />
                                Client Area
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </nav>

            {/* Main Content with Negative Margin for Overlap */}
            <main className="flex-grow pt-16 -mt-24">
                {/* <Outlet /> */}
            </main>
        </div>
    );
};

export default Header;

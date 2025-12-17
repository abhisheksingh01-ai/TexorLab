import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import { Menu, X, ChevronRight } from "lucide-react"; // Ensure lucide-react is installed

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white z-50 relative">
            Your<span className="text-indigo-400">Company</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                {/* Hover Underline Animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-white text-[#0f172a] px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-indigo-50 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-50"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      {/* 1. Backdrop Overlay (Darken background) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. Slide-in Drawer (From Left) */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-[#0f172a] border-r border-white/10 z-50 transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <span className="text-xl font-bold text-white">
            Your<span className="text-indigo-400">Company</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
          {menuLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-4 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all group"
            >
              <span className="font-medium text-lg">{item.name}</span>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-indigo-400" />
            </Link>
          ))}
        </div>

        {/* Mobile Footer / CTA */}
        <div className="p-6 border-t border-white/10 bg-[#0b1120]">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold shadow-lg shadow-indigo-500/20 active:scale-95 transition-transform"
          >
            Get Started Now
          </Link>
          <p className="text-center text-slate-500 text-xs mt-4">
            © 2024 YourCompany Inc.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
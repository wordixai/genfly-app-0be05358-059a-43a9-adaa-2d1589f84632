"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md dark:bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold">Brew Haven</h1>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-amber-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
              <a href="#menu" className="hover:text-amber-600 transition-colors">Menu</a>
              <a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
              <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                Order Now
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black">
              <a href="#home" className="block px-3 py-2 hover:text-amber-600 transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 hover:text-amber-600 transition-colors">About</a>
              <a href="#menu" className="block px-3 py-2 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#gallery" className="block px-3 py-2 hover:text-amber-600 transition-colors">Gallery</a>
              <a href="#contact" className="block px-3 py-2 hover:text-amber-600 transition-colors">Contact</a>
              <button className="w-full text-left bg-amber-600 text-white px-3 py-2 rounded-md hover:bg-amber-700 transition-colors">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
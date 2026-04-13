import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 h-16 w-full">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Left Side - Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-xl font-bold text-blue-700">ProFinish</span>
          <div className="h-6 w-px bg-blue-700"></div>
          <span className="text-xl font-normal text-gray-500">Painters</span>
        </motion.div>

        {/* Right Side - Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 active:scale-95"
          >
            Get Free Quote
          </motion.a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 overflow-hidden shadow-lg z-40"
          >
            <div className="flex flex-col space-y-4 py-6 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-blue-700 text-white text-sm text-center font-medium px-5 py-3 rounded-lg hover:bg-blue-800 transition-colors w-full"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

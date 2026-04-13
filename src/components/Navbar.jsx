import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-700">ProFinish</span>
          <div className="h-6 w-px bg-blue-700"></div>
          <span className="text-xl font-normal text-gray-500">Painters</span>
        </div>

        {/* Right Side - Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            Get Free Quote
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
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
            <button className="bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-blue-800 transition-colors w-full">
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

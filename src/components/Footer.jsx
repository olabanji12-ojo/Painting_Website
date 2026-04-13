import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1 — Brand */}
          <div>
            <h3 className="text-white font-bold text-lg">ProFinish Painters</h3>
            <p className="text-gray-400 text-sm mt-3 max-w-xs leading-relaxed">
              Transforming Lagos spaces since 2016. Premium residential and commercial painting solutions you can trust.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Interior Painting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Exterior Painting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Painting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Decorative Finishes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Waterproofing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Wall Preparation</a></li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+2348012345678" className="hover:text-white transition-colors">+234 801 234 5678</a></li>
              <li><a href="mailto:info@profinishpainters.com" className="hover:text-white transition-colors">info@profinishpainters.com</a></li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            © 2025 ProFinish Painters. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built by Olabanji | Web Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

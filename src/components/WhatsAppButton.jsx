import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-2xl border border-gray-800 whitespace-nowrap"
          >
            Chat with us
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href="https://wa.me/2348012345678?text=Hello%20ProFinish%20Painters,%20I'd%20like%20to%20get%20a%20free%20quote."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors hover:bg-green-600 group"
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:rotate-12 transition-transform"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14.05 2a9 9 0 0 1 8 7.94" />
          <path d="M14.05 6A5 5 0 0 1 18 10" />
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;

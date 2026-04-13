import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white py-12 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center">
        
        {/* Left Side — Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 mt-16 md:mt-0"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-blue-50 text-blue-700 text-xs font-medium px-4 py-1.5 rounded-full inline-block mb-6 shadow-sm"
          >
            Professional Painting Services in Lagos
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            We Transform <br />
            Your Space With <br />
            <span className="text-blue-700">Perfect Paint.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-500 text-lg mt-6 max-w-md leading-relaxed"
          >
            From residential homes to commercial buildings — ProFinish Painters delivers clean, lasting finishes with zero mess and on-time delivery. Trusted by 200+ clients across Lagos.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a href="#contact" className="bg-blue-700 text-white text-center font-semibold px-8 py-4 rounded-xl hover:bg-blue-800 transition shadow-lg shadow-blue-700/30 active:scale-95">
              Get Free Quote
            </a>
            <a href="#gallery" className="border border-blue-700 text-blue-700 text-center font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition active:scale-95">
              See Our Work
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex items-center gap-8 mt-12 py-2"
          >
            <div className="flex flex-col">
              <span className="text-blue-700 font-bold text-xl">200+</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Projects Done</span>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-blue-700 font-bold text-xl">8 Years</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Experience</span>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-blue-700 font-bold text-xl">100%</span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side — Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-700/10 h-[400px] md:h-[580px] relative z-10 w-full">
            <img 
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800" 
              alt="Professional painter at work" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-20 flex items-center gap-3 border border-gray-100 hidden sm:flex"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Available for new projects</span>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-blue-50 rounded-[40px] -rotate-3 z-0 blur-xl opacity-60"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

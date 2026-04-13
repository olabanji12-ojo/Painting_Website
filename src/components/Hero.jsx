import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white py-12 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-center">
        
        {/* Left Side — Text Content */}
        <div className="z-10 mt-16 md:mt-0">
          <div className="bg-blue-50 text-blue-700 text-xs font-medium px-4 py-1.5 rounded-full inline-block mb-6">
            Professional Painting Services in Lagos
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            We Transform <br />
            Your Space With <br />
            <span className="text-blue-700">Perfect Paint.</span>
          </h1>
          
          <p className="text-gray-500 text-lg mt-6 max-w-md leading-relaxed">
            From residential homes to commercial buildings — ProFinish Painters delivers clean, lasting finishes with zero mess and on-time delivery. Trusted by 200+ clients across Lagos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-800 transition shadow-lg shadow-blue-700/20">
              Get Free Quote
            </button>
            <button className="border border-blue-700 text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition">
              See Our Work
            </button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 py-2">
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
          </div>
        </div>

        {/* Right Side — Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-700/10 h-[400px] md:h-[580px] relative z-10 w-full">
            <img 
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800" 
              alt="Professional painter at work" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-20 flex items-center gap-3 border border-gray-100 hidden sm:flex">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Available for new projects</span>
          </div>

          {/* Decorative elements - subtle blue shadow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-blue-50 rounded-[40px] -rotate-3 z-0 blur-xl opacity-60"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

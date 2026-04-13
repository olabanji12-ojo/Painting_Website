import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "We show up on time, every time",
      detail: "No delays, no excuses. We respect your schedule."
    },
    {
      title: "Premium paints only",
      detail: "We use Dulux and Berger paints — no cheap alternatives."
    },
    {
      title: "We clean up completely",
      detail: "Your space is left spotless after every job."
    },
    {
      title: "Free consultation & quote",
      detail: "We visit your site and give a full quote at no cost."
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div>
          <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase mb-3 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We Don't Just Paint. <br /> We Deliver an Experience.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mt-4">
            ProFinish Painters has been transforming spaces across Lagos since 2016. Every project we take on is treated with the same attention to detail — whether it's a single bedroom or a 10-floor commercial building.
          </p>

          <div className="mt-8 space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-base leading-none mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {feature.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl mt-8 inline-block hover:bg-blue-800 transition shadow-lg shadow-blue-700/20">
            Book Free Consultation
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="h-[400px] md:h-[500px]">
          <div className="rounded-2xl overflow-hidden w-full h-full shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800" 
              alt="Professional painters at work" 
              className="w-full h-full object-cover select-none"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

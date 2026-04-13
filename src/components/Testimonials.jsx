import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chukwuemeka Obi",
      role: "Homeowner, Lekki",
      initials: "CO",
      quote: "ProFinish painted our entire 4-bedroom home in 3 days. The finish was incredibly smooth and they cleaned up everything afterwards. Worth every kobo.",
      stars: 5
    },
    {
      name: "Amara Nwosu",
      role: "Business Owner, Victoria Island",
      initials: "AN",
      quote: "We hired them for our new office space on the island. Professional team, premium materials, and delivered ahead of schedule. Our office looks world class now.",
      stars: 5
    },
    {
      name: "Biodun Adeyemi",
      role: "Property Developer, Ikeja",
      initials: "BA",
      quote: "From the free consultation to the final coat — everything was smooth. They even noticed a crack I hadn't seen and fixed it before painting. That attention to detail is rare.",
      stars: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Cards Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Stars Row */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Bottom of Card */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-gray-900 text-sm font-semibold leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

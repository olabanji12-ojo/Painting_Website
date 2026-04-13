import React from 'react';
import { Home, Building, Briefcase, Paintbrush, Shield, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Interior Painting",
      description: "Full interior painting for homes and apartments. Clean edges, premium paint, and zero mess guaranteed."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Exterior Painting",
      description: "Weather-resistant exterior coatings that protect and beautify your building for years."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Commercial Painting",
      description: "Office spaces, warehouses, and commercial buildings painted professionally with minimal disruption."
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Decorative Finishes",
      description: "Textured walls, stenciling, and custom decorative finishes that make your space unique."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Waterproofing",
      description: "Protective waterproof coatings for walls, roofs, and surfaces exposed to moisture and rain."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Wall Preparation",
      description: "Crack filling, sanding, skim coating, and full surface preparation before any painting begins."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-[#F8FAFF]">
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
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Our Painting Services
          </h2>
          <p className="text-gray-500 text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Professional painting solutions for every type of space
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

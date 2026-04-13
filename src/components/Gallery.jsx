import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800", title: "Residential Villa" },
    { url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800", title: "Modern Office" },
    { url: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800", title: "Living Room" },
    { url: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=800", title: "Kitchen Cabinet" },
    { url: "https://images.unsplash.com/photo-1556909114-44e3e9399c27?w=800", title: "Exterior Facade" },
    { url: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800", title: "Lounge Area" },
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-[#F8FAFF]">
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
            OUR WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Recent Projects
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto leading-relaxed">
            A selection of our recent residential and commercial painting jobs
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`
                group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm
                ${index === 0 ? 'md:col-span-2 h-72' : 'col-span-1 h-64'}
              `}
            >
              {/* Image */}
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white font-medium px-6 py-2 border border-white/50 rounded-full bg-white/10">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

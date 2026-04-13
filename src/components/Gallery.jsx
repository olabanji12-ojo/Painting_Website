import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Lekki Residential Villa",
      location: "Lekki Phase 1, Lagos",
      description: "Complete interior and exterior transformation using premium Dulux weather-shield and matte finishes. Focus on high-gloss wood accents and clean, modern lines.",
      images: [
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200",
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200",
        "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1200"
      ]
    },
    {
      id: 2,
      title: "Modern Corporate Office",
      location: "Victoria Island, Lagos",
      description: "Sophisticated gray and blue palette for a professional workspace. Included acoustic wall preparation and specialized floor coatings.",
      images: [
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200"
      ]
    },
    {
      id: 3,
      title: "Luxury Living Space",
      location: "Ikoyi, Lagos",
      description: "Full decorative transformation featuring textured accent walls and high-quality skim coating for a perfectly smooth finish.",
      images: [
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200",
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
        "https://images.unsplash.com/photo-1616489953149-8c9e0750ca2c?w=1200"
      ]
    },
    {
      id: 4,
      title: "Kitchen Transformation",
      location: "Magodo, Lagos",
      description: "Refurbished existing cabinets with premium polyurethane paint, giving the entire kitchen a brand-new look at a fraction of the cost of replacement.",
      images: [
        "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=1200",
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200",
        "https://images.unsplash.com/photo-1556909114-f4e7f2608886?w=1200"
      ]
    },
    {
      id: 5,
      title: "Modern Exterior Facade",
      location: "Surulere, Lagos",
      description: "Full exterior overhaul with waterproofing and weather-resistant coatings. Includes specialized damp-proofing for bottom walls.",
      images: [
        "https://images.unsplash.com/photo-1556909114-44e3e9399c27?w=1200",
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1200",
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200"
      ]
    },
    {
      id: 6,
      title: "Penthouse Lounge",
      location: "Banana Island, Lagos",
      description: "High-end lounge painting featuring metallic accent finishes and precise border work. Delivered a world-class, sophisticated atmosphere.",
      images: [
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200",
        "https://images.unsplash.com/photo-1600566752355-3979ff104445?w=1200"
      ]
    }
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-[#F8FAFF]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">OUR WORK</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Recent Projects</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto leading-relaxed">
            Take a look at how we've transformed residential and commercial spaces across Lagos.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => handleOpenModal(project)}
              className={`
                group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm bg-white
                ${index === 0 ? 'md:col-span-2 h-72' : 'col-span-1 h-72'}
              `}
            >
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px] p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-white/80 text-xs mb-4">{project.location}</p>
                <span className="text-white text-xs font-medium px-4 py-2 border border-white/50 rounded-full bg-white/10">
                  View Case Study
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-6 md:p-12 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="fixed inset-0 bg-gray-900/90 backdrop-blur-md"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 lg:grid-cols-[60%_40%]"
              >
                {/* Close Button */}
                <button 
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 text-white md:text-gray-900 md:bg-gray-100 md:hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <X size={20} />
                </button>

                {/* Left Side: Slider */}
                <div className="relative h-64 sm:h-80 md:h-[500px] lg:h-full bg-gray-100 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      src={selectedProject.images[currentImageIndex]} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none">
                    <button 
                      onClick={prevImage}
                      className="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full flex items-center justify-center pointer-events-auto transition active:scale-90"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full flex items-center justify-center pointer-events-auto transition active:scale-90"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {selectedProject.images.map((_, i) => (
                      <div 
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-white w-6' : 'bg-white/40'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Side: Info */}
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">
                    <MapPin size={14} />
                    {selectedProject.location}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Interested in similar results?</h4>
                    <a 
                      href="#contact" 
                      onClick={handleCloseModal}
                      className="bg-blue-700 text-white font-semibold py-4 rounded-xl text-center hover:bg-blue-800 transition shadow-lg shadow-blue-700/20 active:scale-95"
                    >
                      Request a quote for your project
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

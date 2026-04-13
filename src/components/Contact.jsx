import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-[#F8FAFF] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">
            CONTACT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Get Your Free Quote Today
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto leading-relaxed">
            Fill the form or reach us directly — we respond within 2 hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column — Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 order-2 lg:order-1"
          >
            <motion.div 
              whileHover={{ x: 5 }}
              className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-4 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium block uppercase tracking-wider">Call Us</span>
                <a href="tel:+2348012345678" className="text-gray-900 text-sm font-semibold mt-0.5 hover:text-blue-700 transition-colors">+234 801 234 5678</a>
              </div>
            </motion.div>

            <motion.a 
              whileHover={{ x: 5 }}
              href="https://wa.me/2348012345678?text=Hello%20ProFinish%20Painters,%20I'd%20like%20to%20get%20a%20free%20quote." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-4 shadow-sm hover:border-green-200 transition-colors block group"
            >
              <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <MessageCircle size={20} />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium block uppercase tracking-wider">WhatsApp</span>
                <span className="text-gray-900 text-sm font-semibold mt-0.5">Chat with us directly</span>
              </div>
            </motion.a>

            <motion.div 
              whileHover={{ x: 5 }}
              className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-4 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-medium block uppercase tracking-wider">We Serve</span>
                <span className="text-gray-900 text-sm font-semibold mt-0.5">Lagos Island · Lekki · VI · Ikeja · Surulere</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 order-1 lg:order-2"
          >
            <form 
              action="https://formspree.io/f/YOUR_ENDPOINT" 
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="text-sm font-medium text-gray-700 mb-1.5 block">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    placeholder="John"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="text-sm font-medium text-gray-700 mb-1.5 block">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    placeholder="Doe"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1.5 block">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+234 800 000 0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label htmlFor="service" className="text-sm font-medium text-gray-700 mb-1.5 block">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="Interior Painting">Interior Painting</option>
                  <option value="Exterior Painting">Exterior Painting</option>
                  <option value="Commercial Painting">Commercial Painting</option>
                  <option value="Decorative Finishes">Decorative Finishes</option>
                  <option value="Waterproofing">Waterproofing</option>
                  <option value="Wall Preparation">Wall Preparation</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1.5 block">Tell us about your project</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe the space, size, and any specific requirements..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-blue-700 text-white font-semibold py-4 rounded-xl w-full hover:bg-blue-800 transition shadow-lg shadow-blue-700/20"
              >
                Request Free Quote
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

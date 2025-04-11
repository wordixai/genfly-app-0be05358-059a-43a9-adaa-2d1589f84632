"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-amber-600 font-medium text-lg mb-2">Contact Us</h2>
          <h3 className="text-4xl font-bold mb-6 dark:text-white">Visit Brew Haven</h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We'd love to see you! Drop by for a coffee, a chat, or to work in our cozy space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full mb-4">
              <MapPin className="text-amber-600" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2 dark:text-white">Location</h4>
            <p className="text-gray-600 dark:text-gray-400">
              123 Coffee Street<br />
              Downtown, City 10001
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full mb-4">
              <Clock className="text-amber-600" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2 dark:text-white">Opening Hours</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Monday - Friday: 7am - 8pm<br />
              Weekends: 8am - 9pm
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full mb-4">
              <Phone className="text-amber-600" size={24} />
            </div>
            <h4 className="text-xl font-semibold mb-2 dark:text-white">Contact</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Phone: (555) 123-4567<br />
              Email: hello@brewhaven.com
            </p>
          </motion.div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-semibold mb-4 dark:text-white">Send Us a Message</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Have questions or want to book a private event? Reach out to us directly.
              </p>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-zinc-700 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-zinc-700 dark:text-white"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-zinc-700 dark:text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036935!2d-73.98784492404045!3d40.75798833440232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
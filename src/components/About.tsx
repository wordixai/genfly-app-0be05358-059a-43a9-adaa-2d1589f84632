"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Coffee being prepared"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-medium text-lg mb-2">Our Story</h2>
            <h3 className="text-4xl font-bold mb-6 dark:text-white">Crafting Moments, One Cup at a Time</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Founded in 2018, Brew Haven began with a simple mission: to create a space where coffee isn't just served, but celebrated. Our founders, Emma and James, traveled across the globe studying coffee cultures and techniques before bringing their passion back home.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Today, we source our beans directly from sustainable farms, roast them in small batches to ensure peak flavor, and serve them in an environment designed to foster connection and creativity. Every cup tells a story – of the farmers who grew the beans, the roasters who perfected them, and the baristas who craft them into your perfect drink.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-amber-600 mb-1">5+</h4>
                <p className="text-gray-600 dark:text-gray-400">Years of Excellence</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-amber-600 mb-1">12</h4>
                <p className="text-gray-600 dark:text-gray-400">Coffee Origins</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-amber-600 mb-1">50+</h4>
                <p className="text-gray-600 dark:text-gray-400">Unique Recipes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
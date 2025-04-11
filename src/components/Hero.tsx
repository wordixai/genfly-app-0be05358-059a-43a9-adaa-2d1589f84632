"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Cafe interior"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-amber-400 font-medium text-lg mb-2">Welcome to Brew Haven</h2>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Experience Coffee <br /> Like Never Before
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-lg">
              A modern cafe experience with specialty coffee, artisanal pastries, and a cozy atmosphere designed for comfort and connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors">
                View Menu
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                Book a Table
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
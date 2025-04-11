"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Coffee art"
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Coffee shop interior"
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Coffee beans"
  },
  {
    src: "https://images.unsplash.com/photo-1515283709260-ee29296f1534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Cafe pastries"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-amber-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-amber-600 font-medium text-lg mb-2">Gallery</h2>
          <h3 className="text-4xl font-bold mb-6 dark:text-white">Moments at Brew Haven</h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Take a visual journey through our cafe, from our carefully crafted drinks to our inviting spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
          >
            Follow us on Instagram @brewhaven
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
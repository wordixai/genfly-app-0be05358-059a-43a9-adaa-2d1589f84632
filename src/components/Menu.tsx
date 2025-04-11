"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: "coffee" | "food" | "dessert";
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Specialty Latte",
    description: "Our signature espresso with steamed milk and house-made vanilla syrup",
    price: "$4.50",
    category: "coffee"
  },
  {
    id: 2,
    name: "Pour Over",
    description: "Single-origin beans brewed to perfection using the pour-over method",
    price: "$3.75",
    category: "coffee"
  },
  {
    id: 3,
    name: "Cold Brew",
    description: "Smooth, low-acidity coffee steeped for 24 hours and served over ice",
    price: "$4.25",
    category: "coffee"
  },
  {
    id: 4,
    name: "Avocado Toast",
    description: "Sourdough bread topped with avocado, cherry tomatoes, and microgreens",
    price: "$8.50",
    category: "food"
  },
  {
    id: 5,
    name: "Breakfast Sandwich",
    description: "Free-range egg, aged cheddar, and bacon on a house-made brioche bun",
    price: "$9.25",
    category: "food"
  },
  {
    id: 6,
    name: "Chocolate Croissant",
    description: "Buttery, flaky pastry filled with rich dark chocolate",
    price: "$3.95",
    category: "dessert"
  },
  {
    id: 7,
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
    price: "$5.75",
    category: "dessert"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<"coffee" | "food" | "dessert">("coffee");
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-amber-600 font-medium text-lg mb-2">Our Menu</h2>
          <h3 className="text-4xl font-bold mb-6 dark:text-white">Crafted with Care</h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We take pride in our carefully curated menu, featuring ethically sourced ingredients and recipes perfected over time.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 dark:bg-zinc-800 p-1 rounded-lg">
            <button 
              onClick={() => setActiveCategory("coffee")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === "coffee" 
                  ? "bg-amber-600 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
              }`}
            >
              Coffee
            </button>
            <button 
              onClick={() => setActiveCategory("food")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === "food" 
                  ? "bg-amber-600 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
              }`}
            >
              Food
            </button>
            <button 
              onClick={() => setActiveCategory("dessert")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === "dessert" 
                  ? "bg-amber-600 text-white" 
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
              }`}
            >
              Desserts
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm flex justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold mb-2 dark:text-white">{item.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
              </div>
              <div className="text-amber-600 font-bold text-lg">{item.price}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
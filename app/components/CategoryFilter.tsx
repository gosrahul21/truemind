"use client";
import { useState } from "react";

const categories = ['All', 'E-Commerce', 'FinTech', 'Sales & Marketing', 'HR & Recruitment', 'Customer Service', 'Analytics', 'Marketing', 'Operations', 'Legal Tech', 'SaaS Platform'];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
    
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
          selectedCategory === category
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {category}
      </button>
    ))}
  </div>

  )
}

export default CategoryFilter;
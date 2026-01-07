"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        budget: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };
  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="+91 70045 72140"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="Your Company"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
        >
          <option value="">Select budget range</option>
          <option value="under-5l">Under ₹5L</option>
          <option value="5l-10l">₹5L - ₹10L</option>
          <option value="10l-20l">₹10L - ₹20L</option>
          <option value="20l-plus">₹20L+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">What would you like to automate? *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your automation needs..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
      >
        Schedule Free Consultation <ArrowRight className="w-5 h-5" />
      </button>

      <p className="text-sm text-gray-500 text-center">
        We&apos;ll respond within 24 hours. No spam, ever.
      </p>
    </form>
  </div>
  )
}

export default Form;
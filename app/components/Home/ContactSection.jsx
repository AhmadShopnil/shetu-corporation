"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you shortly!");
    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-16 md:py-20 px-6 bg-[#F9FBFA] relative overflow-hidden" id="contact">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9DCC46]/5 rounded-l-[100px] opacity-20 md:block hidden"></div>

      <div className="container mx-auto max-w-[1200px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
              <span className="text-[#9DCC46] font-bold tracking-[0.2em] uppercase text-sm">
                Get In Touch
              </span>
              <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-semibold text-gray-900 mb-4 leading-tight">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Have questions about our products, partnerships, or services? We&apos;re here to help. Reach out to us using the form below.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

          {/* Contact Information (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/5 bg-[#F4F7F2] p-8 md:p-12 text-gray-900 relative overflow-hidden rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl border-r border-gray-100"
          >
            {/* Background Accent */}
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#9DCC46]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-6 relative z-10 text-gray-900">Contact Information</h3>
            <p className="text-base md:text-lg text-gray-600 mb-12 relative z-10 leading-relaxed">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Phone className="w-5 h-5 text-[#9DCC46]" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1 text-gray-900">Phone</h4>
                  <p className="text-sm md:text-base text-gray-600">+880-2-7913081</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Mail className="w-5 h-5 text-[#9DCC46]" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1 text-gray-900">Email</h4>
                  <p className="text-sm md:text-base text-gray-600">info@shetucorporation.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <MapPin className="w-5 h-5 text-[#9DCC46]" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1 text-gray-900">Office Location</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    House # 52, Word # 01, Block # A, Madani Avenue, Dhaka
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-3/5 p-6 md:p-12 lg:p-16"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm md:text-base font-semibold text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#9DCC46] focus:border-[#9DCC46] transition-all duration-300"
                    placeholder="John"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm md:text-base font-semibold text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#9DCC46] focus:border-[#9DCC46] transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Number */}
                <div className="space-y-2">
                  <label htmlFor="contactNumber" className="text-sm md:text-base font-semibold text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#9DCC46] focus:border-[#9DCC46] transition-all duration-300"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm md:text-base font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#9DCC46] focus:border-[#9DCC46] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm md:text-base font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#9DCC46] focus:border-[#9DCC46] transition-all duration-300 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-[#9DCC46] hover:bg-[#85b03b] text-white font-bold text-base md:text-lg rounded-lg shadow-lg shadow-[#9DCC46]/30 hover:shadow-xl hover:shadow-[#9DCC46]/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

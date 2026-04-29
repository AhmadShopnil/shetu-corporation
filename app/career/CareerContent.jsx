"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Sprout, Heart, TrendingUp, Clock, Users, Globe } from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Agronomist",
    department: "Research & Development",
    location: "On-site / Remote",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Supply Chain Manager",
    department: "Operations",
    location: "Headquarters",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "Agro-Technology Specialist",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 4,
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "On-site",
    type: "Full-Time",
  }
];

const benefits = [
  {
    title: "Join a purpose-driven organization",
    icon: <Sprout className="w-8 h-8 text-[#9DCC46]" />
  },
  {
    title: "Help transform Bangladesh’s agriculture sector",
    icon: <Heart className="w-8 h-8 text-[#9DCC46]" />
  },
  {
    title: "Build sustainable food systems",
    icon: <TrendingUp className="w-8 h-8 text-[#9DCC46]" />
  },
  {
    title: "Comprehensive benefits and work life balance",
    icon: <Clock className="w-8 h-8 text-[#9DCC46]" />
  },
  {
    title: "Create real impact in communities",
    icon: <Globe className="w-8 h-8 text-[#9DCC46]" />
  },
  {
    title: "Work with a passionate, committed team",
    icon: <Users className="w-8 h-8 text-[#9DCC46]" />
  }
];

export default function CareerContent() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 text-center bg-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight"
        >
          Career
        </motion.h1>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Why Join Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              At Setu Corporation, we believe that taking care of our team is just as important as taking care of the earth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-100 rounded-lg hover:shadow-xl transition-shadow bg-gray-50"
              >
                <div className="w-16 h-16 bg-[#9DCC46]/10 text-[#9DCC46] rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f4f8ec]">
        <div className="container mx-auto max-w-[1000px]">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Openings
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              Explore exciting career opportunities at Shetu Corporation Limited. Join a dynamic team dedicated to transforming agriculture 
              in Bangladesh through innovation and sustainability.
            </motion.p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Users size={16} />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Globe size={16} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={16} />
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-[#9DCC46] hover:text-gray-900 transition-colors whitespace-nowrap">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/3 space-y-8"
            >
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">OUR HEAD OFFICE</h3>
                <p className="text-gray-600 leading-relaxed">
                  House 24, Road 14, Sector 6,<br />
                  Uttara Model Town, Dhaka 1230,<br />
                  Bangladesh
                </p>
                <div className="mt-6">
                  <a href="https://maps.app.goo.gl/B46Bnd6iK73Yd4A67" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#7a9e36] font-bold hover:underline">
                    View on Google Maps
                  </a>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm h-64 relative bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7495514659976!2d90.3957262!3d23.8630325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c411c5d0f5c1%3A0x6b2e1a3bc4d05466!2sHouse%2024%2C%20Road%2014%2C%20Sector%206%2C%20Uttara%20Model%20Town%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1714000000000!5m2!1sen!2sbd" 
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy" 
                ></iframe>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9DCC46] transition-shadow bg-white" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9DCC46] transition-shadow bg-white" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input type="email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9DCC46] transition-shadow bg-white" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Contact No</label>
                      <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9DCC46] transition-shadow bg-white" placeholder="+880 1234-567890" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea rows="4" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9DCC46] transition-shadow bg-white" placeholder="Tell us about yourself..."></textarea>
                  </div>
                  <div className="text-left">
                    <button type="button" className="px-10 py-4 bg-[#9DCC46] text-gray-900 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-colors w-full md:w-auto">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

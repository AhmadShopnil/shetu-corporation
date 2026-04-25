"use client";

import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { motion } from "motion/react";
import Link from "next/link";

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
    title: "Innovative Environment",
    description: "Work with cutting-edge agro-technologies and contribute to sustainable farming practices that change the world.",
    icon: (
      <svg className="w-8 h-8 text-[#9DCC46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage, mental wellness programs, and access to fresh, organic farm produce.",
    icon: (
      <svg className="w-8 h-8 text-[#9DCC46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Growth Opportunities",
    description: "Continuous learning budgets, regular workshops, and a clear path for career progression.",
    icon: (
      <svg className="w-8 h-8 text-[#9DCC46]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero / Page Title */}
      <section className="pt-40 pb-20 px-6 text-center bg-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight"
        >
          Careers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto"
        >
          Join our mission to revolutionize sustainable agriculture. We're always looking for passionate people.
        </motion.p>
      </section>

      {/* Why Join Us Section */}
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
                className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow bg-gray-50"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Section */}
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
              Current Openings
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              Find your next role and help us grow a greener future.
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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

      {/* Contact Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Don't see a fit?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We are always on the lookout for talented individuals. Even if your ideal role isn't listed above, we'd still love to hear from you. Drop us a line and tell us how you can make a difference.
            </p>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-left shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9DCC46] transition-shadow bg-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9DCC46] transition-shadow bg-white" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9DCC46] transition-shadow bg-white" placeholder="Tell us about yourself..."></textarea>
                </div>
                <div className="text-center">
                  <button type="button" className="px-10 py-4 bg-[#9DCC46] text-gray-900 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-colors w-full md:w-auto">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

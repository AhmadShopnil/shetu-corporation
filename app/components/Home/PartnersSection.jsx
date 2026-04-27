"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Briefcase, Mail } from "lucide-react";
import PartnerSlider from "./PartnerSlider";

export default function PartnersSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
    

   

      <div className="container mx-auto max-w-[1200px] px-6">
        {/* "Wish to partner with us?" Section */}
        <div className="bg-[#f8f9fa] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#9DCC46]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0a1f11]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wish to partner with us?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Be part of our mission to build sustainable food systems in Bangladesh—connecting farmers&apos; fields directly to the nation&apos;s table.
              </p>
            </motion.div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Business Enquiries Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#9DCC46]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#9DCC46]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#9DCC46] transition-colors duration-300">
                  <Mail className="w-7 h-7 text-[#9DCC46] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Business Enquiries
                </h4>
                <p className="text-gray-600 mb-8">
                  Explore business opportunities and discover how we can grow together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white font-semibold bg-[#0a1f11] hover:bg-[#9DCC46] px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Career Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#9DCC46]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#0a1f11]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0a1f11] transition-colors duration-300">
                  <Briefcase className="w-7 h-7 text-[#0a1f11] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Career
                </h4>
                <p className="text-gray-600 mb-8">
                  Join our team of passionate professionals and make a real impact.
                </p>
                <Link
                  href="/career"
                  className="inline-flex items-center gap-2 text-white font-semibold bg-[#0a1f11] hover:bg-[#9DCC46] px-6 py-3 rounded-lg transition-all duration-300"
                >
                  See Vacancies
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

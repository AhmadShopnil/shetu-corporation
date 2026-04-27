"use client";

import Image from "next/image";
import { motion } from "motion/react";
import HomeHeader from "../components/Common/HomeHeader";
import Footer from "../components/Common/Footer";
import ContactSection from "../components/Home/ContactSection";
import { MapPin, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HomeHeader />

      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center pt-20">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Modern Office Building - Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
              <span className="text-[#9DCC46] font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">
                Connect With Us
              </span>
              <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold text-white mb-6 leading-tight drop-shadow-lg">
              We&apos;re Here to Help
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-2xl mx-auto">
              Whether you have a question about our agricultural products, need dedicated support, or want to explore partnership opportunities, our team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow">
        {/* Contact Form Section (Reusing Home Component for Consistency) */}
        {/* We use negative margin to pull it up over the hero slightly for a modern overlapping effect */}
        <div className="-mt-16 relative z-20">
          <ContactSection />
        </div>

        {/* Global Presence & Map Section */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-[1200px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
                <span className="text-[#9DCC46] font-bold tracking-[0.2em] uppercase text-sm">
                  Global Presence
                </span>
                <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-6">
                Find Us on the Map
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Visit our headquarters in Dhaka or reach out to our regional offices across Bangladesh.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Info Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl hover:border-[#9DCC46]/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-[#9DCC46]">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Headquarters</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">Shetu Tower, 123 Agri Avenue,<br/>Dhaka 1215, Bangladesh</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl hover:border-[#9DCC46]/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-[#9DCC46]">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Working Hours</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">Sunday - Thursday: 9:00 AM - 6:00 PM<br/>Friday & Saturday: Closed</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl hover:border-[#9DCC46]/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-[#9DCC46]">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">Partnering with advanced suppliers from Japan, India, Thailand & Malaysia.</p>
              </motion.div>
            </div>

            {/* Map Embed */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative bg-gray-200 group"
            >
              {/* Optional glowing effect behind map */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9DCC46]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036944850383!2d90.3654215!3d23.74705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1713430154382!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

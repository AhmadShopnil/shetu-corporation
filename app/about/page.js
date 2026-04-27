"use client";

import Image from "next/image";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { motion } from "motion/react";
import Teams from "../components/LeaderShip/Teams";

const leadershipData = [
  {
    id: 1,
    name: "Thomas Anderson",
    role: "CEO & Founder",
    image: "/images/team/3.jpg"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Chief Strategy Officer",
    image: "/images/team/4.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Innovation",
    image: "/images/team/5.jpg"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Lead Agriculturist",
    image: "/images/team/6.jpg"
  }
];

export default function AboutPage() {
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
          About Us
        </motion.h1>
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto"
        >
          Pioneering sustainable agriculture for a better tomorrow.
        </motion.p> */}
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
               
               Since 1969, Shetu Corporation has stood at the forefront of Bangladesh’s agricultural evolution—fueling growth, supporting farmers, and feeding the nation. Guided by the vision “From Farmers’ Fields to the Nation’s Table,” we provide innovative solutions across crops, livestock, and farm services, building a resilient and sustainable food chain for generations ahead. 
              </p>
              {/* <p className="text-gray-600 text-lg leading-relaxed">
                Today, we stand at the forefront of the agro-industry, utilizing advanced techniques to produce high-quality yields while drastically reducing our environmental footprint. We believe in transparency, innovation, and a commitment to the communities we serve.
              </p> */}
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-200">
                {/* Demo Image Placeholder */}
                <Image
                  src="/images/service-main.jpg"
                  alt="Overview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-24 px-6 bg-[#f4f8ec]">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#9DCC46] rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
               Our mission at Shetu Corporation Limited is to empower farmers with innovative, environmentally friendly agricultural solutions, fostering sustainable growth and prosperity in Bangladesh's agricultural sector.

              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-[#9DCC46] rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              We envision Shetu Corporation Limited as a leading force in Bangladeshs agriculture industry, renowned for our commitment to excellence, integrity, and environmental stewardship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-[800px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-left">
              <p>
             Shetu Corporation, established in 1969, is built on a rich legacy shaped by its visionary founder, late Giasuddin Chowdhury. Beginning his entrepreneurial journey at just 15 during World War II, he went on to play a pioneering role across multiple industries in Bangladesh, laying the foundation for a diversified and forward-thinking enterprise.
Over the decades, Shetu Corporation evolved into a leading name in agriculture, particularly in crop protection, after operating across sectors such as machinery, fisheries, chemicals, and exports. Under the leadership of late Managing Director Mahtabuddin Chowdhury, the company strengthened its reputation for quality, integrity, and trust among farmers and stakeholders nationwide. His commitment to excellence and social impact continues to guide the company’s values today.
A pioneer in agrochemicals, Shetu established one of the country’s earliest formulation plants, reinforcing its role in advancing Bangladesh’s agricultural productivity. Today, the company remains dedicated to empowering farmers and sustaining the nation’s food chain, while upholding the legacy of innovation, ethics, and long-term impact.

              </p>
              {/* <p>
                Driven by a passion to make a difference, we embarked on a journey to discover methods that could heal the earth while providing bountiful harvests. Countless experiments, late nights, and collaborations with environmental scientists led us to our breakthrough in sustainable agro-mechanics.
              </p>
              <p>
                Today, we aren't just a business; it's a movement. We are proud to share our story of resilience and innovation with our community, proving that harmony between agriculture and nature is not just a dream, but a viable, profitable reality.
              </p> */}
            </div>
          </motion.div>
        </div>
      </section>
      <Teams/>

      {/* Leadership Section */}
      {/* <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Leadership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-500 max-w-2xl mx-auto"
            >
              The visionaries driving our mission forward.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipData.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-[#9DCC46] font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}

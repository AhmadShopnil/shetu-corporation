"use client";

import Image from "next/image";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { motion } from "motion/react";

const newsItems = [
  {
    id: 1,
    title: "Shetu Corporation Launches New Organic Herbicide Line",
    date: "April 20, 2026",
    excerpt: "In a major step towards sustainable agriculture, we have officially launched our new range of 100% organic herbicides designed to protect crops without harming soil health.",
    image: "/images/service-main.jpg",
    category: "Product Launch"
  },
  {
    id: 2,
    title: "Partnership Announcement with Global Agri-Tech",
    date: "April 05, 2026",
    excerpt: "We are thrilled to announce a strategic partnership with Global Agri-Tech to bring state-of-the-art drone surveillance to local farmers.",
    image: "/images/service-main.jpg",
    category: "Partnership"
  },
  {
    id: 3,
    title: "Annual Farming Excellence Awards 2026",
    date: "March 15, 2026",
    excerpt: "Celebrating the hard work of farmers across our 13 regions. Meet the winners of this year's Farming Excellence Awards.",
    image: "/images/service-main.jpg",
    category: "Event"
  },
  {
    id: 4,
    title: "Expanding Operations to the Northern Region",
    date: "February 28, 2026",
    excerpt: "To better serve our growing network of retailers and distributors, Shetu Corporation has opened a new regional headquarters in the North.",
    image: "/images/service-main.jpg",
    category: "Company News"
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero / Page Title */}
      <section className="relative pt-40 pb-20 px-6 text-center flex flex-col justify-center min-h-[400px]">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-main.jpg"
            alt="News Header Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Latest News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto"
          >
            Stay up to date with company announcements, events, and industry milestones.
          </motion.p>
        </div>
      </section>

      {/* News List Section */}
      <section className="py-24 px-6 bg-[#f4f8ec]">
        <div className="container mx-auto max-w-[1000px]">
          <div className="space-y-12">
            {newsItems.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row group border border-gray-100"
              >
                <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-[#9DCC46] text-gray-900 text-xs font-bold px-4 py-1.5 uppercase tracking-wider rounded-md shadow-lg">
                    {news.category}
                  </div>
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center w-full md:w-3/5">
                  <div className="flex items-center text-sm font-semibold text-gray-400 mb-4 uppercase tracking-widest">
                    <svg className="w-5 h-5 mr-2 text-[#9DCC46]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {news.date}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-[#9DCC46] transition-colors">
                    {news.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8 flex-grow">
                    {news.excerpt}
                  </p>
                  <button className="inline-flex items-center text-gray-900 font-bold uppercase tracking-widest text-sm hover:text-[#9DCC46] transition-colors self-start border-b-2 border-transparent hover:border-[#9DCC46] pb-1">
                    Read Full Story
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

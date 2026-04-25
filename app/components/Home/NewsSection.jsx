"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, ArrowRight, Sprout } from "lucide-react";

import news1 from "@/assets/news-1.png";
import news2 from "@/assets/news-2.png";
import news3 from "@/assets/news-3.png";

const newsData = [
  {
    id: 1,
    image: news1,
    date: "September 13, 2025",
    title: "Farm Technology Changing Yield",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..",
    link: "#"
  },
  {
    id: 2,
    image: news2,
    date: "October 14, 2025",
    title: "Understanding Soil Health and Yields",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..",
    link: "#"
  },
  {
    id: 3,
    image: news3,
    date: "October 14, 2025",
    title: "Organic Farming: Earth's Best Friend",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..",
    link: "#"
  }
];

export default function NewsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sprout className="text-[#9DCC46]" size={24} />
            <span className="text-sm font-semibold tracking-wider text-gray-800 uppercase">Latest Filed News</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto"
          >
            The Rise of Organic Farming Practices
          </motion.h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="cursor-pointer bg-white rounded-[2rem] p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{news.date}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#9DCC46] transition-colors">
                  {news.title}
                </h3>

                <p className="text-gray-500 mb-8 leading-relaxed">
                  {news.description}
                </p>

                <div className="mt-auto">
                  <motion.a
                    href={news.link}
                    className="inline-flex items-center gap-2 text-[#9DCC46] font-bold text-lg hover:gap-4 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

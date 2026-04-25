"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { motion } from "motion/react";

const blogPosts = [
  {
    id: 1,
    slug: "sustainable-farming-practices",
    title: "The Future of Sustainable Farming Practices",
    excerpt: "Discover how modern agro-technology is reducing water consumption and improving soil health for a greener tomorrow.",
    image: "/images/service-main.jpg",
    date: "April 12, 2026",
    category: "Sustainability"
  },
  {
    id: 2,
    slug: "benefits-of-organic-fertilizers",
    title: "Understanding the Benefits of Organic Fertilizers",
    excerpt: "A deep dive into why organic fertilizers are essential for long-term crop yield and environmental safety.",
    image: "/images/service-main.jpg",
    date: "March 28, 2026",
    category: "Crop Care"
  },
  {
    id: 3,
    slug: "innovations-in-agro-machinery",
    title: "Latest Innovations in Agro-Machinery",
    excerpt: "From autonomous tractors to AI-driven drones, explore the tech that is revolutionizing the agricultural industry.",
    image: "/images/service-main.jpg",
    date: "March 15, 2026",
    category: "Technology"
  },
  {
    id: 4,
    slug: "maximizing-crop-yield",
    title: "Top 5 Strategies for Maximizing Crop Yield",
    excerpt: "Learn practical, actionable strategies to increase your harvest without compromising the quality of your soil.",
    image: "/images/service-main.jpg",
    date: "February 22, 2026",
    category: "Farming Tips"
  },
  {
    id: 5,
    slug: "impact-of-climate-change",
    title: "How Climate Change is Reshaping Agriculture",
    excerpt: "An analysis of the current climate trends and how farmers worldwide are adapting to these unprecedented challenges.",
    image: "/images/service-main.jpg",
    date: "February 10, 2026",
    category: "Environment"
  },
  {
    id: 6,
    slug: "future-of-food-security",
    title: "The Future of Global Food Security",
    excerpt: "Exploring the critical role of innovative farming techniques in ensuring that the world's growing population is fed.",
    image: "/images/service-main.jpg",
    date: "January 29, 2026",
    category: "Industry News"
  }
];

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero / Page Title */}
      <section className="relative pt-40 pb-20 px-6 text-center flex flex-col justify-center min-h-[400px]">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-main.jpg"
            alt="Blog Header Background"
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
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto"
          >
            Insights, news, and modern strategies for the agricultural world.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <Link href={`/blogs/${post.slug}`} className="relative aspect-[4/3] w-full overflow-hidden block">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[#9DCC46] text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full">
                    {post.category}
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-gray-400 text-sm font-medium mb-3">{post.date}</span>
                  <Link href={`/blogs/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-[#9DCC46] transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-[#9DCC46] font-bold hover:text-gray-900 transition-colors uppercase tracking-wider text-sm mt-auto"
                  >
                    Read More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

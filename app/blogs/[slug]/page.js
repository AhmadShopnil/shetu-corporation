"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import { motion } from "motion/react";
import { useParams } from "next/navigation";

// Demo fallback data
const singlePostData = {
  title: "The Future of Sustainable Farming Practices",
  author: "Dr. Thomas Anderson",
  date: "April 12, 2026",
  category: "Sustainability",
  image: "/images/service-main.jpg",
  content: `
    <p>Sustainability in agriculture is no longer just a buzzword; it is a necessity. With the global population projected to reach nearly 10 billion by 2050, the demand for food will unprecedentedly rise. However, traditional farming methods are proving to be environmentally taxing, leading to soil degradation, water scarcity, and significant greenhouse gas emissions.</p>
    
    <h2>The Role of Precision Agriculture</h2>
    <p>Precision agriculture uses advanced technologies such as GPS, IoT sensors, and data analytics to optimize crop yields while minimizing environmental impact. By precisely applying water, fertilizers, and pesticides only where needed, farmers can significantly reduce waste.</p>
    
    <blockquote>"The goal of modern agriculture is not just to feed the world, but to do so in a way that ensures the world can be fed for generations to come."</blockquote>
    
    <h2>Restoring Soil Health</h2>
    <p>Healthy soil is the foundation of sustainable farming. Practices such as crop rotation, cover cropping, and reduced tillage are gaining traction. These methods help maintain soil structure, increase organic matter, and enhance the soil's ability to retain water.</p>
    
    <p>In conclusion, the transition to sustainable farming is a collective effort. It requires the integration of traditional wisdom with modern innovation. As we move forward, adopting these practices will be crucial in ensuring global food security and protecting our planet's delicate ecosystems.</p>
  `
};

export default function SingleBlogPage() {
  const params = useParams();
  
  // In a real app, you would fetch data based on params.slug here.
  const post = singlePostData;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Article Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-[#9DCC46] text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {post.date}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="[&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:text-lg [&>p]:mb-8 [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-6 [&>h2]:mt-12 [&>blockquote]:border-l-4 [&>blockquote]:border-[#9DCC46] [&>blockquote]:bg-gray-50 [&>blockquote]:p-8 [&>blockquote]:rounded-r-2xl [&>blockquote]:italic [&>blockquote]:text-gray-800 [&>blockquote]:font-medium [&>blockquote]:mb-8 md:[&>blockquote]:text-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags & Share (Demo) */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">Agriculture</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">Innovation</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">Eco</span>
            </div>
            <Link href="/blogs" className="text-[#9DCC46] font-bold uppercase tracking-wider text-sm hover:text-gray-900 transition-colors flex items-center">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

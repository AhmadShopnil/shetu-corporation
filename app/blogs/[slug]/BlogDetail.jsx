"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, User, ArrowLeft, Clock, Tag } from "lucide-react";

export default function BlogDetail({ post }) {
  if (!post) return null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col justify-end min-h-[75vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.featured_image || "/images/service-main.jpg"}
            alt={post.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <span className="bg-[#9DCC46] text-gray-900 text-[10px] font-black px-6 py-2.5 uppercase tracking-[0.3em] rounded-full shadow-2xl">
                {post.main_category?.name || "Insight"}
              </span>
              <span className="flex items-center text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
                <Calendar size={16} className="mr-3 text-[#9DCC46]" />
                {new Date(post.created_at).toLocaleDateString()}
              </span>
              <span className="flex items-center text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
                <Clock size={16} className="mr-3 text-[#9DCC46]" />
                5 Min Read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1] mb-12 uppercase">
              {post.name}
            </h1>

            <div className="flex items-center justify-between border-t border-white/10 pt-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gray-800 overflow-hidden relative border-2 border-[#9DCC46]/50">
                  <User size={30} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-black uppercase text-xs tracking-widest">{post.author?.full_name || "Admin"}</p>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 bg-[#F9FBFA] relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-8 md:p-20 shadow-2xl shadow-gray-200/50 border border-gray-100 relative -mt-40 z-20"
          >
            <div className="prose prose-lg md:prose-xl max-w-none 
              prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-gray-900
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-10
              prose-blockquote:border-l-[8px] prose-blockquote:border-[#9DCC46] prose-blockquote:bg-gray-50 prose-blockquote:py-12 prose-blockquote:px-14 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-gray-900 prose-blockquote:font-black prose-blockquote:text-2xl prose-blockquote:my-16
              prose-strong:text-gray-900 prose-strong:font-black
              prose-img:rounded-[2rem] prose-img:shadow-2xl"
              dangerouslySetInnerHTML={{ __html: post.description || post.content }}
            />

            {/* Back Button */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex justify-center">
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center px-10 py-5 bg-gray-900 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-[#9DCC46] hover:text-gray-900 transition-all duration-500 shadow-xl group"
              >
                <ArrowLeft size={18} className="mr-3 group-hover:-translate-x-2 transition-transform" />
                Back to Blogs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

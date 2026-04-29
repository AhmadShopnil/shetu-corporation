"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import axiosInstance from "@/utils/axiosInstance";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    lastPage: 1,
    total: 0
  });

  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("posts", {
        params: {
          term_type: "post",
          page: page,
          per_page: 3
        }
      });

      if (response.data.success) {
        setBlogs(response.data.data);
        setPagination({
          currentPage: response.data.meta.current_page,
          lastPage: response.data.meta.last_page,
          total: response.data.meta.total
        });
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
      // Scroll to top of grid area smoothly
      const gridElement = document.getElementById("blog-grid-start");
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    fetchBlogs(pagination.currentPage);
  }, [pagination.currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.lastPage) {
      setPagination(prev => ({ ...prev, currentPage: newPage }));
    }
  };

  const stripHtml = (html) => {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <section id="blog-grid-start" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-[1400px]">
        
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm h-[600px] animate-pulse border border-gray-100">
                  <div className="h-2/3 bg-gray-100"></div>
                  <div className="p-10 space-y-4">
                    <div className="h-4 bg-gray-50 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-50 rounded w-full"></div>
                    <div className="h-20 bg-gray-50 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {blogs.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogs.map((post, index) => (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col border border-gray-100"
                      >
                        <div className="relative h-80 overflow-hidden">
                          <Image
                            src={post.featured_image || "/images/service-main.jpg"}
                            alt={post.name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute top-8 left-8 bg-[#9DCC46] text-gray-900 text-[10px] font-black px-5 py-2 uppercase tracking-[0.2em] rounded-full shadow-xl">
                            {post.main_category?.name || "Agriculture"}
                          </div>
                        </div>

                        <div className="p-10 flex flex-col flex-grow">
                          <div className="flex items-center text-[10px] font-black text-gray-400 mb-6 uppercase tracking-[0.2em]">
                            <Calendar size={14} className="mr-2 text-[#9DCC46]" />
                            {new Date(post.created_at).toLocaleDateString()}
                            <span className="mx-3 text-gray-200">|</span>
                            <span className="text-gray-900">
                              {post.author?.full_name || "Admin"}
                            </span>
                          </div>

                          <Link href={`/blogs/${post.slug}`}>
                            <h2 className="text-2xl font-black text-gray-900 mb-4 hover:text-[#9DCC46] transition-colors leading-tight uppercase tracking-tight">
                              {post.name}
                            </h2>
                          </Link>

                          <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed text-base">
                            {stripHtml(post.description)}
                          </p>

                          <Link
                            href={`/blogs/${post.slug}`}
                            className="mt-auto inline-flex items-center gap-2 text-[#9DCC46] font-black uppercase tracking-tighter text-sm group/btn"
                          >
                            <span className="border-b-2 border-transparent group-hover/btn:border-[#9DCC46] transition-all">Read Insight</span>
                            <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  {/* Pagination */}
                  {pagination.lastPage > 1 && (
                    <div className="mt-24 flex justify-center items-center gap-4">
                      <button
                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                        disabled={pagination.currentPage === 1}
                        className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#9DCC46] hover:text-[#9DCC46] transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                      >
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                      </button>
                      
                      <div className="flex items-center gap-2">
                        {[...Array(pagination.lastPage)].map((_, i) => {
                          const pageNum = i + 1;
                          if (
                            pageNum === 1 ||
                            pageNum === pagination.lastPage ||
                            (pageNum >= pagination.currentPage - 1 && pageNum <= pagination.currentPage + 1)
                          ) {
                            return (
                              <button
                                key={pageNum}
                                onClick={() => handlePageChange(pageNum)}
                                className={`w-12 h-12 rounded-2xl font-black transition-all ${pagination.currentPage === pageNum
                                  ? "bg-[#9DCC46] text-white shadow-lg shadow-[#9DCC46]/30"
                                  : "bg-white border border-gray-200 text-gray-600 hover:border-[#9DCC46] hover:text-[#9DCC46]"
                                  }`}
                              >
                                {pageNum}
                              </button>
                            );
                          } else if (
                            pageNum === pagination.currentPage - 2 ||
                            pageNum === pagination.currentPage + 2
                          ) {
                            return <span key={pageNum} className="text-gray-300 font-bold px-1">...</span>;
                          }
                          return null;
                        })}
                      </div>

                      <button
                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                        disabled={pagination.currentPage === pagination.lastPage}
                        className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#9DCC46] hover:text-[#9DCC46] transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                      >
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
                  <p className="text-gray-400 font-bold uppercase tracking-widest">No articles found in this category.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

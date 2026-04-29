"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import axiosInstance from "@/utils/axiosInstance";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react";

export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    lastPage: 1,
    total: 0
  });

  const fetchNews = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("posts", {
        params: {
          term_type: "news",
          page: page,
          per_page: 5
        }
      });

      if (response.data.success) {
        setNews(response.data.data);
        setPagination({
          currentPage: response.data.meta.current_page,
          lastPage: response.data.meta.last_page,
          total: response.data.meta.total
        });
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
      // Scroll to top of grid area smoothly
      const gridElement = document.getElementById("news-grid-start");
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    fetchNews(pagination.currentPage);
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <section id="news-grid-start" className="py-24 px-6 bg-[#F9FBFA]">
      <div className="container mx-auto max-w-[1100px]">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col md:flex-row animate-pulse border border-gray-100">
                  <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto bg-gray-200"></div>
                  <div className="p-12 w-full md:w-3/5 space-y-6">
                    <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                    <div className="h-10 bg-gray-100 rounded w-full"></div>
                    <div className="h-24 bg-gray-100 rounded w-full"></div>
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
              className="space-y-12"
            >
              {news.length > 0 ? (
                <>
                  <div className="space-y-12">
                    {news.map((item, index) => (
                      <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row group border border-gray-100"
                      >
                        <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto bg-gray-50">
                          <Image
                            src={item.featured_image || "/images/service-main.jpg"}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute top-8 left-8 bg-[#9DCC46] text-gray-900 text-[10px] font-black px-5 py-2 uppercase tracking-[0.2em] rounded-full shadow-xl">
                            {item.main_category?.name || "Corporate"}
                          </div>
                        </div>
                        
                        <div className="p-8 md:p-14 flex flex-col justify-center w-full md:w-3/5">
                          <div className="flex items-center text-[10px] font-black text-gray-400 mb-6 uppercase tracking-[0.2em]">
                            <Calendar size={14} className="mr-2 text-[#9DCC46]" />
                            {formatDate(item.created_at)}
                          </div>
                          <Link href={`/news/${item.slug}`}>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-[1.1] group-hover:text-[#9DCC46] transition-colors uppercase tracking-tighter">
                              {item.name}
                            </h2>
                          </Link>
                          <p className="text-gray-500 text-lg leading-relaxed mb-10 line-clamp-3">
                            {stripHtml(item.description)}
                          </p>
                          <Link 
                            href={`/news/${item.slug}`} 
                            className="inline-flex items-center gap-3 text-gray-900 font-black uppercase tracking-widest text-xs group/btn"
                          >
                            <span className="border-b-2 border-[#9DCC46] pb-1 group-hover:border-gray-900 transition-colors">Read Full Story</span>
                            <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2 text-[#9DCC46]" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  {/* Pagination */}
                  {pagination.lastPage > 1 && (
                    <div className="mt-20 flex justify-center items-center gap-3">
                      <button
                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                        disabled={pagination.currentPage === 1}
                        className="p-4 rounded-2xl border border-gray-200 hover:border-[#9DCC46] hover:bg-[#9DCC46] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft size={20} />
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
                                className={`w-14 h-14 rounded-2xl font-black transition-all ${
                                  pagination.currentPage === pageNum
                                    ? "bg-[#9DCC46] text-white shadow-xl shadow-[#9DCC46]/30 scale-110"
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
                        className="p-4 rounded-2xl border border-gray-200 hover:border-[#9DCC46] hover:bg-[#9DCC46] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-gray-200">
                  <p className="text-gray-400 text-xl font-bold uppercase tracking-widest">No news available at the moment.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import axiosInstance from "@/utils/axiosInstance";
import { useEffect } from "react";

function getEmbedUrl(url) {
  if (!url) return '';
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  } else if (url.includes('youtube.com/watch')) {
    try {
      videoId = new URL(url).searchParams.get('v');
    } catch (e) {
      // Ignore invalid URL
    }
  } else if (url.includes('youtube.com/embed/')) {
    return url;
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

export default function GalleryContent() {
  const [activeTab, setActiveTab] = useState("images");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      setLoading(true);
      try {
        const categorySlug = activeTab === "images" ? "image" : "video";
        const response = await axiosInstance.get("posts", {
          params: {
            term_type: "gallery",
            category_slug: categorySlug,
            per_page: 20, // Fetch a reasonable number of items
          },
        });

        if (response.data.success) {
          const fetchedData = response.data.data.map((item) => {
            if (activeTab === "images") {
              return {
                id: item.id,
                src: item.featured_image,
                alt: item.name || item.sub_title,
                aspect: "aspect-square", // Default aspect
              };
            } else {
              const videoUrlField = item.extra_fields?.find(
                (field) => field.meta_name === "video_url"
              );
              return {
                id: item.id,
                videoUrl: videoUrlField?.meta_value || "",
                title: item.name || item.sub_title,
              };
            }
          });
          setItems(fetchedData);
        }
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, [activeTab]);

  return (
    <section className="py-24 px-6 bg-[#f4f8ec] min-h-screen">
      <div className="container mx-auto max-w-[1400px]">
        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white p-2 rounded-full shadow-md border border-gray-100">
            <button
              onClick={() => setActiveTab("images")}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "images"
                ? "bg-[#9DCC46] text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
            >
              Images
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === "videos"
                ? "bg-[#9DCC46] text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
            >
              Videos
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[#9DCC46] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {activeTab === "images" ? (
              <motion.div
                key="images"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {items.length > 0 ? (
                  items.map((img, index) => (
                    <motion.div
                      key={img.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-sm group"
                    >
                      <Image
                        src={img.src || "/images/noblank-images.jpg"}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                        <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-2xl shadow-xl">
                          <p className="text-white font-bold tracking-wide">
                            {img.alt}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20 text-gray-500">
                    No images found.
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              >
                {items.length > 0 ? (
                  items.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative rounded-[2rem] overflow-hidden shadow-sm bg-white cursor-pointer"
                    >
                      <div className="relative aspect-video w-full overflow-hidden">
                        <iframe
                          src={getEmbedUrl(video.videoUrl)}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border-0"
                        ></iframe>
                      </div>
                      <div className="p-6 border border-t-0 border-gray-100 rounded-b-[2rem] group-hover:border-[#9DCC46]/30 transition-colors">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#9DCC46] transition-colors">
                          {video.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20 text-gray-500">
                    No videos found.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

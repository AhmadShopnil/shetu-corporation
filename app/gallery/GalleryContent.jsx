"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const galleryImages = [
  { id: 1, src: "/images/service-main.jpg", alt: "Agriculture Life", aspect: "aspect-[4/3]" },
  { id: 2, src: "/images/service-main.jpg", alt: "Modern Machinery", aspect: "aspect-square" },
  { id: 3, src: "/images/service-main.jpg", alt: "Farm Fields", aspect: "aspect-[3/4]" },
  { id: 4, src: "/images/service-main.jpg", alt: "Greenhouse", aspect: "aspect-square" },
  { id: 5, src: "/images/service-main.jpg", alt: "Harvest Season", aspect: "aspect-[4/3]" },
  { id: 6, src: "/images/service-main.jpg", alt: "Soil Health", aspect: "aspect-[16/9]" },
];

const galleryVideos = [
  { id: 1, videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ", title: "Sustainable Farming Practices" },
  { id: 2, videoUrl: "https://youtu.be/lcZW43hUlzc?si=gTSmfmcJZb1k_Egi", title: "Drone Crop Spraying Demonstration" },
  { id: 3, videoUrl: "https://www.youtube.com/watch?v=aqz-KE-bpKQ", title: "Community Farmer Training" },
  { id: 4, videoUrl: "https://youtu.be/rcswMc4Fdsc?si=j45buybQ9lDuLx_a", title: "Inside Our Greenhouse Facilities" },
];

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

        <AnimatePresence mode="wait">
          {activeTab === "images" ? (
            <motion.div
              key="images"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
            >
              {galleryImages.map((img, index) => {
                const rowSpan = img.aspect === "aspect-[3/4]" ? "row-span-2" : "row-span-1";
                return (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative w-full h-full rounded-[2rem] overflow-hidden shadow-sm group ${rowSpan}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-2xl shadow-xl">
                        <p className="text-white font-bold tracking-wide">{img.alt}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
              {galleryVideos.map((video, index) => (
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
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#9DCC46] transition-colors">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

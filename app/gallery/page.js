"use client";

import Image from "next/image";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { motion } from "motion/react";

const galleryImages = [
  { id: 1, src: "/images/service-main.jpg", alt: "Agriculture Life", aspect: "aspect-[4/3]" },
  { id: 2, src: "/images/service-main.jpg", alt: "Modern Machinery", aspect: "aspect-square" },
  { id: 3, src: "/images/service-main.jpg", alt: "Farm Fields", aspect: "aspect-[3/4]" },
  { id: 4, src: "/images/service-main.jpg", alt: "Greenhouse", aspect: "aspect-square" },
  { id: 5, src: "/images/service-main.jpg", alt: "Harvest Season", aspect: "aspect-[4/3]" },
  { id: 6, src: "/images/service-main.jpg", alt: "Soil Health", aspect: "aspect-[16/9]" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero / Page Title */}
      <section className="relative pt-40 pb-20 px-6 text-center flex flex-col justify-center min-h-[400px]">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-main.jpg"
            alt="Gallery Header Background"
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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto"
          >
            Glimpses of our agricultural journey and impact around the world.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {galleryImages.map((img, index) => {
              // Creating a dynamic look by spanning rows for certain aspects
              const rowSpan = img.aspect === "aspect-[3/4]" ? "row-span-2" : "row-span-1";
              return (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative w-full h-full rounded-[2rem] overflow-hidden shadow-lg group ${rowSpan}`}
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

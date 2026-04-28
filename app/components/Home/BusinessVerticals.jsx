"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BusinessVerticals({ verticalsData = [] }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="py-32 px-6 bg-[#0a1f11] relative overflow-hidden">
      {/* Background aesthetic elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#9DCC46]/5 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#9DCC46]/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
              <span className="text-[#9DCC46] font-bold tracking-[0.2em] uppercase text-sm">
                Business Verticals
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Empowering Agriculture Through Innovation
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Built over six decades, our diverse business verticals reflect a unified commitment to quality and the sustainable growth of Bangladesh&apos;s agricultural ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-3">
              <button ref={(node) => setPrevEl(node)} className="vertical-prev w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#9DCC46] hover:border-[#9DCC46] hover:text-gray-900 transition-all duration-300 backdrop-blur-sm group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button ref={(node) => setNextEl(node)} className="vertical-next w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#9DCC46] hover:border-[#9DCC46] hover:text-gray-900 transition-all duration-300 backdrop-blur-sm group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevEl,
              nextEl: nextEl,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-20 !pt-4"
          >
            {verticalsData.map((vertical, index) => (
              <SwiperSlide key={vertical.id}>
                <Link href={`/business-verticals/${vertical.slug}`} className="block h-full">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative h-[480px] rounded-3xl overflow-hidden cursor-pointer bg-black/20 border border-white/10"
                  >
                    {/* Background Image */}
                    <Image
                      src={vertical.featured_image}
                      alt={vertical.name || vertical.sub_title}
                      fill
                      className="object-fit transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-80"
                    />

                    {/* Dark Gradient Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/95 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Content Container */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">

                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 translate-y-0 opacity-100 transition-all duration-500">
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest group-hover:bg-[#9DCC46] group-hover:border-[#9DCC46] transition-colors duration-500">
                          {vertical.sub_title || vertical.name}
                        </div>
                      </div>

                      {/* Animated Title & Description Area */}
                      <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
                        <h3 className="text-2xl font-bold text-white mb-2 leading-snug group-hover:text-[#9DCC46] transition-colors duration-500">
                          {(vertical.name || vertical.title).split(':')[0]}
                        </h3>

                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                          <div className="overflow-hidden">
                            <div
                              className="text-gray-300 text-sm leading-relaxed mt-3 mb-2 line-clamp-3 prose prose-invert prose-sm"
                              dangerouslySetInnerHTML={{ __html: vertical.description || vertical.shortDescription }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <div className="flex items-center gap-3 mt-4 text-white group/btn overflow-hidden">
                        <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#9DCC46] group-hover:border-[#9DCC46] transition-all duration-500">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <span className="font-semibold text-sm tracking-wide uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                          Explore
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

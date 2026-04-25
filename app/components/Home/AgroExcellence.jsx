"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";

import mainImg from "@/assets/blog-4.jpg";
import card1 from "@/assets/blog-1.jpg";
import card2 from "@/assets/blog-2.jpg";
import card3 from "@/assets/blog-3.jpg";
import card4 from "@/assets/blog-4.jpg";

export default function AgroExcellence() {
  const cards = [
    { img: card1, title: "Technology Farms" },
    { img: card2, title: "Organic Farm Solutions" },
    { img: card3, title: "The Eco-Friendly Farming" },
    { img: card4, title: "Organic Supply" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1550px]  mx-auto px-6">

        {/* MAIN GRID */}
        <div className="flex gap-14 items-stretch">

          {/* LEFT IMAGE (FULL HEIGHT MATCH) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[35%] h-full min-h-[700px] rounded-2xl overflow-hidden group"
          >
            <Image
              src={mainImg}
              alt="farmer"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="w-[65%] flex flex-col justify-between h-full min-h-[700px]">

            <div>
              {/* Top Tag */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 mb-4 text-sm text-gray-600"
              >
               
                <p className="font-semibold text-base">Agro Excellence</p>
              </motion.div>

              {/* Heading */}
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-10"
              >
                Building a Greener Farming
              </motion.h2>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-10 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                   <Image src="/images/icons/icon4.png" alt="icon" width={80} height={80} />
                  <h4 className="text-2xl md:text-[28px] font-normal text-shadow-gray-950 my-2">
                    80% Pure Growth
                  </h4>
                  <p className="text-sm md:text-base text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Image src="/images/icons/icon1.png" alt="icon" width={70} height={70} />
                  <h4 className="text-2xl md:text-[28px] font-normal text-gray-950 my-2">
                    95% Organic Roots
                  </h4>
                  <p className="text-sm md:text-base text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* SLIDER (BOTTOM ALIGNED) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-auto"
            >

              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {cards.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition h-full group">

                      {/* Image */}
                      <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-4">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Title */}
                     <div className="px-2">
                         <h4 className="font-semibold text-gray-900 text-lg md:text-2xl xl:text-3xl  leading-snug mb-3">
                        {item.title}
                      </h4>

                      {/* Button */}
                      <button className="text-[#9DCC46] text-base flex items-center gap-1 font-semibold">
                        Read More
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </button>
                     </div>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
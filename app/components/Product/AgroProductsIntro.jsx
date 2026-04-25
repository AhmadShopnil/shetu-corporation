"use client";

import Image from "next/image";
import { motion } from "motion/react";
import grainSacks from "@/assets/grain-sacks.png";

export default function AgroProductsIntro() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="w-full lg:w-7/12">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 mb-4 md:mb-6 leading-tight"
            >
              AGRO FARM <span className="font-thin text-gray-400">ECOLOGY PRODUCTS</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-sm md:text-base font-bold text-gray-700 leading-relaxed">
                Agro is a high-quality service, innovative technologies and a wide product range that meet the requirements of modern farmers. Spectr-Agro is a united team of high-class professionals working for the growth and development of the agricultural business in USA.
              </p>

              <p className="text-base text-gray-500 leading-relaxed">
                When the baby greens are ready for harvest, timing and temperature rule the day. And at the perfect moment, the race begins. During the hotter summer months, Earthbound Farm laborers start their day at 3 a.m., harvesting the baby leaves before the temperature reaches 80 degrees, at which point the leaves become too soft to pick. Stan Pura, director of farm operations and one of Earthbound Farm's partners, designed a unique baby-lettuce harvester that picks easily-torn baby greens quickly and consistently. Working in a pattern of overlapping rings, eight people variously direct and drive the machine and put the mechanically picked greens into plastic totes. The harvesting machine has a continuous looping blade that goes through a sharpener with each rotation. After the machine cuts the leaves, it blows them onto a mesh grid that allows small leaves and rocks to fall through.
              </p>
            </motion.div>
          </div>

          {/* Right Image with Frame */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full max-w-md aspect-square"
            >
              {/* Yellow Square Frame Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-4 border-[#F7C331] z-0" />

              {/* The Image */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src={grainSacks}
                  alt="Agro Products"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

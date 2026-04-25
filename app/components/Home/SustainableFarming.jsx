"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sprout, ArrowUpRight } from "lucide-react";

import sfCorn from "@/assets/sf-corn.png";
import sfGrains from "@/assets/sf-grains.png";
import sfPlant from "@/assets/sf-plant.png";

const stats = [
  {
    id: 1,
    percentage: "80%",
    label: "Efficiency",
    image: sfCorn,
    offset: 0
  },
  {
    id: 2,
    percentage: "98%",
    label: "Increase in Yields",
    image: sfGrains,
    offset: 0
  },
  {
    id: 3,
    percentage: "50%",
    label: "Farm Growth",
    image: sfPlant,
    offset: 0
  }
];

export default function SustainableFarming() {
  return (
    <section className="py-16 md:py-32 bg-[#FBF9F4] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex items-end gap-1 mb-3">
          <Image
            src="/images/icons/icon6.png"
            alt="about icon"
            width={40}
            height={40}
          />
          <span className="text-sm md:text-base font-semibold text-gray-800 tracking-wide">
            Sustainable Farming
          </span>
        </div>
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-16 md:mb-24">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 "
            >

            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]"
            >
              Cultivating Excellence in{" "}
              <br className="hidden md:block" /> Every Green Field
            </motion.h2>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-gray-500 leading-relaxed text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
          </motion.div>

        </div>



        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {stats.map((item, index) => (
            <div>

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: item.offset }}
                transition={{
                  duration: 1.2,
                  delay: 0.4 + index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true }}
                className=""
              >
                {/* CTA Button */}
                {
                  index == 1 && (<div className="flex justify-center mb-14">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-[#DCE25A] hover:bg-[#c8d85b] text-gray-900 px-8 py-4 rounded-xl font-bold text-sm md:text-base
                     flex items-center gap-2 
            transition-all shadow-sm"
                    >
                      Get In Touch <ArrowUpRight size={18} />
                    </motion.button>
                  </div>)
                }

                <div
                  className="bg-white rounded-4xl border border-gray-100 p-10 flex flex-col items-start gap-6 relative overflow-hidden
               group min-h-[400px]"
                >
                  <div className="flex flex-col absolute bottom-10 left-10 z-10 w-full">
                    <span className="text-6xl md:text-7xl font-bold text-gray-700 mb-2">{item?.percentage}</span>
                    <span className="text-lg font-semibold text-gray-700">{item?.label}</span>
                  </div>

                  <div className="absolute bottom-0 right-0 w-full h-full z-0 ">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-fit object-bottom transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>


              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

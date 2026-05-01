"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const locations = [
  { id: 1, name: "Thakurgaon", x: 25, y: 12, address: "Setu Corporation Ltd, Thakurgaon Office, Sadar, Thakurgaon" },
  { id: 2, name: "Rangpur", x: 45, y: 25, address: "Setu Corporation Ltd, Rangpur Regional Office, Rangpur" },
  { id: 3, name: "Bogura", x: 32, y: 35, address: "Setu Corporation Ltd, Bogura Point, Bogura" },
  { id: 4, name: "Mymensingh", x: 68, y: 28, address: "Setu Corporation Ltd, Mymensingh Depot" },
  { id: 5, name: "Sylhet", x: 60, y: 30, address: "Setu Corporation Ltd, Sylhet Regional Center" },
  { id: 6, name: "Dhaka", x: 60, y: 48, address: "Head Office: House 24, Road 14, Sector 6, Uttara Model Town, Dhaka 1230" },
  { id: 7, name: "Rajshahi", x: 38, y: 55, address: "Setu Corporation Ltd, Rajshahi Division Office" },
  { id: 8, name: "Kushtia", x: 35, y: 65, address: "Setu Corporation Ltd, Kushtia Service Center" },
  { id: 9, name: "Jashore", x: 38, y: 78, address: "Setu Corporation Ltd, Jashore Logistics Hub" },
  { id: 10, name: "Cumilla", x: 72, y: 64, address: "Setu Corporation Ltd, Cumilla Distribution Point" },
  { id: 11, name: "Noakhali", x: 78, y: 72, address: "Setu Corporation Ltd, Noakhali Office" },
  { id: 12, name: "Barishal", x: 80, y: 85, address: "Setu Corporation Ltd, Barishal Branch" },
  { id: 13, name: "Chattogram", x: 52, y: 72, address: "Setu Corporation Ltd, Chattogram Port Office" },
];

const MapSection = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 ">
          {/* Left Content */}
          <div className="lg:w-[40%] text-left">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-8"
            >
              With Every Crop and Every <span className="text-[#15803d]">Smile</span>,{" "}
              <span className="text-[#15803d]">Their Dreams</span> make our Journey Worthwhile
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 font-medium"
            >
              Our 13 different locations across the country
            </motion.p>
          </div>

          {/* Right Map */}
          <div className="lg:w-[60%] relative w-full ">
            <div className="relative w-full aspect-[1/1.1] ">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full h-full"
              >
                <Image
                  src="/images/map/bangladesh-map.png"
                  alt="Bangladesh Map"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Location Points */}
              {locations?.map((loc, index) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
                  className="absolute cursor-pointer z-10"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  onMouseEnter={() => setHoveredLocation(loc)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2 group">
                    {/* Animated Pulse */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full animate-ping opacity-20 group-hover:bg-green-500"></div>

                    {/* Pin Icon */}
                    <div className="relative text-red-600 transition-all duration-300 group-hover:scale-125 group-hover:text-green-600">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                      </svg>
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredLocation?.id === loc.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                          exit={{ opacity: 0, y: 10, scale: 0.9, x: "-50%" }}
                          className="absolute bottom-full left-1/2 mb-4 w-56 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 z-20 pointer-events-none"
                        >
                          <div className="text-base font-bold text-gray-900 mb-1 border-b border-gray-100 pb-1">{loc.name}</div>
                          <div className="text-sm text-gray-600 leading-relaxed">{loc.address}</div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

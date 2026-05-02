"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const locations = [
  { id: 1, name: "Rangpur Regional Office", x: 27, y: 12, address: "House-19,Road-01, Ward-18, Terminal Road, Porjonton Purbo Para, Rangpur" },
  { id: 2, name: "Bogura Regional Office", x: 34, y: 31, address: "Mirza Plaza, House no-366, Gohail Road, Fultola, Shajanpur, Bagura" },
  { id: 3, name: "Mymensingh Regional Office", x: 51, y: 33, address: "House- 260, Road-01, Dholadia, Taltola, Mymensingh-2200" },
  { id: 4, name: "Rajshahi Regional Office Address", x: 26, y: 36, address: "House-72, Ward No-26, Nader Hazir Mor, Uttar Chokpara, Boalia, Rajshah " },
  { id: 5, name: "Sreemangal Regional Office Address", x: 71, y: 32, address: "211, College Road, Ground Floor, Sreemangal" },
  { id: 6, name: "Jhenaidah Regional Office Address", x: 30, y: 51, address: "C/O Kazi Kamal Ahmed (Babu), Upazila Road, Jhenaidah" },
  { id: 7, name: "Dhaka Headquarters Office Address", x: 48, y: 42, address: "75 Madani Avenue, Alokananda 8th Floor, Block-A, Ward No-40, Vatara, Dhaka-1212" },
  { id: 8, name: "Jashore Regional Office Address", x: 32, y: 58, address:"Dhaka Road, Sheikh Hati, Bablatola. Jashore-7300 " },
  { id: 9, name: "Faridpur Regional Office Address", x: 53, y: 55, address: "Shawon Plaza, Alipur Lane no- 1, Kotowali, Faridpur" },
  { id: 10, name: "Cumilla Regional Office address", x: 60, y: 51, address: "House-4, Block-A, Housing Estate, Cumilla" },
  { id: 11, name: "Feni Regional Office Address", x: 67, y: 63, address: "House-4, Block-A, Housing Estate, Cumilla" },
  { id: 12, name: "Barishal Regional Office Address", x: 52, y: 70, address: "Holding no 5326, Rashidbag, C.N.B. Road, Barishal" },
  { id: 13, name: "Chattagram Regional Office Address", x: 80, y: 69, address: "Sundar Mohal Market (Ground Floor), Bara Dighir Par, Fatehabad, Hathhazari " },
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

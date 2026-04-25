"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import tractorImg from "@/assets/blog-4.jpg"; // replace with your image
import farmerImg from "@/assets/blog-1.jpg";   // replace with your image

export default function AboutSection() {
    return (
        <section className="bg-[#FFFFFF] py-20">
            <div className="max-w-[1550px] mx-auto px-6">

                {/* Top Label */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-end gap-2 mb-4 text-sm md:text-lg font-bold text-gray-600"
                >
                    <Image src="/images/icons/icon6.png" alt="about icon" width={40} height={40} />
                    {/* <span className="text-green-600 text-lg">🌱</span> */}
                    <p>About Us</p>
                </motion.div>

                {/* Heading */}
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-[50px] font-semibold text-gray-900 leading-tight mb-14 max-w-3xl"
                >
                    Innovating Agriculture, <br /> Sustaining Our Future
                </motion.h2>

                {/* Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

                    {[
                        {
                            title: "Farm Development",
                            icon: "/images/icons/icon2.png",
                        },
                        {
                            title: "Crop Management",
                            icon: "/images/icons/icon1.png",
                        },
                        {
                            title: "Soil Restoration",
                            icon: "/images/icons/icon3.png",
                        },
                        {
                            title: "Organic Cultivation",
                            icon: "/images/icons/icon4.png",
                        },
                    ].map((item, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 + (i * 0.15) }}
                            className="text-center md:text-left group"
                        >
                            <div className="text-3xl mb-1  h-[80px] overflow-hidden">
                                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="inline-block origin-bottom-left">
                                    <Image src={item.icon} alt={item.title} width={80} height={80} />
                                </motion.div>
                            </div>
                            <div className="">
                                <h4 className="font-semibold text-xl xl:text-2xl text-gray-900 mb-2 transition-colors group-hover:text-[#9DCC46]">
                                    {item.title}
                                </h4>
                                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                    Lorem Ipsum is simply dummy text of the printing industry.
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>

                {/* Image Section */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Left Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src={tractorImg}
                            alt="tractor"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </motion.div>

                    {/* Right Image with Overlay */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden group"
                    >
                        <Image
                            src={farmerImg}
                            alt="farmer"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 w-full bg-[#6F7347]/90 text-white p-6 flex items-center justify-between">
                            <p className="text-base  max-w-md">
                                Agriculture nurtures life through organic growth, sustainable farming.
                            </p>

                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-[#d6dc5a] text-gray-600 px-5 py-4 rounded-xl text-base
                             font-semibold hover:bg-[#c9cf4f] transition"
                            >
                                About Us
                                <ArrowUpRight size={18} />
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
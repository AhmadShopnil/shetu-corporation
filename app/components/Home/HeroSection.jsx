"use client";

import Image from "next/image";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-farmer.jpg";
import { Sprout, Leaf, TreePine } from "lucide-react";
import Link from "next/link";
const features = [
  { icon: Sprout, label: "Crop Protection", href: "/products/crop-protection" },
  { icon: TreePine,label: "Insecticide", href: "/products/insecticide" },
  { icon: Leaf,  label: "Fungicide", href: "/products/fungicide"},
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="images/headerbg2.jpeg"
          alt="Farmer in agricultural field"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, hsla(150,30%,8%,0.85) 0%, hsla(150,30%,8%,0.55) 50%, hsla(150,30%,8%,0.3) 100%)",
          }}
        />
      </div>

      {/* Decorative wheat/leaf SVG at bottom-left */}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
          <path d="M100 300 C100 300 60 240 30 200 C0 160 -10 120 20 80 C50 40 80 60 100 100 C120 60 150 40 180 80 C210 120 200 160 170 200 C140 240 100 300 100 300Z" fill="hsl(82,77%,45%)" fillOpacity="0.3" />
          <path d="M80 300 C80 300 50 250 25 210 C0 170 -5 140 15 110 C35 80 55 90 80 120" stroke="hsl(82,77%,45%)" strokeWidth="2" strokeOpacity="0.4" fill="none" />
          <path d="M120 300 C120 300 150 250 175 210 C200 170 205 140 185 110 C165 80 145 90 120 120" stroke="hsl(82,77%,45%)" strokeWidth="2" strokeOpacity="0.4" fill="none" />
          {/* Leaf shapes */}
          <ellipse cx="45" cy="160" rx="25" ry="12" transform="rotate(-30 45 160)" fill="hsl(82,77%,45%)" fillOpacity="0.25" />
          <ellipse cx="155" cy="160" rx="25" ry="12" transform="rotate(30 155 160)" fill="hsl(82,77%,45%)" fillOpacity="0.25" />
          <ellipse cx="30" cy="200" rx="22" ry="10" transform="rotate(-40 30 200)" fill="hsl(82,77%,45%)" fillOpacity="0.2" />
          <ellipse cx="170" cy="200" rx="22" ry="10" transform="rotate(40 170 200)" fill="hsl(82,77%,45%)" fillOpacity="0.2" />
          <ellipse cx="50" cy="130" rx="20" ry="9" transform="rotate(-25 50 130)" fill="hsl(82,77%,45%)" fillOpacity="0.2" />
          <ellipse cx="150" cy="130" rx="20" ry="9" transform="rotate(25 150 130)" fill="hsl(82,77%,45%)" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-8  flex flex-col justify-between h-full pt-20 lg:pt-52 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 text-[#71AD1E] font-body text-sm font-semibold uppercase tracking-widest mb-5"
          >
            <Leaf className="w-5 h-5" />
            Sustainable Agriculture
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            {/* Rooted in Nature,<br />Growing the Future */}
            From Farmers’ Fields <br /> to the Nation’s Table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-200  font-body text-base max-w-lg mb-8 leading-relaxed"
          >
            Since its inception in 1969, Shetu Corporation Limited has been at the forefront of the crop protection business in Bangladesh, continuing to deliver innovative solutions of the highest quality.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full font-body font-semibold text-sm md:text-base transition-all
             duration-300 border border-gray-300 text-gray-900 bg-[#DCE25A] hover:border-primary"
          >
            <Link href="/about" className="text-gray-900 hover:text-gray-700 transition-colors duration-300">
              Explore
            </Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.a>
        </motion.div>

        <div className="flex gap-12 justify-end mt-auto lg:pb-10">
          {/* {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + (i * 0.2) }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="lg:w-20 lg:h-20 w-12 h-12 rounded-full flex items-center justify-center
                 mb-3 border-2"
                style={{
                  background: "radial-gradient(circle, hsl(82,77%,45%) 0%, hsl(100,50%,30%) 100%)",
                  borderColor: "hsl(82,77%,55%)",
                }}
              >
                <f.icon className="w-6 h-6lg:w-8 lg:h-8 text-primary-foreground" />
              </motion.div>
              <p className="text-white font-body text-sm font-medium whitespace-pre-line">{f.label}</p>
            </motion.div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

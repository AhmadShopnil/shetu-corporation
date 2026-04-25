"use client";

import Image from "next/image";
import { Leaf } from "lucide-react";
import { motion } from "motion/react";

const featurePositions = [
  { num: "01", title: "Health From of the\nEarth", left: "5%", top: "52%" },
  { num: "02", title: "Rooted in Sustainable\nGrowth", left: "22%", top: "28%" },
  { num: "03", title: "Technology Meets the\nSoil Flow", left: "46%", top: "8%" },
  { num: "04", title: "Fields of Shared\nProsperity", right: "20%", top: "28%" },
  { num: "05", title: "Seeds Sprouting\nSustainable", right: "5%", top: "52%" },
];

export default function WhyChooseSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "800px" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/farm-bg.jpg"
          alt="Farm background"
          fill
          className="object-cover"
          style={{ filter: "blur(3px) brightness(0.85)" }}
          priority
        />
        {/* Green overlay for color tinting */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,80,20,0.55) 0%, rgba(34,80,20,0.25) 30%, rgba(34,80,20,0.15) 50%, rgba(34,80,20,0.25) 70%, rgba(34,80,20,0.55) 100%)",
          }}
        />
        {/* Left green fade */}
        <div
          className="absolute inset-y-0 left-0 w-[20%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,80,20,0.7) 0%, transparent 100%)",
          }}
        />
        {/* Right green fade */}
        <div
          className="absolute inset-y-0 right-0 w-[20%]"
          style={{
            background:
              "linear-gradient(270deg, rgba(34,80,20,0.7) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Soil/dirt bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-[100px]"
        style={{
          background:
            "linear-gradient(to top, #3d2b1a 0%, #5a3d24 30%, #6b4a2e 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center pt-20 pb-0">
        {/* Subtitle - animate from bottom */}
        <motion.div
          className="flex items-center gap-2 mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Leaf className="w-5 h-5 text-[#9DCC46]" />
          <span className="text-white/80 text-sm font-medium tracking-wide">
            Why Choose Our Farm
          </span>
        </motion.div>

        {/* Heading - animate from bottom */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white text-center leading-tight max-w-xl mb-14"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          Rooted in Nature, Growing
          <br />
          with Honest Purpose
        </motion.h2>

        {/* Features arc + Tractor container */}
        <div className="relative w-full max-w-[1100px] mx-auto" style={{ height: "520px" }}>

          {/* SVG Dashed Arc connecting points - animate fade in */}
          <motion.svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            viewBox="0 0 1100 520"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <path
              d="M 120 340 Q 200 220 330 195 Q 460 170 550 120 Q 640 170 770 195 Q 900 220 980 340"
              stroke="rgba(157,204,70,0.35)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
            />
          </motion.svg>

          {/* Feature Points - each animates from bottom with stagger */}
          {featurePositions.map((feature, index) => {
            const posStyle = {};
            if (feature.left) posStyle.left = feature.left;
            if (feature.right) posStyle.right = feature.right;
            posStyle.top = feature.top;

            return (
              <motion.div
                key={feature.num}
                className="absolute z-10"
                style={posStyle}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.12,
                  ease: "easeOut",
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-11 h-11 rounded-full bg-[#d6dc5a]/90 flex items-center justify-center text-xs font-bold text-gray-800 shadow-lg shadow-[#d6dc5a]/30 mb-2"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.num}
                  </motion.div>
                  <p className="text-white text-xs md:text-sm font-medium text-center leading-tight max-w-[140px] whitespace-pre-line">
                    {feature.title}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Tractor Image - animate from left */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
            style={{ width: "550px", height: "380px" }}
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src="/images/tractor.webp"
              alt="Green Tractor"
              fill
              className="object-contain drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.4))" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

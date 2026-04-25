"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, Truck } from "lucide-react";
import demoProduct from "@/assets/product-demo.png";

export default function ProductDetails({ product }) {
  const p = product || {
    name: "Advanced Crop Protection Formula",
    category: "Crop Protection",
    shortDesc: "A highly effective, eco-friendly solution designed to protect your crops from a wide range of diseases while promoting healthy growth and increased yields.",
    description: "Our Advanced Crop Protection Formula is the result of years of agricultural research. It combines natural ingredients with modern biotechnology to create a shield for your crops. It's particularly effective against late blight, powdery mildew, and root rot. Safe for use on various vegetables, fruits, and grains. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12 lg:py-24 max-w-[1400px]">

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-b border-gray-100 pb-20">

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 group">
              <Image
                src={demoProduct}
                alt={p.name}
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <span className="bg-[#9DCC46]/10 text-[#9DCC46] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {p.category}
              </span>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-8 leading-tight uppercase tracking-tight">
              {p.name}
            </h1>

            <div className="prose prose-xl text-gray-600 max-w-none">
              <p className="text-base font-bold text-gray-400 mb-6 leading-relaxed">
                {p.shortDesc}
              </p>
              <p className="text-lg leading-relaxed whitespace-pre-line">
                {p.description}
              </p>
            </div>

            {/* Trust Badges */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-10 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-gray-50 p-3 rounded-2xl">
                  <ShieldCheck className="text-[#9DCC46]" size={28} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">Certified Organic</p>
                  <p className="text-sm text-gray-500">Industry standard quality</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gray-50 p-3 rounded-2xl">
                  <Truck className="text-[#9DCC46]" size={28} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">Direct Support</p>
                  <p className="text-sm text-gray-500">Expert agricultural advice</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Related Section (Simplified) */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 uppercase tracking-wide">Explore Other Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {["Seeds", "Fungicide", "Insecticide"].map((cat, i) => (
              <div key={i} className="group cursor-pointer bg-gray-50 rounded-3xl p-8 border border-gray-100 transition-all hover:shadow-xl hover:border-[#9DCC46]">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-white shadow-sm">
                  <Image src={demoProduct} alt={cat} className="object-contain p-6 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight group-hover:text-[#9DCC46] transition-colors">{cat}</h4>
                <p className="text-gray-500 mt-2">View details about our {cat.toLowerCase()} collection</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

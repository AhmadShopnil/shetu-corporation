"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, Target, Zap, Building2, FlaskConical } from "lucide-react";
import demoProduct from "@/assets/product-demo.png";

export default function CategoryProductList({ category, products, slug }) {
  const categoryTitle = category?.name || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="bg-white">
      {/* Category Header */}
      <section className="relative py-20 bg-[#F9FBFA] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9DCC46]/5 rounded-l-full transform translate-x-1/2" />
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#9DCC46] font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
              {categoryTitle} <span className="text-gray-400 font-thin">Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Discover our range of high-performance {categoryTitle.toLowerCase()} products designed to protect your crops and maximize yield with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-[1400px]">
          {products.length > 0 ? (
            <div className="space-y-16">
              {products.map((product, index) => (
                <motion.div
                  key={product.id || index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden hover:border-[#9DCC46]/30 transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Product Image */}
                    <div className="w-full lg:w-2/5 relative bg-[#F8F9FA] min-h-[400px] flex items-center justify-center p-12">
                      <div className="relative w-full aspect-square group">
                        <Image
                          src={product.thumbnail || product.image || demoProduct}
                          alt={product.title}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-gray-800 shadow-sm border border-gray-100 uppercase tracking-wider">
                          {categoryTitle}
                        </span>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full lg:w-3/5 p-8 md:p-12">
                      <div className="mb-6">
                        <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">
                          {product.title}
                        </h2>
                        {product.subtitle && (
                          <p className="text-[#9DCC46] font-bold text-lg">
                            ({product.subtitle})
                          </p>
                        )}
                      </div>

                      <div className="prose prose-gray max-w-none mb-10">
                        <div
                          className="text-gray-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: product.content || product.description }}
                        />
                      </div>

                      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       
                        <div className="bg-[#F9FBFA] p-6 rounded-2xl border border-gray-50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                              <Target className="text-[#9DCC46]" size={20} />
                            </div>
                            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Target</h4>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {product.target_pests || "Highly effective against major pests in various crops."}
                          </p>
                        </div>

                       
                        <div className="bg-[#F9FBFA] p-6 rounded-2xl border border-gray-50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-white p-2 rounded-lg shadow-sm">
                              <Zap className="text-[#9DCC46]" size={20} />
                            </div>
                            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Key Benefits</h4>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {product.benefits || "Provides comprehensive protection and ensures plant health."}
                          </p>
                        </div>
                      </div> */}

                      {/* Manufacturer / Origin */}
                      {(product.manufacturer || product.origin) && (
                        <div className="mt-8 flex flex-wrap gap-6 items-center border-t border-gray-100 pt-8">
                          {product.manufacturer && (
                            <div className="flex items-center gap-2">
                              <Building2 className="text-gray-400" size={18} />
                              <span className="text-sm text-gray-500 font-medium">Mfg: {product.manufacturer}</span>
                            </div>
                          )}
                          {product.active_ingredient && (
                            <div className="flex items-center gap-2">
                              <FlaskConical className="text-gray-400" size={18} />
                              <span className="text-sm text-gray-500 font-medium">Active: {product.active_ingredient}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

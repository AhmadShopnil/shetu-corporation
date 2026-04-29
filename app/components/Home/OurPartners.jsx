"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Briefcase, Mail } from "lucide-react";
import PartnerSlider from "./PartnerSlider";

export default function OurPartners({ our_partners }) {
  return (
    <section className="py-8 md:py-14 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
              <span className="text-[#9DCC46] font-bold tracking-[0.2em] uppercase text-sm">
                Partnership
              </span>
              <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Company Alliances Worldwide
            </h2>
          </motion.div>
        </div>

      </div>

      {/* Continuous Logo Carousel (Infinite Marquee) - Full Width */}
      <PartnerSlider our_partners={our_partners} />

    </section>
  );
}

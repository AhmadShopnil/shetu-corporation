"use client";

import { motion } from "motion/react";
import Image from "next/image";

const impactData = [
  {
    id: 1,
    title: "57",
    subtitle: "Years of Excellence",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  },
  {
    id: 2,
    title: "13",
    subtitle: "Regions",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )
  },
  {
    id: 3,
    title: "200+",
    subtitle: "Employees",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    )
  },
  {
    id: 4,
    title: "360+",
    subtitle: "Distributors",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
    )
  },
  {
    id: 5,
    title: "60k+",
    subtitle: "Retailers",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )
  },
  {
    id: 6,
    title: "65",
    subtitle: "Products",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    )
  },
  {
    id: 7,
    title: "2.5M+",
    subtitle: "Acres Covered",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
    )
  },
  {
    id: 8,
    title: "5M+",
    subtitle: "Tonnes Protected",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
    )
  }
];

export default function OurImpact() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/impact.jpeg"
          alt="Impact Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a1f11]/30 mix-blend-multiply"></div>
        {/* Soft radial gradient for a spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#051008_100%)]
         opacity-40"></div>
      </div>

      <div className="container mx-auto max-w-[1200px] relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
              <span className="text-[#9DCC46] font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">
                Our Impact
              </span>
              <div className="h-[2px] w-12 bg-[#9DCC46]"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[50px] font-semibold text-white mb-8 leading-tight drop-shadow-lg">
              Empowering Agriculture for Over Six Decades
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Spanning over six decades, Shetu Corporation has strengthened Bangladesh&apos;s food chain by empowering farmers, improving crops and livestock, and building a more resilient agricultural ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
          {impactData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-[200px] md:h-[200px] lg:h-[220px] w-full [perspective:1000px]
              cursor-pointer
              "
            >
              <div className="relative h-full w-full rounded-[2rem] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl">

                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 lg:p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 [backface-visibility:hidden]">
                  <div className="mb-4 lg:mb-6 text-[#9DCC46] drop-shadow-[0_0_15px_rgba(157,204,70,0.5)]">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-2 lg:mb-3 tracking-tight">
                    {stat.title}
                  </h3>
                  <p className="text-gray-400 font-medium text-sm lg:text-base leading-snug uppercase tracking-wider">
                    {stat.subtitle}
                  </p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 lg:p-8 rounded-[2rem] bg-white border border-[#9DCC46]/50 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
                  {/* Subtle inner accent for back side */}
                  <div className="absolute inset-0 rounded-[2rem] bg-[#9DCC46] opacity-[0.05] blur-2xl pointer-events-none"></div>

                  <div className="relative z-10 mb-4 lg:mb-6 text-[#9DCC46] scale-110 drop-shadow-[0_0_15px_rgba(157,204,70,0.5)]">
                    {stat.icon}
                  </div>
                  <h3 className="relative z-10 text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 lg:mb-3 tracking-tight">
                    {stat.title}
                  </h3>
                  <p className="relative z-10 text-gray-600 font-medium text-sm lg:text-base leading-snug uppercase tracking-wider">
                    {stat.subtitle}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

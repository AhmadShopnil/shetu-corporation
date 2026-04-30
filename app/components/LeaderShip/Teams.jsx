"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

export default function Teams({ teamData = [] }) {
  return (
    <main className=" bg-white">


      {/* Hero / Page Title */}
      <section className="py-10 md:py-20 px-6 text-center ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
        >
          LEADERSHIP
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 mt-6 max-w-5xl mx-auto"
        >
          Shetu Corporation’s  Board brings together a strong blend of leadership, global exposure, and deep sector expertise, guiding the company’s continued growth and evolution.
        </motion.p>
      </section>

      {/* Team Sections */}
      <section className=" px-6 mb-6 lg:mb-14 ">
        <div className="container mx-auto max-w-[1200px] space-y-10 lg:space-y-16">
          {teamData?.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12   ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Image Container */}
              <div className="">
                <div className="relative w-[270px] h-[350px]  overflow-hidden bg-gray-100 group">
                  {/* Option for user to add image path */}
                  <Image
                    src={member?.featured_image}
                    alt={member?.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  // Handling placeholder if image doesn't exist

                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="w-full  flex flex-col items-start   ">
                <h2 className="text-2xl md:text-3xl font-semibold uppercase text-gray-900 leading-tight mb-4 tracking-tighter">
                  {member?.name}
                </h2>
                <span className="text-[#9DCC46] font-bold text-lg mb-6 tracking-wide">
                  {member?.sub_title || member.role}
                </span>
                <div
                  className="text-gray-500 text-lg leading-relaxed mb-10 prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: member.description }}
                />
                {/* <Link
                  href={`/team/${member.id}`}
                  className="inline-block px-10 py-3 border-2 border-gray-900 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Read More
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>
      </section>


    </main>
  );
}

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Teams from "../components/LeaderShip/Teams";
import { BASE_URL } from "@/lib/baseUrl";
import { getImageUrl } from "@/utils/getImageUrl";




export default function AboutClient({ teamData, aboutData }) {
  const sections = aboutData?.sections_on_api || [];

  const overview = sections.find(s => s.title_slug === "overview");
  const missionVision = sections.find(s => s.title_slug === "mission-and-vision");
  const ourStory = sections.find(s => s.title_slug === "our-story");

  const vision = missionVision?.sub_sections?.find(s => s.title_slug === "our-vision");
  const mission = missionVision?.sub_sections?.find(s => s.title_slug === "our-mission");





  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Page Title */}
      <section className="pt-40 pb-20 px-6 text-center bg-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight"
        >
          {aboutData?.name || "About Us"}
        </motion.h1>
      </section>

      {/* Overview Section */}
      {overview && (
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-[1200px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-16"
            >
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{overview.title}</h2>
                <div
                  className="text-gray-600 text-lg leading-relaxed mb-6 prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: overview.short_description || overview.description }}
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src={getImageUrl(overview.image_media)}
                    alt={overview.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Vision and Mission Section */}
      <section className="py-16 px-6 bg-[#f4f8ec]">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {vision && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#9DCC46] rounded-full flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{vision.title}</h3>
                <div
                  className="text-gray-600 text-lg leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: vision.short_description || vision.description }}
                />
              </motion.div>
            )}

            {mission && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#9DCC46] rounded-full flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{mission.title}</h3>
                <div
                  className="text-gray-600 text-lg leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: mission.short_description || mission.description }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      {ourStory && (
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-[1200px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{ourStory.title}</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-left">
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: ourStory.short_description || ourStory.description }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* <Teams teamData={teamData} /> */}
    </main>
  );
}

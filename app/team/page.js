"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { motion } from "motion/react";

const teamData = [
  {
    id: 1,
    name: "Thomas Anderson",
    role: "The Visionary",
    description: "Thomas has over 15 years of experience in sustainable agriculture. He leads our research team with a focus on soil health and crop resilience. Under his guidance, we have implemented cutting-edge organic practices that double yields while preserving the ecosystem. His commitment to the environment is the bedrock of our company.",
    image: "/images/team/3.jpg" // User will update this
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "The Strategist",
    description: "Sarah oversees our global supply chain and market entry strategies. With a background in economics and environmental policy, she ensures our products reach those who need them most without compromising our carbon footprint. She believes that good food should be accessible to everyone, everywhere.",
    image: "/images/team/4.jpg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "The Innovator",
    description: "Michael is the brain behind our agro-machinery integration. He designs systems that automate the most taxing parts of farming while maintaining the precision needed for artisan-quality crops. His work bridge the gap between traditional wisdom and modern efficiency.",
    image: "/images/team/5.jpg"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "The Protector",
    description: "Elena specializes in natural pest management and biodiversity within the farm. She works tirelessly to create polyculture environments where Nature herself takes care of the balance. Her methods have reduced our dependency on external inputs by nearly 90%.",
    image: "/images/team/6.jpg"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero / Page Title */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight"
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto"
        >
          The dedicated professionals behind every green field and successful harvest.
        </motion.p>
      </section>

      {/* Team Sections */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-[1200px]">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-24 lg:mb-40 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[1/1] w-full overflow-hidden bg-gray-100 group">
                  {/* Option for user to add image path */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  // Handling placeholder if image doesn't exist

                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="w-full lg:w-1/2 flex flex-col items-start px-4 lg:px-12">
                <h2 className="text-2xl md:text-3xl font-black uppercase text-gray-900 leading-tight mb-4 tracking-tighter">
                  {member.name}
                </h2>
                <span className="text-[#9DCC46] font-bold text-lg mb-6 tracking-wide">
                  {member.role}
                </span>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  {member.description}
                </p>
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

      <Footer />
    </main>
  );
}

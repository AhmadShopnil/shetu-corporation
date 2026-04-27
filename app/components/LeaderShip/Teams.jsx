"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

const teamData = [
  {
    id: 1,
    name: "Ummeh Rubana",
    role: "Chairman",
    description:
      "Ummeh Rubana plays a key role in overseeing the company’s real estate and construction initiatives, ensuring quality and consistency from planning through execution. Alongside her business leadership, she remains actively involved in social and community development initiatives.",
    image: "/images/team/3.jpg",
  },
  {
    id: 2,
    name: "Ruman Hafiz",
    role: "Vice-Chairman",
    description:
      "A leading figure in Bangladesh’s agricultural sector, Ruman Hafiz has decades of hands-on experience in crop protection, farmer education, and agrochemical stewardship. He has held key roles in the Bangladesh Crop Protection Association and CropLife Asia, championing safe pesticide use, regulatory compliance, and technical training. His pioneering initiatives in farmer support, distributor incentives, and quality assurance have been central to Shetu Corporation’s credibility, trust, and sustained impact on the nation’s agriculture.",
    image: "/images/team/4.jpg",
  },
  {
    id: 3,
    name: "Ahnaf Chowdhury",
    role: "Managing Director",
    description:
      `Ahnaf Chowdhury, Managing Director of Shetu Corporation and its sister concerns, is a UK-qualified barrister with an LLB (Hons.) from the London School of Economics (LSE) and Bar training at BPP Law School, London. He was called to the Bar of England & Wales by Lincoln’s Inn and has extensive experience advising and representing both local and international clients across corporate, commercial, arbitration, energy, infrastructure, and regulatory law. He is also an Advocate of the Supreme Court of Bangladesh. 
Over the years he has provided legal opinions in cross-border acquisitions, private equity deals, and international financing transactions, and advised on complex matters including oil and gas, taxation, telecommunications, and employment law. 
He combines decades of high-level legal expertise with strategic business leadership, guiding Shetu Corporation and its sister concerns through complex corporate, commercial, and international ventures.
`,
    image: "/images/team/5.jpg",
  },
  {
    id: 4,
    name: "Azraf Chowdhury",
    role: "Director",
    description:
      `Azraf Chowdhury, Director of Shetu Corporation and its sister concerns, plays a key role in business development, strategic planning, and the company’s real estate and construction projects. He holds a B.Sc. (Hons.) in Banking & International Finance from Bayes Business School, London.
He gained hands-on experience through internships at Shetu Corporation and C-Maart Securities and internationally as a Strategic Startup Research Intern at Tenity (formerly F10 Global) serving their Madrid office. He also completed the Bloomberg Market Concepts course on financial markets, trading, and portfolio management. He applies this global perspective and practical experience to drive Shetu Corporation’s growth, innovation, and strategic initiatives.
`,
    image: "/images/team/6.jpg",
  },
  {
    id: 5,
    name: "Tahsina Tarannum",
    role: "Director",
    description:
      "Tahsina Tarannum brings extensive expertise across finance, agribusiness, telecommunications, and ESG. With academic credentials from UNSW, North South University, and the University of Toronto, she has worked with Robi Axiata, Swisscontact-Katalyst, and Morningstar Sustainalytics, contributing to agribusiness development, research, and sustainability initiatives.",
    image: "/images/team/7.jpg",
  },
];

export default function Teams() {
  return (
    <main className=" bg-white">
  

      {/* Hero / Page Title */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight"
        >
          LEADERSHIP
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto"
        >
          Shetu Corporation’s Board brings together a strong blend of leadership, global exposure, and deep sector expertise, guiding the company’s continued growth and evolution.
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

  
    </main>
  );
}

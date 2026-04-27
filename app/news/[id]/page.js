"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "motion/react";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";

// Dummy data mirroring the list for demonstration
const newsData = {
  1: {
    title: "Shetu Corporation Launches New Organic Herbicide Line",
    date: "April 20, 2026",
    image: "/images/service-main.jpg",
    category: "Product Launch",
    content: `
      <p>In a major step towards sustainable agriculture, we have officially launched our new range of 100% organic herbicides designed to protect crops without harming soil health. This revolutionary product has been in development for over five years, leveraging cutting-edge biotechnology to deliver targeted weed control while preserving the delicate microbiome of the soil.</p>
      
      <h2>Commitment to Sustainability</h2>
      <p>Our commitment to sustainability is at the core of everything we do. The new herbicide line is derived entirely from naturally occurring compounds, ensuring that no harmful residues are left behind. This not only benefits the environment but also provides farmers with a safer alternative that complies with the strictest organic farming standards.</p>
      
      <blockquote>
        "This launch represents a pivotal moment for Shetu Corporation and the agricultural industry as a whole. We are proving that effective crop protection does not have to come at the expense of our planet." – CEO, Shetu Corporation
      </blockquote>
      
      <h2>Looking Ahead</h2>
      <p>The initial rollout will target our key agricultural regions, with plans for nationwide distribution by the end of the year. We are also providing comprehensive training programs for farmers to ensure they get the most out of this new technology. This is just the beginning of our expanded organic portfolio.</p>
    `
  },
  2: {
    title: "Partnership Announcement with Global Agri-Tech",
    date: "April 05, 2026",
    image: "/images/service-main.jpg",
    category: "Partnership",
    content: `
      <p>We are thrilled to announce a strategic partnership with Global Agri-Tech to bring state-of-the-art drone surveillance to local farmers. This collaboration aims to revolutionize the way agricultural data is collected and analyzed, providing farmers with actionable insights to optimize their yields.</p>
      <p>By combining our deep understanding of local farming practices with Global Agri-Tech's advanced drone technology, we are empowering farmers to monitor crop health, identify pest infestations early, and precisely manage irrigation needs.</p>
    `
  },
  3: {
    title: "Annual Farming Excellence Awards 2026",
    date: "March 15, 2026",
    image: "/images/service-main.jpg",
    category: "Event",
    content: `
      <p>Celebrating the hard work of farmers across our 13 regions. Meet the winners of this year's Farming Excellence Awards.</p>
      <p>The awards ceremony brought together hundreds of industry leaders, farmers, and government officials to recognize the outstanding contributions made to the agricultural sector. Categories included 'Most Sustainable Farm', 'Innovation in Irrigation', and 'Young Farmer of the Year'.</p>
    `
  },
  4: {
    title: "Expanding Operations to the Northern Region",
    date: "February 28, 2026",
    image: "/images/service-main.jpg",
    category: "Company News",
    content: `
      <p>To better serve our growing network of retailers and distributors, Shetu Corporation has opened a new regional headquarters in the North.</p>
      <p>This expansion will significantly reduce delivery times and improve our on-the-ground support for farmers in the region. The new facility includes a state-of-the-art training center and a dedicated research lab focused on climate-resilient crops.</p>
    `
  }
};

export default function SingleNewsPage() {
  const params = useParams();
  const id = params?.id;

  // Fallback to the first news item if ID is not found (for demo purposes)
  const news = newsData[id] || newsData[1];

  return (
    <main className="min-h-screen bg-white selection:bg-[#9DCC46] selection:text-white">
      <Header />

      {/* Hero / Article Header */}
      <section className="relative pt-40 pb-32 px-6 flex flex-col justify-end min-h-[60vh] md:min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
          {/* Advanced Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#9DCC46] text-gray-900 text-xs font-bold px-4 py-1.5 uppercase tracking-wider rounded-md shadow-lg">
                {news.category}
              </span>
              <span className="flex items-center text-sm font-semibold text-gray-300 uppercase tracking-widest">
                <svg className="w-4 h-4 mr-2 text-[#9DCC46]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {news.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
              {news.title}
            </h1>

            {/* Author / Share placeholder */}
            <div className="flex items-center justify-between border-t border-white/20 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-500 overflow-hidden relative border-2 border-[#9DCC46]">
                  <Image src="/images/service-main.jpg" alt="Author" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Shetu Press Office</p>
                  <p className="text-gray-400 text-xs">Official Corporate Update</p>
                </div>
              </div>
              {/* <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#9DCC46] text-white flex items-center justify-center transition-colors backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#9DCC46] text-white flex items-center justify-center transition-colors backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-[#f4f8ec]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-gray-100 relative -mt-32 z-20"
          >
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6">
              {id === '1' || !id ? (
                <>
                  <p>In a major step towards sustainable agriculture, we have officially launched our new range of 100% organic herbicides designed to protect crops without harming soil health. This revolutionary product has been in development for over five years, leveraging cutting-edge biotechnology to deliver targeted weed control while preserving the delicate microbiome of the soil.</p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Commitment to Sustainability</h2>
                  <p>Our commitment to sustainability is at the core of everything we do. The new herbicide line is derived entirely from naturally occurring compounds, ensuring that no harmful residues are left behind. This not only benefits the environment but also provides farmers with a safer alternative that complies with the strictest organic farming standards.</p>

                  <blockquote className="border-l-4 border-[#9DCC46] bg-gray-50 py-4 px-6 rounded-r-lg text-gray-800 font-medium my-8 italic">
                    "This launch represents a pivotal moment for Shetu Corporation and the agricultural industry as a whole. We are proving that effective crop protection does not have to come at the expense of our planet." – CEO, Shetu Corporation
                  </blockquote>

                  <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">Looking Ahead</h2>
                  <p>The initial rollout will target our key agricultural regions, with plans for nationwide distribution by the end of the year. We are also providing comprehensive training programs for farmers to ensure they get the most out of this new technology. This is just the beginning of our expanded organic portfolio.</p>
                </>
              ) : id === '2' ? (
                <>
                  <p>We are thrilled to announce a strategic partnership with Global Agri-Tech to bring state-of-the-art drone surveillance to local farmers. This collaboration aims to revolutionize the way agricultural data is collected and analyzed, providing farmers with actionable insights to optimize their yields.</p>
                  <p>By combining our deep understanding of local farming practices with Global Agri-Tech's advanced drone technology, we are empowering farmers to monitor crop health, identify pest infestations early, and precisely manage irrigation needs.</p>
                </>
              ) : id === '3' ? (
                <>
                  <p>Celebrating the hard work of farmers across our 13 regions. Meet the winners of this year's Farming Excellence Awards.</p>
                  <p>The awards ceremony brought together hundreds of industry leaders, farmers, and government officials to recognize the outstanding contributions made to the agricultural sector. Categories included 'Most Sustainable Farm', 'Innovation in Irrigation', and 'Young Farmer of the Year'.</p>
                </>
              ) : (
                <>
                  <p>To better serve our growing network of retailers and distributors, Shetu Corporation has opened a new regional headquarters in the North.</p>
                  <p>This expansion will significantly reduce delivery times and improve our on-the-ground support for farmers in the region. The new facility includes a state-of-the-art training center and a dedicated research lab focused on climate-resilient crops.</p>
                </>
              )}
            </div>

            {/* Back Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex justify-center">
              <Link
                href="/news"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#9DCC46] transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to News
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related News Suggestion (Static layout for demo) */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-[1000px]">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-gray-900">More News</h3>
            <Link href="/news" className="text-[#9DCC46] font-bold uppercase tracking-wider text-sm hover:text-gray-900 transition-colors border-b-2 border-[#9DCC46] hover:border-gray-900 pb-1">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Related Article 1 */}
            <Link href="/news/2" className="group block">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                <Image src="/images/service-main.jpg" alt="Related News" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#9DCC46] text-gray-900 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded shadow-md">
                  Partnership
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-widest">April 05, 2026</div>
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#9DCC46] transition-colors line-clamp-2">Partnership Announcement with Global Agri-Tech</h4>
            </Link>
            {/* Related Article 2 */}
            <Link href="/news/3" className="group block">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                <Image src="/images/service-main.jpg" alt="Related News" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#9DCC46] text-gray-900 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded shadow-md">
                  Event
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-widest">March 15, 2026</div>
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#9DCC46] transition-colors line-clamp-2">Annual Farming Excellence Awards 2026</h4>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import Image from "next/image";

const partnerLogos = [
  "/images/partner/1.webp",
  "/images/partner/2.webp",
  "/images/partner/4.webp",
  "/images/partner/5.webp",
  "/images/partner/6.webp",
  "/images/partner/7.webp",
];

export default function PartnerSlider() {
  return (
    <div className="relative mb-32 w-full">
      {/* Gradient Edges for fade effect */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex overflow-hidden group">
        {/* Double the list for seamless loop */}
        <div className="flex space-x-16 md:space-x-24 animate-marquee group-hover:[animation-play-state:paused] py-8">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-40 h-20 transition-transform duration-300 hover:scale-105 cursor-pointer relative"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-16 md:space-x-24 animate-marquee group-hover:[animation-play-state:paused] py-8 absolute top-0" aria-hidden="true" style={{ left: "100%" }}>
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={`copy-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-40 h-20 transition-transform duration-300 hover:scale-105 cursor-pointer relative"
            >
              <Image
                src={logo}
                alt={`Partner copy ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

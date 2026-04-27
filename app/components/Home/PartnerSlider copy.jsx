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
    <div className="relative w-full overflow-hidden">
      
      {/* Gradient Fade */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-8">
        {[...partnerLogos, ...partnerLogos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-20 mx-8 relative flex items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Partner ${index}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
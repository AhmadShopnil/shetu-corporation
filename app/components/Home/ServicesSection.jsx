"use client";

import Image from "next/image";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import { ArrowUpRight } from "lucide-react";

const services = [
  { img: service1, title: "Organic Farm Solutions" },
  { img: service2, title: "Eco-Friendly Farming" },
  { img: service3, title: "Organic Produce Supply" },
  { img: service4, title: "Agri-Tech Innovations" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="mb-3 text-primary text-base font-semibold">Agro Excellence</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tightd">
           The Rise of Organic Farming Practices
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl h-[320px]"
            >
              {/* Image */}
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-lg font-bold mb-2">
                  {service.title}
                </h3>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold transition-all group-hover:gap-2"
                >
                  Read More <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
"use client";

import Image from "next/image";
import heroImg from "@/assets/hero-farmer.jpg";

import { Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="footer-bg"
          fill
          className="object-cover"
          priority={false}
        />
        <div
          className="absolute inset-0"
          style={{ background: "hsla(150,20%,8%,0.92)" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 pb-12 border-b border-primary-foreground/10">

          {/* Logo + Contact */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="hsl(82,77%,45%)"
                  fillOpacity="0.2"
                />
                <path
                  d="M16 6C16 6 10 12 10 18C10 24 16 26 16 26C16 26 22 24 22 18C22 12 16 6 16 6Z"
                  fill="hsl(82,77%,45%)"
                />
              </svg>
              <span className="text-2xl font-bold text-white">
                Shetu COrporation
              </span>
            </Link>

            <div className="space-y-4">
              <p className="flex items-center gap-3 text-[15px] md:text-base text-gray-300">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </span>
                +880-2-7913081
              </p>

              <p className="flex items-center gap-3 text-[15px] md:text-base text-gray-300">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </span>
                info@shetucorporation.com
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Our Products
            </h4>

            <ul className="space-y-3">
              {[
                { label: "Crop Protection", href: "/products/crop-protection" },
                { label: "Insecticide", href: "/products/insecticide" },
                { label: "Fungicide", href: "/products/fungicide" },
                { label: "Herbicide", href: "/products/herbicide" },
                { label: "Seeds", href: "/products/seeds" },
                // { label: "Others", href: "/products/others" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[15px] md:text-base text-gray-400 hover:text-primary transition flex items-center gap-2"
                  >
                    <span className="text-primary">↗</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menus */}
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { label: "Home", href: "/", hasDropdown: false },
                { label: "About Us", href: "/about", hasDropdown: false },
                { label: "Career", href: "/career", hasDropdown: false },
                {
                  label: "Media",
                  href: "#",
                  hasDropdown: true,
                  subItems: [
                    { label: "Blogs", href: "/blogs" },
                    { label: "Gallery", href: "/gallery" },
                    { label: "News", href: "/news" },
                  ],
                },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[15px] md:text-base text-gray-400 hover:text-primary transition flex items-center gap-2"
                  >
                    <span className="text-primary">↗</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Newsletter
            </h4>

            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-5 py-3 rounded-l-full bg-white/5 border border-white/10 text-white text-base focus:outline-none focus:border-primary"
              />
              <button className="px-5 py-3 rounded-r-full bg-[#8ACB1A] hover:bg-[#7AB316] transition cursor-pointer">
                <span className="text-white">→</span>
              </button>
            </div>

            <p className="text-[15px] md:text-base text-gray-500 mb-6 leading-relaxed">
              Rooted in natures care, we grow with integrity and harvest a healthier world.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-gray-300 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center">
          <p className="text-[15px] text-gray-500">
            © 2026 All rights reserved.{" "}
            <span className="text-primary">Shetu Corporation</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { navItems } from "./NavData";
import Image from "next/image";

const HomeHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic colors
  const bgColor = isScrolled ? "bg-white shadow-md" : "bg-transparent";
  const textColor = isScrolled ? "text-black" : "text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgColor}`}>
      <div className="mx-auto flex items-center justify-between py-4 px-4 md:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo4.png" 
            alt="Shetu Corporation Logo"
            width={80}
            height={80}
            priority
          />
          <span className="text-xl uppercase font-bold text-white">
            Shetu Corporation
          </span>
        </Link>
        {/* <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="hsl(82,77%,45%)" fillOpacity="0.2" />
            <path d="M16 6C16 6 10 12 10 18C10 24 16 26 16 26C16 26 22 24 22 18C22 12 16 6 16 6Z" fill="hsl(82,77%,45%)" />
            <path d="M16 10C14 14 12 16 10 18" stroke="hsl(100,50%,30%)" strokeWidth="1.5" fill="none" />
            <path d="M16 10C18 14 20 16 22 18" stroke="hsl(100,50%,30%)" strokeWidth="1.5" fill="none" />
          </svg>
          <span className={`text-2xl font-bold ${textColor}`}>
            Shetu Corporation
          </span>
        </Link> */}

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-[15px] xl:text-base font-semibold ${textColor} hover:text-[#9DCC46] transition-colors py-4`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {item.subItems && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-6 py-2.5 text-[15px] text-gray-700 hover:text-[#9DCC46] hover:bg-gray-50 transition-colors font-semibold"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className={`rounded-full px-6 py-2.5 text-base font-semibold transition-all flex items-center gap-2 bg-[#DCE25A] text-gray-800 hover:bg-[#7AB316] ${!isScrolled && "border border-white hover:bg-white"
              }`}
          >
            Get In Touch
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${textColor} lg:hidden`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out origin-top overflow-hidden ${mobileOpen ? "max-h-[85vh] opacity-100 border-t" : "max-h-0 opacity-0 border-t-0"
          }`}
      >
        <div className="px-6 py-6 overflow-y-auto max-h-[85vh] flex flex-col gap-2">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 last:border-0">
              <div className="flex items-center justify-between py-3">
                <Link
                  href={item.href}
                  className="text-lg font-semibold text-gray-900 w-full"
                  onClick={() => !item.subItems && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <button
                    onClick={() => {
                      const el = document.getElementById(`mobile-sub-home-${item.label}`);
                      el.classList.toggle('max-h-0');
                      el.classList.toggle('max-h-[500px]');
                      el.classList.toggle('opacity-0');
                      el.classList.toggle('opacity-100');
                      el.classList.toggle('mt-0');
                      el.classList.toggle('mt-3');
                    }}
                    className="p-2 -mr-2 text-gray-500 hover:text-[#9DCC46] transition-colors"
                  >
                    <ChevronDown size={20} />
                  </button>
                )}
              </div>

              {item.subItems && (
                <div
                  id={`mobile-sub-home-${item.label}`}
                  className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 rounded-xl"
                >
                  <div className="px-5 py-3 flex flex-col gap-3">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="text-base text-gray-600 font-semibold hover:text-[#9DCC46] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="mt-6 w-full flex justify-center items-center gap-2 rounded-xl px-6 py-4 text-base font-bold bg-[#9DCC46] text-white shadow-md hover:bg-[#85b03b] transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;

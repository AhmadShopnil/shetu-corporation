"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { navItems } from "./NavData";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="mx-auto flex items-center justify-between py-4 px-4 md:px-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="hsl(82,77%,45%)" fillOpacity="0.2" />
            <path d="M16 6C16 6 10 12 10 18C10 24 16 26 16 26C16 26 22 24 22 18C22 12 16 6 16 6Z" fill="hsl(82,77%,45%)" />
            <path d="M16 10C14 14 12 16 10 18" stroke="hsl(100,50%,30%)" strokeWidth="1.5" fill="none" />
            <path d="M16 10C18 14 20 16 22 18" stroke="hsl(100,50%,30%)" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="text-2xl font-bold text-black">
            Shetu Corporation
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-[#9DCC46] transition-colors py-4"
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
                      className="block px-6 py-2.5 text-gray-700 hover:text-[#9DCC46] hover:bg-gray-50 transition-colors font-medium"
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
            href="#"
            className="rounded-full px-6 py-2.5 text-base font-semibold transition-all flex items-center gap-2 bg-[#DCE25A] text-gray-800 hover:bg-[#7AB316]"
          >
            Get In Touch
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-black lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 py-6 bg-white shadow-md max-h-screen overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b last:border-0">
              <div className="flex items-center justify-between py-4">
                <Link
                  href={item.href}
                  className="text-lg font-medium text-black"
                  onClick={() => !item.subItems && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <button 
                    onClick={() => {
                      const el = document.getElementById(`mobile-sub-std-${item.label}`);
                      el.classList.toggle('hidden');
                    }}
                    className="p-2"
                  >
                    <ChevronDown size={20} className="text-gray-500" />
                  </button>
                )}
              </div>
              
              {item.subItems && (
                <div id={`mobile-sub-std-${item.label}`} className="hidden bg-gray-50 pl-6 pb-4">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block py-2.5 text-gray-600 font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="#"
            className="mt-6 w-full flex justify-center rounded-full px-6 py-3 text-lg font-bold bg-[#DCE25A] text-gray-800"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
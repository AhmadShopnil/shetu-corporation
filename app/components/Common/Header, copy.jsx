"use client";

import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", hasDropdown: true },
  { label: "About Us", hasDropdown: true },
  { label: "Portfolio", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "Blog", hasDropdown: true },
  { label: "Shop", hasDropdown: true },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" fill="hsl(82,77%,45%)" fillOpacity="0.2" />
            <path d="M16 6C16 6 10 12 10 18C10 24 16 26 16 26C16 26 22 24 22 18C22 12 16 6 16 6Z" fill="hsl(82,77%,45%)" />
            <path d="M16 10C14 14 12 16 10 18" stroke="hsl(100,50%,30%)" strokeWidth="1.5" fill="none" />
            <path d="M16 10C18 14 20 16 22 18" stroke="hsl(100,50%,30%)" strokeWidth="1.5" fill="none" />
          </svg>
          <span className="text-2xl font-heading font-bold text-black">Shetu Corporation</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-1 text-lg font-body font-medium text-black hover:text-primary transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* <button className="text-primary-foreground/70 hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button> */}
          <a href="#" className="bg-[#8ACB1A] rounded-full px-6 py-2.5 text-lg font-body font-medium text-white hover:bg-[#7AB316] transition-colors flex items-center gap-2">
            Get In Touch
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden px-4 py-6 bg-section-dark">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="block py-3 text-md font-body font-medium text-primary-foreground/80 hover:text-primary border-b border-primary-foreground/10"
            >
              {item.label}
            </a>
          ))}
          <a href="#" className="btn-primary mt-4 w-full justify-center">
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

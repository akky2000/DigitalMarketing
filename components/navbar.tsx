"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "SERVICES",
      link: "/services",
      dropdown: ["SEO Services", "PPC Services", "SMO Services", "Web Development"],
    },
    {
      name: "OUR PACKAGES",
      link: "/packages",
      dropdown: ["SEO Packages", "PPC Packages", "SMO Packages"],
    },
    {
      name: "WHO WE ARE",
      link: "/about",
      dropdown: ["About Us", "Our Team", "Our Process"],
    },
    {
      name: "COURSES",
      link: "/courses",
      dropdown: ["Digital Marketing", "SEO Course"],
    },
    {
      name: "CONTACT US",
      link: "/contact",
    },
  ];

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-500 ${
          scrolled
            ? "shadow-md bg-[#f2f2f2]"
            : "bg-[#f2f2f2]"
        } lg:fixed lg:top-0`}
      >
        {/* TOP BAR */}
        <div className="border-b border-gray-300 hidden lg:block">
          <div className="max-w-7xl mx-auto flex justify-end items-center px-6 py-2 text-sm text-gray-600 gap-6">
            <span className="hover:text-[#1d4ed8] cursor-pointer">About Us</span>
            <span className="hover:text-[#1d4ed8] cursor-pointer">Blog</span>
            <span className="hover:text-[#1d4ed8] cursor-pointer">Career</span>
            <span className="hover:text-[#1d4ed8] cursor-pointer">Guest Post</span>

            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>(+91) 9523181953</span>
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500 ${
            scrolled ? "py-3" : "py-6"
          }`}
        >
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={80}
              priority
              className={`transition-all duration-500 ${
                scrolled
                  ? "w-[90px] lg:w-[120px]"
                  : "w-[120px] lg:w-[170px]"
              }`}
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-6 font-semibold text-[15px] relative">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.link}
                  className={`flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ${
                    pathname === item.link
                      ? "bg-[#141a46] text-white"
                      : "text-gray-700 hover:text-[#1d4ed8]"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                </Link>

                {/* DROPDOWN */}
                {activeDropdown === item.name && item.dropdown && (
                  <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md py-3 w-52 z-50">
                    {item.dropdown.map((subItem, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="bg-black text-white p-2 rounded"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <div className="flex flex-col px-6 py-6 gap-4 font-semibold text-gray-700">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-[#1d4ed8]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Spacer only for desktop fixed navbar */}
      <div className="hidden lg:block h-[160px]"></div>
    </>
  );
}

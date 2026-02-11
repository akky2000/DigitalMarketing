"use client";

import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="bg-black text-gray-400 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Left Side */}
        <div className="text-sm text-center lg:text-left">
          <p>
            King of Digital Marketing © Copyright 2025. All Rights Reserved.
          </p>
          <p className="mt-1">
            Designed By:{" "}
            <span className="text-blue-500 font-medium hover:underline cursor-pointer">
              Akash Kumar
            </span>
          </p>
        </div>

        {/* Right Side Links */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-sm">

          <Link href="/about" className="hover:text-white hover:underline transition">
            About Us
          </Link>

          <span className="hidden sm:inline">|</span>

          <Link href="/terms" className="hover:text-white hover:underline transition">
            Terms and Conditions
          </Link>

          <span className="hidden sm:inline">|</span>

          <Link href="/privacy" className="hover:text-white hover:underline transition">
            Privacy Policy
          </Link>

          <span className="hidden sm:inline">|</span>

          <Link href="/refund-policy" className="hover:text-white hover:underline transition">
            Refund & Return Policy
          </Link>

          <span className="hidden sm:inline">|</span>

          <Link href="/contact" className="hover:text-white hover:underline transition">
            Contact Us
          </Link>

        </div>

      </div>
    </div>
  );
}

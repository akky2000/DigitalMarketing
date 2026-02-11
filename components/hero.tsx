"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    top: "LATEST ALGORITHM BASED",
    main: "SEO SERVICES",
    sub: "500+ projects delivered with consistent top ranking growth",
  },
  {
    top: "PERFORMANCE DRIVEN",
    main: "DIGITAL MARKETING",
    sub: "Helping brands scale traffic, leads & revenue globally",
  },
  {
    top: "ROI FOCUSED STRATEGY",
    main: "ONLINE GROWTH",
    sub: "Smart campaigns designed for long-term digital success",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
   <section className="relative w-full h-[85vh] lg:h-[90vh] flex items-center justify-center overflow-hidden bg-[#061830]">


      {/* Diagonal Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto text-white">

        {/* Flag */}
        <div className="flex justify-center mb-4">
          <Image
            src="/hero.gif"
            alt="India Flag"
            width={120}
            height={70}
            priority
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >

            {/* Small Top Text */}
            <p className="tracking-[0.35em] uppercase text-xs sm:text-sm text-gray-300 mb-5">
              {slides[index].top}
            </p>

            {/* Main Heading */}
            <h1 className="font-extrabold 
              text-4xl sm:text-6xl lg:text-7xl xl:text-8xl 
              leading-tight">
              {slides[index].main}
            </h1>

            {/* Sub Text */}
            <p className="text-gray-400 mt-6 text-sm sm:text-base max-w-3xl mx-auto">
              {slides[index].sub}
            </p>

          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-gradient-to-r from-blue-500 to-cyan-400 
          text-white px-10 py-4 rounded-full shadow-lg text-sm sm:text-base"
        >
          REQUEST A CALL
        </motion.button>

      </div>
    </section>
  );
}

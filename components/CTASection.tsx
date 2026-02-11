"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StylishCTA() {
  return (
    <section className="relative bg-[#f3f3f3] py-20 overflow-hidden">

      {/* Top Divider Shape */}
      <div className="absolute top-0 left-0 w-full h-6 bg-[#e9e9e9] clip-triangle-down"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">

        {/* FIRST LINE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-10"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            GET STARTED <span className="text-blue-600">WITH US</span> TODAY!
          </h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition-all duration-300 hover:scale-105">
            Free Website Audit!
          </button>
        </motion.div>

        {/* SECOND LINE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6"
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
            Helping Brands Grow{" "}
            <span className="text-blue-600">
              Revenue & Profit
            </span>{" "}
            With Digital Marketing Services!
          </h3>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition-all duration-300 hover:scale-105">
            Our Works!
          </button>
        </motion.div>

      </div>

      {/* Optional Arrow Images */}
      <Image
        src="/arrow.png"
        alt="arrow"
        width={40}
        height={120}
        className="hidden lg:block absolute right-20 top-16 opacity-60"
      />

      <Image
        src="/arrow.png"
        alt="arrow"
        width={30}
        height={120}
        className="hidden lg:block absolute right-20 bottom-16 opacity-60"
      />

    </section>
  );
}

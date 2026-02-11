"use client";

import { motion } from "framer-motion";

export default function RoiSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#111111] to-[#1a1a1a] border-t border-blue-600">

      <div className="max-w-7xl mx-auto px-6 py-10 text-center lg:text-left">

        {/* Main Line */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-lg sm:text-xl lg:text-2xl font-medium"
        >
          Your Business and Goals, Our Solution and Results{" "}
          <span className="text-[#00b3ff] font-semibold italic">
            We Strictly Focus on ROI
          </span>
        </motion.h2>

        {/* Sub Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-4 text-sm sm:text-base"
        >
          Let's Take Your Business Global With Performance Driven Digital
          Marketing Services.
        </motion.p>

      </div>

    </section>
  );
}

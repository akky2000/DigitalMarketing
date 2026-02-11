"use client";

import { motion } from "framer-motion";

export default function KickstartSection() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-black to-[#020617] opacity-95" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
        >
          Let's Kickstart Your Digital Success Today!
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-10"
        >
          For over 12 years, King of Digital Marketing has delivered consistent growth through digital marketing services like SEO,
          PPC, and lead generation campaigns. Let's create a winning plan for your business.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:shadow-[0_0_45px_rgba(255,215,0,0.9)] transition-all duration-300"
        >
          Send Me a Proposal!
        </motion.button>

      </div>
    </section>
  );
}

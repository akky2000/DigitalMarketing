"use client";

import { motion } from "framer-motion";
import { Users, ClipboardList, FlaskConical, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Users,
    title: "WORKSHOPS",
    items: [
      "Business Analysis",
      "Campaign Objective",
      "Preparing Proposal",
      "Deciding Deliverables",
    ],
  },
  {
    number: "2",
    icon: ClipboardList,
    title: "PLANNING",
    items: [
      "Industry Research",
      "Competitor Research",
      "Selecting Marketing Channels",
      "Strategy Development",
    ],
  },
  {
    number: "3",
    icon: FlaskConical,
    title: "A/B TESTING",
    items: [
      "Experimenting with Ads",
      "Experimenting with Content",
      "Testing SEO Techniques",
      "Analyzing Audience Behavior",
    ],
  },
  {
    number: "4",
    icon: Rocket,
    title: "EXECUTION",
    items: [
      "Creating Campaign",
      "Content Production",
      "Strategy Optimization",
      "Analysis & Reporting",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="relative bg-[#0b1117] text-white py-24 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f2d] via-[#0b1117] to-black opacity-90" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-6 py-2 border border-cyan-500 rounded-full text-sm text-cyan-400 mb-6"
        >
          OUR PROVEN APPROACH
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          DIGITAL MARKETING PROCESS
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-sm sm:text-base">
          From strategy to execution, our systematic 4-step process delivers measurable results for your business
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group bg-[#101820] border border-cyan-600/40 rounded-xl p-8 text-left transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(0,200,255,0.4)]"
              >

                {/* Step Number Circle */}
                <div className="absolute -top-4 left-6 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="w-16 h-16 bg-cyan-900/40 border border-cyan-500 rounded-full flex items-center justify-center mb-6">
                  <Icon size={26} className="text-cyan-400" />
                </div>

                <h3 className="text-lg font-semibold mb-4 tracking-wide">
                  {step.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-400">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#0f1e28] to-[#0a141a] border border-cyan-500/40 rounded-xl p-10"
        >
          <h3 className="text-2xl font-semibold mb-4">
            READY TO TRANSFORM YOUR DIGITAL PRESENCE?
          </h3>

          <p className="text-gray-400 mb-6 text-sm">
            Let’s discuss how our proven process can drive results for your business
          </p>

          <button className="bg-cyan-600 hover:bg-cyan-500 transition px-8 py-3 rounded-full font-medium shadow-lg">
            Get Started Today →
          </button>
        </motion.div>

      </div>
    </section>
  );
}

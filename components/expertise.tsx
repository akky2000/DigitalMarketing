"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "DIGITAL MARKETING SERVICES",
    desc: "Grow Your Business by SEO SMO PPC Services",
    color: "from-orange-500 to-orange-600",
  },
  {
    number: "02",
    title: "PPC SERVICES",
    desc: "Instant Traffic, Leads, Sales, Brand Awareness",
    color: "from-cyan-500 to-blue-600",
  },
  {
    number: "03",
    title: "WEB DESIGN & DEVELOPMENT",
    desc: "Creative High Quality Website Design & Development",
    color: "from-blue-600 to-indigo-700",
  },
  {
    number: "04",
    title: "SOCIAL MEDIA SERVICES",
    desc: "Let Your Social Profile Engage Your Customers",
    color: "from-gray-500 to-gray-700",
  },
  {
    number: "05",
    title: "MOBILE APP DEVELOPMENT",
    desc: "Make Android & IOS App for Your Business",
    color: "from-green-500 to-emerald-600",
  },
  {
    number: "06",
    title: "CONTENT WRITING SERVICES",
    desc: "High quality content to increase traffic & rank",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    number: "07",
    title: "LEAD GENERATION",
    desc: "Guaranteed & Qualified Lead Generation",
    color: "from-red-500 to-rose-600",
  },
  {
    number: "08",
    title: "LEARN DIGITAL MARKETING",
    desc: "Make Your Career in Digital Marketing",
    color: "from-amber-500 to-yellow-600",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center">

      <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-3xl sm:text-4xl font-bold mb-6 leading-snug"
>
  <span className="text-blue-600">RESULT DRIVEN </span>
  <span className="text-gray-800">
    DIGITAL MARKETING COMPANY IN DELHI, INDIA
  </span>
</motion.h2>


        <p className="text-blue-600 text-lg mb-2">
          Unique and Innovative Digital Marketing Strategies
        </p>

        <p className="text-2xl font-medium text-gray-700 mb-16">
          Our Expertise
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {services.map((service, index) => (
           <motion.div
  key={index}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  className="relative group h-full"
>

  {/* Number */}
  <div
    className={`text-5xl font-extrabold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
  >
    {service.number}
  </div>

  {/* Card */}
  <div className="relative bg-white shadow-lg rounded-xl p-10 min-h-[260px] flex flex-col justify-between overflow-hidden transition-all duration-500 group-hover:shadow-2xl">

    {/* Left Border */}
    <div
      className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${service.color}`}
    ></div>

    {/* Hover Overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition duration-500`}
    ></div>

    {/* Bottom Corner Accent */}
    <div
      className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tr ${service.color} opacity-20 clip-triangle`}
    ></div>

    <div className="relative">
      <h3 className="font-semibold text-gray-800 text-sm tracking-wide mb-4 leading-snug">
        {service.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {service.desc}
      </p>
    </div>

  </div>
</motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

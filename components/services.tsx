"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Lead Generation",
    desc: "Increase number of quality leads with powerful lead generation campaigns designed to convert visitors into long-term customers.",
    icon: "/icons/lead.png",
    btnColor: "bg-red-500",
  },
  {
    title: "Google Ads Services",
    desc: "Get instant traffic, maximize ROI and scale faster with optimized and data-driven Google Ads campaigns.",
    icon: "/icons/google.png",
    btnColor: "bg-yellow-500",
  },
  {
    title: "SEO Services",
    desc: "Boost your search engine rankings and drive consistent organic traffic with advanced SEO strategies.",
    icon: "/icons/seo.png",
    btnColor: "bg-green-500",
  },
  {
    title: "SMO Services",
    desc: "Build brand awareness and engagement through powerful social media optimization campaigns.",
    icon: "/icons/smo.png",
    btnColor: "bg-pink-500",
  },
  {
    title: "PPC Services",
    desc: "Generate instant leads and increase conversions through high-performing PPC advertising.",
    icon: "/icons/ppc.png",
    btnColor: "bg-yellow-400",
  },
  {
    title: "ORM Services",
    desc: "Protect and enhance your online brand image with professional reputation management services.",
    icon: "/icons/orm.png",
    btnColor: "bg-teal-500",
  },
  {
    title: "Mobile App Development",
    desc: "Custom Android & iOS applications built for performance, scalability and business growth.",
    icon: "/icons/app.png",
    btnColor: "bg-purple-600",
  },
  {
    title: "Web Development",
    desc: "Responsive, secure and scalable websites designed for better performance and conversions.",
    icon: "/icons/web.png",
    btnColor: "bg-pink-600",
  },
  {
    title: "Flipkart Marketing",
    desc: "Increase marketplace visibility and sales with optimized Flipkart marketing strategies.",
    icon: "/icons/flipkart.png",
    btnColor: "bg-blue-600",
  },
  {
    title: "Amazon Marketing",
    desc: "Dominate Amazon search results and boost product sales with strategic ad campaigns.",
    icon: "/icons/amazon.png",
    btnColor: "bg-black",
  },
  {
    title: "Facebook Marketing",
    desc: "Target the right audience and drive high-quality leads through Facebook Ads.",
    icon: "/icons/facebook.png",
    btnColor: "bg-indigo-600",
  },
  {
    title: "Mobile App Promotion",
    desc: "Increase app installs and user engagement with advanced app marketing campaigns.",
    icon: "/icons/promotion.png",
    btnColor: "bg-blue-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-600 uppercase tracking-widest text-sm mb-3">
            Our Digital Expertise
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 uppercase tracking-wide">
            HOW DO WE EMPOWER YOU DIGITALLY
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-600 max-w-5xl mx-auto leading-relaxed text-[15px] text-center"
        >
          At King of Digital Marketing, we create powerful digital ecosystems that help brands grow faster.
          With 12+ years of industry experience, our team of strategists, AI specialists and creative experts
          focus on delivering measurable growth. We blend innovation, performance marketing and creativity
          to build brands that dominate their industry. Below are our most demanded digital marketing services.
        </motion.p>

        {/* Cards Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl 
                         transition-all duration-300 p-8 flex flex-col 
                         items-center text-center min-h-[350px]"
            >
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={70}
                  height={70}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-blue-600 mb-4 rounded"></div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {service.desc}
              </p>

              {/* Button */}
              <button
                className={`${service.btnColor} mt-6 px-6 py-2 text-white 
                            text-sm rounded-md shadow hover:scale-105 
                            transition-all duration-300`}
              >
                Read More
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

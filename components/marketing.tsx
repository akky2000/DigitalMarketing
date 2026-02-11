"use client";

import { motion } from "framer-motion";
import EnquiryForm from "./enquiryform";


export default function MarketingSection() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
        
        {/* LEFT CONTENT */}
        {/* LEFT CONTENT */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="max-w-2xl"
>
  <h1 className="font-heading text-4xl lg:text-5xl font-semibold 
                 text-center mb-8 text-black">
    King of Digital Marketing
  </h1>

  <div className="font-body text-[15.5px] leading-[28px] text-gray-700 space-y-5">
    
    <p>
      King of Digital Marketing is India's leading digital marketing
      services company in Delhi. Established in 2013, We have an
      experienced team, innovative strategies, and guaranteed results.
      We love to help ambitious companies to achieve skyrocketing
      online growth.
    </p>

    <p>
      We strive to provide cost effective digital marketing services
      for domestic and international clients. Our digital marketing
      consultants help small, mid-sized and large businesses, which
      are struggling to increase organic/paid traffic, Google ranking,
      leads, sales, app installs & recharge as well as higher
      conversion rates.
    </p>

    <p>
      Till date, We have worked for 12+ countries like United States,
      United Kingdom, Canada, Australia, Germany, UAE (Dubai),
      Singapore, Turkey, Russia and others on 850+ projects.
    </p>

    <p>
      <span className="text-blue-600 font-medium">
        What We Do?
      </span>{" "}
      We bring together professionalism, passion, and performance
      through our proven{" "}
      <span className="text-blue-600 underline cursor-pointer">
        Lead Generation Services
      </span>{" "}
      with{" "}
      <span className="text-blue-600 underline cursor-pointer">
        Social Media Marketing
      </span>{" "}
      or{" "}
      <span className="text-blue-600 underline cursor-pointer">
        PPC Management (Google Ads)
      </span>.
    </p>

    <p>
      Our dedicated digital marketing professionals are with over
      10+ years of experience in their field. Our digital marketing
      experts are passionate about growing your business by driving
      qualified leads, increasing sales, and maximizing your
      visibility across Google and social media platforms.
    </p>

  </div>

  {/* Buttons */}
  <div className="flex flex-wrap gap-4 mt-8">
    <button className="bg-blue-600 hover:bg-blue-700 text-white 
                       px-6 py-2.5 rounded-md text-sm shadow-md transition">
      Let's Talk About Your Business
    </button>

    <button className="bg-blue-500 hover:bg-blue-600 text-white 
                       px-6 py-2.5 rounded-md text-sm shadow-md transition">
      Know More About Us
    </button>
  </div>
</motion.div>


        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <EnquiryForm/>
        </motion.div>

      </div>
    </section>
  );
}

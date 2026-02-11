"use client";

import { motion } from "framer-motion";

export default function EnquiryForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-full bg-gradient-to-b from-blue-400 to-blue-950 
                 p-8 rounded-xl shadow-2xl text-white flex flex-col"
    >
      <h2 className="text-xl font-semibold text-center mb-6">
        Ready to Grow Your Business <br /> Write Your Requirements
      </h2>

      {/* FORM */}
      <form className="space-y-4 flex-1 flex flex-col">
        
        <div className="space-y-4 flex-1">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md text-black outline-none"
          />

          <input
            type="text"
            placeholder="Contact No"
            className="w-full px-4 py-2 rounded-md text-black outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md text-black outline-none"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-2 rounded-md text-black outline-none"
          />

          <input
            type="text"
            placeholder="Website"
            className="w-full px-4 py-2 rounded-md text-black outline-none"
          />

          <select className="w-full px-4 py-2 rounded-md text-black outline-none">
            <option>SEO</option>
            <option>Social Media Marketing</option>
            <option>PPC Management</option>
          </select>

          <textarea
            placeholder="Requirements"
            rows={3}
            className="w-full px-4 py-2 rounded-md text-black outline-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full bg-gray-200 text-black font-medium py-2 rounded-md mt-4"
        >
          Send Enquiry
        </motion.button>
      </form>
    </motion.div>
  );
}

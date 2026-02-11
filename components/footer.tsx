"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              OUR SERVICES
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Search Engine Optimization",
                "Social Media Optimization",
                "Pay Per Click (PPC Management)",
                "Online Reputation Management",
                "Mobile App Promotion",
                "Social Media Marketing Services",
                "Content Writing Service",
                "Website Design & Development",
                "Android App Development",
                "SEO Freelancer in India",
                "Facebook Marketing Services",
                "Lead Generation Services",
                "Flipkart Marketing Services",
                "Amazon Marketing Services",
                "Digital Marketing Company",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-blue-500 hover:underline transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              INDUSTRIES
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Astrology",
                "Cosmetic/Plastic Surgeon",
                "Hair Transplant",
                "Immigration/Visa",
                "Overseas Education",
                "Yoga Studio",
                "Nephrologist",
                "Institute/Schools",
                "E-Commerce",
                "Coworking Space",
                "Politicians",
                "Fitness Trainer",
                "Startups",
                "Travel Agency/Hotels",
                "View More Industries",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-blue-500 hover:underline transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              VARIOUS PACKAGES
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "SEO Packages",
                "SMO Packages",
                "PPC Packages",
                "ORM Packages",
                "Content Writing Packages",
                "Website Development Packages",
                "Website Design Packages",
                "Android App Development Packages",
                "SEO Freelance Packages",
                "Quick Links",
                "Latest Blogs Career",
                "Team",
                "Portfolio",
                "Case Studies",
                "Digital Marketing Course",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-blue-500 hover:underline transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              CONTACT US
            </h3>

            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                <span className="text-blue-500">Head Branch:</span> 1800/09,
                1st Floor Govindpuri Extension, Kalkaji New Delhi - 110019
              </p>
              <p>
                <span className="text-blue-500">Phone:</span> +91 9555696058
              </p>
              <p>
                <span className="text-blue-500">Email:</span>{" "}
                info@kingofdigitalmarketing.com
              </p>

              <p className="mt-4">
                <span className="text-blue-500">Branch Office:</span>{" "}
                Allahabad, Uttar Pradesh - 211003
              </p>
              <p>
                <span className="text-blue-500">Phone:</span> +91 9821918208
              </p>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-3 transition">
                <Image
                  src="/whatsapp.png"
                  alt="whatsapp"
                  width={28}
                  height={28}
                />
                Whatsapp
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer"
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                )
              )}
            </div>

            <div className="mt-4 text-blue-500 text-sm cursor-pointer hover:underline">
              MAKE ONLINE PAYMENT
            </div>
          </div>
        </div>

        {/* BADGES ROW */}
        <div className="border-t border-gray-800 mt-16 pt-10 gap-8 flex flex-wrap justify-center items-center">
          {/* <div className="flex flex-wrap justify-center gap-8 items-center">
            <Image src="/badge1.png" alt="badge" width={120} height={80} />
            <Image src="/badge2.png" alt="badge" width={120} height={80} />
            <Image src="/badge3.png" alt="badge" width={120} height={80} />
            <Image src="/badge4.png" alt="badge" width={150} height={80} />
            <Image src="/badge5.png" alt="badge" width={120} height={80} />
          </div> */}

          <Image src="/image.png" alt="badge" width={1100} height={120} />
        </div>

      </div>
    </footer>
  );
}

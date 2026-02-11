"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  MousePointerClick,
  Code,
  Share2,
  Smartphone,
  FileText,
  Target,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "DIGITAL MARKETING SERVICES",
    desc: "Grow Your Business by SEO SMO PPC Services",
    color: "from-orange-500 to-orange-600",
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "PPC SERVICES",
    desc: "Instant Traffic, Leads, Sales, Brand Awareness",
    color: "from-cyan-500 to-blue-600",
    icon: MousePointerClick,
  },
  {
    number: "03",
    title: "WEB DESIGN & DEVELOPMENT",
    desc: "Creative High Quality Website Design & Development",
    color: "from-blue-600 to-indigo-700",
    icon: Code,
  },
  {
    number: "04",
    title: "SOCIAL MEDIA SERVICES",
    desc: "Let Your Social Profile Engage Your Customers",
    color: "from-gray-500 to-gray-700",
    icon: Share2,
  },
  {
    number: "05",
    title: "MOBILE APP DEVELOPMENT",
    desc: "Make Android & IOS App for Your Business",
    color: "from-green-500 to-emerald-600",
    icon: Smartphone,
  },
  {
    number: "06",
    title: "CONTENT WRITING SERVICES",
    desc: "High quality content to increase traffic & rank",
    color: "from-yellow-500 to-yellow-600",
    icon: FileText,
  },
  {
    number: "07",
    title: "LEAD GENERATION",
    desc: "Guaranteed & Qualified Lead Generation",
    color: "from-red-500 to-rose-600",
    icon: Target,
  },
  {
    number: "08",
    title: "LEARN DIGITAL MARKETING",
    desc: "Make Your Career in Digital Marketing",
    color: "from-amber-500 to-yellow-600",
    icon: GraduationCap,
  },
];

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
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

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group"
              >

                {/* Number */}
                <div
                  className={`text-5xl font-extrabold mb-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                >
                  {service.number}
                </div>

                {/* Card */}
                <div className="relative bg-white shadow-lg rounded-xl p-10 min-h-[320px] flex flex-col items-center text-center overflow-hidden transition-all duration-500 group-hover:shadow-2xl">

                  {/* Left Border */}
                  <div
                    className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${service.color}`}
                  ></div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition duration-500`}
                  ></div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tr ${service.color} opacity-20`}
                    style={{
                      clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                    }}
                  />

                  {/* ICON CENTERED */}
                  <div
                    className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="font-semibold text-gray-800 text-sm tracking-wide mb-4 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}








// "use client";

// import { motion } from "framer-motion";
// import {
//   TrendingUp,
//   MousePointerClick,
//   Code,
//   Share2,
//   Smartphone,
//   FileText,
//   Target,
//   GraduationCap,
// } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     title: "DIGITAL MARKETING SERVICES",
//     desc: "Grow Your Business by SEO SMO PPC Services",
//     color: "from-orange-500 to-orange-600",
//     icon: TrendingUp,
//   },
//   {
//     number: "02",
//     title: "PPC SERVICES",
//     desc: "Instant Traffic, Leads, Sales, Brand Awareness",
//     color: "from-cyan-500 to-blue-600",
//     icon: MousePointerClick,
//   },
//   {
//     number: "03",
//     title: "WEB DESIGN & DEVELOPMENT",
//     desc: "Creative High Quality Website Design & Development",
//     color: "from-blue-600 to-indigo-700",
//     icon: Code,
//   },
//   {
//     number: "04",
//     title: "SOCIAL MEDIA SERVICES",
//     desc: "Let Your Social Profile Engage Your Customers",
//     color: "from-gray-500 to-gray-700",
//     icon: Share2,
//   },
//   {
//     number: "05",
//     title: "MOBILE APP DEVELOPMENT",
//     desc: "Make Android & IOS App for Your Business",
//     color: "from-green-500 to-emerald-600",
//     icon: Smartphone,
//   },
//   {
//     number: "06",
//     title: "CONTENT WRITING SERVICES",
//     desc: "High quality content to increase traffic & rank",
//     color: "from-yellow-500 to-yellow-600",
//     icon: FileText,
//   },
//   {
//     number: "07",
//     title: "LEAD GENERATION",
//     desc: "Guaranteed & Qualified Lead Generation",
//     color: "from-red-500 to-rose-600",
//     icon: Target,
//   },
//   {
//     number: "08",
//     title: "LEARN DIGITAL MARKETING",
//     desc: "Make Your Career in Digital Marketing",
//     color: "from-amber-500 to-yellow-600",
//     icon: GraduationCap,
//   },
// ];

// export default function ExpertiseSection() {
//   return (
//     <section className="w-full bg-[#f3f3f3] py-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 text-center">

//         <h2 className="text-3xl sm:text-4xl font-bold mb-16 leading-snug">
//           <span className="text-blue-600">RESULT DRIVEN </span>
//           <span className="text-gray-800">
//             DIGITAL MARKETING COMPANY IN DELHI, INDIA
//           </span>
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.08 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   rotateX: 6,
//                   rotateY: -6,
//                 }}
//                 className="group perspective"
//               >
//                 <div className="relative bg-white rounded-2xl p-10 min-h-[340px] flex flex-col items-center text-center overflow-hidden transition-all duration-500 shadow-lg group-hover:shadow-2xl border border-transparent group-hover:border-white/20">

//                   {/* 🔥 Animated Border Stroke */}
//                   <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition duration-500 blur-sm`} />

//                   {/* 🔥 Gradient Hover Background */}
//                   <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-95 transition duration-500`} />

//                   {/* Content Wrapper */}
//                   <div className="relative z-10 transition duration-500 group-hover:text-white">

//                     {/* Number */}
//                     <div className="text-5xl font-extrabold mb-6 opacity-80 group-hover:opacity-100">
//                       {service.number}
//                     </div>

//                     {/* 🔥 Icon with Glow */}
//                     <div
//                       className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] group-hover:scale-110`}
//                     >
//                       <Icon className="text-white" size={28} />
//                     </div>

//                     <h3 className="font-semibold text-sm tracking-wide mb-4 leading-snug">
//                       {service.title}
//                     </h3>

//                     <p className="text-sm leading-relaxed opacity-90">
//                       {service.desc}
//                     </p>

//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }

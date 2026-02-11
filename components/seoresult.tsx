"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "KIDNEY CARE CENTRE",
    desc: "Kidney Care Centre is led by popular nephrologist in Delhi Dr. Rajesh Goel. King of Digital Marketing has worked for his website to rank in Google top 10.",
    keywords: [
      { text: "Kidney specialist doctor in Delhi", rank: "#3" },
      { text: "best nephrologist in delhi", rank: "#6" },
      { text: "Kidney doctor in Delhi", rank: "#5" },
      { text: "best dialysis centre in Delhi", rank: "#4" },
    ],
  },
  {
    title: "CONTACT COMBAT INDIA",
    desc: "Contact Combat India is training centre for Krav Maga and Kickboxing. Our Social Media Experts and SEO Experts had worked on this project.",
    keywords: [
      { text: "Krav maga in delhi", rank: "#3" },
      { text: "Krav maga classes in delhi", rank: "#4" },
      { text: "Kids self defense in delhi", rank: "#9" },
      { text: "Krav maga near me", rank: "#6" },
    ],
  },
  {
    title: "DENTAL CLINIC DELHI",
    desc: "We helped dental clinic rank on top positions and increase appointment bookings.",
    keywords: [
      { text: "Best dentist in Delhi", rank: "#2" },
      { text: "Dental clinic near me", rank: "#5" },
      { text: "Root canal specialist", rank: "#3" },
      { text: "Teeth whitening Delhi", rank: "#4" },
    ],
  },
  {
    title: "FITNESS STUDIO",
    desc: "Improved SEO visibility and lead generation for local fitness studio.",
    keywords: [
      { text: "Gym in Delhi", rank: "#3" },
      { text: "Personal trainer Delhi", rank: "#5" },
      { text: "Weight loss program", rank: "#4" },
      { text: "Fitness classes near me", rank: "#6" },
    ],
  },
  {
    title: "REAL ESTATE GROUP",
    desc: "Boosted property site traffic and search rankings significantly.",
    keywords: [
      { text: "Flats in Delhi", rank: "#3" },
      { text: "Luxury apartments Delhi", rank: "#6" },
      { text: "Property dealer Delhi", rank: "#4" },
      { text: "Buy house in Delhi", rank: "#5" },
    ],
  },
];

export default function SEOResultsSlider() {
  return (
    <section className="bg-[#f2f2f2] py-20 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN HEADING */}
        <h2 className="text-center text-4xl font-bold text-[#0f2747] mb-6">
          AWESOME SEO RESULTS
        </h2>

        {/* DESCRIPTION */}
        <p className="text-center text-gray-600 leading-relaxed max-w-5xl mx-auto text-[15px] mb-10">
          The best feeling ever, When SEO experts are able to bring your website at top 5 ranking of search engine result page.
          If You have the vision, You have come to the right{" "}
          <span className="text-blue-600 font-medium">digital marketing company</span>.
          We have the ability to optimize your website to get more traffic leads and sales.
          - "If not We then Who". Tell us about your digital goals and challenges,
          Our digital marketing experts will share our strategy and the best approach for your requirements.
          Our SEO results speak for our Search Engine Optimization services.
          <span className="text-blue-600 cursor-pointer"> See the SEO results.</span>
        </p>

        {/* SOLUTIONS HEADING */}
        <h3 className="text-center text-2xl font-bold text-[#0f2747] mb-6">
          WE HAVE BEST SOLUTIONS FOR
        </h3>

        {/* PROBLEM LINE */}
        <div className="text-center text-[20px] font-medium mb-16 leading-relaxed text-[#0f2747]">
          <span className="text-blue-600">1.</span> Low Organic Traffic{" "}
          <span className="text-blue-600">2.</span> No Organic Leads{" "}
          <span className="text-blue-600">3.</span> No keywords in 1st Page Ranking{" "}
          <span className="text-blue-600">4.</span> Low Backlinks{" "}
          <span className="text-blue-600">5.</span> Poor Domain Authority
        </div>

        {/* NAVIGATION BUTTONS */}
      <div className="absolute left-3 lg:left-6 top-[65%] lg:top-1/2 z-10 -translate-y-1/2">
  <div className="swiper-button-prev-custom bg-gray-500 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition shadow-md">
    <ChevronLeft className="text-white" size={20} />
  </div>
</div>


       <div className="absolute right-3 lg:right-6 top-[65%] lg:top-1/2 z-10 -translate-y-1/2">
  <div className="swiper-button-next-custom bg-gray-500 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition shadow-md">
    <ChevronRight className="text-white" size={20} />
  </div>
</div>


        {/* SLIDER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 relative border-t-4 border-blue-500">

                {/* Bottom Triangle */}
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tr from-blue-500 to-cyan-400"
                  style={{
                    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  }}
                />

                <h3 className="text-xl font-bold text-[#0f2747] mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {card.desc}
                </p>

                <div className="space-y-4">
                  {card.keywords.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-gray-100 rounded-xl px-5 py-3"
                    >
                      <span className="text-sm text-gray-700">
                        {item.text}
                      </span>

                      <span className="bg-green-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                        {item.rank}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* LEFT CALL BUTTON (Bottom Left) */}
<a
  href="tel:+919523181953"
  className="fixed left-4 bottom-24 z-50 
             bg-green-500 hover:bg-green-600 
             w-14 h-14 rounded-full 
             flex items-center justify-center 
             shadow-xl transition duration-300"
>
  <Phone className="text-white" size={24} />
</a>


      {/* RIGHT WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919523181953"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-24 z-50 bg-green-500
                    hover:bg-green-600 
                   w-16 h-16 rounded-full 
                   flex items-center justify-center 
                   shadow-xl transition duration-300"
      >
        <img
          src="/whatsapp.png"
          alt="whatsapp"
          className="w-8 h-18 object-contain"
        />
      </a>

      {/* SCROLL TO TOP BUTTON */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 z-50 
                     bg-gray-700 hover:bg-gray-800 
                     w-12 h-12 rounded-lg 
                     flex items-center justify-center 
                     shadow-lg transition duration-300"
        >
          <ArrowUp className="text-white" size={20} />
        </button>
      )}
    </>
  );
}

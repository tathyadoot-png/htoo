"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 500px स्क्रॉल होने पर दिखेगा
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 md:right-10 z-[997] h-12 w-12 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-white shadow-[0_15px_30px_rgba(0,0,0,0.1)] group overflow-hidden"
        >
          {/* 🌈 Rainbow Animated Border/Background on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rainBlue via-rainGreen to-rainOrange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Central White Disc (for that clean look) */}
          <div className="absolute inset-[2px] bg-white rounded-full z-10 group-hover:inset-[3px] transition-all" />

          {/* Icon with Theme Colors */}
          <ChevronUp className="w-6 h-6 relative z-20 text-slate-900 group-hover:text-rainOrange group-hover:-translate-y-1 transition-all duration-300" />
          
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 rounded-full group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-shadow duration-500" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
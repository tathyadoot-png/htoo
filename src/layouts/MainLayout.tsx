"use client";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickySocial from "@/components/layout/StickySocial";
import ScrollToTop from "@/components/layout/ScrollToTop";

export type Lang = "hi" | "en";

const MainLayout = () => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "hi";
    return (localStorage.getItem("lang") as Lang) || "hi";
  });

  const [loading, setLoading] = useState(true);
  const isHi = lang === "hi";

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  // डॉट्स के लिए कलर्स की एरे
  const dotColors = ["bg-rainBlue", "bg-rainGreen", "bg-rainOrange", "bg-rainBlue"];

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
            exit={{ 
              clipPath: "inset(0 0 100% 0)", 
              transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] } 
            }}
          >
            {/* 🌈 Ultra-Thin Rainbow Progress Bar (Top) */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-[4px] bg-gradient-to-r from-rainBlue via-rainGreen to-rainOrange"
            />

            {/* 🌌 Central Typography (Modern & Clean) */}
            <div className="relative overflow-hidden flex flex-col items-center">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4"
              >
                <h1 className="text-[12vw] md:text-[8vw] font-semibold tracking-tighter text-slate-900 leading-none">
                 h2o
                </h1>
                <div className="h-[8vw] w-[2px] bg-slate-400 hidden md:block" />
                <div className="flex flex-col items-start">
                   <span className="text-[3vw] md:text-[2vw] text-slate-900 uppercase leading-none">
                      <span className="font-semibold">Help To Others</span> <br />
                      <span className="tracking-[0.18em]"> Foundation </span>
                   </span>
                   <span className="text-slate-900 text-[2.6vw] md:text-[1.1vw] uppercase mt-2 tracking-[0.29em]">
                     {isHi ? "सेवा • सहयोग • समर्पण" : "Service • Support • Dedication"}
                   </span>
                </div>
              </motion.div>

              {/* ✨ 4 Colorful Animated Dots Added Here */}
              <div className="flex gap-2 mt-12">
                {dotColors.map((color, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.3, 1],
                      y: [0, -8, 0]
                    }}
                    transition={{ 
                      duration: 0.8, 
                      repeat: Infinity, 
                      delay: i * 0.15,
                      ease: "easeInOut"
                    }}
                    className={`w-3 h-3 rounded-full ${color} shadow-sm`}
                  />
                ))}
              </div>
            </div>

            {/* ✨ Bottom Reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-400">
                Bhopal • Madhya Pradesh
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <Navbar lang={lang} setLang={setLang} />
          <StickySocial /> 
          <ScrollToTop />
          <main className="min-h-screen bg-white">
            <Outlet context={{ lang, setLang }} />
          </main>
          <Footer lang={lang} />
        </motion.div>
      )}
    </>
  );
};

export default MainLayout;
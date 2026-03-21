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
  // ✅ Language state intact and synced with LocalStorage
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
    // Loader duration (2.8s for premium feel)
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

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
                <h1 className="text-[12vw] md:text-[8vw] font-extralight tracking-tighter text-slate-900 leading-none">
                  H2O
                </h1>
                <div className="h-[8vw] w-[2px] bg-slate-100 hidden md:block" />
                <div className="flex flex-col items-start">
                   <span className="text-[3vw] md:text-[2vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-rainBlue to-rainOrange uppercase leading-none">
                     Foundation
                   </span>
                   <span className="text-[10px] font-bold text-slate-300 tracking-[0.4em] uppercase mt-2">
                     {isHi ? "सेवा • सहयोग" : "Service • Support"}
                   </span>
                </div>
              </motion.div>
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
            {/* ✅ Passing lang & setLang down to child routes */}
            <Outlet context={{ lang, setLang }} />
          </main>
          <Footer lang={lang} />
        </motion.div>
      )}
    </>
  );
};

export default MainLayout;
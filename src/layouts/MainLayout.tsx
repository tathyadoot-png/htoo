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
  const [progress, setProgress] = useState(0);
  const isHi = lang === "hi";

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // 📈 Realistic Progress Counter
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] bg-[#0c0c0c] flex flex-col items-center justify-center overflow-hidden px-10"
            exit={{ 
              y: "-100%", 
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
          >
            {/* 🌌 Background Grain / Texture Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="w-full max-w-4xl flex flex-col items-start space-y-4">
              
              {/* 🔢 Progress Number (Large & Left Aligned) */}
              <div className="overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  className="block text-[15vw] md:text-[10vw] font-black text-white leading-[0.8] tabular-nums tracking-tighter"
                >
                  {Math.min(progress, 100)}%
                </motion.span>
              </div>

              {/* 🏷️ Foundation Name & Slogan (Balanced Alignment) */}
              <div className="flex flex-col md:flex-row md:items-end gap-4 w-full border-t border-white/10 pt-6">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest"
                >
                  H2O <span className="font-light text-slate-400 text-lg">Foundation</span>
                </motion.h1>
                
                <div className="hidden md:block h-6 w-[1px] bg-white/20 mb-1" />

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-[10px] md:text-xs font-medium text-rainOrange uppercase tracking-[0.4em]"
                >
                  {isHi ? "स्वच्छ जल • स्वस्थ कल" : "Pure Water • Pure Life"}
                </motion.p>

                {/* 📍 Right Aligned Info */}
                <motion.span 
                  className="md:ml-auto text-[9px] font-black text-slate-600 uppercase tracking-[0.5em]"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  Bhopal / MP
                </motion.span>
              </div>
            </div>

            {/* 💎 Bottom Ultra-Thin Loader Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
              <motion.div 
                className="h-full bg-gradient-to-r from-rainBlue via-rainGreen to-rainOrange"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
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
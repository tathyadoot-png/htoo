"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import logo from "@/assets/logo.jpeg";
import { Globe, Menu, X, ArrowRight, Heart } from "lucide-react";

export type Lang = "hi" | "en";

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const isHi = lang === "hi";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial Entrance Animation
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.5 }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: isHi ? "होम" : "Home", color: "from-blue-400 to-blue-600" },
    { id: "about", label: isHi ? "परिचय" : "About", color: "from-green-400 to-green-600" },
    { id: "services", label: isHi ? "कार्य" : "Services", color: "from-orange-400 to-orange-600" },
    { id: "join-us", label: isHi ? "प्रभाव" : "Impact", color: "from-pink-400 to-pink-600" },
    { id: "contact", label: isHi ? "संपर्क" : "Contact", color: "from-purple-400 to-purple-600" },
  ];

  return (
    <>
      <header 
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between mx-auto transition-all duration-500 ease-in-out ${
            scrolled 
              ? "max-w-5xl bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-white/50 px-4 py-2 rounded-full" 
              : "max-w-full bg-transparent px-2 py-2"
          }`}>
            
            {/* 🏢 LOGO: Dynamic Scaling */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className={`relative transition-all duration-500 ${scrolled ? 'w-10 h-10' : 'w-12 h-12 md:w-14 md:h-14'}`}>
                <img 
                  src={logo} 
                  alt="H2O Logo" 
                  className="w-full h-full object-contain rounded-full border-2 border-slate-50 group-hover:rotate-[15deg] transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-black tracking-tighter leading-none transition-all duration-500 ${scrolled ? 'text-sm' : 'text-xl'}`}>
                  Help To Others <br /> <span className="text-slate-400 font-light tracking-[0.14em]">Foundation</span>
                </span>
                {!scrolled && (
                  <div className="flex gap-1 mt-1">
                    <div className="w-1 h-1 rounded-full bg-rainBlue" />
                    <div className="w-1 h-1 rounded-full bg-rainGreen" />
                    <div className="w-1 h-1 rounded-full bg-rainOrange" />
                  </div>
                )}
              </div>
            </div>

            {/* 🧭 DESKTOP NAV: Minimal & Floating */}
            <nav className="hidden lg:flex items-center bg-slate-50/50 rounded-full px-2 py-1 border border-slate-100/50">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative px-5 py-2 group overflow-hidden"
                >
                  <span className="relative z-10 text-[11px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">
                    {item.label}
                  </span>
                  <motion.span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${item.color} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  />
                </a>
              ))}
            </nav>

            {/* ⚡ ACTIONS: Lang Switch & CTA */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setLang(isHi ? "en" : "hi")}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <Globe size={14} className="text-slate-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                  {isHi ? "EN" : "HI"}
                </span>
              </button>

              <a 
                href="#contact" 
                className={`relative hidden sm:flex items-center gap-2 bg-slate-900 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 overflow-hidden group ${
                  scrolled ? "px-6 py-3" : "px-8 py-4 shadow-xl shadow-slate-200"
                }`}
              >
                <span className="relative z-10">{isHi ? "जुड़ें" : "Join Now"}</span>
                <Heart size={12} className="relative z-10 group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-r from-rainBlue to-rainOrange opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* MOBILE TOGGLE */}
              <button
                className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all ${scrolled ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'} rounded-full`}
                onClick={() => setOpen(true)}
              >
                <div className="w-4 h-0.5 bg-current" />
                <div className="w-2 h-0.5 bg-current ml-auto mr-3" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 📱 MOBILE OVERLAY: Full Screen Dreamy Glass */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-white/90 backdrop-blur-2xl flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-black text-xl tracking-tighter">H2O</span>
              <button 
                onClick={() => setOpen(false)}
                className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-4xl font-extralight tracking-tighter text-slate-900 flex items-center justify-between group"
                >
                  {item.label}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-rainOrange" />
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-slate-100">
               <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Foundation Hub</p>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-rainBlue/10 flex items-center justify-center text-rainBlue">FB</div>
                  <div className="w-10 h-10 rounded-full bg-rainOrange/10 flex items-center justify-center text-rainOrange">IG</div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
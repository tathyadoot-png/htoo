"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import logo from "@/assets/logo.jpeg"; //

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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.2 }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: isHi ? "होम" : "Home", color: "bg-red-500" },
    { id: "about", label: isHi ? "परिचय" : "About", color: "bg-orange-500" },
    { id: "services", label: isHi ? "कार्य" : "Services", color: "bg-yellow-500" },
    { id: "impact", label: isHi ? "प्रभाव" : "Impact", color: "bg-green-500" },
    { id: "join-us", label: isHi ? "जुड़ें" : "Join Us", color: "bg-blue-500" },
    { id: "contact", label: isHi ? "संपर्क" : "Contact", color: "bg-purple-500" },
  ];

  return (
    <header 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className={`container mx-auto px-4 transition-all duration-700 ${
        scrolled ? "max-w-6xl" : "max-w-full"
      }`}>
        <div className={`flex items-center justify-between px-8 py-3 rounded-2xl transition-all duration-700 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100" 
            : "bg-transparent"
        }`}>
          
          {/* 🏢 LOGO AREA (Fixed with standard img tag) */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 relative transition-transform duration-500 group-hover:scale-110">
              <img 
                src={logo} 
                alt="HTO Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col border-l border-slate-200 pl-4">
              <span className="font-black text-slate-900 text-xl tracking-tighter leading-none uppercase">
                H2O <span className="text-slate-400">Foundation</span>
              </span>
              <div className="flex gap-1.5 mt-1.5">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                 <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
            </div>
          </div>

          {/* 🧭 NAV ITEMS WITH COLOR ACCENTS */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-5 py-2 group flex flex-col items-center"
              >
                <span className={`text-sm font-bold tracking-widest transition-colors ${scrolled ? 'text-slate-600 group-hover:text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                  {item.label}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 mt-1`} />
              </a>
            ))}
          </nav>

          {/* ⚡ ACTION ZONE */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLang(isHi ? "en" : "hi")}
              className="hidden sm:block text-[10px] font-black tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors uppercase"
            >
              {isHi ? "English" : "हिंदी"}
            </button>

            <a 
              href="#join-us" 
              className="relative group bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] overflow-hidden transition-all active:scale-95 shadow-lg shadow-slate-200"
            >
              <span className="relative z-10">{isHi ? "जुड़ें" : "Join Us"}</span>
              <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 bg-slate-50 rounded-xl"
              onClick={() => setOpen(!open)}
            >
              <div className={`w-5 h-0.5 bg-slate-900 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-5 h-0.5 bg-slate-900 transition-all ${open ? "opacity-0" : ""}`} />
              <div className={`w-3 h-0.5 bg-slate-900 transition-all ml-auto ${open ? "-rotate-45 -translate-y-2 !w-5" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
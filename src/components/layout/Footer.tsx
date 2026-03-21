"use client";
import type { Lang } from "@/layouts/MainLayout";
import logo from "@/assets/SociyoLogo.png";
import { ArrowUpRight, Heart, Globe, Instagram, Twitter, Facebook, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer = ({ lang }: { lang: Lang }) => {
  const isHi = lang === "hi";

  const navLinks = [
    { label: isHi ? "होम" : "Home", path: "#home" },
    { label: isHi ? "परिचय" : "About", path: "#about" },
    { label: isHi ? "कार्य" : "Services", path: "#services" },
    { label: isHi ? "प्रभाव" : "Impact", path: "#impact" },
    { label: isHi ? "जुड़ें" : "Join Us", path: "#join-us" },
    { label: isHi ? "संपर्क" : "Contact", path: "#contact" },
  ];

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-slate-100">
      
      {/* 🌸 Soft Pastel Glows (For the Colorful feel) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rainBlue/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rainOrange/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* ✨ Brand Identity Section */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
              <Sparkles size={14} className="text-rainOrange" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Helping Hands, Changing Lives
              </span>
            </div>

            <h2 className="text-3xl font-light text-slate-800 leading-tight mb-6">
              {isHi ? "हेल्प टू अडर " : "Help To Other "} 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rainBlue via-rainGreen to-rainOrange">
                Foundation
              </span>
            </h2>
            
            <p className="text-slate-500 font-medium max-w-sm leading-relaxed text-sm">
              {isHi 
                ? "हमारा मिशन समाज के हर वर्ग तक सेवा और सहयोग पहुँचाना है।" 
                : "Our mission is to bring service and support to every section of society."}
            </p>

            <div className="flex gap-4 mt-10">
               {[Instagram, Twitter, Facebook].map((Icon, i) => (
                 <motion.a 
                   key={i} 
                   whileHover={{ y: -5, color: "#F97316" }}
                   href="#" 
                   className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 transition-colors"
                 >
                   <Icon size={18} />
                 </motion.a>
               ))}
            </div>
          </div>

          {/* 🧭 Navigation with Colorful Underlines */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.path}
                  className="group flex flex-col gap-1"
                >
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                    {link.label}
                  </span>
                  <div className="w-0 h-[2px] bg-gradient-to-r from-rainBlue via-rainGreen to-rainOrange transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 💊 The "Premium Pill" Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-2 pl-8 pr-2 rounded-full bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 py-2 md:py-0">
             <Heart size={16} className="text-rainOrange" fill="#F97316" />
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
               © {new Date().getFullYear()} {isHi ? "सर्वाधिकार सुरक्षित" : "All Rights Reserved"}
             </p>
          </div>

          <a
            href="https://thesociyo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-between gap-8 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-100 transition-all group"
          >
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
              Digital Partner
            </span>

            <div className="flex items-center gap-4">
              <img
                src={logo || logo}
                alt="The Sociyo"
                className="h-5 w-auto grayscale group-hover:grayscale-0 transition-all"
              />
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-gradient-to-br from-rainBlue via-rainGreen to-rainOrange transition-all">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </div>
          </a>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
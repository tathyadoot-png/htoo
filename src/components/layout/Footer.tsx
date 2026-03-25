"use client";
import type { Lang } from "@/layouts/MainLayout";
import logo from "@/assets/SociyoLogo.png";
import { ArrowUpRight, Heart, Globe, Instagram, Twitter, Facebook, Sparkles, Youtube } from "lucide-react";
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

  const socials = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/h2oconnects" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/h2oconnects" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/h2oconnects" },
  { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/@h2oconnects" },
];

  return (
    <footer className="relative bg-white pt-7 pb-7 overflow-hidden border-t border-slate-100">
      
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
              {isHi ? "Help To Others " : "Help To Others "} 
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
  {socials.map((item, i) => {
    const Icon = item.icon;
    return (
      <motion.a
        key={i}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, color: "#F97316" }}
        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 transition-colors hover:text-primary"
      >
        <Icon size={18} />
      </motion.a>
    );
  })}
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
                  <span className="text-[13px] font-semibold text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">
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
          className="mt-10 p-2 pl-8 pr-2 rounded-full bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 py-2 md:py-0">
            
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
               © {new Date().getFullYear()} {isHi ? "सर्वाधिकार सुरक्षित" : "All Rights Reserved"}
             </p>
          </div>

          <a
            href="https://thesociyo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-between gap-8 bg-gray-600 px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-100 transition-all group"
          >
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
              Digital Partner
            </span>

            <div className="flex items-center gap-4">
              <img
                src={logo || logo}
                alt="The Sociyo"
                className="h-11 w-auto "
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

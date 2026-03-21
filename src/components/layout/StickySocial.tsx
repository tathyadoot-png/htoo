"use client";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const StickySocial = () => {
  const socials = [
    { 
      name: "Facebook",
      icon: Facebook, 
      href: "https://www.facebook.com/h2oconnects", 
      color: "#3B82F6", // rainBlue
      bg: "bg-blue-500/5", 
      border: "hover:border-blue-500/50" 
    },
    { 
      name: "Instagram",
      icon: Instagram, 
      href: "https://www.instagram.com/h2oconnects", 
      color: "#E4405F", 
      bg: "bg-pink-500/5", 
      border: "hover:border-pink-500/50" 
    },
    { 
      name: "X",
      icon: Twitter, 
      href: "https://x.com/h2oconnects", 
      color: "#0F1419", 
      bg: "bg-slate-500/5", 
      border: "hover:border-slate-900/50" 
    },
    { 
      name: "Youtube",
      icon: Youtube, 
      href: "https://www.youtube.com/@h2oconnects", 
      color: "#F97316", // rainOrange
      bg: "bg-orange-500/5", 
      border: "hover:border-orange-500/50" 
    },
  ];

  return (
    <div className="fixed z-[998] 
      bottom-24 right-4 
      md:right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto"
    >
      {/* 🌈 The Modern Dock */}
      <div className="relative group/dock bg-white/60 backdrop-blur-2xl border border-white/40 
        p-2 md:p-3 rounded-full md:rounded-[2.5rem] 
        shadow-[0_20px_50px_rgba(0,0,0,0.05)] 
        flex flex-col gap-3 md:gap-5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
      >
        
        {/* Decorative Rainbow Line on the side */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-rainBlue via-rainGreen to-rainOrange opacity-0 group-hover/dock:opacity-100 transition-opacity hidden md:block" />

        {socials.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative group/icon 
              h-9 w-9 md:h-12 md:w-12 
              flex items-center justify-center rounded-full 
              border border-transparent ${item.bg} ${item.border} 
              transition-all duration-500`}
          >
            {/* Soft Glow Background on Hover */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-100 transition-all duration-500 blur-md"
              style={{ 
                backgroundColor: item.color + "22",
              }}
            />
            
            {/* Icon */}
            <item.icon 
              className="w-4 h-4 md:w-5 md:h-5 relative z-10 transition-all duration-500 group-hover/icon:scale-110" 
              style={{ color: item.color }} 
            />

            {/* 🏷️ Smart Tooltip */}
            <div className="hidden md:block absolute right-full mr-6 px-4 py-2 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover/icon:opacity-100 pointer-events-none transition-all translate-x-4 group-hover/icon:translate-x-0 shadow-xl">
                {item.name}
                {/* Tooltip Arrow */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-8 border-transparent border-l-slate-900" />
            </div>
          </motion.a>
        ))}
        
      </div>
    </div>
  );
};

export default StickySocial;
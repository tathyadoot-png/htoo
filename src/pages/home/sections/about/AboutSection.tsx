"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import bg_hands from "@/assets/about2.avif"; 

export type Lang = "hi" | "en";

interface AboutSectionProps {
  lang: Lang;
}

const AboutSection = ({ lang }: AboutSectionProps) => {
  const isHi = lang === "hi";

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
       <SectionHeading
            subtitle={isHi ? "01. हमारी दृष्टि" : "01. OUR VISION"}
            title={isHi ? "बदलाव की शुरुआत, आपसे और हमसे" : "Initiating Change, Together"}
          />
      {/* 🌈 Subtle Vector Noise & Glow */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-rainBlue/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 🏔️ Header Area */}
 

        {/* 🍱 Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* Main Statement Box (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-slate-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-end relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-rainGreen/20 to-transparent blur-3xl" />
            
            <h3 className="text-3xl md:text-5xl font-light text-white leading-[1.2] relative z-10">
              {isHi 
                ? "“समाज के सर्वांगीण विकास के लिए समर्पित एक संस्था।”" 
                : "“An organization dedicated to the holistic development of society.”"}
            </h3>
            <p className="mt-8 text-slate-400 text-lg font-light max-w-xl relative z-10">
              {isHi 
                ? "शिक्षा, स्वास्थ्य और आत्मनिर्भरता के माध्यम से हम हर वर्ग को सशक्त बनाने के लिए प्रतिबद्ध हैं।" 
                : "Through education, health, and self-reliance, we are committed to empowering every section of society."}
            </p>
          </motion.div>

          {/* Image Frame (Vertical) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 bg-slate-100 rounded-[2.5rem] overflow-hidden relative group"
          >
            <img 
              src={bg_hands} 
              alt="Community" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            {/* Inner Floating Tag */}
            <div className="absolute top-6 right-6 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
              Impact Since 2026
            </div>
          </motion.div>

          {/* Stats/Action Box (Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-4 bg-rainOrange/[0.03] border border-rainOrange/10 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-rainOrange transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-full border border-rainOrange/20 flex items-center justify-center group-hover:border-white transition-colors">
               <div className="w-2 h-2 rounded-full bg-rainOrange group-hover:bg-white" />
            </div>
            <div>
              <h4 className="text-4xl font-black text-slate-900 group-hover:text-white transition-colors">100%</h4>
              <p className="text-sm font-bold text-slate-500 group-hover:text-white/80 uppercase tracking-widest mt-2">Transparency</p>
            </div>
          </motion.div>

          {/* Text Content Box (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 bg-slate-50 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center border border-slate-100"
          >
            <p className="text-xl text-slate-600 font-light leading-relaxed">
              {isHi 
                ? "सामूहिक सहयोग और सकारात्मक सोच के माध्यम से ही एक बेहतर और विकसित समाज का निर्माण संभव है। हमारा लक्ष्य आत्मनिर्भरता है।" 
                : "A better and developed society is possible only through collective cooperation and positive thinking. Our goal is self-reliance."}
            </p>
            
            <button className="whitespace-nowrap px-10 py-5 bg-white border border-slate-200 rounded-full text-slate-900 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-rainBlue hover:text-white hover:border-rainBlue transition-all shadow-sm">
               {isHi ? "हमसे जुड़ें" : "JOIN THE CAUSE"}
            </button>
          </motion.div>

        </div>
      </div>

      {/* 🏔️ Aesthetic Side Text */}
      <div className="absolute left-[-5%] bottom-20 rotate-90 opacity-[0.02] select-none pointer-events-none hidden xl:block">
        <span className="text-[12vw] font-black tracking-tighter uppercase">Empowerment</span>
      </div>

    </section>
  );
};

export default AboutSection;
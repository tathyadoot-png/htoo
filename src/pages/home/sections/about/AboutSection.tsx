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
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      
      {/* 🧼 CLEAN BACKGROUND: Only Soft Glows, No Noise */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-rainBlue/[0.04] rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-rainOrange/[0.03] rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <SectionHeading
          subtitle={isHi ? "01. हमारी दृष्टि" : "01. OUR VISION"}
          title={isHi ? "बदलाव की शुरुआत, आपसे और हमसे" : "Initiating Change, Together"}
        />

        {/* 🍱 Clean Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16 md:mt-24">
          
          {/* Main Statement Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0F172A] rounded-[3rem] p-10 md:p-16 flex flex-col justify-end relative overflow-hidden shadow-2xl shadow-slate-200"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-rainBlue/10 to-transparent blur-[60px]" />
            
            <h3 className="text-3xl md:text-5xl font-normal text-white leading-[1.25] relative z-10 tracking-tight italic">
              {isHi 
                ? "“समाज के सर्वांगीण विकास के लिए समर्पित एक संस्था।”" 
                : "“An organization dedicated to the holistic development of society.”"}
            </h3>
            <p className="mt-8 text-slate-400 text-lg md:text-xl font-light max-w-xl relative z-10">
              {isHi 
                ? "शिक्षा, स्वास्थ्य और आत्मनिर्भरता के माध्यम से हम हर वर्ग को सशक्त बनाने के लिए प्रतिबद्ध हैं।" 
                : "Through education, health, and self-reliance, we are committed to empowering every section of society."}
            </p>
          </motion.div>

          {/* Image Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 min-h-[350px] bg-slate-50 rounded-[3rem] overflow-hidden relative group border border-slate-100"
          >
            <img 
              src={bg_hands} 
              alt="Community Support" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 right-6 px-5 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
              Impact Since 2026
            </div>
          </motion.div>

          {/* Stats Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white border border-slate-100 rounded-[3rem] p-12 flex flex-col justify-between hover:shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-rainOrange/10 flex items-center justify-center">
               <div className="w-3 h-3 rounded-full bg-rainOrange animate-pulse" />
            </div>
            <div>
              <h4 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">100%</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-3">Transparency</p>
            </div>
          </motion.div>

          {/* Action Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-8 bg-slate-50 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center border border-slate-100"
          >
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed flex-1">
              {isHi 
                ? "सामूहिक सहयोग और सकारात्मक सोच के माध्यम से एक बेहतर समाज का निर्माण संभव है।" 
                : "A better society is possible only through collective cooperation and positive thinking."}
            </p>
            
            <button className="w-full md:w-auto px-12 py-6 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-rainBlue transition-all shadow-xl active:scale-95">
               {isHi ? "हमसे जुड़ें" : "JOIN THE CAUSE"}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
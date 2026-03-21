"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { Heart, Users, ArrowRight } from "lucide-react";
import kids from "@/assets/joinus.png";

export type Lang = "hi" | "en";

interface CTASectionProps {
  lang: Lang;
}

const JoinUsSection = ({ lang }: CTASectionProps) => {
  const isHi = lang === "hi";
  const containerRef = useRef(null);

  // 🎢 Parallax Effect for Background Image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="py-16">
     <SectionHeading
              subtitle={isHi ? "04. आपका सहयोग" : "04. GET INVOLVED"}
              title={isHi ? "बदलाव का हिस्सा बनें" : "Be the Change You Want to See"}
            />
    <section ref={containerRef} className="relative w-full  overflow-hidden bg-slate-900">
      
      {/* 🖼️ Background Image with Parallax & Overlay */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -z-0">
        <img 
          src={kids} 
          alt="Kids" 
          className="w-full h-full object-cover opacity-50 grayscale-[0.3]"
        />
        {/* 🌚 Multi-layer Gradient Overlay for Text Readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80" /> */}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 🏔️ Full Width Heading Area */}
       
        {/* 🍱 Content Card: Modern Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative max-w-5xl mx-auto  p-10 md:p-20 overflow-hidden  "
        >
          {/* Subtle Internal Glow */}


          <div className="flex flex-col items-center text-center">
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl shadow-inner flex items-center justify-center text-rainOrange mb-10 border border-white/20"
            >
              <Heart size={40} fill="currentColor" className="drop-shadow-[0_0_15px_rgba(255,100,0,0.5)]" />
            </motion.div>

            <p className="text-white text-xl md:text-2xl font-light max-w-3xl leading-relaxed mb-12">
              {isHi
                ? "आपका छोटा सा सहयोग किसी के जीवन में बड़ा बदलाव ला सकता है। हमारे साथ जुड़ें और एक बेहतर समाज के निर्माण में अपना योगदान दें।"
                : "Your small contribution can ignite a massive change. Join our community of volunteers and help us build a more compassionate world."}
            </p>

            {/* ⚡ Strategic Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="group relative px-12 py-5 bg-white rounded-full overflow-hidden flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rainBlue via-rainGreen to-rainOrange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 text-slate-900 group-hover:text-white text-[11px] font-black uppercase tracking-[0.4em] transition-colors">
                  {isHi ? "संपर्क करें" : "CONTACT US"}
                </span>
                <ArrowRight size={18} className="relative z-10 text-slate-900 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-12 py-5 bg-transparent border-2 border-white/20 rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all group"
              >
                <Users size={18} className="text-rainGreen group-hover:scale-110 transition-transform" />
                <span className="text-white text-[11px] font-black uppercase tracking-[0.4em]">
                  {isHi ? "स्वयंसेवक बनें" : "BECOME A VOLUNTEER"}
                </span>
              </motion.a>
            </div>

            {/* 📈 Clean Stats Bar */}
            <div className="mt-16 pt-12 border-t border-white/10 w-full flex flex-wrap justify-center gap-16">
               <div className="text-center">
                  <span className="block text-3xl font-black text-white leading-none">500+</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mt-3 block">Helpers</span>
               </div>
               <div className="text-center">
                  <span className="block text-3xl font-black text-white leading-none">12K+</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mt-3 block">Smiles</span>
               </div>
               <div className="text-center">
                  <span className="block text-3xl font-black text-white leading-none">24/7</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mt-3 block">Support</span>
               </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* 🏔️ Decorative Side Label */}
      <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 rotate-90 hidden 2xl:block">
        <span className="text-[10vw] font-black text-white/[0.03] leading-none uppercase select-none">Impact</span>
      </div>

    </section>
    </div>
  );
};

export default JoinUsSection;
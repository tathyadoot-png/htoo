"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bg from "@/assets/Ai_bg.png"; //

const Hero = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🚀 Landing Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(".bg-image", 
        { scale: 1.2, filter: "blur(10px)" }, 
        { scale: 1, filter: "blur(0px)", duration: 2 }
      )
      .from(".hero-title", { y: 100, opacity: 0, duration: 1.2 }, "-=1.5")
      .from(".hero-desc", { y: 50, opacity: 0, duration: 1 }, "-=0.8")
      .from(".hero-btns", { scale: 0.8, opacity: 0, duration: 0.8 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* 🖼️ BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bg} 
          alt="HTO Foundation" 
          className="bg-image w-full h-full object-cover opacity-90" 
        />
        {/* Subtle Minimal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Minimal Label */}
          <div className="hero-desc overflow-hidden mb-6">
            <span className="inline-block py-1 px-4 rounded-full border border-slate-200 text-xs font-bold tracking-[0.3em] text-slate-500 uppercase bg-white/50 backdrop-blur-sm">
              Helping Hands • Global Impact
            </span>
          </div>

          {/* Minimal but Bold Title (Smaller size) */}
          <div className="hero-title overflow-hidden mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight py-6">
              {isHi ? (
                <>
                  एक बेहतर <span className="text-rainbow">कल </span>की <br />
                  शुरुआत <span className="text-rainbow">आज</span> से
                </>
              ) : (
                <>
                  Designing a <span className="text-rainbow">Better Future</span> <br />
                  Together
                </>
              )}
            </h1>
          </div>

          {/* Refined Description */}
          <div className="hero-desc overflow-hidden mb-10">
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              {isHi 
                ? "H2O फाउंडेशन के माध्यम से हम शिक्षा और स्वास्थ्य में बदलाव ला रहे हैं। एक छोटा सा कदम, एक बड़ी मुस्कान।"
                : "Transforming lives through education and healthcare. Join us in creating a legacy of hope and empowerment."}
            </p>
          </div>

          {/* Minimal Buttons */}
          <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="btn-rainbow px-12 py-4 shadow-lg shadow-rainBlue/20">
              {isHi ? "जुड़ें हमारे साथ" : "Support Our Cause"}
            </button>
            
            <button className="px-10 py-4 text-slate-900 font-bold flex items-center gap-2 group hover:text-rainOrange transition-colors">
              {isHi ? "हमारी कहानी" : "Our Journey"}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-900 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
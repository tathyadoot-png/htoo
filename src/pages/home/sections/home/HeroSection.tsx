"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bg from "@/assets/Ai_bg.png";

const Hero = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(".bg-image", 
        { scale: 1.2, filter: "blur(10px)" }, 
        { scale: 1, filter: "blur(0px)", duration: 2 }
      )
      .from(".hero-label", { y: 20, opacity: 0, duration: 0.8 }, "-=1.5")
      .from(".hero-title", { y: 60, opacity: 0, duration: 1.2 }, "-=1.2")
      .from(".hero-desc", { y: 30, opacity: 0, duration: 1 }, "-=0.8")
      .from(".hero-btns", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-16">
      
      {/* BACKGROUND IMAGE & OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bg} 
          alt="HTO Foundation" 
          className="bg-image w-full h-full object-cover opacity-70 md:opacity-90" 
        />
        {/* Responsive Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-white/90 md:from-white/60 md:via-transparent md:to-white/80" /> */}
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Refined Label */}
          <div className="hero-label mb-6 md:mb-4">
            <span className="inline-block py-1.5 px-5 rounded-full border border-slate-200/60 text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase bg-white/40 backdrop-blur-md shadow-sm">
              Helping Hands • Global Impact
            </span>
          </div>

          {/* Optimized Title for Mobile/Desktop */}
          <div className="hero-title mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] md:py-6">
              {isHi ? (
                <>
                  एक बेहतर <span className="text-rainbow">कल</span> की <br className="hidden sm:block" />
                  शुरुआत <span className="text-rainbow">आज</span> से
                </>
              ) : (
                <>
                  Designing a <span className="text-rainbow">Better Future</span> <br className="hidden sm:block" />
                  Together
                </>
              )}
            </h1>
          </div>

          {/* Balanced Description */}
          <div className="hero-desc mb-10 md:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed px-2">
              {isHi 
                ? "H2O फाउंडेशन के माध्यम से हम शिक्षा और स्वास्थ्य में बदलाव ला रहे हैं। एक छोटा सा कदम, एक बड़ी मुस्कान।"
                : "Transforming lives through education and healthcare. Join us in creating a legacy of hope and empowerment."}
            </p>
          </div>

          {/* Action-Oriented Buttons (Full width on mobile) */}
          <div className="hero-btns flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button className="btn-rainbow w-full sm:w-auto px-10 md:px-12 py-4 shadow-lg shadow-rainBlue/20 active:scale-95 transition-transform">
              {isHi ? "जुड़ें हमारे साथ" : "Support Our Cause"}
            </button>
            
            {/* <button className="w-full sm:w-auto px-8 md:px-10 py-4 text-slate-900 font-bold flex items-center justify-center gap-2 group hover:text-rainOrange transition-colors">
              {isHi ? "हमारी कहानी" : "Our Journey"}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button> */}
          </div>

        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-900 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
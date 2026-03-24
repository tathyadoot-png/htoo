import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context((self) => {
      const q = self.selector;

      const connector = q(".connector-line");
      const reveal = q(".reveal-up");

      // 🔥 Connector line animation
      if (connector.length) {
        gsap.from(connector, {
          width: 0,
          opacity: 0,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          },
        });
      }

      // 🔥 Text reveal animation
      if (reveal.length) {
        gsap.from(reveal, {
          y: 60,
          opacity: 0,
          stagger: 0.18,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert(); // ✅ important fix
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full lg:w-[90%] mx-auto mb-12 md:mb-20 px-4 md:px-8 lg:px-12 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 lg:gap-12">
        
        {/* LEFT */}
        <div className="flex-shrink-0 md:max-w-[60%] lg:max-w-none">
          <div className="py-2">
            <h2 className="reveal-up py-2 font-[Gotu] text-2xl md:text-3xl lg:text-4xl font-[1000] text-secondary leading-[0.9] md:leading-[0.85] uppercase">
              {title}
            </h2>
          </div>
        </div>

        {/* MIDDLE LINE */}
        <div className="hidden md:block flex-grow mb-4 lg:mb-8">
          <div className="connector-line h-[2px] w-full bg-gradient-to-r from-primary to-green" />
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-auto lg:w-1/3 md:pb-3 lg:pb-6">
          <div className="overflow-hidden">
            {subtitle && (
              <p className="reveal-up font-[Poppins] py-2 text-xs md:text-sm lg:text-lg font-medium uppercase text-green mb-2 lg:mb-4 leading-tight">
                {subtitle}
              </p>
            )}

            <div className="reveal-up flex items-center gap-2 lg:gap-3">
              <span className="h-px w-6 lg:w-10 bg-secondary/30" />
              <span className="text-[8px] lg:text-[10px] font-bold text-primary uppercase whitespace-nowrap">
                Service • Support • Dedication
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 PREMIUM UNDERLINE ANIMATION */}
      <div className="mt-6 lg:mt-10 w-full h-[1px] bg-border relative overflow-hidden">
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "30%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute left-0 top-0 h-full bg-primary shadow-[0_0_12px_rgba(228,107,46,0.6)]"
        />
      </div>
    </div>
  );
};

export default SectionHeading;
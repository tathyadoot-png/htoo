"use client";
import { motion, Variants } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import {
  GraduationCap,
  HeartHandshake,
  Users,
  Briefcase,
  ShieldPlus,
  HeartPulse,
  Handshake,
  Accessibility,
  School,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

export type Lang = "hi" | "en";

interface ServicesSectionProps {
  lang: Lang;
}

const ServicesSection = ({ lang }: ServicesSectionProps) => {
  const isHi = lang === "hi";

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const servicesData = [
    {
      icon: <Users size={28} />,
      title: isHi ? "समाज का सर्वांगीण विकास" : "Holistic Social Development",
      desc: isHi ? "शिक्षा, स्वास्थ्य और रोजगार के माध्यम से सशक्तिकरण।" : "Empowerment through education, health, and employment.",
      accent: "bg-rainBlue",
      glow: "shadow-rainBlue/20"
    },
    {
      icon: <GraduationCap size={28} />,
      title: isHi ? "शिक्षा प्रोत्साहन" : "Education & Talent",
      desc: isHi ? "प्रतियोगिताओं का आयोजन और शैक्षणिक विकास।" : "Organizing competitions and educational growth.",
      accent: "bg-rainGreen",
      glow: "shadow-rainGreen/20"
    },
    {
      icon: <ShieldPlus size={28} />,
      title: isHi ? "महिला सशक्तिकरण" : "Women Empowerment",
      desc: isHi ? "सुरक्षा और रोजगार के माध्यम से महिलाओं को शक्ति।" : "Empowering women through safety and jobs.",
      accent: "bg-rainOrange",
      glow: "shadow-rainOrange/20"
    },
    {
      icon: <HeartPulse size={28} />,
      title: isHi ? "स्वास्थ्य सेवा" : "Health & Wellness",
      desc: isHi ? "निःशुल्क स्वास्थ्य शिविर और नशामुक्ति कार्यक्रम।" : "Free health camps and de-addiction programs.",
      accent: "bg-rainBlue",
      glow: "shadow-rainBlue/20"
    },
    {
      icon: <Briefcase size={28} />,
      title: isHi ? "कौशल विकास" : "Skill Development",
      desc: isHi ? "सिलाई, कंप्यूटर और हस्तशिल्प प्रशिक्षण।" : "Vocational training in sewing and computers.",
      accent: "bg-rainGreen",
      glow: "shadow-rainGreen/20"
    },
    {
      icon: <Handshake size={28} />,
      title: isHi ? "सामाजिक समरसता" : "Social Harmony",
      desc: isHi ? "सामूहिक विवाह के माध्यम से एकता को बढ़ावा।" : "Promoting unity through mass marriages.",
      accent: "bg-rainOrange",
      glow: "shadow-rainOrange/20"
    },
    {
      icon: <Accessibility size={28} />,
      title: isHi ? "दिव्यांग सहायता" : "Differently-abled Support",
      desc: isHi ? "विशेष शिक्षा और स्वरोजगार के नए अवसर।" : "Special education and self-employment.",
      accent: "bg-rainBlue",
      glow: "shadow-rainBlue/20"
    },
    {
      icon: <Megaphone size={28} />,
      title: isHi ? "सामाजिक जागरूकता" : "Social Awareness",
      desc: isHi ? "कुरीतियों के खिलाफ सांस्कृतिक अभियान।" : "Cultural campaigns against social evils.",
      accent: "bg-rainGreen",
      glow: "shadow-rainGreen/20"
    },
  ];

  return (
    <section className="relative w-full py-6 bg-[#fafafa] overflow-hidden">
       <SectionHeading
              subtitle={isHi ? "02. हमारे सेवा कार्य" : "02. WHAT WE DO"}
              title={isHi ? "समाज सेवा के विविध आयाम" : "Diverse Dimensions of Service"}
            />
      {/* 🌀 Background "Ink Blots" */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rainBlue/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rainOrange/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
       

        {/* 🧩 Interactive Liquid Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative h-full min-h-[320px] bg-white rounded-[2.5rem] p-10 flex flex-col justify-between border border-slate-100 hover:border-transparent transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)]"
            >
              {/* 🌈 Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 bg-gradient-to-br from-white to-slate-50`} />

              <div>
                {/* Icon with Dynamic Accent */}
                <div className={`w-14 h-14 rounded-2xl ${item.accent} flex items-center justify-center text-white shadow-lg ${item.glow} group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>

                <h3 className="mt-8 text-xl font-black text-slate-800 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner Arrow */}
              <div className="flex justify-end mt-6">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ⚡ Strategic Footer Button */}
        <div className="mt-24 flex flex-col items-center">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12" />
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-5 bg-slate-900 rounded-full overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rainBlue via-rainGreen to-rainOrange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 text-white text-[10px] font-black uppercase tracking-[0.4em]">
              {isHi ? "हमारे मिशन में शामिल हों" : "JOIN OUR MISSION"}
            </span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
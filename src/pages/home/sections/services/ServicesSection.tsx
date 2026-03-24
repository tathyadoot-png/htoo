"use client";
import { motion, Variants } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import {
  GraduationCap,
  Users,
  Briefcase,
  ShieldPlus,
  HeartPulse,
  Handshake,
  Accessibility,
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const servicesData = [
    {
      icon: <Users size={28} />,
      title: isHi ? "समाज का सर्वांगीण विकास" : "Holistic Social Development",
      desc: isHi ? "शिक्षा, स्वास्थ्य और रोजगार के माध्यम से सशक्तिकरण।" : "Empowerment through education, health, and employment.",
      accent: "bg-rainBlue",
      glow: "shadow-rainBlue/40",
      lightBg: "bg-blue-50/50"
    },
    {
      icon: <GraduationCap size={28} />,
      title: isHi ? "शिक्षा प्रोत्साहन" : "Education & Talent",
      desc: isHi ? "प्रतियोगिताओं का आयोजन और शैक्षणिक विकास।" : "Organizing competitions and educational growth.",
      accent: "bg-rainGreen",
      glow: "shadow-rainGreen/40",
      lightBg: "bg-emerald-50/50"
    },
    {
      icon: <ShieldPlus size={28} />,
      title: isHi ? "महिला सशक्तिकरण" : "Women Empowerment",
      desc: isHi ? "सुरक्षा और रोजगार के माध्यम से महिलाओं को शक्ति।" : "Empowering women through safety and jobs.",
      accent: "bg-rainOrange",
      glow: "shadow-rainOrange/40",
      lightBg: "bg-orange-50/50"
    },
    {
      icon: <HeartPulse size={28} />,
      title: isHi ? "स्वास्थ्य सेवा" : "Health & Wellness",
      desc: isHi ? "निःशुल्क स्वास्थ्य शिविर और नशामुक्ति कार्यक्रम।" : "Free health camps and de-addiction programs.",
      accent: "bg-rainBlue",
      glow: "shadow-rainBlue/40",
      lightBg: "bg-blue-50/50"
    },
    {
      icon: <Briefcase size={28} />,
      title: isHi ? "कौशल विकास" : "Skill Development",
      desc: isHi ? "सिलाई, कंप्यूटर और हस्तशिल्प प्रशिक्षण।" : "Vocational training in sewing and computers.",
      accent: "bg-rainGreen",
      glow: "shadow-rainGreen/40",
      lightBg: "bg-emerald-50/50"
    },
    {
      icon: <Handshake size={28} />,
      title: isHi ? "सामाजिक समरसता" : "Social Harmony",
      desc: isHi ? "सामूहिक विवाह के माध्यम से एकता को बढ़ावा।" : "Promoting unity through mass marriages.",
      accent: "bg-rainOrange",
      glow: "shadow-rainOrange/40",
      lightBg: "bg-orange-50/50"
    },
    {
      icon: <Accessibility size={28} />,
      title: isHi ? "दिव्यांग सहायता" : "Differently-abled Support",
      desc: isHi ? "विशेष शिक्षा और स्वरोजगार के नए अवसर।" : "Special education and self-employment.",
      accent: "bg-rainBlue",
      glow: "shadow-rainBlue/40",
      lightBg: "bg-blue-50/50"
    },
    {
      icon: <Megaphone size={28} />,
      title: isHi ? "सामाजिक जागरूकता" : "Social Awareness",
      desc: isHi ? "कुरीतियों के खिलाफ सांस्कृतिक अभियान।" : "Cultural campaigns against social evils.",
      accent: "bg-rainGreen",
      glow: "shadow-rainGreen/40",
      lightBg: "bg-emerald-50/50"
    },
  ];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* 🌀 Smooth Radial Backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rainBlue/5 rounded-full blur-[100px] -z-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rainOrange/5 rounded-full blur-[100px] -z-0 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle={isHi ? "02. हमारे सेवा कार्य" : "02. WHAT WE DO"}
          title={isHi ? "समाज सेवा के विविध आयाम" : "Diverse Dimensions of Service"}
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {servicesData.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* 🌈 Glass Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* 🛡️ THE ICON: Big, Bold & Glowing */}
                <div className={`w-16 h-16 rounded-[1.25rem] ${item.accent} flex items-center justify-center text-white shadow-2xl ${item.glow} group-hover:scale-110 group-hover:rotate-[8deg] transition-all duration-500`}>
                  {item.icon}
                </div>

                <h3 className="mt-8 text-xl font-black text-slate-800 tracking-tight leading-tight transition-colors group-hover:text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* ↗️ Corner Action Icon */}
              <div className="relative z-10 flex justify-end mt-8">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-slate-900 group-hover:text-white group-hover:scale-110 transition-all duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Decorative Subtle Background Pattern */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 ${item.lightBg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
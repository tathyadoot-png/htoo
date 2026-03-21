"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { MapPin, Mail, Phone, Send, MessageCircle } from "lucide-react";
import type { Lang } from "@/layouts/MainLayout";

interface ContactSectionProps {
  lang: Lang;
}

const ContactSection = ({ lang }: ContactSectionProps) => {
  const isHi = lang === "hi";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "New Contact Message - HTO Foundation";
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.location.href = `mailto:Social.h2ofoundation@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-rainBlue" />,
      title: isHi ? "हमारा पता" : "Our Address",
      detail: "H. I. G. B. TYPE no. 84 sector-a vidhaya nagar, bhopal, mp",
      color: "bg-rainBlue/10",
    },
    {
      icon: <Mail className="text-rainOrange" />,
      title: "Email Us",
      detail: "Social.h2ofoundation@gmail.com",
      color: "bg-rainOrange/10",
    },
    {
      icon: <MessageCircle className="text-rainGreen" />,
      title: isHi ? "जुड़ें" : "Connect",
      detail: isHi ? "समाज सेवा में योगदान दें" : "Contribute to social welfare",
      color: "bg-rainGreen/10",
    },
  ];

  return (
    <>
     <SectionHeading
          subtitle={isHi ? "हमसे संपर्क करें" : "06. GET IN TOUCH"}
          title={isHi ? "सहायता के लिए हाथ बढ़ाएं" : "Contact H2O Foundation"}
        />
    <section className="relative w-full pb-10 bg-slate-50 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rainBlue/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rainOrange/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
       

        <div className="mt-20 grid lg:grid-cols-12 gap-12 items-start">
          
          {/* 📍 LEFT SIDE: Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="max-w-md">
               <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">
                  {isHi ? "हम आपकी सुनने के लिए यहाँ हैं" : "We'd Love to Hear From You"}
               </h3>
               <p className="text-slate-500 font-medium">
                  {isHi 
                    ? "चाहे आप स्वयंसेवक बनना चाहते हों या मदद की ज़रूरत हो, हमसे बेझिझक संपर्क करें।" 
                    : "Whether you want to volunteer or need support, feel free to reach out to us anytime."}
               </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-2xl ${info.color} flex items-center justify-center shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-1">{info.title}</h4>
                    <p className="text-slate-700 font-bold leading-relaxed">{info.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ✉️ RIGHT SIDE: Modern Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.04)] border border-slate-100 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={isHi ? "आपका नाम" : "John Doe"}
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-rainBlue/20 transition-all font-bold text-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder={isHi ? "मोबाइल नंबर" : "+91 00000 00000"}
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-rainBlue/20 transition-all font-bold text-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Your Message</label>
                <textarea
                  name="message"
                  placeholder={isHi ? "आपका संदेश यहाँ लिखें..." : "How can we help you?"}
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-slate-50 border-none rounded-3xl px-6 py-4 outline-none focus:ring-2 focus:ring-rainBlue/20 transition-all font-bold text-slate-700 resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="group relative w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] overflow-hidden shadow-2xl shadow-slate-200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rainBlue via-rainGreen to-rainOrange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isHi ? "संदेश भेजें" : "SEND MESSAGE"}
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
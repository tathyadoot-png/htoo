"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { MapPin, Mail, Send, Phone } from "lucide-react";

export type Lang = "hi" | "en";

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
    const subject = "New Contact Message - H2O Foundation";
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=h2oconnects@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-rainBlue w-5 h-5 md:w-6 md:h-6" />,
      title: isHi ? "हमारा पता" : "Our Address",
      detail: "H. I. G. 84 sector-A Vidhaya Nagar, Bhopal, MP (462026)",
      color: "bg-blue-50",
    },
    {
      icon: <Mail className="text-rainOrange w-5 h-5 md:w-6 md:h-6" />,
      title: "Email Us",
      detail: "h2oconnects@gmail.com",
      color: "bg-orange-50",
    },
    {
      icon: <Phone className="text-rainGreen w-5 h-5 md:w-6 md:h-6" />,
      title: isHi ? "कॉल करें" : "Call Us",
      detail: "+91 95551 06208",
      color: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-rainBlue/5 rounded-full blur-[80px] md:blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-rainOrange/5 rounded-full blur-[80px] md:blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <SectionHeading
          subtitle={isHi ? "06. संपर्क करें" : "06. GET IN TOUCH"}
          title={isHi ? "सहायता के लिए हाथ बढ़ाएं" : "Contact H2O Foundation"}
        />

        <div className="mt-12 md:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Info Cards */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <div className="text-center lg:text-left">
               <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter">
                  {isHi ? "हम आपकी सुनने के लिए यहाँ हैं" : "We'd Love to Hear From You"}
               </h3>
               <p className="text-slate-500 font-medium text-sm md:text-base max-w-lg mx-auto lg:mx-0">
                  {isHi 
                    ? "चाहे आप स्वयंसेवक बनना चाहते हों या मदद की ज़रूरत हो, हमसे बेझिझक संपर्क करें।" 
                    : "Whether you want to volunteer or need support, feel free to reach out to us anytime."}
               </p>
            </div>

            <div className="grid gap-4 md:gap-6">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="flex items-start md:items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 w-full"
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${info.color} flex items-center justify-center shrink-0`}>
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{info.title}</h4>
                    <p className="text-slate-700 font-bold text-sm md:text-lg break-words whitespace-normal leading-snug">
                      {info.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Modern Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 w-full overflow-visible"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-slate-100 space-y-5 md:space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={isHi ? "आपका नाम" : "John Doe"}
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border-none rounded-xl md:rounded-2xl px-5 py-4 md:px-7 md:py-5 outline-none focus:ring-2 focus:ring-rainBlue/20 transition-all font-bold text-slate-700 text-sm md:text-base"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder={isHi ? "मोबाइल नंबर" : "+91 00000 00000"}
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border-none rounded-xl md:rounded-2xl px-5 py-4 md:px-7 md:py-5 outline-none focus:ring-2 focus:ring-rainBlue/20 transition-all font-bold text-slate-700 text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Message</label>
                <textarea
                  name="message"
                  placeholder={isHi ? "आपका संदेश यहाँ लिखें..." : "How can we help you?"}
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-slate-50 border-none rounded-2xl md:rounded-[2rem] px-5 py-4 md:px-7 md:py-5 outline-none focus:ring-2 focus:ring-rainBlue/20 transition-all font-bold text-slate-700 text-sm md:text-base resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="group relative w-full bg-slate-900 text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.3em] overflow-hidden shadow-xl"
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
  );
};

export default ContactSection;
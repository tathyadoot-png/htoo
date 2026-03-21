import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { galleryCategories } from "@/data/galleryData";

const GallerySection = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const isHi = lang === "hi";

  const [activeCat, setActiveCat] =
    useState<typeof galleryCategories[0] | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeCat) {
      timer = setTimeout(() => handleNext(), 5000);
    }
    return () => clearTimeout(timer);
  }, [activeCat, imgIndex]);

  const handleNext = () => {
    if (activeCat) {
      if (imgIndex < activeCat.images.length - 1) {
        setImgIndex((prev) => prev + 1);
      } else {
        closeGallery();
      }
    }
  };

  const handlePrev = () => {
    if (imgIndex > 0) setImgIndex((prev) => prev - 1);
  };

  const closeGallery = () => {
    setActiveCat(null);
    setImgIndex(0);
  };

  return (
    <section id="gallery" className="relative py-24 bg-bg overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[-5%] right-[-2%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-5%] left-[-2%] w-[600px] h-[600px] bg-green/10 rounded-full blur-[140px]" />
      </div>

      <div className="mx-auto w-full md:px-12 lg:px-7">
        
        {/* 🔥 Heading */}
        <SectionHeading
          subtitle={isHi ? "हमारे कार्यों की झलक" : "Glimpses of Our Work"}
          title={isHi ? "सेवा की तस्वीरें" : "Moments of Service"}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px] lg:px-40 px-6 mt-10">
          {galleryCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onClick={() => {
                setActiveCat(cat);
                setImgIndex(0);
              }}
              className={`group relative overflow-hidden rounded-[2.5rem] cursor-pointer bg-white shadow-xl border border-white
                ${idx === 0 ? "md:col-span-7 md:row-span-2" : ""}
                ${idx === 1 ? "md:col-span-5 md:row-span-1" : ""}
                ${idx === 2 ? "md:col-span-2 md:row-span-1" : ""}
                ${idx === 3 ? "md:col-span-3 md:row-span-1" : ""}
              `}
            >
              <img
                src={cat.thumbnail}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={cat.titleEn}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/10 to-transparent opacity-70 group-hover:opacity-90 transition" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition">
                  
                  <div className="max-w-[80%]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase border border-primary/20">
                        {cat.images.length} {isHi ? "तस्वीरें" : "Photos"}
                      </span>
                    </div>

                    <h3 className="text-white text-2xl md:text-3xl font-bold">
                      {isHi ? cat.titleHi : cat.titleEn}
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white text-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              {/* Hover Tag */}
              <div className="absolute top-8 left-8 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Layers size={14} className="text-primary" />
                {isHi ? "देखें" : "View"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 Viewer */}
      <AnimatePresence>
        {activeCat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
          >
            {/* Header */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between px-6 md:px-16 z-[10005]">
              
              <div>
               <h3 className="text-white font-bold text-lg">
  {isHi ? activeCat.titleHi : activeCat.titleEn}
</h3>
                <span className="text-white/40 text-xs">
                  {isHi ? "लाइव झलक" : "Live Preview"}
                </span>
              </div>

              <button
                onClick={closeGallery}
                className="w-12 h-12 bg-white/10 hover:bg-red-500 rounded-xl flex items-center justify-center text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image */}
            <motion.img
              key={imgIndex}
              src={activeCat.images[imgIndex]}
              className="max-w-[90%] max-h-[80vh] object-contain rounded-2xl"
            />

            {/* Caption */}
            <div className="absolute bottom-10 text-center px-6">
              <p className="text-primary text-xs font-bold mb-2">
                {isHi ? "कार्य विवरण" : "Activity Details"} — {imgIndex + 1} /{" "}
                {activeCat.images.length}
              </p>

              <p className="text-white max-w-xl">
                {isHi
                  ? "हेल्प टू अदर फाउंडेशन द्वारा समाज सेवा और जनकल्याण की दिशा में किए गए कार्यों की झलक।"
                  : "A glimpse of social service and welfare activities by Help To Other Foundation."}
              </p>
            </div>

            {/* Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-5 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-5 text-white"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
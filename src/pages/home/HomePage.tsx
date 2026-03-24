import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import HeroSection from "./sections/home/HeroSection";
import AboutSection from "./sections/about/AboutSection";

import GallerySection from "./sections/gallery/GallerySection";
import ContactSection from "./sections/contact/ContactSection";
import ServicesSection from "./sections/services/ServicesSection";
import ImpactSection from "./sections/impact/ImpactSection";
import JoinUsSection from "./sections/joinus/JoinUsSection";
// import HeroSection from "./sections/hero/HeroSection";

const HomePage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <>
      <section id="home">
        <HeroSection lang={lang} />
      </section>
<section id="about">
  <AboutSection lang={lang} />
</section>
<section id="services">
  <ServicesSection lang={lang} />
</section>
{/* <section id="impact">
  <ImpactSection lang={lang} />
</section> */}
<section id="join-us">
  <JoinUsSection lang={lang} />
</section>

{/* <section id="media">
  <GallerySection  />
</section> */}

<section id="contact">
  <ContactSection  lang={lang} />
</section>
    </>
  );
};

export default HomePage;

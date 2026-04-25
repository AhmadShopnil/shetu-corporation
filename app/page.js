import Image from "next/image";
import HomeHeader from "./components/Common/HomeHeader";
import HeroSection from "./components/Home/HeroSection";
import Footer from "./components/Common/Footer";
import ServicesSection from "./components/Home/ServicesSection";
import AboutSection from "./components/Home/AboutSection";
import AgroExcellence from "./components/Home/AgroExcellence";
import WhyChooseSection from "./components/Home/WhyChooseSection";
import SustainableFarming from "./components/Home/SustainableFarming";
import NewsSection from "./components/Home/NewsSection";
import OurImpact from "./components/Home/OurImpact";

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <HeroSection />
      <AboutSection />
      <SustainableFarming />
      <WhyChooseSection />
      <AgroExcellence />

      {/* <ServicesSection /> */}
      <OurImpact />
      <NewsSection />
      <Footer />

    </div>
  );
}

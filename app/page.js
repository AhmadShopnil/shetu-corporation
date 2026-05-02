import Image from "next/image";
import MainHeader from "./components/Common/MainHeader";
import HeroSection from "./components/Home/HeroSection";
import Footer from "./components/Common/Footer";
import ServicesSection from "./components/Home/ServicesSection";
import AboutSection from "./components/Home/AboutSection";
import AgroExcellence from "./components/Home/AgroExcellence";
import WhyChooseSection from "./components/Home/WhyChooseSection";
import SustainableFarming from "./components/Home/SustainableFarming";
import NewsSection from "./components/Home/NewsSection";
import OurImpact from "./components/Home/OurImpact";
import BusinessVerticals from "./components/Home/BusinessVerticals";
import PartnersSection from "./components/Home/PartnersSection";
import ContactSection from "./components/Home/ContactSection";
import MapSection from "./components/Home/MapSection";
import OurPartners from "./components/Home/OurPartners";
import { getBusinessVerticals, getPartners } from "@/lib/fetchApis";

export default async function Home() {
  const verticalsData = await getBusinessVerticals();
  const our_partners = await getPartners()

  return (
    <div className="">
      <MainHeader isHome={true} />

      <HeroSection />
      <OurPartners our_partners={our_partners} />
      {/* <NewsSection /> */}
      <OurImpact />
      <MapSection />
      <BusinessVerticals verticalsData={verticalsData} />
      <PartnersSection />
      <ContactSection />
      {/* <AboutSection /> */}
      {/* <SustainableFarming /> */}
      {/* <WhyChooseSection /> */}
      {/* <AgroExcellence /> */}

      {/* <ServicesSection /> */}


      <Footer />

    </div>
  );
}

import { getSettings } from "@/lib/fetchApis";
import Footer from "../components/Common/Footer";
import MainHeader from "../components/Common/MainHeader";
import ContactContent from "./ContactContent";

export default async function ContactPage() {
  const settings = await getSettings();


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MainHeader isHome={true} />
      <ContactContent settings={settings} />
      <Footer />
    </div>
  );
}

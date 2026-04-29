import Footer from "../components/Common/Footer";
import MainHeader from "../components/Common/MainHeader";
import ContactContent from "./ContactContent";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MainHeader isHome={true} />
      <ContactContent />
      <Footer />
    </div>
  );
}

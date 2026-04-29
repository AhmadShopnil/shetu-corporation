import Footer from "../components/Common/Footer";
import MainHeader from "../components/Common/MainHeader";
import CareerContent from "./CareerContent";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader />
      <CareerContent />
      <Footer />
    </main>
  );
}

import { getSinglePageBySlug } from "@/lib/fetchApis";
import Footer from "../components/Common/Footer";
import MainHeader from "../components/Common/MainHeader";
import CareerContent from "./CareerContent";

export const metadata = {
  title: "Career | Shetu Corporation",
  description: "Explore exciting career opportunities at Shetu Corporation Limited.",
};

export default async function CareerPage() {
  const careerData = await getSinglePageBySlug("career");

  return (
    <main className="min-h-screen bg-white">
      <MainHeader />
      <CareerContent careerData={careerData} />
      <Footer />
    </main>
  );
}

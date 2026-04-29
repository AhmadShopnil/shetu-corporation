import { getLeaderShips } from "@/lib/fetchApis";
import AboutClient from "./AboutClient";
import MainHeader from "../components/Common/MainHeader";
import Footer from "../components/Common/Footer";

export const metadata = {
  title: "About Us | Shetu Corporation",
  description: "Learn more about Shetu Corporation, our vision, mission, and leadership team.",
};

export default async function AboutPage() {
  const teamData = await getLeaderShips();

  return (
    <>
      <MainHeader />
      <AboutClient teamData={teamData} />
      <Footer />
    </>
  );
}

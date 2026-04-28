import { getLeaderShips } from "@/lib/fetchApis";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | Shetu Corporation",
  description: "Learn more about Shetu Corporation, our vision, mission, and leadership team.",
};

export default async function AboutPage() {
  const teamData = await getLeaderShips();

  return <AboutClient teamData={teamData} />;
}

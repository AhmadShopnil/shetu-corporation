import Footer from "../components/Common/Footer";
import MainHeader from "../components/Common/MainHeader";
import TeamList from "./TeamList";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader />

      {/* Hero / Page Title */}
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Meet Our Team
        </h1>
        <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">
          The dedicated professionals behind every green field and successful harvest.
        </p>
      </section>

      <TeamList />

      <Footer />
    </main>
  );
}

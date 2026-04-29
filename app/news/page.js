import Image from "next/image";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import MainHeader from "../components/Common/MainHeader";
import NewsList from "./NewsList";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 text-center flex flex-col justify-center min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-main.jpg"
            alt="News Header Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
            Latest <span className="text-[#9DCC46]">News</span>
          </h1>
          <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
            Stay informed with the latest updates, achievements, and announcements from Shetu Corporation.
          </p>
        </div>
      </section>

      {/* News List area */}
      <NewsList />

      <Footer />
    </main>
  );
}

import Image from "next/image";
import Footer from "../components/Common/Footer";
import MainHeader from "../components/Common/MainHeader";
import GalleryContent from "./GalleryContent";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader />

      {/* Hero / Page Title */}
      <section className="relative pt-40 pb-20 px-6 text-center flex flex-col justify-center min-h-[400px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-main.jpg"
            alt="Gallery Header Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Gallery
          </h1>
          <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto">
            Glimpses of our agricultural journey and impact around the world.
          </p>
        </div>
      </section>

      <GalleryContent />

      <Footer />
    </main>
  );
}

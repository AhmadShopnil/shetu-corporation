import Image from "next/image";
import Footer from "../components/Common/Footer";
import MainHeader from "../components/Common/MainHeader";
import BlogList from "./BlogList";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <MainHeader />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 text-center flex flex-col justify-center min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-main.jpg"
            alt="Blogs Header Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-[0.9]">
              Our <span className="text-[#9DCC46]">Blogs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore the latest trends, expert advice, and innovations shaping the future of global agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Area */}
      <BlogList />

      <Footer />
    </main>
  );
}

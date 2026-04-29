import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Common/Footer";
import { ArrowLeft } from "lucide-react";
import MainHeader from "@/app/components/Common/MainHeader";
import { getSingleBusinessVertical, getBusinessVerticals } from "@/lib/fetchApis";

export async function generateStaticParams() {
  const verticals = await getBusinessVerticals();
  return verticals.map((vertical) => ({
    slug: vertical.slug,
  }));
}

export default async function BusinessVerticalDetails({ params }) {
  const { slug } = await params;
  const vertical = await getSingleBusinessVertical(slug);

  if (!vertical || Object.keys(vertical).length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MainHeader />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src={vertical.featured_image || "/images/service-main.jpg"}
            alt={vertical.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto max-w-[1200px] px-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-[1.1] uppercase tracking-tighter">
                {vertical.name}
              </h1>
              {vertical.sub_title && (
                 <p className="text-xl text-gray-300 mt-6 max-w-2xl font-medium leading-relaxed">
                    {vertical.sub_title}
                 </p>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-[1000px] bg-white rounded-[2.5rem] shadow-xl p-8 md:p-16 -mt-32 relative z-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1.5 w-16 bg-[#9DCC46] rounded-full"></div>
              <h2 className="text-sm font-black text-[#9DCC46] uppercase tracking-[0.3em]">
                Explore Vertical
              </h2>
            </div>

            <div 
              className="prose prose-lg md:prose-xl max-w-none text-gray-600 
              prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-gray-900
              prose-p:leading-relaxed prose-p:mb-8
              prose-strong:text-gray-900 prose-strong:font-black"
              dangerouslySetInnerHTML={{ __html: vertical.description }}
            />

            {/* Optional Call to action */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Interested in our services?</h3>
                <p className="text-gray-500 font-medium">Get in touch with our team to learn more about how we can help.</p>
              </div>
              <Link
                href="/contact"
                className="px-10 py-4 bg-[#9DCC46] text-gray-900 font-black uppercase tracking-widest text-xs rounded-full hover:bg-gray-900 hover:text-white transition-all duration-500 shadow-xl shadow-[#9DCC46]/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

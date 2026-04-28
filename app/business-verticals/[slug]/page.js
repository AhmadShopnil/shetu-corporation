import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { businessVerticalsData } from "../../data/businessVerticals";

import Footer from "../../components/Common/Footer";
import { ArrowLeft } from "lucide-react";
import Header from "@/app/components/Common/Header";

export function generateStaticParams() {
  return businessVerticalsData.map((vertical) => ({
    slug: vertical.slug,
  }));
}

export default async function BusinessVerticalDetails({ params }) {
  const { slug } = await params;
  const vertical = businessVerticalsData.find((v) => v.slug === "manufacturing-formulation");

  if (!vertical) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] w-full">
          <Image
            src={vertical.image}
            alt={vertical.title}
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
              <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
                {vertical.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-[1000px] bg-white rounded-2xl shadow-sm p-8 md:p-12 -mt-24 relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-12 bg-[#9DCC46]"></div>
              <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
                Overview
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed whitespace-pre-line">
                {vertical.description}
              </p>
            </div>

            {/* Optional Call to action */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in our services?</h3>
                <p className="text-gray-500">Get in touch with our team to learn more about how we can help.</p>
              </div>
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#9DCC46] text-white font-semibold rounded-lg hover:bg-[#85b03b] transition-colors shadow-md hover:shadow-lg"
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

import Header from "@/app/components/Common/Header";
import Footer from "@/app/components/Common/Footer";
import ProductDetails from "@/app/components/Product/ProductDetails";
import AgroProductsIntro from "@/app/components/Product/AgroProductsIntro";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  // Demo data matching the requested categories
  const products = {
    'crop-protection': {
      name: "Total Crop Protection",
      category: "Crop Protection",
      shortDesc: "Complete environmental shield for your valuable harvest.",
    },
    'insecticide': {
      name: "Bio-Insecticide Guardian",
      category: "Insecticide",
      shortDesc: "Natural pest control that targets unwanted insects without harming pollinators.",
    },
    'fungicide': {
      name: "Pro-Active Fungicide",
      category: "Fungicide",
      shortDesc: "Triple-action formula to prevent and cure fungal infections in high-humidity climates.",
    },
    'herbicide': {
      name: "Selective Weed Control",
      category: "Herbicide",
      shortDesc: "Removes competing weeds while keeping your crops safe and nourished.",
    },
    'seeds': {
      name: "High-Yield Hybrid Seeds",
      category: "Seeds",
      shortDesc: "Drought-resistant, high-vitality seeds for maximum agricultural performance.",
    },
    'others': {
      name: "Essential Farm Supplements",
      category: "Others",
      shortDesc: "Misc agricultural tools and micro-nutrient boosters.",
    }
  };

  const product = products[slug] || products['crop-protection'];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <AgroProductsIntro />
        <ProductDetails product={product} />
      </div>
      <Footer />
    </main>
  );
}

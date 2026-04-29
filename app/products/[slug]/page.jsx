import MainHeader from "@/app/components/Common/MainHeader";
import Footer from "@/app/components/Common/Footer";
import CategoryProductList from "@/app/components/Product/CategoryProductList";
import { getProductsByCategorySlug, getSingleCategory } from "@/lib/fetchApis";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  // Fetch real data from API
  const categoryData = await getSingleCategory(slug);
  const productsResponse = await getProductsByCategorySlug(slug);
  let products = productsResponse?.data || [];



  return (
    <main className="min-h-screen bg-white">
      <MainHeader />
      <div className="pt-20">
        <CategoryProductList
          category={categoryData}
          products={products}
          slug={slug}
        />
      </div>
      <Footer />
    </main>
  );
}

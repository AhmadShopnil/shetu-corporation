import Header from "./Header";
import HomeHeader from "./HomeHeader";
import { getCategoriesBySlug } from "@/lib/fetchApis";

export default async function MainHeader({ isHome = false }) {
  // Fetch categories server-side
  const categories = await getCategoriesBySlug({ catSlug: 'product-categories' });

  if (isHome) {
    return <HomeHeader productCategories={categories} />;
  }

  return <Header productCategories={categories} />;
}

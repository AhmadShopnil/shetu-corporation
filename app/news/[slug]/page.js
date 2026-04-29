import Footer from "../../components/Common/Footer";
import MainHeader from "../../components/Common/MainHeader";
import NewsDetail from "./NewsDetail";

async function getPost(slug) {
  try {
     const response = await fetch(`https://www.shetu.mathmozo.com/api/v1/post?slug=${slug}`, {
       next: { revalidate: 60 }
     });
     const data = await response.json();
     return data.success ? data.data : null;
  } catch (error) {
    return null;
  }
}

export default async function SingleNewsPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <MainHeader />
        <div className="pt-48 pb-20 text-center container mx-auto">
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">News Story Not Found</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <MainHeader />
      <NewsDetail post={post} />
      <Footer />
    </main>
  );
}

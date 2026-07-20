import products from "@/data";
import Link from "next/link";
import ProductInfo from "@/components/product/ProductInfo";



export default async function ProductDetail({ params }) {

  const { slug, product } = await params;

  const data = products.find(
    item =>
      item.category === slug &&
      item.slug === product
  );

  if (!data) {
    return (
      <div className="py-40 text-center">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6 pt-6 pb-12">

        <Link
        href={`/product/${slug}`}
        className="
          inline-flex
          items-center
          text-sm
          text-gray-500
          hover:text-red-600
          transition
          mb-8
        "
      >
        ← Back to {slug}
      </Link>

        <main>
            <ProductInfo product={data} />
        </main>
      </div>

    </div>
  );

}
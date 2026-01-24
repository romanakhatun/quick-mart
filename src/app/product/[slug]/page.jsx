import { htmlToPlainText } from "@/utils/htmlToPlainText";
import ProductDetailsContent from "@/components/ProductDetailsContent";
import ProductTabs from "@/components/ProductTabs";

// Generate Meta Data
export const generateMetadata = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product/path/${slug}`,
  );
  const data = await res.json();
  const product = data?.data;

  return {
    title: `Quick Mart | ${product.name}`,
    description: htmlToPlainText(product.description),
  };
};

const ProductDetails = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product/path/${slug}`,
  );
  const data = await res.json();
  const product = data?.data;

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="mid-container py-10">
          <ProductDetailsContent product={product} slug={slug} />
          <ProductTabs product={product} />
        </section>
      </main>
    </>
  );
};

export default ProductDetails;

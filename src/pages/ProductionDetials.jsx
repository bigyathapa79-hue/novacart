




import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { products } from "../data/product";
import ProductInfo from "../components/product/ProductInfo";
import SEO from "../components/SEO";

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [
      product.image.startsWith("http")
        ? product.image
        : `${window.location.origin}${product.image}`,
    ],
    description: product.description || `Shop ${product.name} at NovaCart.`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: window.location.href,
    },
  };

  // Product doesn't exist
  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Product Not Found</h1>

          <p className="text-slate-500 mt-3">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            <FaArrowLeft />
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={product.name}
        description={product.description || `Shop ${product.name} at NovaCart.`}
        image={product.image}
        structuredData={productSchema}
      />
      <section className="py-16">
        <div className="container">
          {/* Back Link */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-10"
          >
            <FaArrowLeft />
            Back to Shop
          </Link>

          {/* Product */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="bg-slate-50 rounded-2xl flex items-center justify-center p-10 min-h-112.5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-lg h-100 object-contain"
              />
            </div>

            {/* Info */}
            <ProductInfo product={product} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;



import { products } from "../../../data/product";
import ProductCard from "../../product/ProductCard";

const FeaturedProducts = () => {
  const featured = products.filter((item) => item.featured);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-blue-600 uppercase font-semibold tracking-widest">
            Products
          </span>

          <h2 className="text-4xl font-bold mt-3">Featured Products</h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Explore our hand-picked products selected for quality, style, and
            value.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

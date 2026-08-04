


import { useState } from "react";
import ProductCard from "../../product/ProductCard";
import { products } from "../../../data/product";

const tabs = ["All", "Electronics", "Shoes", "Gaming", "Accessories"];

const BestSeller = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products.filter((item) => item.bestSeller)
      : products.filter(
          (item) => item.bestSeller && item.category === activeTab,
        );

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Heading */}

        <div className="text-center mb-10">
          <span className="text-blue-600 uppercase font-semibold tracking-widest">
            Popular
          </span>

          <h2 className="text-4xl font-bold mt-3">Best Sellers</h2>

          <p className="mt-4 text-slate-600">Shop our most loved products.</p>
        </div>

        {/* Tabs */}

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 hover:bg-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;

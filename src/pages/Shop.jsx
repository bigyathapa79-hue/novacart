import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SEO from "../components/SEO";
import ShopFilters from "../components/shop/ShopFilters";
import ShopHeader from "../components/shop/ShopHeader";
import ShopProducts from "../components/shop/ShopProducts.";
import { products } from "../data/product";

const Shop = () => {
  const [searchParams] = useSearchParams();

  const urlCategory = searchParams.get("category");

  const [category, setCategory] = useState(urlCategory || "All");

  const [sort, setSort] = useState("default");

  

  const filteredProducts = useMemo(() => {
    let result =
      category === "All"
        ? [...products]
        : products.filter(
            (product) =>
              product.category?.toLowerCase() === category?.toLowerCase(),
          );

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, sort]);

  return (
    <>
      <SEO
        title="Shop"
        description="Browse premium electronics, fashion, furniture, gadgets and lifestyle products at NovaCart."
      />
      <SEO
        title="Shop"
        description="Browse premium electronics, fashion, furniture, gadgets and lifestyle products at NovaCart."
      />
      <ShopHeader />

      <section className="py-16">
        <div className="container">
          <ShopFilters
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />

          <ShopProducts products={filteredProducts} />
        </div>
      </section>
    </>
  );
};

export default Shop;

import ProductCard from "../product/ProductCard";

const ShopProducts = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-semibold">No products found</h3>

        <p className="text-slate-500 mt-2">Try selecting another category.</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopProducts;

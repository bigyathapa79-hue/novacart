const ShopHeader = () => {
  return (
    <section className="bg-slate-50 border-b">
      <div className="container py-16 text-center">
        <span className="text-blue-600 font-semibold uppercase tracking-widest">
          NovaCart Store
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
          Shop Our Products
        </h1>

        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Discover quality products across electronics, fashion, gaming,
          accessories, and more.
        </p>
      </div>
    </section>
  );
};

export default ShopHeader;

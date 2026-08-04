const ShopFilters = ({ category, setCategory, sort, setSort }) => {
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Furniture",
    "Shoes",
    "Gaming",
    "Accessories",
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
      {/* Categories */}

      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              category === item
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Sort */}

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="default">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  );
};

export default ShopFilters;

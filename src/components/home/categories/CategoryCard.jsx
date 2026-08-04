const CategoryCard = ({ category }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <img
        src={category.image}
        alt={category.name}
        className="w-24 h-24 object-contain mx-auto"
      />

      <h3 className="mt-5 text-xl font-semibold text-slate-900 group-hover:text-blue-600">
        {category.name}
      </h3>

      <p className="mt-2 text-slate-500">{category.products} Products</p>
    </div>
  );
};

export default CategoryCard;

import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group block"
    >
      <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200 hover:border-blue-500 hover:shadow-lg transition duration-300">
        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-contain p-3 group-hover:scale-110 transition duration-300"
          />
        </div>

        <h3 className="font-semibold text-slate-900 mt-5">{category.name}</h3>

        <p className="text-sm text-slate-500 mt-1">
          {category.products} Products
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;

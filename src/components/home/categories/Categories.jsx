import CategoryCard from "./CategoryCard";
import { categories } from "../../../data/categories";

const Categories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Categories
          </span>

          <h2 className="text-4xl font-bold mt-3">Browse by Categories</h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Discover thousands of premium products across our most popular
            shopping categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

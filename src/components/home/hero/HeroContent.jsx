import { FaStar } from "react-icons/fa";
import Button from "../../ui/Button";

const HeroContent = () => {
  return (
    <div>
      {/* Badge */}
      <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
        New Collection 2026
      </span>

      {/* Heading */}
      <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mt-6">
        Shop Smart.
        <br />
        Live Better.
      </h1>

      {/* Description */}
      <p className="mt-6 text-slate-600 text-lg leading-8 max-w-xl">
        Discover premium gadgets, fashion, furniture, and lifestyle products at
        affordable prices. Quality products delivered right to your doorstep.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        <Button>Shop Now</Button>

        <Button variant="secondary">Explore Products</Button>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-10">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <span className="text-slate-600">4.9 (2,500+ Reviews)</span>
      </div>
    </div>
  );
};

export default HeroContent;

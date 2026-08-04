import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useCart } from "../../context/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}

      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain p-6 group-hover:scale-105 transition duration-300"
        />
      </Link>

      {/* Content */}

      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-blue-600">{product.category}</p>

            <h3 className="font-semibold text-lg mt-1">{product.name}</h3>
          </div>

          <button className="text-slate-400 hover:text-red-500">
            <FaHeart />
          </button>
        </div>

        {/* Rating */}

        <div className="flex mt-3 text-yellow-400">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        {/* Price */}

        <div className="flex justify-between items-center mt-5">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>

          <Button className="px-4 py-2" onClick={() => addToCart(product)}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

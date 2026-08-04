import { useState } from "react";
import { FaHeart, FaMinus, FaPlus, FaStar } from "react-icons/fa";
import Button from "../ui/Button";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };
  

  return (
    <div>
      {/* Category */}
      <p className="text-blue-600 font-medium">{product.category}</p>

      {/* Product Name */}
      <h1 className="text-4xl font-bold text-slate-900 mt-3">{product.name}</h1>

      {/* Rating */}
      <div className="flex items-center gap-3 mt-4">
        <div className="flex text-yellow-400">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <span className="text-slate-500">{product.rating}.0 Rating</span>
      </div>

      {/* Price */}
      <p className="text-3xl font-bold text-blue-600 mt-6">${product.price}</p>

      {/* Description */}
      <p className="text-slate-600 leading-7 mt-6">
        Experience premium quality and modern design with the {product.name}.
        Built for everyday use with excellent performance and reliability.
      </p>

      {/* Quantity */}
      <div className="mt-8">
        <p className="font-medium mb-3">Quantity</p>

        <div className="flex items-center border border-slate-300 rounded-lg w-fit">
          <button
            onClick={decreaseQuantity}
            className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"
          >
            <FaMinus size={12} />
          </button>

          <span className="w-12 text-center">{quantity}</span>

          <button
            onClick={increaseQuantity}
            className="w-10 h-10 flex items-center justify-center hover:bg-slate-100"
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-8">
        <Button onClick={() => addToCart(product, quantity)}>
          Add to Cart
        </Button>

        <button
          onClick={() => {
            if (isInWishlist(product.id)) {
              removeFromWishlist(product.id);
            } else {
              addToWishlist(product);
            }
          }}
          className={`w-12 h-12 border rounded-lg flex items-center justify-center text-xl transition ${
            isInWishlist(product.id)
              ? "text-red-500 border-red-300"
              : "text-slate-500 border-slate-300 hover:text-red-500 hover:border-red-300"
          }`}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;

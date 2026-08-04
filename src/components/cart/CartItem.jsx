import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row gap-5 py-6 border-b border-slate-200">
      {/* Product Image */}

      <div className="w-full sm:w-28 h-28 bg-slate-50 rounded-xl flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain p-3"
        />
      </div>

      {/* Product Info */}

      <div className="flex-1">
        <p className="text-sm text-blue-600">{item.category}</p>

        <h3 className="font-semibold text-lg mt-1">{item.name}</h3>

        <p className="text-blue-600 font-bold mt-2">${item.price}</p>
      </div>

      {/* Quantity */}

      <div className="flex items-center border border-slate-300 rounded-lg h-fit">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-9 h-9 flex items-center justify-center hover:bg-slate-100"
        >
          <FaMinus size={11} />
        </button>

        <span className="w-10 text-center">{item.quantity}</span>

        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-9 h-9 flex items-center justify-center hover:bg-slate-100"
        >
          <FaPlus size={11} />
        </button>
      </div>

      {/* Item Total */}

      <div className="sm:w-24 text-left sm:text-right">
        <p className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 text-sm mt-3 flex items-center gap-2 hover:text-red-600"
        >
          <FaTrash size={12} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

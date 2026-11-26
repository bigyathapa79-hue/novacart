import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

const CartSummary = () => {
  const { cartTotal } = useCart();

const shipping = cartTotal > 5000 ? 0 : 150;
  const total = cartTotal + shipping;

  return (
    <div className="bg-slate-50 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-600">Subtotal</span>

          <span className="font-medium">Rs.{cartTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-600">Shipping</span>

          <span className="font-medium">
            {shipping === 0 ? "Free" : `Rs.Rs.{shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="border-t border-slate-200 pt-4 flex justify-between">
          <span className="font-semibold text-lg">Total</span>

          <span className="font-bold text-xl text-blue-600">
            Rs.{total.toFixed(2)}
          </span>
        </div>
      </div>

      <Link
        to="/checkout"
        className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition mt-6"
      >
        Checkout
      </Link>

      <Link
        to="/shop"
        className="block text-center text-blue-600 mt-4 hover:underline"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;

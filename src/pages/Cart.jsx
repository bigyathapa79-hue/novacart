import { Link } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import SEO from "../components/SEO";

const Cart = () => {
  const { cart } = useCart();

  // Empty Cart
  if (cart.length === 0) {
    return (
      <section className="py-24">
        <div className="container text-center">
          <FaShoppingCart className="mx-auto text-6xl text-slate-300" />

          <h1 className="text-3xl font-bold mt-6">Your Cart is Empty</h1>

          <p className="text-slate-500 mt-3">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title="Shopping Cart"
        description="Review the products in your NovaCart shopping cart."
        noIndex
      />
      <section className="py-16">
        <div className="container">
          {/* Header */}

          <div className="mb-10">
            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Shopping Cart
            </p>

            <h1 className="text-4xl font-bold mt-2">Your Cart</h1>

            <p className="text-slate-500 mt-2">
              Review your items before checkout.
            </p>
          </div>

          {/* Cart */}

          <div className="grid lg:grid-cols-[1fr_380px] gap-10">
            {/* Items */}

            <div className="bg-white border border-slate-200 rounded-2xl px-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Summary */}

            <div>
              <CartSummary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

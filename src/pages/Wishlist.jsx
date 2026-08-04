import { Link } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

import { useWishlist } from "../context/WishListContext";
import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <section className="py-24">
        <div className="container text-center">
          <FaHeart className="mx-auto text-6xl text-slate-300" />

          <h1 className="text-3xl font-bold mt-6">Your Wishlist is Empty</h1>

          <p className="text-slate-500 mt-3">
            Save products you love and find them here later.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaShoppingBag />
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-10">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Wishlist
          </p>

          <h1 className="text-4xl font-bold mt-2">Your Wishlist</h1>

          <p className="text-slate-500 mt-2">
            Products you've saved for later.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
            >
              {/* Image */}

              <div className="bg-slate-50 h-64 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6"
                />
              </div>

              {/* Content */}

              <div className="p-5">
                <p className="text-sm text-blue-600">{product.category}</p>

                <h2 className="font-semibold text-lg mt-1">{product.name}</h2>

                <p className="text-xl font-bold text-blue-600 mt-3">
                  ${product.price}
                </p>

                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="px-4 border border-red-200 text-red-500 rounded-lg hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;

import { useState } from "react";
import { FaBars, FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="NovaCart" className="h-20" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-5">
          <SearchBar />

          <Link
            to="/wishlist"
            className="relative text-slate-700 hover:text-blue-600 transition"
          >
            <FaHeart />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative text-xl hover:text-blue-600">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navbar;

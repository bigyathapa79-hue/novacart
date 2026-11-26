import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">NovaCart</h2>

            <p className="mt-5 leading-7">
              Premium online shopping experience with quality products at
              affordable prices.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/shop">Shop</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Customer Service
            </h3>

            <ul className="mt-5 space-y-3">
              <li>FAQs</li>

              <li>Shipping</li>

              <li>Returns</li>

              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact</h3>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                <span>Kathmandu, Nepal</span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-blue-500" />
                <span>+977 9769732152</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-blue-500" />
                <span>support@novacart.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} NovaCart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

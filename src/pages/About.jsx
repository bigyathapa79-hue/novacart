import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBoxOpen,
  FaShieldAlt,
  FaStar,
  FaTruck,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly and safely to your doorstep.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Shopping",
      description:
        "Shop confidently with a safe and secure shopping experience.",
    },
    {
      icon: <FaStar />,
      title: "Quality Products",
      description:
        "We carefully select products to provide excellent quality and value.",
    },
  ];

  return (
    <>
      {/* Hero */}

      <section className="bg-slate-50 border-b">
        <div className="container py-20 text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            About Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            About NovaCart
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto mt-5">
            Simple shopping, quality products, and a better online shopping
            experience.
          </p>
        </div>
      </section>

      {/* Story */}

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-widest">
                Our Story
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Making Online Shopping Simple
              </h2>

              <p className="text-slate-600 leading-7 mt-6">
                NovaCart was created with a simple idea: online shopping should
                be easy, reliable, and enjoyable. We bring carefully selected
                products together in one convenient place.
              </p>

              <p className="text-slate-600 leading-7 mt-4">
                From everyday essentials to the latest electronics, fashion,
                gaming products, and accessories, our goal is to help customers
                find quality products without unnecessary complexity.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Shop Now
                <FaArrowRight />
              </Link>
            </div>

            {/* Simple Visual */}

            <div className="bg-blue-600 rounded-3xl p-10 text-white">
              <FaBoxOpen className="text-6xl mb-8" />

              <h3 className="text-3xl font-bold">Everything You Need</h3>

              <p className="text-blue-100 mt-4 leading-7">
                Discover products from trusted categories, all in one simple
                shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">10K+</h3>

              <p className="text-slate-600 mt-2">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">500+</h3>

              <p className="text-slate-600 mt-2">Products</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-blue-600">20+</h3>

              <p className="text-slate-600 mt-2">Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Why NovaCart
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Why Choose Us?
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              We focus on making every part of your shopping experience simple
              and reliable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mt-6">{feature.title}</h3>

                <p className="text-slate-600 leading-7 mt-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-20">
        <div className="container">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Shopping?
            </h2>

            <p className="text-slate-300 mt-4">
              Explore our latest products and find something you love.
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Explore Products
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

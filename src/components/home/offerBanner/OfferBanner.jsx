import { FaArrowRight } from "react-icons/fa";
import Button from "../../ui/Button";


const OfferBanner = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center gap-10 p-10 lg:p-16">
            {/* Left Content */}

            <div className="text-white">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm">
                Summer Sale
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold mt-6 leading-tight">
                Up to 50% Off
                <br />
                Premium Products
              </h2>

              <p className="mt-6 text-blue-100 leading-7 max-w-lg">
                Upgrade your lifestyle with premium electronics, fashion,
                furniture, and accessories at unbeatable prices.
              </p>

              <Button className="mt-8  text-blue-600 hover:text-black">
                Shop Now
                <FaArrowRight className="inline ml-2" />
              </Button>
            </div>

            {/* Right Image */}

            <div className="flex justify-center">
              <img
                src="/images/banners/offers.png"
                alt="Offer"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;

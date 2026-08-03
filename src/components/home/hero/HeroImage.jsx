const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Background Circle */}
      <div className="absolute w-80 h-80 lg:w-112.5 lg:h-112.5 bg-blue-100 rounded-full"></div>

      {/* Main Image */}
      <img
        src="/images/hero/hero.png"
        alt="Hero"
        className="relative z-10 w-full max-w-md lg:max-w-lg"
      />

      {/* Discount Card */}
      <div className="absolute top-8 left-0 bg-white rounded-xl shadow-lg p-4 z-20">
        <h3 className="text-2xl font-bold text-blue-600">50%</h3>

        <p className="text-sm text-slate-500">Summer Sale</p>
      </div>

      {/* Free Shipping Card */}
      <div className="absolute bottom-8 right-0 bg-white rounded-xl shadow-lg p-4 z-20">
        <h3 className="font-semibold">Free Shipping</h3>

        <p className="text-sm text-slate-500">On orders over $99</p>
      </div>
    </div>
  );
};

export default HeroImage;

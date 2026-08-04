import BestSeller from "../components/home/bestSeller/BestSeller";
import Categories from "../components/home/categories/Categories";
import FeaturedProducts from "../components/home/featured/FeaturedProducts";
import Hero from "../components/home/hero/Hero";
import Newsletter from "../components/home/newsletter/NewsLetter";
import OfferBanner from "../components/home/offerBanner/OfferBanner";
import Testimonials from "../components/home/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories/>
      <FeaturedProducts/>
      <BestSeller/>
      <OfferBanner/>
      <Testimonials/>
      <Newsletter/>
    </>
  );
};

export default Home;

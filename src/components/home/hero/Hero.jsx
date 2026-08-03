import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />

          <HeroImage />
        </div>

        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;

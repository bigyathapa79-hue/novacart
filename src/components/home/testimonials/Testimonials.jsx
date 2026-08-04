import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-blue-600 uppercase font-semibold tracking-widest">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold mt-3">What Our Customers Say</h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Thousands of happy customers trust NovaCart for quality products and
            reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

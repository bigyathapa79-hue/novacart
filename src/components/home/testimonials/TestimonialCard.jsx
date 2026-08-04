import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition duration-300">
      {/* Rating */}
      <div className="flex text-yellow-400 mb-5">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      {/* Review */}
      <p className="text-slate-600 leading-7">"{testimonial.review}"</p>

      {/* User */}
      <div className="flex items-center gap-4 mt-8">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>

          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

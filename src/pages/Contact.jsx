import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Message sent successfully!");

    reset();
  };

  return (
    <>
      {/* Header */}

      <section className="bg-slate-50 border-b">
        <div className="container py-20 text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Contact NovaCart
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto mt-5">
            Have a question or need help? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}

            <div>
              <span className="text-blue-600 font-semibold uppercase tracking-widest">
                Get In Touch
              </span>

              <h2 className="text-3xl font-bold mt-3">We're Here to Help</h2>

              <p className="text-slate-600 leading-7 mt-5">
                Whether you have a question about a product, an order, or
                anything else, our team is ready to help.
              </p>

              {/* Location */}

              <div className="flex gap-5 mt-10">
                <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold">Our Location</h3>

                  <p className="text-slate-600 mt-1">New York, USA</p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex gap-5 mt-7">
                <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>

                  <p className="text-slate-600 mt-1">+1 234 567 890</p>
                </div>
              </div>

              {/* Email */}

              <div className="flex gap-5 mt-7">
                <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>

                  <p className="text-slate-600 mt-1">support@novacart.com</p>
                </div>
              </div>
            </div>

            {/* Form */}

            <div className="border border-slate-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold">Send Us a Message</h2>

              <p className="text-slate-500 mt-2">
                Fill out the form and we'll get back to you.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
              >
                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? "border-red-500" : "border-slate-300"
                    }`}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? "border-red-500" : "border-slate-300"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="How can we help?"
                    className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      errors.message ? "border-red-500" : "border-slate-300"
                    }`}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

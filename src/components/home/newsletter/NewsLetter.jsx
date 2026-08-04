import { useState } from "react";
import Button from "../../ui/Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-3xl p-10 lg:p-16 text-center">
          <h2 className="text-4xl font-bold text-white">Stay Updated</h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Subscribe to receive exclusive offers, new arrivals, and weekly
            discounts directly in your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white px-5 py-4 rounded-xl outline-none"
            />

            <Button
              type="submit"
              className=" text-blue-600 hover:bg-red-600"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

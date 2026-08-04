import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import SEO from "../components/SEO";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const shipping = cartTotal > 100 ? 0 : 10;
  const total = cartTotal + shipping;

  const onSubmit = async (data) => {
    console.log("Customer:", data);
    console.log("Payment:", paymentMethod);
    console.log("Order Total:", total);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    clearCart();

    navigate("/order-success");
  };

  // Empty cart
  if (cart.length === 0) {
    return (
      <section className="py-24">
        <div className="container text-center">
          <h1 className="text-3xl font-bold">Your Cart is Empty</h1>

          <p className="text-slate-500 mt-3">
            Add some products before proceeding to checkout.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title="Checkout"
        description="Complete your NovaCart order securely."
        noIndex
      />

      <section className="py-16">
        <div className="container">
          {/* Header */}

          <div className="mb-10">
            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Secure Checkout
            </p>

            <h1 className="text-4xl font-bold mt-2">Checkout</h1>

            <div className="flex items-center gap-2 text-slate-500 mt-3">
              <FaLock size={13} />
              <span className="text-sm">Your information is secure</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-[1fr_380px] gap-10">
              {/* LEFT */}

              <div className="space-y-8">
                {/* Customer Information */}

                <div className="border border-slate-200 rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold">Customer Information</h2>

                  <div className="grid md:grid-cols-2 gap-5 mt-6">
                    {/* First Name */}

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>

                      <input
                        type="text"
                        placeholder="John"
                        className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-slate-300"
                        }`}
                        {...register("firstName", {
                          required: "First name is required",
                          minLength: {
                            value: 2,
                            message: "First name must be at least 2 characters",
                          },
                        })}
                      />

                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>

                      <input
                        type="text"
                        placeholder="Doe"
                        className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.lastName
                            ? "border-red-500"
                            : "border-slate-300"
                        }`}
                        {...register("lastName", {
                          required: "Last name is required",
                        })}
                      />

                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.email ? "border-red-500" : "border-slate-300"
                        }`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address",
                          },
                        })}
                      />

                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>

                      <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.phone ? "border-red-500" : "border-slate-300"
                        }`}
                        {...register("phone", {
                          required: "Phone number is required",
                          minLength: {
                            value: 7,
                            message: "Enter a valid phone number",
                          },
                        })}
                      />

                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}

                <div className="border border-slate-200 rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold">Shipping Address</h2>

                  <div className="space-y-5 mt-6">
                    {/* Address */}

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Address
                      </label>

                      <input
                        type="text"
                        placeholder="123 Main Street"
                        className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.address ? "border-red-500" : "border-slate-300"
                        }`}
                        {...register("address", {
                          required: "Address is required",
                        })}
                      />

                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.address.message}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      {/* City */}

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          City
                        </label>

                        <input
                          type="text"
                          placeholder="New York"
                          className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.city ? "border-red-500" : "border-slate-300"
                          }`}
                          {...register("city", {
                            required: "City is required",
                          })}
                        />

                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.city.message}
                          </p>
                        )}
                      </div>

                      {/* Postal Code */}

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Postal Code
                        </label>

                        <input
                          type="text"
                          placeholder="10001"
                          className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.postalCode
                              ? "border-red-500"
                              : "border-slate-300"
                          }`}
                          {...register("postalCode", {
                            required: "Postal code is required",
                          })}
                        />

                        {errors.postalCode && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.postalCode.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Country */}

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Country
                      </label>

                      <select
                        className={`w-full border rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.country ? "border-red-500" : "border-slate-300"
                        }`}
                        {...register("country", {
                          required: "Please select a country",
                        })}
                      >
                        <option value="">Select Country</option>

                        <option value="Nepal">Nepal</option>

                        <option value="India">India</option>

                        <option value="United States">United States</option>

                        <option value="United Kingdom">United Kingdom</option>
                      </select>

                      {errors.country && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.country.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Payment */}

                <div className="border border-slate-200 rounded-2xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold">Payment Method</h2>

                  <div className="space-y-3 mt-6">
                    <label className="flex items-center gap-3 border border-slate-200 rounded-lg p-4 cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />

                      <div>
                        <p className="font-medium">Cash on Delivery</p>

                        <p className="text-sm text-slate-500">
                          Pay when your order arrives.
                        </p>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 border border-slate-200 rounded-lg p-4 cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />

                      <div>
                        <p className="font-medium">Credit / Debit Card</p>

                        <p className="text-sm text-slate-500">
                          Card payment will be available soon.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Place Order - Mobile */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="lg:hidden w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-60"
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </button>
              </div>

              {/* RIGHT - ORDER SUMMARY */}

              <div>
                <div className="bg-slate-50 rounded-2xl p-6 sticky top-24">
                  <h2 className="text-xl font-bold">Order Summary</h2>

                  {/* Products */}

                  <div className="mt-6 space-y-5">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>

                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.name}</p>

                          <p className="text-sm text-slate-500 mt-1">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        <p className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}

                  <div className="border-t border-slate-200 mt-6 pt-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Subtotal</span>

                      <span>${cartTotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-600">Shipping</span>

                      <span>
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="border-t border-slate-200 pt-4 flex justify-between">
                      <span className="font-bold text-lg">Total</span>

                      <span className="font-bold text-xl text-blue-600">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Button */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="hidden lg:block w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-60"
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    By placing your order, you agree to our terms and
                    conditions.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;

"use client";

import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import React, { useMemo, useState } from "react";

const FieldWrapper = ({ children }) => {
  return <div className="form-control w-full flex flex-col">{children}</div>;
};

const Checkout = ({ cartItems = [] }) => {
  const session = useSession();

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    const form = e.target;
      const payload = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        city: form.city.value,
        instructions: form.instructions.value,
        address: form.address.value,
      };
    if (session.status == "loading") {
      return <h2>Loading..</h2>;
    }

    const result = await createOrder(payload);
    // 👉 call checkout API here
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Delivery Info</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT — Checkout Form */}
        {/* <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Billing Details</h2>

            <FieldWrapper>
              <label className="label">Full Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FieldWrapper>

            <FieldWrapper>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FieldWrapper>

            <FieldWrapper>
              <label className="label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="input input-bordered"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FieldWrapper>

            <FieldWrapper>
              <label className="label">Address</label>
              <textarea
                name="address"
                className="textarea textarea-bordered"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </FieldWrapper>

            <FieldWrapper>
              <label className="label">Instructions</label>
              <textarea
                name="instructions"
                className="input input-bordered"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </FieldWrapper>
          </div>
        </div> */}
        <div className="card-body col-span-2">
          <h2 className="card-title">Billing Details</h2>

          <form onSubmit={handleConfirmOrder}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FieldWrapper>
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  value={session?.data?.user?.name}
                  readOnly
                />
              </FieldWrapper>

              <FieldWrapper>
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  value={session?.data?.user?.email}
                  readOnly
                />
              </FieldWrapper>

              <FieldWrapper>
                <label className="label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="input input-bordered w-full"
                  required
                />
              </FieldWrapper>

              <FieldWrapper>
                <label className="label">City</label>
                <input
                  type="text"
                  name="city"
                  className="input input-bordered w-full"
                />
              </FieldWrapper>

              <FieldWrapper className="md:col-span-2">
                <label className="label">Instructions</label>
                <textarea
                  name="instructions"
                  className="input input-bordered w-full"
                />
              </FieldWrapper>

              {/* Full width */}
              <FieldWrapper className="md:col-span-2">
                <label className="label">Address</label>
                <textarea
                  name="address"
                  className="textarea textarea-bordered w-full"
                  required
                />
              </FieldWrapper>
            </div>
          </form>
        </div>

        {/* RIGHT — Order Summary */}
        <div className="card bg-base-200 shadow-md h-fit">
          <div className="card-body">
            <h2 className="card-title">Order Summary</h2>

            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium line-clamp-1 w-3/4">
                      {item.title}
                    </p>
                    <p className="text-base-content/70">
                      Qty: {item.quantity} × ৳{item.price}
                    </p>
                  </div>

                  <div className="font-semibold">
                    <p>৳{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="divider" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>৳{totalPrice}</span>
            </div>

            <button
              className="btn btn-primary w-full mt-4"
              disabled={!cartItems.length}
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

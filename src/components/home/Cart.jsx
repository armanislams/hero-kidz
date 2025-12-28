"use client";

import { useMemo, useState } from "react";
import CartItem from "../carrds/CartItems";
import Link from "next/link";

const Cart = ({ cartItem = [] }) => {
  const [items, setItems] = useState(cartItem);

  const totalItems = useMemo(
    () => items.reduce((acm, item) => acm + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const removeItems = (id) => {
    setItems((prev) => prev.filter((item) => item._id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setItems((prev) =>
      prev.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <div>
      <p className="py-3">
        <span className="text-primary font-bold">{items.length}</span> Items
        Found in cart
      </p>

      <div className="flex gap-6">
        {/* LEFT - Cart Items */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <CartItem
              key={item._id.toString()}
              item={{ ...item, _id: item._id.toString() }}
              removeItems={removeItems}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>

        {/* RIGHT - SUMMARY CARD */}
        <div className="w-96 sticky top-0 h-fit">
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Order Summary</h2>

              {/* Items */}
              <div className="space-y-2 text-sm">
                {items.map((item) => (
                  <div key={item._id} className="flex border-b shadow px-2 space-y-3 justify-between">
                    <div className="">
                      <p className="font-medium line-clamp-1 w-3/4">{item.title}</p>
                      <p className="text-base-content/70">
                        Qty: {item.quantity} × ৳{item.price}
                      </p>
                    </div>

                    <div className="font-semibold">
                      ৳{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="divider" />

              {/* Totals */}
              <div className="flex justify-between font-semibold">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total Price</span>
                <span>৳{totalPrice}</span>
              </div>

              {/* Checkout Button */}
              <Link href={'/checkout'}
                className="btn btn-primary mt-4 w-full"
                disabled={!items.length}
              >
                Confirm Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

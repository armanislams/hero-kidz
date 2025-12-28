"use client";

import { decreaseItemDb, deleteItemFromCart, increaseItemDb } from "@/actions/server/cart";
import Loading from "daisyui/components/loading";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItem = ({ item, removeItems,updateQuantity }) => {
    const { image, title, quantity, price, _id: id } = item;
    const [isLoading, setIsLoading] = useState(false)
    

    const handleDelete = async () => {
      setIsLoading(true)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemFromCart(id);

          if (result.success) {
                   removeItems(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong.",
            icon: "error",
          });
        }
      }
    });
        setIsLoading(false);
    };
    
    const onIncrease = async () => {
        setIsLoading(true)
        const result = await increaseItemDb(id,quantity)
        if (result.success) {
            // Swal.fire('success', 'quantity increased', 'success')
            updateQuantity(id,quantity+1)
        }
        setIsLoading(false)
    }
    const onDecrease =async () => {
        setIsLoading(true)
        const result = await decreaseItemDb(id,quantity)
        if (result.success) {
            // Swal.fire('success', 'quantity decreased', 'success')
            updateQuantity(id,quantity - 1)
        }
        setIsLoading(false)
    }


  return (
    <div className="card card-side bg-base-100 shadow-md p-4 gap-4 items-center">
      {/* Product Image */}
      <div className="relative w-24 h-24">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-base-content/70">Price: ৳{price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-2">
          <button
            disabled={quantity === 1 || isLoading}
              onClick={onDecrease}
            className="btn btn-sm btn-outline"
          >
            <FaMinus />
          </button>

          <span className="font-semibold">{quantity}</span>

          <button
            onClick={onIncrease}
            disabled={quantity === 10 || isLoading}
            className="btn btn-sm btn-outline"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end gap-2">
        <p className="font-bold text-lg">৳{price * quantity}</p>

        <button
          onClick={handleDelete}
          className="btn btn-sm btn-error btn-outline"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

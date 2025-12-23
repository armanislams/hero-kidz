import { getSingleProducts } from "@/actions/server/product";
import Image from "next/image";
import { notFound } from 'next/navigation';
import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const product = await getSingleProducts(id)

  if (!product || Object.keys(product)?.length === 0) {
    return notFound();
  }

  const {
    title,
    bangla,
    image,
    price,
    discount,
    description,
    qna,
    ratings,
    reviews,
    sold,
    info,
  } = product;

  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="border rounded-lg p-4">
        <Image
          src={image}
                  alt={title}
                  height={100}
                  width={500}
        />
      </div>

      {/* Info */}
      <div>
        <h1 className="text-2xl font-bold mb-1">{title}</h1>
        <p className="text-sm text-gray-500 mb-3">{bangla}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <FaStar className="text-yellow-400" />
          <span className="font-medium">{ratings}</span>
          <span className="text-sm text-gray-500">
            ({reviews} reviews · {sold} sold)
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          {discount > 0 && (
            <span className="line-through text-gray-400 mr-2">৳{price}</span>
          )}
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="ml-2 badge badge-error badge-outline">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button className="btn btn-primary w-full mb-6">
          <FaShoppingCart />
          Add to Cart
        </button>

        {/* Highlights */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {info?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Q&A */}
      <div className="md:col-span-2">
        <h3 className="text-lg font-semibold mb-3">Questions & Answers</h3>
        <div className="space-y-3">
          {qna?.map((item, i) => (
            <div key={i} className="collapse collapse-arrow border">
              <input type="checkbox" />
              <div className="collapse-title font-medium">{item.question}</div>
              <div className="collapse-content text-sm">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

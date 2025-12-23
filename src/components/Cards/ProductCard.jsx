import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { _id: id ,title, image, price, discount, ratings, reviews, sold } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
      <figure className="relative h-48">
        <Image
          src={image}
          alt={title}
          //   fill
          className="object-cover rounded-t-xl"
          width={300}
          height={180}
        />

        {discount > 0 && (
          <span className="badge badge-error absolute top-2 left-2">
            -{discount}%
          </span>
        )}
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-base line-clamp-2">{title}</h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-warning" />
          <span className="font-medium">{ratings}</span>
          <span className="text-base-content/60">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-sm text-base-content/60">Sold: {sold}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-sm text-base-content/60">
              ৳{price}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="flex justify-center items-center gap-5">
          <button className="btn btn-primary btn-sm w-1/2">
            <FaShoppingCart />
            Add to Cart
          </button>
            <Link
              href={`/products/${id}`}
              className="btn btn-primary btn-outline btn-sm w-1/2"
            >
              View Details
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

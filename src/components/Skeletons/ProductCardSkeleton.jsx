const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      {/* Image Skeleton */}
      <div className="skeleton h-48 w-full rounded-t-xl"></div>

      <div className="card-body p-4 space-y-3">
        {/* Title */}
        <div className="skeleton h-4 w-3/4"></div>

        {/* Rating */}
        <div className="flex gap-2">
          <div className="skeleton h-4 w-10"></div>
          <div className="skeleton h-4 w-20"></div>
        </div>

        {/* Sold */}
        <div className="skeleton h-4 w-24"></div>

        {/* Price */}
        <div className="skeleton h-5 w-28"></div>

        {/* Button */}
        <div className="flex gap-5">
          <div className="skeleton h-9 w-1/2 rounded-md"></div>
          <div className="skeleton h-9 w-1/2 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

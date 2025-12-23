const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8">
      {/* Image skeleton */}
      <div className="skeleton h-88 w-full rounded-lg" />

      {/* Info skeleton */}
      <div className="space-y-4">
        <div className="skeleton h-6 w-3/4" />
        <div className="skeleton h-4 w-1/2" />
        <div className="skeleton h-4 w-1/3" />

        <div className="skeleton h-8 w-1/3" />
        <div className="skeleton h-12 w-full" />

        <div className="space-y-2">
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-5/6" />
          <div className="skeleton h-4 w-4/6" />
        </div>
      </div>

      {/* Description */}
      <div className="md:col-span-2 space-y-2">
        <div className="skeleton h-5 w-1/4" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-5/6" />
      </div>

      {/* Q&A */}
      <div className="md:col-span-2 space-y-3">
        <div className="skeleton h-12 w-full" />
        <div className="skeleton h-12 w-full" />
      </div>
    </div>
  );
};

export { ProductDetailsSkeleton };

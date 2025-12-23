import ProductCardSkeleton from '@/components/Skeletons/ProductCardSkeleton';
import React from 'react';

const loading = () => {
    return (
      <div className="grid grid-cols-3 gap-5">
        {[...Array(9)].map((_, i) => (
          <ProductCardSkeleton key={i}/>
        ))}
      </div>
    );
};

export default loading;
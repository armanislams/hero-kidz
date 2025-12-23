import { ProductDetailsSkeleton } from '@/components/Skeletons/ProductDetailsSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            <ProductDetailsSkeleton/>
        </div>
    );
};

export default loading;
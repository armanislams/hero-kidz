import Products from '@/components/Home/Products';
import React from 'react';
export const metadata = {
  title: "All Products",
};
const ProductPage = () => {
    return (
        <div>
            <Products/>
        </div>
    );
};

export default ProductPage;
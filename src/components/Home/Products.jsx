import React from 'react';
import ProductCard from '../Cards/ProductCard';
import { getProducts } from '@/actions/server/product';
const Products =async () => {
    const products = await getProducts()
    return (
        <div className='mb-10'>
            <h2 className='text-center text-4xl font-bold mb-10'>Our Products</h2>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    products?.map((product,i) =>
                        <ProductCard key={i} product={product}/>
                    )
                }
            </div>
        </div>
    );
};

export default Products;
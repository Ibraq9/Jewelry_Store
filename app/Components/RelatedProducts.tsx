"use client";
import React from 'react';
import AllCollection from '@/app/AllCollectionData';
import ProductCard from './ProductCard';


interface cat {
    Category: string
}
const RelatedProducts: React.FC<cat> = ({ Category }) => {

    const filteredProducts = AllCollection.filter(
        (product) => product.Category === Category
    );

    return (
        <div className='w-full'>
            <div className='flex items-center justify-center mb-5'>
                <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
                <h1 className='text-gray-600 text-bold text-3xl'>Related Products</h1>
                <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mx-3'>
                {
                    filteredProducts.slice(0, 5).map((item, index) => (
                        <ProductCard
                            key={index}
                            ImageUrl={item.imageUrl}
                            id={item.id}
                            price={item.Price} />
                    ))
                }
            </div>
        </div>

    )
}

export default RelatedProducts;

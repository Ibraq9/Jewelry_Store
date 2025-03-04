import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import True from '../assets/true.png'


interface ProductCard {
  id: number
  ImageUrl: StaticImageData
  price: number
}

const ProductCard: React.FC<ProductCard> = ({ id, ImageUrl, price }) => {
  return (
    <Link href={`/Pages/${id}`}>
      <div className='flex flex-col hover:scale-105 transition-all rounded-xl'>
        <div>
          <Image priority className='h-80 w-64 rounded-xl' src={ImageUrl} alt='productImage' />
        </div>

        <div className='flex gap-2 text-bold mt-2'>
          <Image priority className='w-5 h-5' src={True} alt='Quality Icon' />
          <p>Pure Stanless Steal</p>
        </div>

        <p className='text-bold'>{price} EGP</p>
      </div>
    </Link>
  )
}

export default ProductCard;
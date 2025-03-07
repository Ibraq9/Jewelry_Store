import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import {CheckCircle} from 'lucide-react'


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
        <CheckCircle className="h-5 w-5 text-emerald-600 " />
          <p>Pure Stanless Steal</p>
        </div>

        <p className='text-bold'>{price} EGP</p>
      </div>
    </Link>
  )
}

export default ProductCard;
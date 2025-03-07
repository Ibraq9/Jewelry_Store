"use client"
import React from 'react';
import { useStore } from '@/app/Context/JewelryContext';
import ItemInCart from '@/app/Components/Item_in_Cart';
import TotalCart from '@/app/Components/TotalCart';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'

const Page = () => {
  const { cartItems } = useStore();

  return (

    <div className="p-4">
      {cartItems.length > 0 ? cartItems.map((item, index) => (
        <ItemInCart key={index} ID={item.id} ImageUrl={item.imageUrl} Price={item.Price} Quantity={item.quantity} Category={item.Category} />
      )) : (<div className='flex gap-5 flex-col justify-center items-center text-bold text-xl  h-44'>
        <h1>No Items Found.</h1>
        <Link href={'/Pages/Collection'}>
          <div className='flex gap-1 text-gray-600 hover:text-black'>
            <ArrowLeft className="mr-2" />
            Back to Collection
          </div>
        </Link>

      </div>)
      }

      {cartItems.length > 0 &&
        <div className='flex justify-end w-full'>
          <div className='w-fit flex flex-col items-center'>
            <div>
              <div className=''>
                <TotalCart />
              </div>
            </div>

            <div className='mb-3'>
              <Link href={'/Pages/CheckOut'} className='bg-black text-bold  text-white p-3 rounded-md'>
                Check Out
              </Link>
            </div>

          </div>
        </div>
      }

      <div className='flex flex-col justify-center items-center w-full'>

        <div className='flex flex-col justify-center bg-orange-200 w-fit rounded-lg shadow-lg p-2'>
          <div>
            Note:<br />
            Shipping fee vary from one governorate to another , See the administrator
          </div>
          <a className='text-center text-bold' href='https://www.instagram.com/zi_________na/?igsh=bmcyNGZ2azRrMGR3#' target='_blank'>Instagram</a>
        </div>

      </div>

    </div>
  );
};

export default Page;

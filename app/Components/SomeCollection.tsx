import React from 'react';
import Image from 'next/image';
import I2_100 from '../assets/ProductsImages/90/IMG-20250221-WA0074.jpg'
import I3_100 from '../assets/ProductsImages/200/WhatsApp Image 2025-02-21 at 07.12.35_70579b9d.jpg';
import I4_100 from '../assets/ProductsImages/130/WhatsApp Image 2025-02-21 at 07.21.23_984efe5a.jpg'



const SomeCollection = () => {
  return (
    <div className='flex justify-center flex-wrap gap-5 mt-20'>

      <div
        className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5"
      >
        <div className="">
          <div
            className="group-hover:scale-110 w-full h-72 bg-blue-400 duration-500"
          >
            <Image className='w-full h-full' src={I3_100} alt='Product Image' />
          </div>
          <div
            className="absolute w-80 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
          >
            <div
              className="absolute -z-10 left-0 w-80 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
            ></div>
            <span className="text-xl font-bold">Hover me!</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
            Elegance wrapped around your wrist with a golden touch
            </p>
          </div>
        </div>
      </div>



      <div
        className="mt-12 relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5"
      >
        <div className="">
          <div
            className="group-hover:scale-110 w-full h-72 bg-blue-400 duration-500"
          >
            <Image className='w-full h-full' src={I4_100} alt='Product Image' />
          </div>
          <div
            className="absolute w-80 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
          >
            <div
              className="absolute -z-10 left-0 w-80 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
            ></div>
            <span className="text-xl font-bold">Hover me!</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
            A sparkle that suits you... because details make the difference
            </p>
          </div>
        </div>
      </div>





      <div
        className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5"
      >
        <div className="">
          <div
            className="group-hover:scale-110 w-full h-72 bg-blue-400 duration-500"
          >
            <Image className='w-full h-full' src={I2_100} alt='Product Image' />
          </div>
          <div
            className="absolute w-80 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
          >
            <div
              className="absolute -z-10 left-0 w-80 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
            ></div>
            <span className="text-xl font-bold">Hover me!</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
            A touch of luxury that speaks without words.
            </p>
          </div>
        </div>
      </div>



      
    </div>
  )
}

export default SomeCollection

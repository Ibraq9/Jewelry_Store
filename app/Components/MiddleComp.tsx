
import React from 'react'
import ImageSlider from './ImageSlider'
import Link from 'next/link'

const MiddleComp = () => {
    return (
        <div className='flex justify-center'>
            <div className='border-2 border-black/50 w-full lg:w-8/12 flex flex-col lg:flex-row justify-between mt-20 rounded-3xl gap-14'>
                {/* Slider Section */}
                <div className='w-full overflow-hidden'>
                    <ImageSlider />
                </div>

                {/* Text Section */}
                <div className=' rounded-3xl flex flex-col justify-center items-center text-center p-8'>
                   <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-5xl'>Our Store</h1>

                    <h2 className='font-medium text-3xl'>Latest Arrivals</h2>

                    <Link href="/Pages/Collection" className='bg-black text-white py-2 rounded-full '>SHOP NOW</Link>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleComp















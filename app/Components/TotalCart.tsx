
import React from 'react';
import { useStore } from '../Context/JewelryContext';


const TotalCart = () => {
    const {get_TotalCart } = useStore();

    

    return (
        <div className='flex bg-white w-fit p-3 mt-10 shadow-xl'>
            <div className='flex flex-col'>
                <h1 className='test-bold'>Total Cart</h1>
                <div className='flex justify-between'>
                    <b>SubTotal</b>
                    <b>$ {get_TotalCart()}</b>
                </div>

                <div className='flex justify-between gap-10'>
                    <b>Total</b>
                    <b>{`${get_TotalCart()} + Shipping fee`}</b>
                </div>
            </div>
        </div>
        )
}

export default TotalCart

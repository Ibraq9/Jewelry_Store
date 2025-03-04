import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useStore } from '@/app/Context/JewelryContext';

interface ItemTypes {
    ImageUrl: StaticImageData;
    Price: number;
    Quantity: number;
    Category: string;
    ID:number;
}

const ItemInCart: React.FC<ItemTypes> = ({ ID,ImageUrl, Price, Quantity, Category }) => {

    const {UpdateQuantity}=useStore();  

    return (
        <div className='flex justify-center'>
            <div className="flex space-x-4 border p-4 rounded-lg shadow-md w-full sm:w-3/5">
                <div className='flex justify-between w-full'>

                    <div className='flex gap-3'>
                        <Image src={ImageUrl} alt='Product in cart' className='w-1/4 rounded-lg'/>
                        <div>
                            <div className='flex'>
                                <CheckCircle className="h-5 w-5 text-emerald-600" />
                                <span className="text-gray-700">Stainless Steel</span>
                            </div>
                            <p className="text-gray-700">{Price} EGP</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center'>
                        <p>{Category}</p>
                        <div className=' w-28 flex'>
                            <p className="text-gray-600">Qty :</p>
                            <input onChange={(e) => UpdateQuantity(ID, Math.max(1, parseInt(e.target.value)))} type='number' min={1} defaultValue={Quantity} className='w-9 h-6 bg-gray-200 rounded-md'/>
                        </div>
                    </div>

                    <div className='flex justify-center items-center cursor-pointer' onClick={()=>UpdateQuantity(ID,0)}>
                        🗑️
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ItemInCart;

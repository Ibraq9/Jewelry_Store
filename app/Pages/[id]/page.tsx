"use client"
import Image from 'next/image';

import { use ,useEffect} from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ShoppingCart } from 'lucide-react';
import AllCollection from '@/app/AllCollectionData';
import RelatedProducts from '@/app/Components/RelatedProducts';
import { useStore } from '@/app/Context/JewelryContext';

interface Params {
    params: {
        id: string;
    };
}

const ProductPage = ({ params }: Params) => {
    const resolvedParams = use(params);
    const productId = Number(resolvedParams.id);
    const findProduct = AllCollection.find((product) => product.id === productId);
    const { Add_to_Cart,cartItems } = useStore();

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    

    if (!findProduct) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Product Not Found</h1>
                    <Link
                        href="/Pages/Collection"
                        className="text-blue-600 hover:underline flex items-center justify-center"
                    >
                        <ArrowLeft className="mr-2" />
                        Back to Collection
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link
                        href="/Pages/Collection"
                        className="text-gray-600 hover:text-gray-900 flex items-center"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back to Collection
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src={findProduct.imageUrl}
                                alt={findProduct.Category || "Product Image"}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        <div className="flex flex-col justify-between p-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                                    {findProduct.Category}
                                </h1>
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-emerald-600">
                                        {findProduct.Price} EGP
                                    </span>
                                    <span className="ml-2 text-sm text-gray-500">
                                        (Excluding delivery)
                                    </span>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                                        <span className="text-gray-700">100% Pure Stainless Steel</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => Add_to_Cart(productId)}
                                    className="w-2/3 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
                                    type="button"
                                >
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Add to Cart
                                </button>
                               
                                <button
                                    className="w-2/3 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 px-6 rounded-lg font-medium transition-all duration-200"
                                    type="button"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <RelatedProducts Category={findProduct.Category} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
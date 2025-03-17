import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface ProductCard {
  id: number;
  ImageUrl: StaticImageData;
  price: number;
}

const ProductCard: React.FC<ProductCard> = ({ id, ImageUrl, price }) => {
  return (
    <Link
      href={`/Pages/${id}`}
      className="border-2 border-black rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-lg  max-w-[150px]  sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px] xl:max-w-[200px] my-5"
    >
      <div className="flex flex-col">
        {/* Image Section */}
        <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60">
          <Image
            loading={"lazy"}
            className="w-full h-full object-cover"
            src={ImageUrl}
            alt="productImage"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-1 p-3">
          <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
            <p className="truncate">Pure Stainless Steel</p>
          </div>

          <p className="text-sm sm:text-base font-bold">{price} EGP</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

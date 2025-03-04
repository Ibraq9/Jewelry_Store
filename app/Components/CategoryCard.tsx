import React from 'react';
import Image, { StaticImageData } from "next/image";
import { useStore } from '../Context/JewelryContext';

interface CategoryCardProps {
  ImageSrc: string | StaticImageData;
  Title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ ImageSrc, Title }) => {

  // const {CategoryHome}=useStore()
 
  return (
    <div className="CategoryCard w-20 h-20 bg-white rounded-3xl relative group overflow-hidden cursor-pointer" style={{ boxShadow: '10px 10px 10px grey' }}>
      {/* Image Container */}
      <div className="w-full h-full">
        <Image src={ImageSrc} alt="Category Image" className="w-full h-full object-cover" />
      </div>

      {/* Overlay (Ensures Text is Above the Image) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Hover Text (Now it will appear properly) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {Title}
      </div>
    </div>

  );
};

export default CategoryCard;

"use client";
import ProductCard from '@/app/Components/ProductCard'
import React from 'react';
import AllCollectionData from '@/app/AllCollectionData';
import { StaticImageData } from 'next/image';


// Update your interface to match what you're actually using
interface FilterProductType {
  id: number; // Changed from ID to id
  Price: number;
  imageUrl: StaticImageData; // Changed from ImageUrl to imageUrl
  Category: string;
}

const Page = () => {

  const [FilterProduct, setFilterProduct] = React.useState<FilterProductType[]>([]);
  const [SortType, setSortType] = React.useState<string>('');
  const [Category, setCategory] = React.useState<string[]>([]);

  let copy: FilterProductType[] = structuredClone(AllCollectionData);
  const Sort = () => {
    if (SortType === 'Low to High') {
      copy = copy.sort((a, b) => (a.Price - b.Price));

    } else if (SortType === 'High to Low') {
      copy = copy.sort((a, b) => (b.Price - a.Price));
    }
    setFilterProduct(copy);
  }


  const CategoryCheck = () => {

    if (Category.length > 0) {
      copy = copy.filter(item => 
        Category.includes(item.Category)
      );
    }
    setFilterProduct(copy)
  }

  const HandleCategory=(e:string)=>{
    setCategory(prev=>(
      prev.includes(e)?
      prev.filter((name)=>!name.includes(e))
       : [...prev,e]
    ))
  }

  React.useEffect(() => {
    Sort();
    CategoryCheck();
  }, [SortType, Category])


  return (
    <div className=' flex justify-center mt-10'>

      <div className='w-10/12'>

        <div className='w-full flex justify-center'>
          <h1 className='text-black text-bold text-4xl'>Our Collection</h1>
        </div>


        <div>
          <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters Sidebar */}
                <div className={`lg:w-80 transition-all lg:block`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">

                    {/* Category Filter */}
                    <div className="mb-8">
                      <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase">Categories</h3>
                      <div className="space-y-3">
                        {['Ring', 'Bracelet', 'Earring', 'Necklace'].map((category) => (
                          <label
                            key={category}
                            className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              value={category}
                              onChange={(e)=>HandleCategory(e.target.value)}
                              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <span className="text-gray-600">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>


                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                      <button
                        // onClick={() => setShowFilter(!ShowFilter)}
                        className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        {/* <FunnelIcon className="w-5 h-5" /> */}
                        <span className="font-medium">Filters</span>
                      </button>
                      {/* <Title text1={'Our '} text2={'Collections'} /> */}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative w-full sm:w-48">
                      <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option>Relavent</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                      </select>
                      {/* <ChevronDownIcon className="h-5 w-5 absolute right-3 top-2.5 text-gray-400 pointer-events-none" /> */}
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    {FilterProduct.map((product, index) => (
                      <ProductCard
                        key={index}
                        id={product.id}
                        ImageUrl={product.imageUrl}
                        price={product.Price}
                      />
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page

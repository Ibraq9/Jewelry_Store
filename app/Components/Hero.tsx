// import React from "react";
// import { MapPin } from "lucide-react";
// import CategoryCard from './CategoryCard';
// import { CartegoryData } from '../CategoryData';
// import Link from "next/link";



// const Hero = () => {
//     return (
//         <div className="relative w-full" style={{ height: '80vh', textAlign: 'center' }}>
//             <video
//                 src="/background.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 style={{ filter: 'brightness(0.3)' }}
//             />
//             <div className="relative flex items-center justify-center h-full text-white text-3xl font-bold">
//                 <div className="max-w-2xl mx-auto px-4 py-20">
//                     {/* Main Heading */}
//                     <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
//                         Our Collection
//                         <span className="block text-3xl md:text-4xl text-amber-600 mt-3 font-light">
//                             Made with love
//                         </span>
//                     </h1>

//                     {/* Description */}
//                     <p className="text-lg md:text-xl text-slate-400 mb-8 font-light leading-relaxed">
//                         Welcome to our curated collection of timeless accessories, where style meets sophistication. Explore our handpicked pieces designed to elevate your everyday look with elegance and charm.
//                     </p>

//                     {/* CTAs */}
//                     <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
//                         <Link href="/Pages/Collection">
//                             <button
//                                 className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-yellow-600/50 border border-white/20"
//                             >
//                                 <span className="text-lg">Discover Collection</span>
//                                 <div
//                                     className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
//                                 >
//                                     <div className="relative h-full w-10 bg-white/30"></div>
//                                 </div>
//                             </button>
//                         </Link>
//                     </div>

//                     {/* Accent Text */}
//                     <div className="flex items-center gap-4 text-slate-400 justify-center" >
//                         <div className="w-12 h-px bg-amber-600"></div>
//                         <div className="flex gap-3">
//                             <p><MapPin /></p>
//                             <span className="font-light">Minia ,Egypt </span>
//                         </div>
//                         <div className="w-12 h-px bg-amber-600"></div>
//                     </div>
//                 </div>
//             </div>



//             <div className=' absolute left-1/2 transform -translate-x-1/2 flex gap-5 justify-center' style={{top:'95%'}}>
//                 {
//                     CartegoryData.map((item, index) => (
//                         <CategoryCard key={index} ImageSrc={item.imageSrc} Title={item.Title} />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Hero;











































import React from "react";
import { MapPin } from "lucide-react";
import CategoryCard from './CategoryCard';
import { CartegoryData } from '../CategoryData';
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative w-full h-[80vh] text-center">
            {/* Video Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.3]"
                    preload="auto"
                >
                    <source 
                        src="/videos/background.webm" 
                        type="video/webm; codecs=vp9,opus" 
                    />
                    <source 
                        src="/videos/background.mp4" 
                        type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" 
                    />
                </video>
            </div>

            {/* Content Section */}
            <div className="relative flex items-center justify-center h-full text-white">
                <div className="max-w-2xl mx-auto px-4 py-20">
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                        Our Collection
                        <span className="block text-3xl md:text-4xl text-amber-600 mt-3 font-light">
                            Made with love
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-8 font-light leading-relaxed">
                        Welcome to our curated collection of timeless accessories, where style meets sophistication. Explore our handpicked pieces designed to elevate your everyday look with elegance and charm.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                        <Link href="/Pages/Collection" legacyBehavior>
                            <a className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-yellow-600/50 border border-white/20">
                                <span className="text-lg">Discover Collection</span>
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                    <div className="relative h-full w-10 bg-white/30"></div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 text-slate-400 justify-center">
                        <div className="w-12 h-px bg-amber-600"></div>
                        <div className="flex gap-3">
                            <MapPin />
                            <span className="font-light">Minia, Egypt</span>
                        </div>
                        <div className="w-12 h-px bg-amber-600"></div>
                    </div>
                </div>
            </div>

            {/* Category Cards */}
            <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-5 justify-center' style={{ top: '95%' }}>
                {CartegoryData.map((item, index) => (
                    <CategoryCard key={index} ImageSrc={item.imageSrc} Title={item.Title} />
                ))}
            </div>
        </div>
    );
};

export default Hero;
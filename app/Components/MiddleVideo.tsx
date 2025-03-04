// MiddleVideo.tsx
import React from 'react'

const MiddleVideo = () => {
    return (
        <div className="w-full h-screen relative overflow-hidden bg-black 
          border-2 border-white/10 rounded-[40px] mx-2 my-2 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10 
              rounded-[38px] pointer-events-none" />
            <video
                src="/Ring_Background.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-[calc(100%-4px)] h-[calc(100%-4px)] object-cover scale-105 opacity-95 m-0.5 
                  rounded-[36px] transition-all duration-300 hover:scale-100"
                style={{ 
                    filter: 'grayscale(15%) contrast(115%)',
                }}
            />
            <div className="absolute bottom-12 left-12 z-20 text-white space-y-4">
                <div className="overflow-hidden">
                    <h2 className="text-6xl font-light mb-2 translate-y-[110%] animate-slide-up delay-100">
                        Crafted Legacy
                    </h2>
                </div>
                <div className="overflow-hidden">
                    <p className="text-xl font-thin opacity-90 translate-y-[110%] animate-slide-up delay-300">
                        Precision engineering meets timeless design
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MiddleVideo


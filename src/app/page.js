"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Jalaun",
    description:
      "Jalaun is a city in Uttar Pradesh known for traditional culture and heritage art.",
    image: "/1.jpeg",
    bg: "/bg-1.jpeg",
  },

  {
    id: 2,
    title: "Mahoba",
    description:
      "Mahoba is famous for historical temples and traditional artwork.",
    image: "/2.jpeg",
    bg: "/bg-2.jpeg",
  },

  {
    id: 3,
    title: "Lucknow",
    description:
      "Lucknow is known for chikankari embroidery and Nawabi culture.",
    image: "/3.jpeg",
    bg: "/bg-3.jpeg",
  },

  {
    id: 4,
    title: "Varanasi",
    description:
      "Varanasi represents spirituality and ancient traditions.",
    image: "/4.jpeg",
    bg: "/bg-4.jpeg",
  },
   {
    id: 5,
    title: "Varanasi",
    description:
      "Varanasi represents spirituality and ancient traditions.",
    image: "/4.jpeg",
    bg: "/bg-4.jpeg",
  }, 
  {
    id: 6,
    title: "Varanasi",
    description:
      "Varanasi represents spirituality and ancient traditions.",
    image: "/5.jpeg",
    bg: "/bg-5.jpeg",
  },
   {
    id: 7,
    title: "Varanasi",
    description:
      "Varanasi represents spirituality and ancient traditions.",
    image: "/6.jpeg",
    bg: "/bg-6.jpeg",
  },
{
    id: 8,
    title: "Varanasi",
    description:
      "Varanasi represents spirituality and ancient traditions.",
    image: "/7.jpeg",
    bg: "/bg-7.jpeg",
  },


];

export default function Home() {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${slides[current]?.bg})`,
      }}
    >
    
      <div className="absolute inset-0 bg-[#5c3b2e]/60"></div>

    
      <div className="relative z-10 w-full h-full flex items-center justify-between px-6 md:px-20">

       
        <div className="max-w-xl text-white z-20">

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {slides[current]?.title}
          </h1>

          <p className="text-lg md:text-2xl leading-relaxed opacity-90">
            {slides[current]?.description}
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-md font-semibold">
            Explore {slides[current]?.title} Art
          </button>
        </div>

      
        <div className="relative w-[750px] h-[520px] overflow-hidden hidden lg:flex items-center">

         
          <div
            className="flex items-center gap-10 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${current * 340}px)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`
                  relative flex-shrink-0 transition-all duration-1000
                  ${
                    index === current
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-70"
                  }
                `}
              >
                
                <img
                  src={slide.image}
                  alt=""
                  className="w-[320px] h-[430px] object-cover rounded-xl border-4 border-white shadow-2xl"
                />

                
                <div
                  className={`
                    absolute top-0 left-0 h-full bg-gradient-to-r 
                    from-[#5c3b2e] to-transparent
                    transition-all duration-1000
                    ${
                      index === current
                        ? "w-0"
                        : "w-full"
                    }
                  `}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}

      </div>
    </div>
  );
}
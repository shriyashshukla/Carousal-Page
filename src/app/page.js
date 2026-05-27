"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Mahoba",
    description:
      "Mahoba is known for its traditional art and cultural heritage.",
    image: "/1.jpeg",
    bg: "/bg-1.jpeg",
  },

  {
    id: 2,
    title: "Lucknow",
    description:
      "Lucknow is famous for chikankari embroidery and Nawabi culture.",
    image: "/2.jpeg",
    bg: "/bg-2.jpeg",
  },

  {
    id: 3,
    title: "Varanasi",
    description:
      "Varanasi represents spirituality and ancient Indian culture.",
    image: "/3.jpeg",
    bg: "/bg-3.jpeg",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center duration-500"
      style={{
        backgroundImage: `url(${slides[current].bg})`,
      }}
    >
     
      <div className="w-full min-h-screen bg-black/40 flex flex-col lg:flex-row items-center justify-around px-6 md:px-16 py-10">

        
        <div className="max-w-xl text-white space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            {slides[current].title}
          </h1>

          <p className="text-lg md:text-xl leading-relaxed">
            {slides[current].description}
          </p>

           
        </div>

        
        <div className="mt-10 lg:mt-0">
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-[280px] md:w-[400px] lg:w-[500px] h-[350px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </div>

      
    </div>
  );
}










// const Images = [
//   "/1.jpeg",
//   "/2.jpeg",
//   "/3.jpeg",
//   "/4.jpeg",
//   "/5.jpeg",
//   "/6.jpeg",
//   "/7.jpeg",

// ];

// export default function Home() {
//   const [currentImage, setCurrentImage] = useState(Images[0]);

//   return (
//     <div className="w-full min-h-screen bg-gray-400 flex flex-col items-center justify-center p-5 gap-6">
      
      
//       <h1 className="text-3xl md:text-5xl font-bold text-white">
//         Image Gallery
//       </h1>

     
//       <motion.div
//         key={currentImage}
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="w-full max-w-4xl"
//       >
//         <img
//           src={currentImage}
//           alt="Selected"
//           className="w-full h-[200px] sm:h-[100px] md:h-[400px] object-cover rounded-2xl shadow-xl"
//         />
//       </motion.div>

     
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 w-full max-w-5xl">
//         {Images.map((img, index) => (
//           <motion.img
//             whileHover={{
//               scale: 1.08,
//             }}
//             whileTap={{
//               scale: 0.95,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 300,
//             }}
//             onClick={() => setCurrentImage(img)}
//             key={index}
//             src={img}
//             alt={`Image ${index + 1}`}
//             className={`w-full h-24 md:h-28 object-cover rounded-xl cursor-pointer border-4 transition-all duration-300
              
//               ${
//                 currentImage === img
//                   ? "border-black scale-105"
//                   : "border-transparent"
//               }
//             `}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
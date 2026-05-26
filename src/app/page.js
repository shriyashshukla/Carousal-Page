"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/7.jpeg",

];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(Images[0]);

  return (
    <div className="w-full min-h-screen bg-gray-400 flex flex-col items-center justify-center p-5 gap-6">
      
      
      <h1 className="text-3xl md:text-5xl font-bold text-white">
        Image Gallery
      </h1>

     
      <motion.div
        key={currentImage}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl"
      >
        <img
          src={currentImage}
          alt="Selected"
          className="w-full h-[200px] sm:h-[100px] md:h-[400px] object-cover rounded-2xl shadow-xl"
        />
      </motion.div>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 w-full max-w-5xl">
        {Images.map((img, index) => (
          <motion.img
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            onClick={() => setCurrentImage(img)}
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className={`w-full h-24 md:h-28 object-cover rounded-xl cursor-pointer border-4 transition-all duration-300
              
              ${
                currentImage === img
                  ? "border-black scale-105"
                  : "border-transparent"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
"use client"

import React from 'react'
import { useState } from 'react'


const Image = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",  
  "/7.jpeg",



]

export default function Home() {
const [currentImage , setCurrentImage] = useState(Image[0]);


  return (

    <div className='w-full h-screen flex flex-col items-center justify-center gap-5 bg-gray-400'>
      <h1 className='container'>Image Gallery</h1>
      <div className='flex flex-row items-center w-2/3 mx-auto gap-1.5 ' >
      
      {Image.map((img , index) => (
        <img
        className='w-50 h-24 object-cover '
        key={index}
        src={img}
        alt={`Image ${index + 1}`}
        ></img>
      )   )
    }
    </div>
      
    </div>
  )

} 
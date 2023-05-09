import React , {useState , useEffect} from 'react'
import Image from 'next/image'

type sliderProps = {
    images: string[]
}

const Slider = ({images}: sliderProps) => {

  
  return (
        <div className='flex justify-around flex-wrap scrollbar-hide align-middle'>
        {images.map((tool, index) => {
            return (
            <div key={index} className='h-5 lg:h-12 w-5 lg:w-24 m-3 lg:m-1 my-2 flex align-middle justify-center hover:before:bg-blue-500 hover:before:conten'>
            
            
            <Image 
            className='object-contain'  
            src={tool} 
            width={80} 
            height={80} 
            alt={tool}
            />
            
            </div>
            )
            })}
        </div>
  )
}


export default Slider
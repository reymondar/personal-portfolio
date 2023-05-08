import React , {useState , useEffect} from 'react'
import Image from 'next/image'

type sliderProps = {
    images: string[]
}

const Slider = ({images}: sliderProps) => {

  
  return (
        <div className='flex justify-around overflow-x-scroll scrollbar-hide'>
        {images.map((tool, index) => {
            return <Image 
            className='mx-2'
            key={index}
            src={tool} 
            width={75} 
            height={75} 
            alt={tool} />
            })}
        </div>
  )
}


export default Slider
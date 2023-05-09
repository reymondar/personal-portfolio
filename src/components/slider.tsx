import React , {useState , useEffect} from 'react'
import Image from 'next/image'

type sliderProps = {
    images: string[]
}

const Slider = ({images}: sliderProps) => {

  
  return (
        <div className='flex justify-around flex-wrap scrollbar-hide'>
        {images.map((tool, index) => {
            return <Image 
            className='m-2 object-contain'
            key={index}
            src={tool} 
            width={65} 
            height={65} 
            alt={tool} />
            })}
        </div>
  )
}


export default Slider
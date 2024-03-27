    import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import projects from "../../public/projects.json"
type projectType = {
    title:string,
    skills:string[],
    description: string,
    link:string,
    github: string,
    impo:number,
    preview: string
}

const Project = ({title , skills , description , link , github , impo , preview} : projectType) => {
  
    const [isOpened , setIsOpened] = useState(false)
    

    const handleClick = () => {
        setIsOpened(prev => !prev)
    }

    const handleOpen = () => {
        link ? window.open(link) : ''
    }

    return(
    <div onClick={handleClick} className={`${isOpened ? ' bg-opacity-70 hover:cursor-zoom-out' : ''} lg:w-[45%] rounded overflow-hidden shadow-lg my-6 hover:cursor-zoom-in md:hover:shadow-orange-300 transition-all hue-rotate-60 mx-2 h-fit`}>
        <div onClick={handleOpen} className='h-24 bg-white -hue-rotate-60 hover:cursor-pointer w-full position overflow-hidden'>
            <Image src={preview} width={1000} height={700} className='object-cover' alt={preview} />
        </div>
        <div className="px-2 sm:px-6 py-2 sm:py-4 overflow-hidden">
            <div className="flex align-middle mb-2 ">
                <h1 className='self-center font-bold text-xs sm:text-sm'>{title}</h1>
                <a href={github} target="_blank" className='hover:cursor-pointer hover:text-orange-500 text-xs/[0.4rem]'>
                    <Image alt='githublogo' src='/github.png' width={35} height={35} className='object-contain ml-2' />
                </a>
            </div>
            <p className={`font-monserrat text-[0.4rem]/[1rem] lg:text-xs  lg:leading-5 ${isOpened ? '' : 'truncate' } transition-all`}>{description}</p>
        </div>
        <div className="m-2 sm:px-6 sm:py-2">
            {skills.map(skill =>{
                return  <span key={skill} className="inline-block shadow-md bg-gray-100/25 rounded-full p-1 lg:px-2 text-[0.4rem] font-semibold text-black mr-1 sm:mr-2 mb-2 hover:bg-yellow-500 hover:cursor-default hover:text-gray-100 transition-all">{skill}</span>
                })}
        </div>
    </div> 
    )
}


const Portfolio = () => {
    return (
    <div className='flex h-fit flex-wrap'>
        {projects.sort((proj:projectType) => proj.impo).map((project: projectType, i: number) => {
            return <Project key={i} {...project} />
        })}
    </div>
  )
}

export default Portfolio
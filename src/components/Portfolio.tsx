import React, { useState } from 'react'
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
    <div onClick={handleClick} className={`${isOpened ? 'bg-black bg-opacity-70' : ''} w-full rounded overflow-hidden shadow-lg my-6 hover:cursor-pointer md:hover:shadow-orange-300 transition-all hue-rotate-60`}>
        <div className='h-24 bg-white -hue-rotate-60' style={{backgroundImage: `url(${preview})`,backgroundSize:'cover'}}></div>
        <div className="px-2 sm:px-6 py-4 overflow-hidden">
            <div className="font-bold text-sm mb-2">{title}</div>
            <p className={`font-monserrat text-xs/[0.4rem] lg:text-sm leading-6 ${isOpened ? '' : 'truncate' } transition-all`}>{description}</p>
        </div>
        <div className='px-2 sm:px-6 overflow-hidden'>
            <p className="text-gray-300 text-xs/[0.4rem] py-1"><a href={github} target="_blank" className='hover:cursor-pointer hover:text-orange-500'>{github}</a></p>
        </div>
        <div className="px-6 py-2">
            {skills.map(skill =>{
                return  <span key={skill} className="inline-block bg-orange-100 rounded-full p-2 text-xs/[0.4rem] font-semibold text-gray-700 mr-1 sm:mr-2 mb-2 hover:bg-yellow-500 hover:cursor-default hover:text-gray-100 transition-all">{skill}</span>
                })}
        </div>
    </div>
    )
}


const Portfolio = () => {
    return (
    <div className='flex h-fit justify-between flex-wrap'>
        {projects.sort((proj:projectType) => proj.impo).map((project: projectType, i: number) => {
            return <Project key={i} {...project} />
        })}
    </div>
  )
}

export default Portfolio
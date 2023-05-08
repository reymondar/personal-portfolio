import React, { useState } from 'react'
import Image from 'next/image'
import projects from "../../public/projects.json"
import githubIcon from '../../public/github.png'
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
    <div onClick={handleClick} className={`${isOpened ? 'bg-white bg-opacity-70' : ''} lg:w-[45%] rounded overflow-hidden shadow-lg my-6 hover:cursor-pointer md:hover:shadow-orange-300 transition-all hue-rotate-60 mx-2`}>
        <div onClick={handleOpen} className='h-24 bg-white -hue-rotate-60' style={{backgroundImage: `url(${preview})`,backgroundSize:'cover'}}></div>
        <div className="px-2 sm:px-6 py-4 overflow-hidden">
            <div className="flex align-middle font-bold text-sm mb-2 ">
                <h1 className='self-center'>{title}</h1>
                <a href={github} target="_blank" className='hover:cursor-pointer hover:text-orange-500 text-xs/[0.4rem]'>
                    <Image alt='githublogo' src='/github.png' width={35} height={35} className='object-contain ml-2' />
                </a>
            </div>
            <p className={`font-monserrat text-xs/[0.4rem] lg:text-xs leading-6 ${isOpened ? '' : 'truncate' } transition-all`}>{description}</p>
        </div>
        <div className='px-2 sm:px-6 overflow-x-hidden'>
            <p className="text-gray-300 text-xs/[0.4rem] py-1"></p>
        </div>
        <div className="m-2 sm:px-6 sm:py-2">
            {skills.map(skill =>{
                return  <span key={skill} className="inline-block bg-orange-100 rounded-full p-2 text-xs/[0.2rem] font-semibold text-gray-700 mr-1 sm:mr-2 mb-2 hover:bg-yellow-500 hover:cursor-default hover:text-gray-100 transition-all">{skill}</span>
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
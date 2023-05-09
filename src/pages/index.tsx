import React , { useEffect, useState ,useRef , useCallback } from 'react'
import Slider from '../components/slider'
import Portfolio from '../components/Portfolio'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import myself from '../../public/foto-cropped.jpg'

const tools = ['Gatsby', 'Next.js', 'firebase', 'tailwind', 'styled components', 'Sass', 'react-query' , 'GraphQL', 'Typescript']
const toolLogos = ['/React.svg','/gatsby-seeklogo.com.svg','/Nextjs-logo.svg','/firebase-logo.svg','/Tailwind_CSS_logo.svg','/sass-logo.svg','/GraphQL_Logo.svg','/reactquery-logo.png','/chart.svg']


const Paragraph = ({text}: {text: string}) => {
  return <p className='text-center slides opacity-0 transition-all font-sans text-[0.55rem] md:text-md sm:text-center mb-4'>{text}</p>
}

export default function Home() {

  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(()=>{
    
  const classes = ['opacity-100','blur-0']
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add(...classes)
      }

      else entry.target.classList.remove(...classes)
    })
  },
  { rootMargin: '-21%'}
  )
  
  const sections = document.querySelectorAll('.slides')
  sections.forEach(section => observer.observe(section))

  return () => {
    sections.forEach(section => observer.disconnect())
  }
  },[])


  const handleScroll = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLDivElement
    setScrollTop(target.scrollTop);
  };


  const scrollOnClick = (target: any) => {    
   const pageOffset = target.offsetTop

    window.scrollTo({
      top: pageOffset,
      behavior: 'smooth'
    });
  }

  const handleClick = (e: React.SyntheticEvent) => {
    
    const target = e.target as HTMLAnchorElement

    scrollOnClick(target)
    
  }

  return (
    <div className='px-2 sm:px-4'>
        <NavBar handleClick={handleClick} />
        <div className='w-full flex flex-col place-content-center pt-32'>
          <h2 className='text-center my-4 sm:text-2xl slides opacity-0 transition-all'>{`I'm Ramon Arana, welcome.`}</h2>
          <h2 className='text-center text-xs slides opacity-0 transition-all'>Mind if I borrow 3 minutes of your life?</h2>
          <button onClick={handleClick} className='self-center w-fit text-xs my-4 p-2 border rounded-md bg-opacity-5 slides opacity-0 transition-all'><a href='#myself'>Absolutely, lets go</a></button>
          <div className='pt-16 w-full'>  
            <div className='slides opacity-0 transition-all'>
              <Slider images={toolLogos} />
            </div>
            <section className='pt-6 lg:px-48' id="myself">
              <Paragraph text={`As a front-end developer, I'm passionate about creating engaging and visually stunning websites and applications.`} />
              <Paragraph text={`I specialize in building responsive, intuitive user interfaces that prioritize usability and accessibility.`} />
              <Paragraph text={`If you're looking for a developer who stays up-to-date with the latest technologies and is dedicated to finding the most effective solutions for every project, then you are in the right place.`} />
            </section>
          </div>
        </div>
        <div className='w-full lg:px-48'>
          <h1 className='text-center text-5xl sm:text-6xl py-8 sm:p-4 sm:py-8 slides opacity-0 transition-all'>Myself</h1>
          <Paragraph text={`I am a self-taught React developer based in Buenos Aires. I am deeply passionate about coding and building digital experiences`} />
        </div>
        <div className='w-full flex justify-center py-6 slides opacity-0 transition-all'>
          <Image src={myself} alt="myself" width={230} height={230} className='border border-solid border-blue-700 rounded-full object-contain' />  
        </div>
        <div className='w-full lg:px-48'>
          <Paragraph text={`I got my start in coding in college creating games, which helped me develop a keen eye for detail and a love of problem-solving.`} />
          <Paragraph text={`Today, with a year and a half of experience under my belt, I'm skilled at working with APIs, databases, and popular React frameworks like Next.js and Gatsby. I'm always excited to take on new challenges and create innovative solutions for my clients and their users.`} />
        </div>  
        <div id="portfolio" className='slides opacity-0 transition-all'>
          <Portfolio />
        </div>
    </div>
  )
}

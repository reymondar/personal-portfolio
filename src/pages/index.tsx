import Head from 'next/head'
import React , { useEffect, useState } from 'react'
import Slider from '../components/slider'
import Portfolio from '../components/Portfolio'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import myself from '../../public/foto-cropped.jpg'

const tools = ['Gatsby', 'Next.js', 'firebase', 'tailwind', 'styled components', 'Sass', 'react-query' , 'GraphQL', 'Typescript']
const toolLogos = ['/gatsby-seeklogo.com.svg','/Nextjs-logo.svg','/firebase-logo.svg','/Tailwind_CSS_logo.svg','/sass-logo.svg','/GraphQL_Logo.svg','/reactquery-logo.png','/chart.svg','/React.svg']


const Paragraph = ({text}: {text: string}) => {
  return <p className=' slides opacity-0 transition-all font-sans text-[0.55rem] md:text-xs lg:leading-5 mb-4'>{text}</p>
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
    <>
    <Head>
      <title>Ramón Arana Barceló</title>
      <meta name='description' content='React Front-end developer' />
      <meta property='og:title' content='Ramon Arana Portfolio' />
      <meta property='og:description' content='Front-end developer' />
      <meta property='og:url' content='https://personal-portfolio-reymondar.vercel.app/' />
      <meta property='og:image' content='/foto-cropped.jpg' />
    </Head>
    <div className='px-2 sm:px-4'>
        <NavBar handleClick={handleClick} />
        <div className='w-full flex flex-col place-content-center pt-32'>
          <h2 className='text-center my-4 sm:text-2xl slides opacity-0 transition-all'>{`I'm Ramon Arana, welcome.`}</h2>
          <h2 className='text-center text-xs slides opacity-0 transition-all'>Mind if I borrow 3 minutes of your life?</h2>
          <div className='flex justify-center'>
            <button onClick={handleClick} className='flex align-middle mx-1 self-center w-fit text-xs my-4 p-2 border rounded-md bg-opacity-5 slides opacity-0 transition-all'><a href='#myself'>Absolutely, lets go</a></button>
          </div>
          <div className='pt-16 w-full'>  
            <div className='slides opacity-0 transition-all'>
              <Slider images={toolLogos} />
            </div>
            <section className='pt-6 px-6 md:px-12 lg:px-24 xl:px-48' id="myself">
              <Paragraph text={`As a front-end developer, I'm a perfectionist.`} />
              <Paragraph text={`I specialize in building responsive, intuitive user interfaces that prioritize usability and accessibility.`} />
              <Paragraph text={`Thats why I'd like to work with someone that really pushes me to my limits, because I'm the type of person who is out there just for the challenges ahead.`} />
            </section>
          </div>
        </div>
        <div className='w-full px-6 md:px-12 lg:px-24 xl:px-48'>
          <h1 className='text-center text-5xl sm:text-6xl py-8 sm:p-4 sm:py-8 slides opacity-0 transition-all'>Myself</h1>
          <Paragraph text={`I am a self-taught React developer based in Buenos Aires. I'm an all-or-nothing computer geek. My passion goes beyond being a developer.`} />
        </div>
        <div className='flex justify-center pt-2 pb-6'>
          <div className='h-28 w-28 slides opacity-0 transition-all '>
            <Image src={myself} alt="myself" width={230} height={230} className='border border-solid border-blue-700 rounded-full object-contain' />  
          </div>
        </div>
        <div className='w-full px-6 md:px-12 lg:px-24 xl:px-48'>
          <Paragraph text={`I ran a small bussiness creating websites on Wordpress for about 8 months, just before the pandemic hit.`} />
          <Paragraph text={`That's where my passion for creating digital experiences was born. That's where I started learning the way of the web (js).`} />
          <Paragraph text={`Today, with a year and a half of experience under my belt, I'm skilled at working with APIs, NoSQL databases, and React frameworks like Next.js and Gatsby. `} />
        </div>  
        <div id="portfolio" className='slides opacity-0 transition-all'>
          <Portfolio />
        </div>
    </div>
    </>
  )
}

import React , { useEffect, useState ,useRef , useCallback } from 'react'
import Slider from '../components/slider'
import Portfolio from '../components/Portfolio'
import NavBar from '@/components/NavBar'

const tools = ['Gatsby', 'Next.js', 'firebase', 'tailwind', 'styled components', 'Sass', 'react-query' , 'GraphQL', 'Typescript']
const toolLogos = ['/React.svg','/gatsby-seeklogo.com.svg','/Nextjs-logo.svg','/firebase-logo.svg','/Tailwind_CSS_logo.svg','/sass-logo.svg','/GraphQL_Logo.svg','/reactquery-logo.png','/chart.svg']

export default function Home() {

  const [scrollTop, setScrollTop] = useState<number>(0);
  const [goingDown, setGoingDown] = useState<boolean>(false)

  useEffect(()=>{

    const updateScroll = (e: Event) => {
      const target = e.target as HTMLDivElement

      const actualOffset = target.scrollTop 

      actualOffset > scrollTop ? setGoingDown(true) : setGoingDown(false)
    }
    document.querySelector('.container')?.addEventListener('scroll',updateScroll)

    return () => {
       document.querySelector('.container')?.removeEventListener('scroll',updateScroll)
      }
  },[scrollTop])

  useEffect(()=>{
console.log('useffect run')
  const classes = ['opacity-100','blur-0']
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add(...classes)
        console.log('intersecting!')
      }

      else entry.target.classList.remove(...classes)
    })
  },
  { rootMargin: '-20%'}
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
    
    const container = document.querySelector('.container') as HTMLDivElement

    
   const pageOffset = target.offsetTop

    container.scrollTo({
      top: pageOffset,
      behavior: 'smooth'
    });
  }

  const handleClick = (e: React.SyntheticEvent) => {
    
    const target = e.target as HTMLAnchorElement

    scrollOnClick(target)
    
  }

  return (
    <div className="bg-white h-screen bg-main relative sm:flex sm:justify-center">
      <div className='h-full box-border lg:py-1  lg:px-1 z-1'>
        <NavBar goingDown={goingDown} handleClick={handleClick} />
        <div onScroll={handleScroll} className='container px-4 lg:px-12 h-full w-full overflow-x-hidden overflow-y-scroll scrollbar-hide bg-gray-950 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100'>
                <div className='w-full flex flex-col place-content-center pt-32'>
                  <h1 className='text-5xl lg:text-7xl'>Hello there</h1>
                  <h2 className='text-2xl'>Mind if I borrow 3 minutes of your life?</h2>
                  <button onClick={handleClick} className='self-center w-fit text-xs my-4 p-2 border rounded-md bg-opacity-5'><a href='#myself'>Absolutely, lets go</a></button>
                  <div className='pt-24 text-center'>  
                  <Slider images={toolLogos} />
                    <section className='pt-24'>
                      <p className='mb-4 slides opacity-0 transition-all' id="myself">As a front end developer, I like solving problems and connecting wires but foremost, leaving things pretty!</p>
                      <p className='slides opacity-0 transition-all'>If you are seeking for someone who is always looking to work with the latest technologies and the best way to solve any problem, you are in the right place. </p>
                    </section>
                  </div>
                </div>
                <div className='w-full'>
                  <h1 className='text-7xl p-1 pb-4 sm:p-4 slides opacity-0 transition-all'>Myself</h1>
                  <p className='lg:px-12 slides opacity-0 transition-all'>I am a self-taught React developer based in Buenos Aires. I am deeply passionate about coding and building digital experiences.</p>
                </div>
                <div className='w-full text-center py-6 slides opacity-0 transition-all'>
                  <div className='flex justify-around py-2'>
                    <h3 className='p-1 text-xs'>Gatsby</h3>
                    <h3 className='p-1 text-xs'>Next.js</h3>
                    <h3 className='p-1 text-xs'>firebase</h3>
                  </div>
                  <div className='flex justify-between py-2'>
                    <h3 className='p-1 text-xs break-all'>git</h3>
                    <h3 className='p-1 text-xs'>TailwindCss</h3>
                    <h3 className='p-1 text-xs'>GraphQL</h3>
                  </div>
                  <div className='flex justify-around py-2'>
                    <h3 className='p-1 text-xs'>react-query</h3>
                    <h3 className='p-1 text-xs'>Sass</h3>
                    <h3 className='p-1 text-xs'>Typescript</h3>
                  </div>
                </div>
                <div className='w-full lg:px-12'>
                <p className='slides opacity-0 transition-all'>I got my start in coding by creating games, which helped me develop a keen eye for detail and a love of problem-solving.</p>
                <p className='mt-4 slides opacity-0 transition-all'>{`Today, with 1 year of experience under my belt, I'm skilled at working with APIs, databases, and popular React frameworks like Next.js and Gatsby. I'm always excited to take on new challenges and create innovative solutions for my clients and their users.`}</p>
                </div>  
                <div id="portfolio" className='slides opacity-0 transition-all'>
                  <Portfolio />
                </div>
        </div>
      </div>
      
    </div>
  )
}

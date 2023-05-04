import React from "react";


const NavBar = ({goingDown, handleClick}: {goingDown: boolean , handleClick: (arg: React.SyntheticEvent) => void}) => {

  const handleScroll = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLParagraphElement
    handleClick(e)
  }

  return (
  <nav className={`fixed top-4 ${goingDown ? 'opacity-0' : 'opacity-100'} left-0 flex justify-around align-middle w-full h-14 z-10 transition-all`}>
    <p className='text-3xl self-center backdrop-blur-2xl px-3 py-1 rounded-md font-bold hover:cursor-pointer'>About</p>
    <p onClick={handleScroll} className='text-3xl self-center backdrop-blur-xl px-3 py-1 rounded-md font-bold hover:cursor-pointer'><a href="#portfolio">Portfolio</a></p>
  </nav>  
  )
}

export default NavBar
import React from "react";


const NavBar = ({ handleClick }: { handleClick: (arg: React.SyntheticEvent) => void}) => {

  const handleScroll = (e: React.SyntheticEvent) => handleClick(e)

  return (
  <nav className={`fixed top-4 left-0 flex justify-around align-middle w-full h-14 z-10 transition-all`}>
    <a href="https://wa.me/+5491124037535" target="_blank" className='text-xs lg:text-2xl self-center backdrop-blur-2xl px-3 py-1 rounded-md font-bold hover:cursor-pointer'>Conact</a>
    <a onClick={handleScroll} className='text-xs lg:text-2xl self-center backdrop-blur-xl px-3 py-1 rounded-md font-bold hover:cursor-pointer' href="#portfolio">Portfolio</a>
  </nav>  
  )
}

export default NavBar
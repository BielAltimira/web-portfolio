'use client'
import Image from 'next/image'
import Logo from "../assets/logo.png"
import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    const toggleNavbar = () => {
      setIsToggled(!isToggled);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > 100);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <>
        <nav className=" absolute h-15vh w-screen md:flex items-center p-12 md:justify-between backdrop-blur-2xl md:backdrop-opacity-0">
          <div className='flex justify-between '>
            <Image src={Logo} width={50} alt="Logo"/>

            <button className='md:hidden ' onClick={toggleNavbar}>{isToggled ? <X color='white' size={"35"}/> : <Menu color='white' size={"35"}/>  }</button>
          </div>

          <ul className={`flex-col pt-12 md:p-0 md:flex md:flex-row md:space-x-8 sm:w[100%] ${isToggled ? "" : "hidden"} ${isVisible ? "hidden" : ""}`}  id='nav-animate'>
            <li className='pb-4'><a href="#" className="font-bold text-3xl md:text-base text-white md:text-neutral-500 hover:text-white">Home</a></li>
            <li className='pb-4'><a href="#" className="font-bold text-3xl  md:text-base text-white md:text-neutral-500 hover:text-white">About</a></li>
            <li className='pb-4'><a href="#" className="font-bold text-3xl md:text-base text-white md:text-neutral-500 hover:text-white">Skills</a></li>
            <li className='pb-4'><a href="#" className="font-bold text-3xl md:text-base text-white md:text-neutral-500 hover:text-white">Experience</a></li>
            <li className='pb-4'><a href="#" className="font-bold text-3xl md:text-base text-white md:text-neutral-500 hover:text-white">Education</a></li>
            <li className='pb-4'><a href="#" className="font-bold text-3xl md:text-base text-white md:text-neutral-500 hover:text-white">Projects</a></li>
            <li className='pb-4'><a href="#" className="font-bold text-3xl md:text-base text-white md:text-neutral-500 hover:text-white">Contact</a></li>
          </ul>
        </nav>
        <div className='hidden md:block w-full '>
          <nav className={`z-50 fixed m-5 top-0 backdrop-blur-3xl bg-zinc-500/25 w-max rounded-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-32'}`} style={{ left: 'calc(50% - 208px)' }}>
            <ul className="flex justify-center items-center h-16">
              <li className='ml-6 mr-6'><Image src={Logo} width={30} alt="Picture of the author"></Image></li>
              <li className="mr-6"><a href="#" className="text-white hover:text-gray-500">Home</a></li>
              <li className="mr-6"><a href="#" className="text-white hover:text-gray-500">About</a></li>
              <li className="mr-6"><a href="#" className="text-white hover:text-gray-600">Projects</a></li>
              <li className=" mr-6 bg-neutral-800 hover:bg-neutral-500 rounded-full p-2 pl-4 pr-4"><a href="#" className="text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
      </>
    );
  };
  
  export default Navbar;
  
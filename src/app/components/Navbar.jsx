'use client'
import Image from 'next/image'
import Logo from "../assets/logo.png"
// import styled from 'styled-components'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
  
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
        <nav className="h-15vh flex justify-between items-center p-10">
          <Image src={Logo} className="w-10 h-10" alt="Logo" />
  
          <ul className="hidden md:flex md:space-x-8">
            <li><a href="#" className="font-medium text-neutral-500 hover:text-white">Home</a></li>
            <li><a href="#" className="font-medium text-neutral-500 hover:text-white">About</a></li>
            <li><a href="#" className="font-medium text-neutral-500 hover:text-white">Skills</a></li>
            <li><a href="#" className="font-medium text-neutral-500 hover:text-white">Experience</a></li>
            <li><a href="#" className="font-medium text-neutral-500 hover:text-white">Education</a></li>
            <li><a href="#" className="font-medium text-neutral-500 hover:text-white">Projects</a></li>
            <li><a href="#" className="font-medium text-neutral-500 hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </>
    );
  };
  
  export default Navbar;
  
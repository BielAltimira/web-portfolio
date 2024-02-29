"use client"
import Image from "next/image";  
import AnimatedCursor from "react-animated-cursor"
import Navbar from "./components/Navbar"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <AnimatedCursor
        outerSize={20}
        innerSize={10}
        color="255, 255, 255"
       />
       <Navbar/>
       <div className="h-screen"></div>
    </main>
  );
}

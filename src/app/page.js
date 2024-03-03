"use client"
import AnimatedCursor from "react-animated-cursor"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import { Divide } from "lucide-react";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        {/* <AnimatedCursor
        className="touch:hidden block"
        outerSize={20}
        innerSize={10}
        color="255, 255, 255"
       /> */}
       <Navbar/>
       <Landing/>
       <div className=' h-[100vh]'>
        </div>
    </main>
  );
}

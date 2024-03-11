"use client"
import AnimatedCursor from "react-animated-cursor"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import About from "./components/About"
import Background from "./components/Background"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
        <Background/>
        {/* <AnimatedCursor
        className="touch:hidden block"
        outerSize={20}
        innerSize={10}
        color="255, 255, 255"
       /> */}
       <Navbar/>
       <Landing/>
       <About/>
    </main>
  );
}

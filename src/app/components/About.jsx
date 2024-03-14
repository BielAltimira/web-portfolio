import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import Spline from '@splinetool/react-spline';
import text from '../data/text.json'

const About = () => {
    return (
        <div className='about h-[100vh] w-[90%] flex flex-col align-center text-center md:text-left'>
            <h1 className='p-10 text-white'><ReactTypingEffect text={["about();"]}/></h1>
            <div className="h-[40%] md:h-[60%] md:inline-grid md:grid-cols-2 md:grid-rows-1 md:gap-4">
                <Spline scene="https://prod.spline.design/0A-9m2vfBHBrKlWe/scene.splinecode" />
                <div className='flex flex-col justify-center align-center md:align-left p-0 md:pr-10'>
                    <p className="text-white text-center md:text-justify text-l md:text-2xl p-4 md:p-0 "> {text.about}</p>
                    <div className="flex flex-row pt-2 md:ml-[-15px] justify-center md:justify-start">
                        <a href="/"><button className="bn632-hover bn19">See skills</button></a>
                        <a href="/"><button className="bn632-hover bn19">Contact me</button></a>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default About;
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faSquareGithub, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import {faSquareEnvelope} from '@fortawesome/free-solid-svg-icons'
import ScrollIcon from './ScrollIcon'

const Landing = () =>{
    return (
        <div className='h-[100vh] w-full flex flex-col md:flex-row align-center justify-between '>
            <div className='flex-1 block md:hidden'></div>
            <div className="flex-1 flex-col align-center items-left justify-end text-white pb-[2rem] hidden md:flex"> 
                <a className="pl-[3rem] pb-[1rem]" href='https://www.linkedin.com/in/biel-altimira-tarter/' target='_blank'><FontAwesomeIcon color="gray" className="hover:text-white" icon={faLinkedin} size='2x'/></a>
                <a  className=" pl-[3rem]  pb-[1rem]" href='https://github.com/BielAltimira' target='_blank'><FontAwesomeIcon color="gray" className="hover:text-white" icon={faSquareGithub} size='2x'/></a>
                <a className="pl-[3rem] pb-[1rem]" href='https://www.instagram.com/biel.alti/' target='_blank'><FontAwesomeIcon color="gray" className="hover:text-white" icon={faSquareInstagram} size='2x'/></a>
                <a  className="pl-[3rem] pb-[1rem]" href='mailto:tarteraltimirabiel@gmail.com' target='_blank'><FontAwesomeIcon color="gray" className="hover:text-white" icon={faSquareEnvelope} size='2x'/></a>
            </div>
            <div className='flex-1 flex flex-col items-center justify-center'>
                <h1 className='text-white flex align-center'>BIEL</h1>
                <h2 className='mt-[-3rem] ml-[0.5rem]'>ALTIMIRA TARTER</h2>
            </div>
            <div className='block md:hidden flex-1 flex flex-row align-center justify-center pt-12'>
                <a className="pb-[1rem]" href='https://www.linkedin.com/in/biel-altimira-tarter/' target='_blank'><FontAwesomeIcon color="gray" className="hover:text-white" icon={faLinkedin} size='3x'/></a>
                <a  className=" pl-[3rem]  pb-[1rem]" href='https://github.com/BielAltimira' target='_blank'><FontAwesomeIcon color="gray" className="hover:text-white" icon={faSquareGithub} size='3x'/></a>
                <a className="pl-[3rem] pb-[1rem]" href='https://www.instagram.com/biel.alti/' target='_blank'><FontAwesomeIcon color="gray" className="hover:text-white" icon={faSquareInstagram} size='3x'/></a>
                <a  className="pl-[3rem] pb-[1rem]" href='mailto:tarteraltimirabiel@gmail.com' target='_blank'><FontAwesomeIcon color="gray" className="hover:text-white" icon={faSquareEnvelope} size='3x'/></a>
            </div>
            <div className='flex-1 flex justify-end text-center'>
                <p className='md:block hidden text-neutral-500 [writing-mode:vertical-lr] transform rotate-180 whitespace-no-wrap '>All Rights Reserved to Biel Altimira 2024© </p>
            </div>
            <div className='absolute top-[85%] left-[48.5%]'>
                <ScrollIcon/>
            </div>
        </div>
 );
}

export default Landing;
import React from 'react'
import Group from '../assets/Group.svg'
import Ellipse from '../assets/Ellipse.svg'
import Line from '../assets/Line.svg'
import { motion } from "motion/react";
import TextRebel from '../anmetion/TextRebel';
import heroimd from '../assets/myimg.jpeg'


function Hero() {
    const text = `I'm a Full Stack Web Developer `;

    return (
        <div className=" conteners hero " id="home" >
            <div className='  flex justify-center'>


            </div>
            <div className='md:w-[322px] lg:h-[346px] mx-auto  relative flex justify-center items-center flex-col'>

                <img src={Group} alt="" className=' absolute -left-3' />
                <img src={heroimd} alt="" className=' lg:h-[220px] lg:w-[210px] w-[160px] h-[170px] z-10 rounded-full ' />
            </div>
            <div className='lg:w-[904px]  w-full mx-auto  '>
                <div>

                    <h1 className='font-["Inder"] md:text-[48px] text-lg font-bold text-center'><TextRebel text={text} /> </h1>
                    <img src={Line} alt="" className=' -my-3 block mx-auto hidden md:block' />
                </div>
                <p className=' text-center md:mt-5 md:text-[20px] text-sm opacity-65 font-["Montserrat"] relative '>I create fast, scalable, and user-focused web applications using PHP, WordPress, MERN Stack, and Next.js.
                    Focused on clean architecture, performance optimization, and delivering real business value through modern web technologies.
                    <svg className=' absolute -top-[20px] left-[130px] hidden md:block ' width="102" height="134" viewBox="0 0 602 334" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.38961 127.256C26.2674 101.854 83.0381 50.7094 153.831 27.8647C348.906 -35.0856 392.805 42.0147 441.094 57.5713C478.402 69.5902 512.143 87.3631 550.544 125.679C578.95 154.022 586.132 200.905 596.105 243.568C599.353 257.46 597.555 277.451 593.335 290.408C589.116 303.365 580.677 308.991 572.11 313.295C500.826 349.115 367.574 317.685 333.434 313.38C298.835 309.018 265.284 300.637 216.995 289.257C179.993 280.537 145.946 275.064 111.807 263.685C77.6679 252.305 43.6566 235.342 17.999 204.101C5.0274 188.307 0.865476 164.336 5.08492 138.806C12.1443 96.0933 68.888 90.4318 108.653 74.7474C171.899 49.8017 331.943 50.5389 435.426 67.5019C481.939 75.1265 512.143 104.411 544.875 128.577C552.036 135.695 557.662 144.134 564.779 149.888C571.897 155.641 580.336 158.454 589.03 161.353" stroke="red" stroke-width="7" stroke-linecap="round" />
                    </svg>

                </p>
                <div className=' flex justify-center items-center gap-4 mt-6'>
                    <motion.button whileHover={{ scale: 1.1 }} className=' md:w-[215px] md:h-[44px] w-[150px] h-[30px] flex flex-col rounded-lg items-center justify-center bg-[#D9D9D9]
                    md:text-[20px] text-[15px] font-["Inder"]'>Download CV</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className=' md:w-[215px] md:h-[44px] w-[150px] h-[30px] flex flex-col rounded-lg items-center justify-center bg-[#D9D9D9]  md:text-[20px] text-[15px] font-["Inder"]'>Explor Me</motion.button>
                </div>

            </div>

        </div>
    )
}

export default Hero

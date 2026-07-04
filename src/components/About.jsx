import React from 'react'
import AboutLine from '../assets/AboutLine.svg'
import expertiseIcon from '../assets/expertiseIcon.svg'
import cleanCodeIcon from '../assets/cleanCodeIcon.svg'
import csv from '../assets/csv.svg'

function About() {
    return (
        <div className='conteners about px-5'>
            <div>
                <div className=' flex items-end gap-2 text-[32px] font-["Inder"]'>
                    <h1 className='md:text-[32px] text-[24px]'>About Me</h1>
                    <img src={AboutLine} alt="" />
                </div>
                <p className='md:w-128.25 font-["Montserrat"] opacity-50 md:text-[16px] text-sm py-3'>Hi there! <span className='font-bold'>I'm Shaharia Ahmed</span>, a Full Stack Developer specializing in building modern web applications with the MERN, Next.js, and PostgreSQL/Prisma stacks. I focus on delivering seamless, high-performance web solutions that are both visually appealing and highly functional.</p>
                <div className='flex justify-between gap-2.5 flex-wrap items-center py-3 md:mt-8'>
                    <div className={`md:w-[185px] md:h-[83px] w-full sh rounded-2xl flex flex-col p-5  justify-center items-center  dark:text-white dark:bg-gray-800`}>
                        <h5 className=' text-[20px] font-["Itim"]  '>100%</h5>
                        <p className='text-[16px] font-["Itim"] opacity-50 '>Client Satisfaction</p>
                    </div>
                    <div className='md:w-[185px] md:h-[83px] w-full sh rounded-2xl flex flex-col p-5  justify-center items-center  dark:text-white dark:bg-gray-800'>
                        <h5 className=' text-[20px] font-["Itim"]  '>Fast</h5>
                        <p className='text-[16px] font-["Itim"] opacity-50 '>Delivery time</p>
                    </div>
                    <div className='md:w-[185px] md:h-[83px] w-full sh rounded-2xl flex flex-col p-5  justify-center items-center  dark:text-white dark:bg-gray-800'>
                        <h5 className=' text-[20px] font-["Itim"]  '>24/7</h5>
                        <p className='text-[16px] font-["Itim"] opacity-50 '>Support  available</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='md:border border-dashed md:p-5 rounded-4xl w-full'>
                    <div className=' md:w-[480px]  w-full sh rounded-2xl p-3 flex  gap-3'>

                        <div>
                            <h5 className=' text-[20px] font-["Itim"]  '>My journey</h5>
                            <p className='text-[16px] font-["Itim"] opacity-50 ' >My programming journey began from 2023 with a curiosity about how websites work. That curiosity quickly grew into a passion for web development, motivating me to continuously learn new technologies, improve my problem-solving skills, and build real-world projects. Every project I create helps me become a better developer while strengthening my understanding of modern software development.</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-2 md:mt-4 mt-2'>
                        <div className='md:w-[230px] md:h-[177px] w-full sh rounded-2xl p-3 gap-1 flex justify-center  flex-col'>

                            <h5 className=' text-[20px] font-["Itim"]  '>My hebbits</h5>
                            <p className='text-[16px] font-["Itim"] opacity-50 ' >Reading books is one of my favorite hobbies. It helps me gain new knowledge, improve my thinking, and stay curious about learning new things.</p>
                        </div>
                        <div className='md:w-[230px] md:h-[177px] w-full sh rounded-2xl p-3 gap-1 flex justify-center  flex-col'>

                            <h5 className=' text-[20px] font-["Itim"]  '>Education</h5>
                            <p className='text-[16px] font-["Itim"] opacity-50 ' >I completed Dawra-e-Hadith from <a className='font-bold' href='https://jamiaislamiayunusia.pro.bd/' target='_blank'>Jamia Islamia Yunusia</a> , the highest level of traditional Islamic studies. .</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About

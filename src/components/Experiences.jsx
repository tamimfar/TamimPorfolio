import React from 'react'
import emailIcon from '../assets/emailIcon.svg'
import locationIcon from '../assets/locationIcon.svg'
import expriIcon from '../assets/expriIcon.svg'
import keyLine from '../assets/keyLine.svg'

function Experiences() {
    return (
        <div className=' conteners h-[661px] experience ' id="Experiences">
            <div className='flex flex-col  border-b border-dashed justify-center items-center py-3  font-["Inder"] '>
                <h1 className=' font-bold text-center text-[32px] font-medium '>My Experiences</h1>
                <p className='text-center font-[Montserrat] text-[16px] opacity-70 '>Where I’ve worked</p>
            </div>
            <div className='flex justify-center items-center p-5' >
                <div className='lg:w-[1098px] lg:h-[447px] w-full h-full  rounded-lg bg-[#F5F5F5] dark:bg-gray-800 md:p-12 p-5 '>
                    <div className='flex items-end '>
                        <h3 className=' font-[Inder] text-[20px]'>Frontend Developer Internship</h3>
                        <img src={expriIcon} alt="Experience Icon" className=' hidden md:block' />
                    </div>
                    <p className='text-[15px] font-["Montserrat"] opacity-60 font-medium'>Advisor Media Group • Intern</p>
                    <div className='mt-2 flex flex-col md:flex-row gap-3.5 '>
                        <div className='flex items-center gap-2'><img className='w-5 h-5' src={emailIcon} alt="" /><span className='text-[10px] font-["Montserrat"] opacity-60 font-medium'>7/1/2025 — 9/30/2025</span></div>
                        <div className='flex items-center gap-1'><img className='w-5 h-5' src={locationIcon} alt="" /><span className='text-[12px] font-["Montserrat"] opacity-60 font-medium'>bbaria online ,brhamonbari, Bangladesh</span></div>
                    </div>
                    <div className='md:my-12 my-5'>
                        <h4 className='text-[20px] font-["Montserrat"] opacity-70 font-semibold '>Responsibilities:</h4>
                        <p className='text-[16px] font-["Montserrat"] opacity-60 font-medium lg:w-[776px] mt-1'>Served as a dedicated Frontend Developer, translating complex Figma designs into high-fidelity, responsive UIs using React.js and Tailwind CSS. Additionally integrated and tested APIs built with Express.js/Node.js and explored Next.js full-stack architecture.</p>
                    </div>
                    <div>
                        <h4 className='text-[16px] font-["Montserrat"] opacity-40 font-medium '>Key Achievements:</h4>
                        <img src={keyLine} alt="" />
                        <div className='flex flex-wrap gap-3 mt-3'>
                            <div className='key text-[16px] font-medium text-white center'>React.js</div>
                            <div className='key text-[16px] font-medium text-white center'>JavaScript</div>
                            <div className='key text-[16px] font-medium text-white center'>Tailwind CSS</div>
                            <div className='key text-[16px] font-medium text-white center'>Next.js</div>
                            <div className='key text-[16px] font-medium text-white center'>Express.js</div>
                            <div className='key text-[16px] font-medium text-white center'>Node.js</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experiences

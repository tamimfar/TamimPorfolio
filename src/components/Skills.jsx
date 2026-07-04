import React from 'react'
import frontend from '../assets/frontendIcon.svg'
import frontLine from '../assets/frontLine.svg'
import backendIcon from '../assets/backendIcon.svg'
import backendLine from '../assets/backendLine.svg'
import Card from './Card'
import Card2 from './Card2'

function Skills() {
    return (
        <div className='conteners skills'>
            <div className='flex flex-col justify-center items-center  border-b-1 border-dashed py-3'>
                <h1 className='text-[32px] font-["Inder"] text-center'>my Skills</h1>
                <p className='md:w-[513px] w-full font-["Montserrat"] opacity-50 md:text-[16px] text-sm text-center  '>Technologies I Master as a Full-Stack Developer</p>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='md:w-6/12 w-full'>
                    <div className='border-b-1  border-dashed h-20 flex items-center gap-3 justify-center'>
                        <img src={frontend} alt="frontend icon" />
                        <h3 className='text-[24px] font-["Inder"]  '>
                            Frontend
                        </h3>
                        <img src={frontLine} alt="frontend line" />
                    </div>
                    <div >
                        <Card />
                    </div>
                </div>
                <div className='  md:w-6/12 lg:h-[495px] w-full h-full md:border-l border-dashed flex flex-col-reverse md:flex-col'>
                    <div className='py-2' >
                        <Card2 />
                    </div>

                    <div className='border-t border-b md:border-b-0  border-dashed h-20  flex items-center gap-3 justify-center '>
                        <img src={backendIcon} alt="backend icon" />
                        <h3 className='text-[24px] font-["Inder"]  '>
                            Backend
                        </h3>
                        <img src={backendLine} alt="backend line" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

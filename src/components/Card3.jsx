import React from 'react'
import cardimg1 from '../assets/cardImg.svg'

function Card3() {
    const projectData = [
        {
            id: 1,
            icon: <img src={cardimg1} alt="ProConnect Icon" className="w-full" />,
            heading: "ProConnect",
            tag: "Frontend",
            tec: ["React", "Next.js", "Tailwind CSS"],
            discription: "Modern marketplace connecting clients & sellers. Features role-based dashboards, analytics, payments, reviews, wallet & withdrawal management.",

        },
        {
            id: 2,
            icon: <img src={cardimg1} alt="ProConnect Icon" className="w-full" />,
            heading: "ProConnect",
            tag: "Frontend",
            tec: ["React", "Next.js", "Tailwind CSS"],
            discription: "Modern marketplace connecting clients & sellers. Features role-based dashboards, analytics, payments, reviews, wallet & withdrawal management.",

        },
        {
            id: 3,
            icon: <img src={cardimg1} alt="ProConnect Icon" className="w-full" />,
            heading: "ProConnect",
            tag: "Frontend",
            tec: ["React", "Next.js", "Tailwind CSS"],
            discription: "Modern marketplace connecting clients & sellers. Features role-based dashboards, analytics, payments, reviews, wallet & withdrawal management.",

        },




    ];
    return (
        <div className='flex flex-wrap gap-3 justify-center items-center py-5 md:pt-12'>
            {projectData.map((skill) => {
                return (
                    <div key={skill.id} className='flex flex-col gap-3 w-[358px] h-[570px] rounded-lg dark:bg-gray-800 bg-white p-4 border-2 border-[#D9D9D9] '>
                        <div className='w-full'>{skill.icon}</div>
                        <div className='flex justify-between items-center gap-1 py-3 '>
                            <h3 className='font-[Inder] text-[20px]'>{skill.heading}</h3>
                            <p className='text-[14px] font-["Montserrat"] opacity-60 font-medium bg-[#92FFA2] px-3 rounded-full'>{skill.tag}</p>
                        </div>
                        <p className='text-[15px] w-[318px] font-["Montserrat"] opacity-60 font-medium'>{skill.discription}</p>
                        <div className='flex gap-1 justify-between'>
                            {
                                skill?.tec.map((t, index) => (
                                    <div
                                        key={index}
                                        className="h-[27px] bg-[#F5F5F5] dark:bg-gray-600 rounded-full flex justify-center items-center px-5 text-[14px] font-['Montserrat'] opacity-60 font-medium"
                                    >
                                        {t}
                                    </div>
                                ))
                            }

                            {/* <div className=' h-[27px] bg-[#F5F5F5] dark:bg-gray-600 rounded-full  flex justify-center items-center sh px-5 text-[14px] font-["Montserrat"] opacity-60  font-medium'>TypeScript</div>
                            <div className=' h-[27px] bg-[#F5F5F5] dark:bg-gray-600 rounded-full  flex justify-center items-center sh px-3 text-[14px]  font-["Montserrat"] opacity-60  font-medium'>Shadcn UI</div> */}
                        </div>
                        <div className='flex gap-3 mt-auto justify-center items-center pb-3'>
                            <button className='bg-[#D9D9D9] dark:bg-white dark:text-black px-5 py-2 rounded-full text-[14px] font-["Montserrat"] opacity-60 font-medium w-[133px]'>GitHub</button>
                            <button className='border-2 border-[#D9D9D9] px-5 py-2 rounded-full text-[14px] font-["Montserrat"] opacity-60 font-medium w-[133px]'>Live Demo</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Card3

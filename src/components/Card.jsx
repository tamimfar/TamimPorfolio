import React from 'react'
import jsIcon from '../assets/jsIcon.svg'
import reactIcon from '../assets/reactIcon.svg'
import nextjsIcon from '../assets/nextjsIcon.svg'
import tailwindcssIcon from '../assets/tailwindcssIcon.svg'
import typeScriptIcon from '../assets/typeScriptIcon.svg'
import shadcnIcon from '../assets/shadcnIcon.svg'
import reduxIcon from '../assets/reduxIcon.svg'
import zustandIcon from '../assets/zustant.svg'
import tanstrack from '../assets/tanstrack.svg'

function Card() {
    const skillsData = [
        {
            id: 1,
            icon: <img src={jsIcon} alt="JavaScript Icon" className="w-6 h-6" />,
            name: "JavaScript",

            level: 85,
            color: "bg-indigo-500"
        },
        {
            id: 2,
            icon: <img src={reactIcon} alt="React Icon" className="w-6 h-6" />,
            name: "React",

            level: 80,
            color: "bg-blue-500"
        },
        {
            id: 3,
            icon: <img src={nextjsIcon} alt="Next.js Icon" className="w-6 h-6" />,
            name: "Next.js",

            level: 90,
            color: "bg-blue-500"
        },

        {
            id: 5,
            icon: <img src={tailwindcssIcon} alt="Tailwind CSS Icon" className="w-6 h-6" />,
            name: "Tailwind CSS",

            level: 75,
            color: "bg-gray-600"
        },
        {
            id: 6,
            icon: <img src={typeScriptIcon} alt="TypeScript Icon" className="w-6 h-6" />,
            name: "TypeScript",

            level: 85,
            color: "bg-cyan-500"
        },
        {
            id: 7,
            icon: <img src={shadcnIcon} alt="Shadcn Icon" className="w-6 h-6" />,
            name: "Shadcn",

            level: 80,
            color: "bg-green-600"
        },
        {
            id: 8,
            icon: <img src={reduxIcon} alt="Redux Icon" className="w-6 h-6" />,
            name: "Redux",

            level: 80,
            color: "bg-green-600"
        },
        {
            id: 9,
            icon: <img src={zustandIcon} alt="Zustand Icon" className="w-6 h-6" />,
            name: "Zustand",

            level: 70,
            color: "bg-purple-500"
        },
        {
            id: 10,
            icon: <img src={tanstrack} alt="TanStack Icon" className="w-6 h-6" />,
            name: "TanStack",

            level: 75,
            color: "bg-blue-400"
        }

    ];
    return (
        <div className='flex flex-wrap md:gap-3 gap-2 justify-center items-center py-5 md:py-1   md:mt-5'>
            {skillsData.map((skill) => {
                return (
                    <div key={skill.id} className={`w-[170px] h-[113px] bg-white dark:bg-gray-800  rounded-2xl flex flex-col justify-center items-center  p-2 ${skill.color}`}>
                        <h3 className='text-[18px] font-["Itim"] '>{skill.icon}</h3>
                        <h3 className='text-[15px] font-["Itim"]  '>{skill.name}</h3>
                        <span className='text-[12px] font-["Montserrat"]  bg-[#AFFFDF] mb-2 px-3 flex justify-center items-center rounded-full w-[43.92px] h-[11px]  opacity-50'>{skill.tag}</span>
                        <div className="w-[70%] bg-gray-200 h-3 rounded-full">
                            <div
                                className={`${skill.color} h-3 rounded-full text-[10px] text-white flex justify-center items-center`}
                                style={{ width: `${skill.level}%` }}
                            >{skill.level}%</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card

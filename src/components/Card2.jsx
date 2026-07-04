import React from 'react'
import nodejsIcon from '../assets/nodejsIcon.svg'
import expressIcon from '../assets/expressjsIcon.svg'
import mongoDBIcon from '../assets/mongodbIcon.svg'
import mongoosIcon from '../assets/mongodbIcon.svg'
import postgreSQLIcon from '../assets/postgresqlIcon.svg'
import prismaIcon from '../assets/prismaIcon.svg'
import jwtIcon from '../assets/jwtIcon.svg'
import pyment from '../assets/pyment.svg'
import nextAuth from '../assets/nextAuth.svg'

function Card2() {
    const skillsData = [
        {
            id: 1,
            icon: <img src={nodejsIcon} alt="Node.js Icon" className="w-6 h-6" />,
            name: "Node.js",

            level: 85,
            color: "bg-green-500"
        },
        {
            id: 2,
            icon: <img src={expressIcon} alt="Express.js Icon" className="w-6 h-6" />,
            name: "Express.js",

            level: 80,
            color: "bg-gray-700"
        },
        {
            id: 3,
            icon: <img src={mongoDBIcon} alt="MongoDB Icon" className="w-6 h-6" />,
            name: "MongoDB",

            level: 75,
            color: "bg-green-700"
        },
        {
            id: 4,
            icon: <img src={mongoosIcon} alt="Mongoose Icon" className="w-6 h-6" />,
            name: "Mongoose",

            level: 70,
            color: "bg-blue-700"
        },
        {
            id: 5,
            icon: <img src={postgreSQLIcon} alt="PostgreSQL Icon" className="w-6 h-6" />,
            name: "PostgreSQL",

            level: 75,
            color: "bg-purple-500"
        },
        {
            id: 6,
            icon: <img src={prismaIcon} alt="Prisma Icon" className="w-6 h-6" />,
            name: "Prisma",

            level: 80,
            color: "bg-red-500"
        },
        {
            id: 7,
            icon: <img src={jwtIcon} alt="JWT Icon" className="w-6 h-6" />,
            name: "JWT",

            level: 85,
            color: "bg-red-500"
        },
        {
            id: 8,
            icon: <img src={pyment} alt="Payment Icon" className="w-6 h-6" />,
            name: "Payment",

            level: 85,
            color: "bg-blue-400"
        },
        {
            id: 9,
            icon: <img src={nextAuth} alt="NextAuth Icon" className="w-6 h-6" />,
            name: "NextAuth",

            level: 80,
            color: "bg-blue-500"
        }


    ];
    return (
        <div className='flex flex-wrap gap-3 justify-center items-center py-5 md:py-1   md:mt-5'>
            {skillsData.map((skill) => {
                return (
                    <div key={skill.id} className={`w-[170px] h-[113px] bg-white dark:bg-gray-800  rounded-2xl flex flex-col justify-center items-center g p-2 ${skill.color}`}>
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

export default Card2

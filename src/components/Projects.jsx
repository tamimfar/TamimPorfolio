import React from 'react'
import Card3 from './Card3'


function Projects() {
    return (
        <div className=' conteners projects' id="projects" >
            <div className='text-center border-b-1 py-3 border-dashed' >
                <h1 className=' text-center text-[32px] font-medium '>Projects</h1>
                <p className='text-center font-[Montserrat] text-[16px] opacity-70 font-medium'>MERN Stack and Next.js Portfolio Showcase</p>
            </div>
            <div>

                <Card3 />

            </div>

        </div>
    )
}

export default Projects

import React from 'react'
import toolsIcon from '../assets/toolsIcon.png'
import gitIcon from '../assets/gitIcon.svg'
import githubIcon from '../assets/githubIcon.svg'
import figmaIcon from '../assets/figmaIcon.svg'
import vscodeIcon from '../assets/vscodeIcon.svg'
import postmanIcon from '../assets/postmanIcon.svg'
import phpIcon from '../assets/phpIcon.svg'
import mysqlIcon from '../assets/mysqlIcon.svg'
import wordpressIcon from '../assets/wordpressIcon.svg'
import laravelIcon from '../assets/laravelIcon.svg'

function Tools() {
    return (
        <div className=' conteners tools hidden lg:block'>
            <div className='w-full  h-6/12 flex items-center justify-between '>
                <div className=' h-full bg-black w-1/6 flex items-center justify-center gap-1 flex-col '>
                    <img src={toolsIcon} alt="tools icon" />
                    <h2 className='text-white text-[32px] font-["Itim"]'>Tools</h2>
                </div>
                <div className='tools-top center'>
                    <img src={gitIcon} alt="git icon" />
                </div>
                <div className='tools-top center'>
                    <img src={githubIcon} alt="github icon" />
                </div>
                <div className='tools-top center'>
                    <img src={figmaIcon} alt="figma icon" />
                </div>
                <div className='tools-top center'>
                    <img src={vscodeIcon} alt="vscode icon" />
                </div>
                <div className=' h-full w-1/6 border-l-1 border-dashed center  '>
                    <img src={postmanIcon} alt="postman icon" />
                </div>

            </div>
            <div className='w-full  h-6/12 border-t-1 border-dashed border-black flex items-center justify-between '>
                <div className='  w-[310px]'>
                    <h2 className='text-black text-[24px] font-["Montserrat"] text-center'>Others Technologies</h2>
                </div>
                <div className='tools-bottom bg-black center'>
                    <img src={phpIcon} alt="php icon" />
                </div>
                <div className='tools-bottom bg-black center'>
                    <img src={mysqlIcon} alt="mysql icon" />
                </div>
                <div className='tools-bottom bg-black center '>
                    <img src={wordpressIcon} alt="wordpress icon" />
                </div>
                <div className=' h-full w-2/6 border-l-1 border-dashed border-white bg-black center '>
                    <img src={laravelIcon} alt="laravel icon" />
                </div>
            </div>
        </div>
    )
}

export default Tools

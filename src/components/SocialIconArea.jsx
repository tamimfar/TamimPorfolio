import React from 'react'
import instra from '../assets/instra.svg'
import facebock from '../assets/facebock.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import discord from '../assets/discord.svg'
import iconLine from '../assets/iconLine.svg'

function SocialIconArea() {
    return (
        <div className='lg:w-[1164px] mx-auto border border-dashed h-[80px] border-t-0 py-5 flex justify-center gap-7 md:gap-15 items-center '>
            <img src={instra} alt="" />
            <img src={facebock} alt="" />
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
            <img src={discord} alt="" />


        </div>
    )
}

export default SocialIconArea

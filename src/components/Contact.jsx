import React from 'react'
import emailIcon from '../assets/emailIcon.svg'
import phoneIcon from '../assets/phoneIcon.svg'
import telegramIcon from '../assets/telegramIcon.svg'

function Contact() {
    return (
        <div className='conteners contect '>
            <div className='text-center border-b-1 py-3 border-dashed' >
                <h1 className='text-[32px] font-medium text-center font-["Inder"]  '>STAY IN TOUCH</h1>
                <p className='text-center text-[15px] font-medium font-["Montserrat"] opacity-60 '>Hire Your Next MERN Stack & Next.js Developer</p>
            </div>
            <div className=' flex flex-col md:flex-row justify-center gap-3 items-center md:h-[600px] h-full py-8 px-3  '>
                <div className='  md:w-1/3 '>
                    <h3 className='text-[32px] font-medium font-["Montserrat"]'>Let’s discuss on something cool together</h3>
                    <div className='md:h-[200px] flex flex-col justify-center items-start mt-5 rounded-lg px-5 py-3 border-l-3 opacity-60'>
                        <p className='text-[16px] font-medium font-["Montserrat"] opacity-60 mt-3 flex gap-2'><span><img src={emailIcon} alt="emailIcon" className=' w-6 h-6' /></span>Tamim@gmail.com</p>
                        <p className='text-[16px] font-medium font-["Montserrat"] opacity-60 mt-3 flex gap-2'><span><img src={phoneIcon} alt="phoneIcon" className=' w-6 h-6' /></span>01726143933</p>
                    </div>
                </div>
                <div className=''>
                    <form className='flex flex-col gap-5 md:w-[500px] w-[370px] bg-white dark:bg-gray-800 rounded-lg px-5 py-7 shadow-lg'>
                        <input type="text" placeholder='Your Name' className='border-1 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black' />
                        <input type="email" placeholder='Your Email' className='border-1 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black' />
                        <textarea placeholder='Your Message' className='border-1 border-gray-300 rounded-lg px-4 py-2 h-[150px] resize-none focus:outline-none focus:ring-1 focus:ring-black'></textarea>
                        <button type="submit" className='bg-black text-white flex justify-center items-center gap-3 font-medium py-2 px-4 rounded-lg'><img src={telegramIcon} alt="" />Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialIconArea from './components/SocialIconArea'
import About from './components/About'
import MainLine from './components/MainLine'

import Skills from './components/Skills'
import Tools from './components/Tools'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import Details from './components/Details'



function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SocialIconArea />
      <About />
      <MainLine />
      <Skills />
      <Tools />
      <MainLine />
      <Experiences />
      <Projects />
      <MainLine />
      <Contact />
      <MainLine />
      <div className='h-28 flex justify-center items-center dark:bg-black '>
        <p className='text-center text-[14px] font-medium font-["Montserrat"] opacity-60'>© 2026 Shaharia. All rights reserved.</p>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

{/* <div className='h-28 flex justify-center items-center dark:bg-black '>
        <p className='text-center text-[14px] font-medium font-["Montserrat"] opacity-60'>© 2026 Shaharia. All rights reserved.</p>
      </div>
    </div> */}
export default App

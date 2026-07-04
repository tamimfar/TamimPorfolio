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



function App() {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false);
  return (
    <div className=" bg-white dark:bg-black dark:text-white" data-theme={dark ? "dark" : "light"}>

      <Header key={1} />
      <Hero key={2} />
      <SocialIconArea key={3} />

      <About key={4} />
      <MainLine key={5} />
      <Skills key={6} dark={dark} />
      <Tools key={7} />
      <MainLine key={8} />
      <Experiences key={9} />
      <Projects key={10} />
      <MainLine key={11} />
      <Contact key={12} />
      <MainLine key={13} />

      <div className='h-28 flex justify-center items-center dark:bg-black '>
        <p className='text-center text-[14px] font-medium font-["Montserrat"] opacity-60'>© 2026 Shaharia. All rights reserved.</p>
      </div>
    </div>
  )
}

export default App

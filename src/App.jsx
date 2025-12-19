import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import Experience from './components/Experience'
import Education from './components/education'
import emailjs from "@emailjs/browser"
import { motion } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded]= useState(false)
  useEffect(()=>{
   setIsLoaded(true)
   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])


  return (
    <div className={`app ${isLoaded?'loaded':""}`}>
      <Navbar/>
      <Hero/>
      <Experience/>
      <Projects/>
      <Education/>
      <Contact/>
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
      <motion.footer className='footer'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
      transition={{duration:0.6}}

      >
      <p>
        &copy; 2025 Apoorv. All rights reserved
      </p>
      </motion.footer>
    </div>
  )
}

export default App

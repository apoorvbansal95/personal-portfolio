import React from 'react'
import { motion } from 'framer-motion' 
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter' 
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
const fadeInUp={
      initial:{ opacity: 0, y: 20 },
      animate:{opacity: 1, y: 0 },
      transition:{ duration: 0.6 },
}
const staggerChildren={
    animate:{
        transition:{
            staggerChildren:0.1
        }
    }
}
export default function Hero() {

  return (
    <motion.section id='home' className='hero'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.8, delay:0.2}}
    >
      <div className='hero-container' >
        <motion.div className='hero-content' 
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        >
          <motion.div className='hero-badge'>
            <span>
              👋 Hi, I'm
            </span>
          </motion.div>

            <motion.h1 className='glitch'
            variants={fadeInUp}
            whileHover={{scale:1.02}}
            >
              Apoorv Bansal
            </motion.h1>
            <motion.h2 className='hero-subtitle' variants={fadeInUp}>
              Software Engineer
            </motion.h2>
            <motion.p className='hero-description' variants={fadeInUp}>
              Full-stack developer specializing in scalable microservices, cloud-native applications, and high-performance systems
            </motion.p>
            <motion.div className='cta-buttons'
            variants={staggerChildren}
            >
              <motion.a href='#projects' className='cta-primary'
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
              >
              View my work
              </motion.a>
              <motion.a href='#contacts' className='cta-secondary'
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
              >
                Contact Me
              </motion.a>
            </motion.div>
            <motion.div className='social-links'
            variants={staggerChildren}
            >
              <motion.a  href="https://github.com/apoorvbansal95" target='_blank'>
                <i className='fab fa-github'>
                  </i>
              </motion.a>
                <motion.a  href="https://www.linkedin.com/in/apoorv-bansal-134a1b214/" target='_blank'>
                <i className='fab fa-linkedin'>
                  </i>
              </motion.a>
            </motion.div>
        </motion.div>
         
         <motion.div className='hero-image-container'
         initial={{opacity:0,  x:50}}
         animate={{opacity:1, x:0}}
         transition={{duration:0.8, delay:0.4}}
         >
          <div className='code-display'>


               <SyntaxHighlighter 
               customStyle={{
                margin:0, 
                padding:"2rem", 
                height:"100%", 
                borderRadius:"20px", 
                background:"rgba(30, 41, 59, 0.8)", 
                backdropFilter:"blur(10px)", 
                marginBottom:50
               }}
               
               style={vscDarkPlus} language='typescript'>
{`const aboutMe: Profile={
codename:"Apoorv Bansal", 
role:"Full-Stack Web Developer", 
stack:{
languages:["JavaScript", "TypeScript", "Python", "Java", "SQL"], 
frameworks:["React", "NextJs", "NodeJS", "ExpressJs", "Spring"] 
tools:["Git", "Nginx", "Redis", "AWS"]
}, 
mission Statement:"Turning ideas into scalable, performant,
and secure applictaions"
  }`}
                </SyntaxHighlighter>


            </div>
         </motion.div>
      </div>
    </motion.section>
  )
}

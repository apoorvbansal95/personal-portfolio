import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import React from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science',
      major: 'Computer Science',
      institution: 'University of Maryland, Baltimore County',
      period: 'Aug 2023 – May 2025',
      gpa: '3.71/4.00',
      icon: <GraduationCap size={24} className="text-purple-400" />
    },
    {
      degree: 'Bachelor of Engineering',
      major: 'Information Technology',
      institution: 'Institute of Engineering and Technology, Lucknow',
      period: 'Aug 2018 – May 2022',
      gpa: '7.94/10',
      icon: <GraduationCap size={24} className="text-purple-400" />
    }
  ]

  return (
    <motion.section 
      id="education"
      className="education"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 0.6}}
    >
      <motion.h2 
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
        className="section-title"
      >
        Education
      </motion.h2>
      
      <motion.div 
        className="education-grid"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
      >
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            className="education-card"
            variants={fadeInUp}
            whileHover={{y: -10, transition: {duration: 0.2}}}
          >
            <div className="education-header">
              <div className="flex items-center gap-3">
                {edu.icon}
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-purple-300 text-sm">{edu.major}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-300 mb-3">{edu.institution}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700/50">
                <span className="text-gray-400 text-sm">{edu.period}</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                  GPA: {edu.gpa}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Education
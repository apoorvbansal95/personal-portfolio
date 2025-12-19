import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import React from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Synopsys',
      location: 'Boston, MA',
      period: 'Sep 2024 – Aug 2025',
      highlights: [
        'Engineered test automation frameworks and React.js dashboard, elevating code coverage by 30%',
        'Cut nightly test failures by 25% through cross-functional collaboration',
        'Designed automated document sync system, slashing manual efforts by 80%',
        'Delivered high-quality code using Linux, Perl, Python, Git, React.js, and MongoDB',
      ],
    },
    {
      role: 'Software Engineer I',
      company: 'ADROSONIC',
      location: 'Lucknow, India',
      period: 'Jul 2022 – Aug 2023',
      highlights: [
        'Led development of new Admin Portal with enhanced UI/UX and backend stability',
        'Fixed 30+ critical bugs, boosting user satisfaction by 40%',
        'Reduced memory consumption by 60% and CPU usage by 75% via optimizations',
        'Automated 100+ API endpoints with Postman, streamlining backend integrations',
      ],
    },
    {
      role: 'Software Development Engineer Intern',
      company: 'Inxero Technologies',
      location: 'Noida, India',
      period: 'Jul 2021 – Jul 2022',
      highlights: [
        'Optimized RESTful APIs, improving response times by 35%',
        'Created efficient MongoDB schemas, decreasing query latency by 40%',
        'Implemented JWT-based authentication and RBAC for enhanced security',
      ],
    },
  ];

  return (
    <motion.section 
      id="experience"
      className="experience"
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
        Professional Journey
      </motion.h2>
      
      <motion.div 
        className="experience-grid"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
      >
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="experience-card"
            variants={fadeInUp}
            whileHover={{y: -10, transition: {duration: 0.2}}}
          >
            <div className="experience-header">
              <div>
                <h3>{exp.role}</h3>
                <div className="experience-company">
                  <Briefcase size={18} />
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              <span className="experience-period">
                {exp.period}
              </span>
            </div>
            <ul className="experience-highlights">
              {exp.highlights.map((highlight, hIdx) => (
                <li key={hIdx}>
                  <span>▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Experience
import { motion } from 'framer-motion'
import { Github, Rocket } from 'lucide-react'
import React from 'react'
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
export default function Projects() {
  return (
    <motion.section id='projects'
    className='projects'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{once:true}}
    transition={{duration:0.6}}
    >
     <motion.h2 variants={fadeInUp}
     initial="initial"
     whileInView="animate"
     viewport={{once:true}}
     >
      My Projects
      </motion.h2>
      <motion.div className='project-grid'
      variants={staggerChildren}
      initial="initial"
      whileInView="animate"
      viewport={{once:true}}
      >
        <motion.div className='project-card'
        variants={fadeInUp}
        whileHover={{y:-10, transition:{duration:0.2}}}
        >
          <div className="relative h-48 overflow-hidden">
            <motion.div 
              className='project-image w-full h-full'
              style={{backgroundImage:"url('/nexusChat.png')"}}
              whileHover={{scale:1.05 , transition:{duration:0.2}}}
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">NexusChat</h3>
            </div>
            <div className="space-y-3 flex-1">
              <p className="text-gray-300">
                Microservice based Real-time scalable messaging system supporting 10K+ active connections with sub-50ms latency
              </p>
              <p className="text-gray-300">
                Reduced API response time by 70% with Redis TTL keys and async processing
              </p>
              <p className="text-gray-300">
                Implemented rate-limit guards and non-blocking I/O for high performance
              </p>
            </div>
            <div className='project-tech mt-4'>
              <span>Node.Js</span>
              <span>React.Js</span>
              <span>Web-Socket</span>
              <span>Redis</span>
              <span>RabbitMQ</span>
            </div>

          </div>
        </motion.div>


        <motion.div className='project-card'
        variants={fadeInUp}
        whileHover={{y:-10, transition:{duration:0.2}}}
        >
          <div className="relative h-48 overflow-hidden">
            <motion.div 
              className='project-image w-full h-full'
              style={{backgroundImage:"url('/devtinder.png')"}}
              whileHover={{scale:1.05 , transition:{duration:0.2}}}
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">DevTinder</h3>
            </div>
            <p>
            Developer Matchmaking Full-stack app connecting developers with real-time matching and chat capabilities
            </p>
            <p>
              Deployed on AWS EC2 with Nginx and PM2 for zero-downtime
            </p>
            <p>
              Integrated JWT auth and real-time feeds for dynamic interactions
            </p>
            <div className='project-tech mt-4'>
              <span>Node.Js</span>
              <span>React.Js</span>
              <span>Web-Socket</span>
              <span>AWS</span>
              <span>Nginx</span>
              <span>Redux toolkit</span>
            </div>
          </div>
        </motion.div>

      </motion.div>

    </motion.section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'


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
export default function Navbar() {
    return (
        <motion.nav className='navbar'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        >
            <motion.div className='logo'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                AB
            </motion.div>

            <motion.ul className='nav-links'
                variants={staggerChildren}
                initial="initial"
                animate="animate"
            >


                <motion.li
                   variants={fadeInUp}
                   whileHover={{scale:1.1}}
                   whileTap={{scale:0.95}}
                >
                    <a href='#home'>Home</a>
                </motion.li>

                <motion.li
                   variants={fadeInUp}
                   whileHover={{scale:1.1}}
                   whileTap={{scale:0.95}}
                >
                    <a href='#experience'>Experience</a>
                </motion.li>


                <motion.li
                    variants={fadeInUp}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.95}}
                >
                    <a href='#projects'>Projects</a>
                </motion.li>

                <motion.li
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href='#education'>Education</a>
                </motion.li>


                <motion.li
                    variants={fadeInUp}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.95}}
                    
                >
                    <a href='#contact'>Contact</a>
                </motion.li>
            </motion.ul>
        </motion.nav>
    )
}

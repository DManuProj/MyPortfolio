import React from 'react'
import './About.scss'
import { motion } from 'framer-motion';
import { images } from '../../constants';



const About = () => {
  return (
    <div className='about ' id='about'>
      <div className="title">
        <h3 className='head-text '>About Me</h3>
        <motion.p 
        whileInView={{ y: [ 0, -100], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className='p-text about-text'>
          I have completed Advanced
        National Information Diploma
        course at SLIATE (Sri Lanka
        Institute of Advanced Technology
        Education).
        I believe in real results and have
        the ability to work under pressure
        and am seeking a full-time
        position in the field of software
        engineering. And I hope to apply
        my knowledge and skills for
        continuous improvement.
        </motion.p>
    
        
      </div>

      <motion.div 
       whileInView={{ y: [ 0, -100], opacity: [0, 1] }}
       transition={{ duration: 0.8 }}
      className="education app__flex ">
        <h2 className='header'>Education</h2>
        <ul className='p-text list' style={{fontSize:"1.2rem", top:"1rem"}}>
          <li>Higher National Diploma in IT</li>
          <li>Computer Hardware Technician NVQ4</li>
        </ul>
      </motion.div>

      <motion.div 
       whileInView={{ y: [ 0, -100], opacity: [0, 1] }}
       transition={{ duration: 0.8 }}
      className="experiance app__flex">
        <h2 className='header'>Experiance</h2>
        <ul className='p-text list' style={{fontSize:"1.2rem", top:"1rem"}}>
          <li>Intern Software - S Out Solution </li>
          <li>Computer Hardware Technician - MS Computers </li>
          
        </ul>
      </motion.div>
      <motion.div 
       whileInView={{ y: [ 0, -100], opacity: [0, 1] }}
       transition={{ duration: 0.8 }}
      className="skills app__flex">
        <h2 className='header'>Skill Set</h2>
        <div className='skill-sets '>

          <motion.div   
          animate={{y:[0, 10, 0]}}
          transition={{repeat: Infinity, duration: 1}}
            >
          <img src={images.react} alt="" />
          <p className='p-text'>React</p>
          </motion.div>

          <motion.div
           animate={{y:[0, 15, 0]}}
           transition={{repeat: Infinity, duration: 2}}
          >
          <img src={images.javascript} alt="" />
          <p className='p-text'>Javascript</p>
          </motion.div>

          <motion.div
          animate={{y:[0, 18, 0]}}
          transition={{repeat: Infinity, duration: 1.5}}
          >
          <img style={{marginLeft:'5px'}} src={images.spring1} alt="" />
          <p className='p-text'>Spring Boot</p>
          </motion.div>

          <motion.div
           animate={{y:[0, 20, 0]}}
           transition={{repeat: Infinity, duration: 2}}
          >
          <img src={images.css} alt="" />
          <p className='p-text'>CSS3</p>
          </motion.div>

          <motion.div
          animate={{y:[0, 25, 0]}}
          transition={{repeat: Infinity, duration: 1}}
          >
          <img src={images.sass} alt="" />
          <p  className='p-text' style={{marginTop:'24px'}}>SASS</p>
          </motion.div>
        </div>
      </motion.div>
     
      
      
     
    </div>
  )
}

export default About
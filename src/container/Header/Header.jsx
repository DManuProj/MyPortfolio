import React from 'react';
import { motion } from 'framer-motion';

import {Card, Text,Badge, Avatar, Grid,Button,Link,Spacer} from '@nextui-org/react'
import { images } from '../../constants';
import './Header.scss';
import CustomButton from '../CustomButton';
import Resume from '../../constants/Resume.pdf'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex" id='home'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      
      className="app__header-info"
    >
      <div  className="app__header-badge">
        <motion.div 
        animate={{y:[0, 30, 0]}}
        transition={{repeat: Infinity, duration: 3}}
        className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text" style={{fontSize:'2rem'}}>Hello, I am</p>
            <h1 className="head-text" style={{color:'#313bac'}}>Dulana</h1>
          </div>
        </motion.div>

        <div className="tag-cmp app__flex">
          <p className="p-text" style={{color:'black',fontSize:'20px'}}>I am Web Developer that brings you with high quality , unique designs 
          with valuable service</p>

          
         
        </div>
        <div className='custombutton' style={{marginTop:"4rem"}}>
          <Link href={Resume} download>
      <CustomButton/>
      </Link>
      
    </div>
      </div>
    </motion.div>
    

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile2} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      animate={{y:[0, 20, 0]}}
      transition={{repeat: Infinity, duration: 3}}
      className="app__header-circles"
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <motion.img
         
           src={circle} alt="profile_bg" />
        </div>
      ))}
      
    </motion.div>
    
  </div>
  
);

export default Header

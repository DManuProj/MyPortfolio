import React from 'react'
import './Projects.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "react-slick";
import { images } from '../../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
   
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='projects' id='projects'>
      <div className="title">
          <h3 className='head-text'>Projects</h3>
      </div>
      <motion.div 
       whileInView={{ y: [ 0, -100], opacity: [0, 1] }}
       transition={{ duration: 0.8 }}
      className='swiper'>
        <Slider {...settings}>
          <div className='project'>
            <img src={images.resturent} alt="Resturent" />
            <h3 style={{marginLeft:'5rem'}}>Cafe Management (React) </h3>
          </div>
          <div>
            <img src={images.libary} alt="" />
            <h3 style={{marginLeft:'5rem', marginTop:'-1.3rem'}}>Libary Management(Java, Netbeans)</h3>
          </div>
          <div>
            <img src={images.todoapp} alt="" />
            <h3 style={{marginLeft:'8rem', marginTop:'-2rem'}}>Todo APP (React)</h3>

          </div>
          <div>
            <img src={images.portfolio} alt="" />
            <h3 style={{marginLeft:'6rem', marginTop:'-1rem'}}>Portfolio(React) </h3>

          </div>
         
        </Slider>
      </motion.div>
      
    </div>
  )
}

export default Projects
import React from 'react'
import {About, Footer, Header, Projects, Testimonial} from './container';
import { Navbar } from './Components';
import './App.scss';
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      
      
        <Navbar/>
        <Header/>
        <About/>
        <Projects/>
        <Testimonial/>
        <Footer/>
       
    </div>
  )
}

export default App
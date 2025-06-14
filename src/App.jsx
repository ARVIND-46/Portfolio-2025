import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Achievements from './components/Achivements';
import Projects from './components/Projects';
import Works from './components/Works';
function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Skills/>
    <Projects/>
    <Achievements/> 
    <Works/>
    <Contact/>
    <Footer/>
   

    </>
  )
}

export default App

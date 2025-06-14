import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Project from './components/Project/project';
import Contact from './components/Contact/Contact';
import './index.css';
import './App.css';

function App() {
  return (
    <>

      <Header />
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Services />
      <Project />
      <Contact />
    </>
  );
}

export default App;

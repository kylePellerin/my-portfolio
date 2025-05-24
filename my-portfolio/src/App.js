
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './styles/global.css'; 
import Navbar from './components/layout/Navbar'; 
import Footer from './components/layout/Footer'; 
import Home from './components/sections/Home'; 
import About from './components/sections/About';    
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills'; 
import Contact from './components/sections/Contact';
import Experience from './components/sections/ExperiencePage';

function App() {
  return (

    <Router>
      <div className="App"> 
        <Navbar />


        <main>
          <Routes>

            <Route path="/" element={<Home />} /> 
        
            <Route path="/experience" element={<Experience />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

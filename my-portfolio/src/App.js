// src/App.js
import React from 'react';
// Import necessary components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import global styles. Ensure this path is correct.
import './styles/global.css'; 

// Import layout components. Ensure these paths are correct.
import Navbar from './components/layout/Navbar'; 
import Footer from './components/layout/Footer'; 

// Import page components. 
// Ensure HomePage.js is in 'src/pages/' and other components are in their respective correct paths.
import Home from './components/sections/Home'; 
import About from './components/sections/About';    // Or use './pages/AboutPage' if you have a separate AboutPage.js
import Projects from './components/sections/Projects';// Or use './pages/ProjectsPage'
import Skills from './components/sections/Skills';  // Or use './pages/SkillsPage'
import Contact from './components/sections/Contact';// Or use './pages/ContactPage'
import Experience from './components/sections/ExperiencePage';// Or use './pages/ContactPage'

function App() {
  return (

    <Router>
      <div className="App"> {/* Main container for the application */}
        {/* Navbar will be displayed on all pages as it's outside the Routes definition */}
        <Navbar />

        {/* The 'main' element will contain the content of the current page */}
        <main>
          {/* The Routes component is where you define your individual routes.
              It will render the component associated with the first matching path. */}
          <Routes>
            {/* Route for the home page ("/") now uses HomePage.
                HomePage.js should then import and render your Hero.js component.
            */}
            <Route path="/" element={<Home />} /> 
            
            {/* Your other routes. 
                These currently point to section components. If you create dedicated 
                page components (e.g., AboutPage.js in src/pages/), update the 'element' prop accordingly.
            */}
            <Route path="/experience" element={<Experience />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>

        {/* Footer will be displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

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

// Optional: You might want to create a NotFoundPage component for handling undefined routes
// import NotFoundPage from './pages/NotFoundPage';


/**
 * The main App component.
 * This component sets up the overall structure of the application,
 * including routing for different pages.
 */
function App() {
  return (
    // BrowserRouter (aliased as Router) is the parent component that enables routing.
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
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Optional: A "catch-all" route for 404 Not Found pages.
                This route will match if none of the above routes match.
                You would need to create a NotFoundPage.js component.
            */}
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

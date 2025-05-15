// src/App.js
import React from 'react';
import './styles/global.css'; // Global styles - create this file if you haven't

// Import section components (you'll create these)
// import Navbar from './components/layout/Navbar';
// import Hero from './components/sections/Hero';
// import About from './components/sections/About';
// import Projects from './components/sections/Projects';
// import Skills from './components/sections/Skills';
// import Contact from './components/sections/Contact';
// import Footer from './components/layout/Footer';

// --- Placeholder components (Remove these as you build the real ones) ---
const Navbar = () => <nav style={{padding: '1rem', backgroundColor: '#333', color: 'white', textAlign: 'center'}}>Navbar Placeholder</nav>;
const Hero = () => (
  <section id="hero" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
    <h1>Kyle Pellerin</h1>
    <p>[Your Tagline - e.g., Software Developer | Web Designer | Tech Enthusiast]</p>
    <button>View My Work</button>
  </section>
);
const About = () => <section id="about" style={{ padding: '4rem 2rem' }}><h2>About Me Placeholder</h2></section>;
const Projects = () => <section id="projects" style={{ padding: '4rem 2rem', backgroundColor: '#f4f4f4' }}><h2>Projects Placeholder</h2></section>;
const Skills = () => <section id="skills" style={{ padding: '4rem 2rem' }}><h2>Skills Placeholder</h2></section>;
const Contact = () => <section id="contact" style={{ padding: '4rem 2rem', backgroundColor: '#f4f4f4' }}><h2>Contact Placeholder</h2></section>;
const Footer = () => <footer style={{padding: '1rem', backgroundColor: '#333', color: 'white', textAlign: 'center'}}>Footer Placeholder</footer>;
// --- End Placeholder components ---


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

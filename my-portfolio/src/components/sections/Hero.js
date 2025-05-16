// src/components/sections/Hero.js
// Create this file in your src/components/sections/ directory.

import React from 'react';
// You can create a Hero.module.css for specific styles or use global styles.
// import styles from './Hero.module.css'; 

const Hero = () => {
  // Inline styles for quick setup. Prefer CSS files for larger projects.
  const heroStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(80vh - 70px)', // Adjust 70px if your Navbar height is different
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'var(--background-light)', // Using variable from your global.css
    borderBottom: '1px solid var(--border-color)',
  };

  const headingStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', // Responsive font size
    color: 'var(--text-dark)',
    marginBottom: '1rem',
    fontWeight: '700',
  };

  const taglineStyle = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    color: 'var(--text-secondary-dark)',
    marginBottom: '2rem',
    maxWidth: '700px',
  };

  const ctaButtonStyle = {
    padding: '0.8rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--text-light)',
    backgroundColor: 'var(--primary-color)',
    border: 'none',
    borderRadius: 'var(--border-radius)',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 10px rgba(var(--primary-color-rgb, 0, 123, 255), 0.25)',
  };

  return (
    <section id="hero-section" style={heroStyle}>
      <h1 style={headingStyle}>
        [Your Name Here]
      </h1>
      <p style={taglineStyle}>
        [Your Awesome Tagline: e.g., Creative Developer | Problem Solver | Tech Enthusiast]
      </p>
      {/* Link this button to your projects page or another relevant section */}
      <a href="/projects" style={ctaButtonStyle}
         onMouseEnter={(e) => { e.target.style.backgroundColor = 'var(--secondary-color)'; e.target.style.transform = 'translateY(-2px)';}}
         onMouseLeave={(e) => { e.target.style.backgroundColor = 'var(--primary-color)'; e.target.style.transform = 'translateY(0)';}}
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;


import React from 'react';


const Hero = () => {
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
        Welcome to my Portfolio
      </h1>
      <p style={taglineStyle}>
        I'm glad to see you're here! 
      </p>
      {/* Link this button to your projects page or another relevant section */}
      <a href="/projects" style={ctaButtonStyle}
         onMouseEnter={(e) => { e.target.style.backgroundColor = 'navy'; e.target.style.transform = 'translateY(-2px)';}}
         onMouseLeave={(e) => { e.target.style.backgroundColor = 'var(--primary-color)'; e.target.style.transform = 'translateY(0)';}}
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;

// src/components/layout/Footer.js
import React from 'react';
// Import icons from react-icons
// FaGithub, FaLinkedin, FaTwitter are examples from Font Awesome
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa'; // Added FaGlobe for a generic website

// Optional: If you want to use CSS Modules for Footer specific styles
// import styles from './Footer.module.css';

const Footer = () => {
  const footerStyle = {
    // Global.css already styles this, but you can override or add here
  };

  const textStyle = {
    margin: '0.5rem 0',
  };

  // Styles for the social links container and individual icons
  const socialLinksContainerStyle = {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem', // Space between icons
  };

  const socialIconStyle = {
    color: 'var(--text-secondary-dark)', // Use a color from your theme
    fontSize: '1.5rem', // Adjust icon size
    transition: 'color 0.3s ease, transform 0.2s ease',
  };

  // Hover effect can be done with CSS, but here's a JS way if preferred for dynamic color
  const handleIconMouseEnter = (e, hoverColor) => {
    e.currentTarget.style.color = hoverColor || 'var(--primary-color)';
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleIconMouseLeave = (e) => {
    e.currentTarget.style.color = 'var(--text-secondary-dark)';
    e.currentTarget.style.transform = 'scale(1)';
  };


  const currentYear = new Date().getFullYear();

  // Replace with your actual usernames/links
  const socialLinks = [
    {
      href: "https://github.com/kylePellerin",
      icon: <FaGithub style={socialIconStyle} />,
      label: "GitHub",
      hoverColor: "#333" // GitHub black
    },
    {
      href: "https://www.linkedin.com/in/kyle-pellerin-896a7726b/",
      icon: <FaLinkedin style={socialIconStyle} />,
      label: "LinkedIn",
      hoverColor: "#0A66C2" // LinkedIn blue
    }
    // Add more social links if needed
    // {
    //   href: "https://your-other-site.com",
    //   icon: <FaGlobe style={socialIconStyle} />,
    //   label: "Website",
    //   hoverColor: "var(--secondary-color)"
    // }
  ];

  return (
    <footer style={footerStyle}>
      <div className="footer-content-wrapper">
        <p style={textStyle}>
          © {currentYear} Kyle Pellerin. All Rights Reserved.
        </p>
        
        <div className="social-links" style={socialLinksContainerStyle}>
          {socialLinks.map(social => (
            <a 
              key={social.label}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.label} // For accessibility
              onMouseEnter={(e) => handleIconMouseEnter(e, social.hoverColor)}
              onMouseLeave={handleIconMouseLeave}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* You can add more links or information here if needed */}
        {/* <p style={textStyle}>
          <a href="/privacy-policy" style={{color: 'var(--primary-color)'}}>Privacy Policy</a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;

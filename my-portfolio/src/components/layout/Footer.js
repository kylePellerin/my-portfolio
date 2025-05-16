// src/components/layout/Footer.js
// Create this file if it doesn't exist, or update your existing empty one.

import React from 'react';


const Footer = () => {

  const footerStyle = {

  };

  const textStyle = {
    margin: '0.5rem 0', // Add some spacing between lines if you have multiple
  };

  const linkStyle = {
    color: 'var(--primary-color)', // Use your theme's primary color for links
    textDecoration: 'none',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  };

  const currentYear = new Date().getFullYear();

  return (
    // The <footer> tag itself is styled by your global.css
    <footer style={footerStyle}>
      <div className="footer-content-wrapper"> {/* Optional wrapper for content */}
        <p style={textStyle}>
          © {currentYear} Kyle Pellerin. All Rights Reserved.
        </p>
        {/* You can add more links or information here */}
        <p style={textStyle}>
          {/* Example of adding some links */}
          {/* <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a> | */}
          {/* <a href="/terms-of-service" style={linkStyle}>Terms of Service</a> */}
          {/* Or social media icons/links */}
        </p>
        {/* Example for social media links (you'd typically use icons here):
        <div className="social-links" style={{ marginTop: '1rem' }}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;

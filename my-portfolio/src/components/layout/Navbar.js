// src/components/layout/Navbar.js
import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'; // Ensure this CSS file exists and is linked

// Import your logo image from the src/components/data/ folder
// IMPORTANT: Adjust 'KP-LOGO.png' if your actual filename is different.
// This path assumes Navbar.js is in src/components/layout/ and the logo is in src/components/data/
import KpLogoFile from '../../data/KP_LOGO.png'; // Path relative to Navbar.js

// ScrollToTop component: Scrolls window to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: effect runs when pathname changes

  return null; // This component does not render anything
};

// Component to display the imported logo
const KpLogoImage = () => {
  return (
    <img 
      src={KpLogoFile} // Use the imported image variable here
      alt="Kyle Pellerin Portfolio Logo" // Descriptive alt text
      className="navbar-logo-img-custom" // Use the class from Navbar.css
      // Optional: Add an onError handler for a fallback if the image somehow still fails
      onError={(e) => { 
        e.target.style.display = 'none'; // Hide the broken image icon
        const parent = e.target.parentNode;
        if (parent) {
          const fallbackText = document.createElement('span');
          fallbackText.textContent = 'KP'; // Simple text fallback
          fallbackText.style.fontWeight = 'bold';
          fallbackText.style.fontSize = '1.5em'; 
          parent.insertBefore(fallbackText, e.target.nextSibling);
        }
      }}
    />
  );
};


function Navbar() {
    return (
        <nav className="navbar-custom">
            <ScrollToTop />
            <div className="navbar-logo-custom">
                <Link to='/' className='navbar-title-custom'>
                    <KpLogoImage /> {/* Using the image component */}
                </Link>
            </div>
            <ul className="navbar-links-custom">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/experience'> Experience</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

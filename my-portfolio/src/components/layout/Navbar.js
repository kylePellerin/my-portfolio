// src/components/layout/Navbar.js
import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'; 

import KpLogoFile from '../../data/KP_LOGO.png';

// ScrollToTop component: Scrolls window to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null; 
};

const KpLogoImage = () => {
  return (
    <img 
      src={KpLogoFile} 
      alt="Kyle Pellerin Portfolio Logo" 
      className="navbar-logo-img-custom" 
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

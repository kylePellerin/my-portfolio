import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
      <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
      <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
      <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
      <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
    </nav>
  );
};
export default Navbar;
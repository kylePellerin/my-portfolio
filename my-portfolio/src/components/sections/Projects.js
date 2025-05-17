// src/components/sections/Projects.js
// This component displays a list or grid of projects, with filtering capabilities.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get category from URL if this component is directly routed with a param
import ProjectCard from './ProjectCard'; // Assuming ProjectCard.js is in the same directory or ../components/sections/
import { getAllProjects, getProjectsByCategory } from '../../data/projectsData.js'; 
import styles from './Projects.module.css'; // Assuming Projects.module.css is in the same directory

const Projects = ({ categoryFilter }) => { // categoryFilter can be passed as a prop
  const [projects, setProjects] = useState([]);
  const [pageTitle, setPageTitle] = useState('My Projects'); // Default title for a section
  
  // This allows using a URL parameter if this component is rendered by a route like /projects/:category
  const { category: urlCategory } = useParams(); 
  
  const currentCategory = categoryFilter || urlCategory;

  useEffect(() => {
    if (currentCategory) {
      setProjects(getProjectsByCategory(currentCategory));
      // Adjust title; if it's a section, you might not want "Projects" appended or want a different H-level
      setPageTitle(`${currentCategory.toUpperCase()} Projects`); 
    } else {
      setProjects(getAllProjects());
      setPageTitle('My Projects'); 
    }
  }, [currentCategory]); // Re-run effect if categoryFilter or urlCategory changes




  return (
    // Using <section> tag if this is a section of a page
    <section id="projects-section" className={styles.projectsSection}> 
      <h2 className={styles.sectionTitle}>{pageTitle}</h2>
      {/* Optional: Add filter buttons here if you want to filter on the same page 
          and not relying solely on props or URL params
      */}
      {/* <div className={styles.filterControls}> ... </div> */}
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          // Ensure ProjectCard component is correctly imported and styled
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

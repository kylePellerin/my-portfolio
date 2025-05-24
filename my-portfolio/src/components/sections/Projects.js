// src/components/sections/Projects.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ProjectCard from './ProjectCard'; 
import { getAllProjects, getProjectsByCategory } from '../../data/projectsData.js'; 
import styles from './Projects.module.css'; 

const Projects = ({ categoryFilter }) => { 
  const [projects, setProjects] = useState([]);
  const [pageTitle, setPageTitle] = useState('My Projects'); 
  
  const { category: urlCategory } = useParams(); 
  
  const currentCategory = categoryFilter || urlCategory;

  useEffect(() => {
    if (currentCategory) {
      setProjects(getProjectsByCategory(currentCategory));
      setPageTitle(`${currentCategory.toUpperCase()} Projects`); 
    } else {
      setProjects(getAllProjects());
      setPageTitle('My Projects'); 
    }
  }, [currentCategory]); 




  return (
    <section id="projects-section" className={styles.projectsSection}> 
      <h2 className={styles.sectionTitle}>{pageTitle}</h2>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

// src/components/sections/ProjectCard.js
import React from 'react';
import styles from './ProjectCard.module.css'; // Assuming you have this CSS module

const ProjectCard = ({ project }) => {
  if (!project) {
    return null;
  }

  // Destructure props from project. 'categories' is still available if needed elsewhere,
  // but we are not using it for display in this version.
  // Added liveLinkName and sourceLinkName as per your provided code.
  const { title, imageUrl, description, tags, liveLink, liveLinkName, sourceLink, sourceLinkName, imagePlaceholder } = project;

  return (
    <div className={styles.card}>
      <img 
        src={imageUrl} 
        alt={`${title} project screenshot`} 
        className={styles.cardImage}
        onError={(e) => { 
          e.target.onerror = null; 
          e.target.src = imagePlaceholder || "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Available"; 
        }} 
      />
      <div className={styles.cardContent}>
        {/* Categories display has been removed from here */}
        {/* <div className={styles.categoriesContainer}>
          {categories && categories.map((category, index) => (
            <span 
              key={index} 
              className={`${styles.category} ${styles[category.toLowerCase()] || ''}`}
            >
              {category}
            </span>
          ))}
        </div> 
        */}

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags && tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.links}>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
              {liveLinkName || 'Live Demo'} {/* Fallback text if liveLinkName is not provided */}
            </a>
          )}
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
              {sourceLinkName || 'Source Code'} {/* Fallback text if sourceLinkName is not provided */}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

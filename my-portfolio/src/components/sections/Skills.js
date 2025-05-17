// src/pages/SkillsPage.js
// Create this file in your src/pages/ directory.

import React from 'react';
import styles from './Skills.module.css'; // We'll create this CSS module

// Define your skills data directly in the component
const skillCategories = [
  {
    categoryName: "Programming & Scripting",
    skills: ["JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3", "React", "Node.js"]
  },
  {
    categoryName: "GIS & Mapping",
    skills: ["ArcGIS Pro", "QGIS", "Leaflet.js", "Mapbox GL JS", "Google Earth Engine", "Spatial Analysis", "Remote Sensing", "Geodatabases"]
  },
  {
    categoryName: "Data & Databases",
    skills: ["Data Analysis", "Data Visualization (e.g., D3.js, Chart.js)", "PostgreSQL (PostGIS)", "MongoDB", "SQLite", "Excel"]
  },
  {
    categoryName: "Development Tools & Practices",
    skills: ["Git & GitHub", "VS Code", "Agile Methodologies", "REST APIs", "Command Line Interface (CLI)"]
  },
  {
    categoryName: "Other Relevant Skills",
    skills: ["Problem Solving", "Technical Writing", "Cartographic Design", "Project Management (Basic)", "Cooking Techniques", "Gardening Principles"]
    // Added cooking & gardening as per your logo themes, adjust as you see fit!
  }
];


const SkillsPage = () => {
  return (
    <div className={styles.skillsPageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>My Skills & Expertise</h1>
        <p className={styles.subTitle}>
          A snapshot of the technologies, tools, and methodologies I work with.
        </p>
      </header>

      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.skillCategoryCard}>
            <h2 className={styles.categoryTitle}>{category.categoryName}</h2>
            <ul className={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;

// src/pages/SkillsPage.js

import React from 'react';
import styles from './Skills.module.css'; 

const skillCategories = [
  {
    categoryName: "Programming & Computer Science",
    skills: [ "Python", "Java", "C", "R", "JavaScript", "CSS", "React.js", "Idris 2", "Swift", "C++", "AWS", "GGplot", "Vercel", "SwiftUI", "C#", ".NET MAUI", "Ruby on Rails" ]
  },
  {
    categoryName: "Machine Learning & AI",
    skills: ["PyTorch", "Deep Learning", "Computer Vision", "GANs", "Diffusion Models", "Reinforcement Learning", "Azure OpenAI", "Grounded-SAM"]
  },
  {
    categoryName: "GIS & Mapping",
    skills: ["ArcGIS Pro", "ArcGIS Online", "ArcGIS Maps SDK for .NET", "Leaflet (R)", "SF (R)", "Storymaps", "Geodatabases", "Geo-Consulting", "Apple MapKit", "Census Data", "Cartographic Design", "Excel" ]
  },
   {
    categoryName: "Technical Skills",
    skills: ["Technical Writing", "Consulting","Project Management","Grants", "Poster Presentations", "Powerpoint", "Addressing Stakeholders", "Interviews", "Problem Solving", "Project Design" ]
  },
    {
    categoryName: "Development Tools & Practices",
    skills: ["Git & GitHub", "Visual Studio Code", "Command Line Interface (CLI)", "IntelliJ IDEA", "Wing 101", "Jupyter Notebook", "Google Colab", "Jira", "Docker"]
  },
 
  {
    categoryName: "Agricultural and Practical",
    skills: ["Gardening", "Mowing", "Landscaping", "Plant Breeding", "Raising Livestock", "Beekeeping", "Bed Edging", "Lawn Care", "Haying", "Basic Construction"]
 
  },
  {
    categoryName: "Hobbies and Interests",
    skills: ["Ski Racing", "DJing", "Cooking", "Fishing", "Ski Touring", "Hiking", "Conservation", "Machine Learning", "Climate Change","Data Science" ,"Community Resilience" ]

  }
];


const SkillsPage = () => {
  return (
    <div className={styles.skillsPageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>My Skills & Expertise</h1>
        <p className={styles.subTitle}>
          A snapshot of the technologies, tools, and methodologies I have experience with. As well as some of my interests.  
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

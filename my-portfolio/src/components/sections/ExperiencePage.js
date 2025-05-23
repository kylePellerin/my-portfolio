// src/pages/ExperiencePage.js 
// NOTE: The error message indicates this file is currently at: src/components/sections/ExperiencePage.js
// The paths below are corrected based on it being in src/components/sections/

import React from 'react';
// If ExperiencePage.js is in src/components/sections/
// and ExperienceItem.js is also in src/components/sections/
// the import path should be './ExperienceItem'
import ExperienceItem from './ExperienceItem'; 

// If ExperiencePage.js is in src/components/sections/
// and experienceData.js is in src/data/
// the import path should be '../../data/experienceData' (this seems correct based on one error log)
import { getExperiencesByCategory } from '../../data/experienceData'; 
import styles from './ExperiencePage.module.css'; // Assuming ExperiencePage.module.css is in the same directory

const ExperiencePage = () => {
  const groupedExperiences = getExperiencesByCategory();
  // Define the desired order for displaying categories
  const categoriesInOrder = ['Education','Work', 'Research', 'Leadership', 'Grants and Awards']; 

  return (
    <div className={styles.experiencePage}>
      <h1 className={styles.pageTitle}>Experience</h1>
      
      
      {categoriesInOrder.map(categoryName => {
        // Get items for the current category
        const itemsInCategory = groupedExperiences[categoryName];
        // Only render the section if there are items in that category
        if (itemsInCategory && itemsInCategory.length > 0) {
          return (
            <section key={categoryName} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>{categoryName}</h2>
              {itemsInCategory.map(item => (
                <ExperienceItem key={item.id} item={item} />
              ))}
            </section>
          );
        }
        return null; // Don't render a section if there are no items
      })}
    </div>
  );
};

export default ExperiencePage;

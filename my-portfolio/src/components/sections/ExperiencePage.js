
import React from 'react';

import ExperienceItem from './ExperienceItem'; 

import { getExperiencesByCategory } from '../../data/experienceData'; 
import styles from './ExperiencePage.module.css'; 

const ExperiencePage = () => {
  const groupedExperiences = getExperiencesByCategory();
  const categoriesInOrder = ['Education','Work', 'Research', 'Leadership', 'Grants and Awards']; 

  return (
    <div className={styles.experiencePage}>
      <h1 className={styles.pageTitle}>Experience</h1>
      
      
      {categoriesInOrder.map(categoryName => {
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

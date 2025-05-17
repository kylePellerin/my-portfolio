// src/components/sections/ExperienceItem.js
// (Or place in a more general 'components' folder if preferred)

import React from 'react';
import styles from './ExperienceItem.module.css'; // CSS Module for styling

const ExperienceItem = ({ item }) => {
  const { title, organization, logoUrl, imagePlaceholder, dates, descriptionPoints } = item;

  return (
    <div className={styles.item}>
      <div className={styles.logoContainer}>
        <img 
          src={logoUrl} 
          alt={`${organization} logo`} 
          className={styles.logo}
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop if placeholder also fails
            e.target.src = imagePlaceholder || 'https://placehold.co/80x80/cccccc/333333?text=Logo';
          }}
        />
      </div>
      <div className={styles.details}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.organization}>{organization}</p>
        <p className={styles.dates}>{dates}</p>
        {descriptionPoints && descriptionPoints.length > 0 && (
          <ul className={styles.description}>
            {descriptionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;

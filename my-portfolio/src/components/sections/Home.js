// src/pages/HomePage.js
import React from 'react';
import Hero from './Hero'; // Assuming Hero.js is in the same directory or adjust path
// You might want to create a dedicated component for updates later
// import RecentUpdatesSection from '../components/sections/RecentUpdatesSection';

// Basic styling for the updates section (can be moved to a CSS file)
const updatesSectionStyles = {
  padding: '2rem',
  textAlign: 'center',
  minHeight: '300px', // Adjust as needed
  borderTop: '1px solid #eee', // Optional: to visually separate from Hero
  marginTop: '2rem', // Optional: to add space below Hero
};

const updatesListStyles = {
  marginTop: '20px',
  textAlign: 'left',
  maxWidth: '700px', // Increased width slightly
  margin: '20px auto',
};

const updateItemStyles = {
  marginBottom: '20px', // Increased space between items
  paddingBottom: '15px', // Increased padding
  borderBottom: '1px solid #ddd', // Slightly darker border
};

const updateDateStyles = {
  fontWeight: 'bold',
  color: 'var(--text-dark, #333)', // Use a theme variable if available
};

const updateTextStyles = {
  fontSize: '1rem', // Slightly larger text
  color: 'var(--text-secondary-dark, #555)', // Use a theme variable
  marginTop: '8px', // Increased space between date and text
  lineHeight: '1.6',
};

// Style for the "Read More" button
const readMoreButtonStyle = {
  display: 'inline-block',
  marginTop: '10px',
  padding: '8px 15px',
  fontSize: '0.9rem',
  fontWeight: '600',
  color: 'var(--primary-color, #007bff)',
  backgroundColor: 'transparent',
  border: '2px solid var(--primary-color, #007bff)',
  borderRadius: 'var(--border-radius, 5px)',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

// Hover style for readMoreButton (can be done with CSS :hover too)
const readMoreButtonHoverStyle = {
  backgroundColor: 'var(--primary-color, #007bff)',
  color: 'var(--text-light, #fff)',
};


const Home = () => {
  // Content for Recent Updates Section
  // This could be moved to its own component file for better organization
  const RecentUpdatesSection = () => (
    <section id="recent-updates" style={updatesSectionStyles}>
      <h2>Recent Updates</h2>
      <div style={updatesListStyles}>

        <div style={updateItemStyles}>
          <p style={updateDateStyles}>5/12: Completion of my work with COBALT Team ZOESTRA ... for now</p>
          <p style={updateTextStyles}>
            As my junior spring at Bowdoin concluded, so did my work with COBALT Team Zoestra. I wrapped up my time during this internship by delivering a polished version of the mapping web I worked to augment as well as by creating user guides to expand access to the tool. Even though my time with this team is done for now, a reunion may be in store next fall as they continue to expand the scope of their work. 
          </p>
        </div>

        <div style={updateItemStyles}>
          <p style={updateDateStyles}>4/21: Op-Ed</p>
          <p style={updateTextStyles}>
            Check out this Op-Ed I wrote for the Portland Press Herald about the dangers of proposed NOAA budget cuts.
          </p>
          <a
            href="https://www.pressherald.com/2025/04/15/proposed-noaa-cuts-a-serious-issue-for-mainers/" // <-- REPLACE THIS WITH THE ACTUAL URL
            target="_blank"
            rel="noopener noreferrer"
            style={readMoreButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = readMoreButtonHoverStyle.backgroundColor;
              e.target.style.color = readMoreButtonHoverStyle.color;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = readMoreButtonStyle.backgroundColor;
              e.target.style.color = readMoreButtonStyle.color;
            }}
          >
            Read Op-Ed
          </a>
        </div>
        {/* Add more updates here */}
        <p style={{ textAlign: 'center', marginTop: '30px', fontStyle: 'italic', color: '#777' }}>
          Check back soon for more updates!
        </p>
      </div>
    </section>
  );

  return (
    <div className="homepage-content">
      {/* Hero Section will be the main visual introduction */}
      <Hero />

      {/* Recent Updates Section will appear below the Hero */}
      <RecentUpdatesSection />


    </div>
  );
};

export default Home;

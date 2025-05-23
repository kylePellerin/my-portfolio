
import React from 'react';
import styles from './About.module.css'; 

// Example: If you import images from your src/assets folder
// import profilePic1 from '../assets/profile-picture-1.jpg';
// import profilePic2 from '../assets/profile-picture-2.jpg';

const AboutPage = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>About Me</h1>
      </header>

      {/* Section 1: Introduction with a picture */}
      <section className={`${styles.aboutSection} ${styles.introSection}`}>
        <div className={styles.textBlock}>
          <h2>Hello! I'm [Your Name]</h2>
          <p>
            Welcome to my little corner of the web! I'm a [Your Role/Passion - e.g., passionate GIS analyst, aspiring software developer, lifelong learner] 
            currently based in [Your Location or "exploring the world"]. My journey into [Your Field(s) - e.g., the world of technology and spatial analysis] 
            has been driven by a deep curiosity and a desire to solve complex problems.
          </p>
          <p>
            Whether it's through coding innovative applications, mapping intricate datasets, 
            experimenting with new recipes, tending to my garden, or hitting the ski slopes, 
            I believe in the power of continuous learning and applying diverse skills to create something meaningful.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <img 
            src="/images/profile-placeholder-1.jpg" // Replace with path to your image in public/images/
            // Or use an imported image: src={profilePic1}
            alt="A picture of [Your Name]" 
            className={styles.profileImage}
            onError={(e) => { e.target.src = 'https://placehold.co/400x400/007bff/white?text=Your+Image+1'; }}
          />
        </div>
      </section>

      {/* Section 2: More details or a different aspect */}
      <section className={`${styles.aboutSection} ${styles.detailsSection}`}>
        {/* You can reverse the order of image and text for variety */}
        <div className={styles.imageBlock}>
           <img 
            src="/images/profile-placeholder-2.jpg" // Replace with path to your image
            // Or use an imported image: src={profilePic2}
            alt="Another picture highlighting an interest" 
            className={styles.profileImage}
            onError={(e) => { e.target.src = 'https://placehold.co/400x400/6f42c1/white?text=Your+Image+2'; }}
          />
        </div>
        <div className={styles.textBlock}>
          <h2>My Philosophy & Approach</h2>
          <p>
            I approach my work and hobbies with a blend of analytical thinking and creativity. 
            In [Your Field], I'm particularly interested in [Specific Interest 1, e.g., leveraging machine learning for predictive mapping] 
            and [Specific Interest 2, e.g., building intuitive user interfaces]. I thrive in collaborative environments 
            and enjoy the process of turning ideas into tangible results.
          </p>
          <p>
            Beyond the technical, I'm an avid [Your Hobby 1, e.g., skier], a keen [Your Hobby 2, e.g., gardener], 
            and love to [Your Hobby 3, e.g., experiment in the kitchen]. These activities not only provide balance 
            but also inspire new perspectives in my professional work.
          </p>
        </div>
      </section>

      {/* Section 3: Call to action or future aspirations */}
      <section className={`${styles.aboutSection} ${styles.futureSection}`}>
        <div className={styles.textBlockFullWidth}>
          <h2>Looking Ahead</h2>
          <p>
            I'm always excited about new challenges and opportunities to grow. 
            Currently, I'm focusing on [Current Learning/Focus]. If you're interested in collaborating, 
            have a project in mind, or just want to connect, feel free to reach out!
          </p>
          {/* Optional: Link to contact page */}
          {/* <a href="/contact" className={styles.contactLink}>Let's Connect</a> */}
        </div>
        {/* You could add another image here if desired, perhaps a smaller one or a collage */}
      </section>
    </div>
  );
};

export default AboutPage;

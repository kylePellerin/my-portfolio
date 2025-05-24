import React from 'react'; 
import styles from './About.module.css';

import me from '../../data/me.png'; 
import ski from '../../data/skiing.JPG';
import peppers from '../../data/peppers.JPG';
import touring from '../../data/touring.JPG';
import fishing from '../../data/fishing.png';


const miniGalleryImagesData = [
  { id: 'mini1', src: ski , alt: 'Small image 1 description' },
  { id: 'mini2', src: peppers, alt: 'Small image 2 description' },
  { id: 'mini3', src: fishing, alt: 'Small image 3 description' },
  { id: 'mini4', src: touring, alt: 'Small image 4 description' },
];

const AboutPage = () => {

  return (
    <div className={styles.aboutPageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>About Me</h1>
      </header>

      {/* Section 1: Introduction with a picture */}
      <section className={`${styles.aboutSection} ${styles.introSection}`}>
        <div className={styles.textBlock}>
          <h2>Hello! I'm Kyle</h2>
          <p>
            I am currently entering my senior year at Bowdoin College in Brunswick Maine where I major in both computer science and environmental studies. More specifically, I have an interest, and experience, in working with mapping and GIS which is an intersection of both computer science and environmental studies. My work to date has largely revolved around these geospatial topics with coursework, internships, and research all contributing to my involvement within the field. Before college, I attended St. Pauls School in Concord, New Hampshire, which is near where I grew up in the rural town of Hopkinton. In high school, I was exposed to a wide variety of course offerings which fostered my original interests in computer science which led me to take on a research internship my junior year examining the effectiveness of deep learning algorithms on making HVAC systems more energy efficient. It was this experience that drove me to pursue a computer science degree in college as it introduced me to the power that electronic infrastructure has to make our lives more sustainable. As for environmental studies, growing up in an area where nature is abundant and farming is a common way of life, my appreciation for the environment and daily interactions with it formed the foundation from which my interests in both protecting, as well as understanding, the world around me grew. Balancing my interests in protecting the environment and applying computer science is not always easy, but I’ve always found the work rewarding, and that there is always more work to be done. 
          </p>
        </div>
        <div className={styles.imageBlock}>
          <img
            src={me} 
            alt="A picture of [Your Name]"
            className={styles.profileImage}
            onError={(e) => { e.target.src = 'https://placehold.co/400x400/007bff/white?text=Your+Image+1'; }}
          />
        </div>
      </section>

      {/* Section 2: More details with a mini-gallery */}
      <section className={`${styles.aboutSection} ${styles.detailsSection}`}>
        <div className={`${styles.imageBlock} ${styles.miniGalleryContainer}`}>
          {miniGalleryImagesData.map(image => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={styles.miniGalleryImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/150x150/6f42c1/white?text=Img`;
                e.target.alt = `Placeholder for ${image.alt}`;
              }}
            />
          ))}
        </div>
        <div className={styles.textBlock}>
          <h2>When I'm Not Working</h2>
          <p>
            I love to pursue my various hobbies and interests. At Bowdoin I am captain of the Club Alpine Ski Team, a sport I have competed in since I was ten years old. I also love skiing for fun and have recently started to get more into touring and backcountry as well. At home, I love working on my family's farm, taking care of the animals and growing plants (specifically hot peppers). I also have a great passion for cooking and love to prepare dishes from around the world using what we grow in the warmer months. When I’m not skiing, farming, or cooking, I love to fish, lift, DJ, hike and camp. I always love going on adventures and sharing what I love with my peers. 
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

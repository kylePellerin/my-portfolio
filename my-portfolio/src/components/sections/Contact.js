// src/pages/ContactPage.js
// Create this file in your src/pages/ directory.

import React from 'react';
import styles from './Contact.module.css'; // We'll create this CSS module
// Import icons from react-icons, similar to your Footer
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  // Replace with your actual email and social media links
  const yourEmail = "kylepellerin@outlook.com";
  const socialLinks = [
    {
      href: "https://github.com/kylePellerin",
      icon: <FaGithub />,
      label: "GitHub",
      color: "#333"
    },
    {
      href: "https://www.linkedin.com/in/kyle-pellerin-896a7726b/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "#0A66C2"
    }
  ];

  return (
    <div className={styles.contactPageContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Get In Touch</h1>
        <p className={styles.subTitle}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
        </p>
      </header>

      <section className={styles.contactMethodSection}>
        <div className={`${styles.contactCard} ${styles.emailCard}`}>
          <h2>Email Me Directly</h2>
          <p>
            The quickest way to reach me. I typically respond within 24-48 hours.
          </p>
          <a href={`mailto:${yourEmail}`} className={styles.contactButton}>
            Send Email
          </a>
        </div>
      </section>

      <section className={styles.contactMethodSection}>
        <div className={`${styles.contactCard} ${styles.socialCard}`}>
          <h2>Connect Online</h2>
          <p>
            Follow my work, connect with me, or drop a message on my social platforms.
          </p>
          <div className={styles.socialLinksContainer}>
            {socialLinks.map(social => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label}
                className={styles.socialLink}
                // Apply hover color dynamically or use CSS
                onMouseEnter={(e) => e.currentTarget.style.color = social.color}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
              >
                {social.icon}
                <span className={styles.socialLabel}>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* You could add a simple contact form here later if desired */}
      {/* <section className={styles.contactFormSection}>
        <h2>Or Send a Quick Message</h2>
        <form> ... your form fields ... </form>
      </section> */}
    </div>
  );
};

export default ContactPage;

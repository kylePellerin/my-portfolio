// src/pages/ContactPage.js

import React from 'react';
import styles from './Contact.module.css'; 
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
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
          I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
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
            Follow my work, and drop a message on my social platforms.
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

    </div>
  );
};

export default ContactPage;

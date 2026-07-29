// src/pages/HomePage.js
import React from 'react';
import Hero from './Hero';
import { Analytics } from "@vercel/analytics/react" 

const Home = () => {
  return (
    <div className="homepage-content">
      <Hero />
      <Analytics />
    </div>
  );
};

export default Home;

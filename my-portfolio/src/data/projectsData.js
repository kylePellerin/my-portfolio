// src/data/projectsData.js
// This file will hold the data for your projects.
// Add your actual project details here.
import KpLogoFile from '../data/KP_LOGO.png'; // Path relative to Navbar.js

// Example structure for project data
// Example structure for project data
export const projects = [
  {
    id: 1,
    title: "Interactive GIS Mapping Tool",
    category: "GIS", 
    imageUrl: "/images/project-gis-map.jpg", 
    description: "A web-based platform for visualizing and interacting with geospatial data, featuring custom layers and query capabilities.",
    tags: ["React", "Leaflet.js", "GeoJSON", "Node.js"], 
    liveLink: "https://example.com/gis-map-demo", 
    sourceLink: "https://github.com/yourusername/gis-map-project", 
    imagePlaceholder: "https://placehold.co/600x400/007bff/white?text=GIS+Map+Project"
  },
  {
    id: 2,
    title: "Algorithm Visualizer",
    category: "CS",
    imageUrl: "/images/project-cs-algo.jpg",
    description: "A tool that animates various computer science algorithms like sorting and pathfinding to aid in learning and understanding.",
    tags: ["JavaScript", "HTML5 Canvas", "Data Structures"],
    liveLink: "https://example.com/algo-visualizer-demo",
    sourceLink: null, 
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    category: "CS",
    imageUrl: KpLogoFile, 
    description: "The very website you are looking at! Built with React to showcase my skills and projects.",
    tags: ["React", "JavaScript", "CSS"],
    liveLink: null, 
    sourceLink: "https://github.com/kylePellerin/my-portfolio/tree/main/my-portfolio",
    imagePlaceholder: "https://placehold.co/600x400/28a745/white?text=Portfolio+Website"
  },
  {
    id: 4,
    title: "Urban Green Space Analysis",
    category: "GIS",
    imageUrl: "/images/project-gis-urban.jpg",
    description: "Utilized GIS tools to analyze the distribution and accessibility of urban green spaces in relation to demographic data.",
    tags: ["ArcGIS", "Python", "Spatial Analysis"],
    liveLink: null, 
    sourceLink: null,
    imagePlaceholder: "https://placehold.co/600x400/ffc107/black?text=Urban+Green+Space"
  },
  {
    id: 5,
    title: "Recipe Finder App",
    category: "CS",
    imageUrl: "/images/project-cs-recipe.jpg",
    description: "A mobile-friendly app that helps users find recipes based on ingredients they have on hand, using a third-party API.",
    tags: ["React Native", "API Integration", "Firebase"],
    liveLink: "https://example.com/recipe-app-demo",
    sourceLink: "https://github.com/yourusername/recipe-app",
    imagePlaceholder: "https://placehold.co/600x400/fd7e14/white?text=Recipe+App"
  }
  // Add more projects as needed
];

// Function to get all projects
export const getAllProjects = () => projects;

// Function to get projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category.toLowerCase() === category.toLowerCase());
};
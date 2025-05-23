// src/data/projectsData.js
// This file will hold the data for your projects.
// Add your actual project details here.
import KpLogoFile from '../data/KP_LOGO.png'; // Path relative to Navbar.js
import Seagrass from '../data/Seagrass.png';
import Assess from '../data/Assess.png';

// Example structure for project data
// Example structure for project data
export const projects = [
  {
    id: 1,
    title: "Assessing Geospatial Modeling in Determining Optimal Afforestation Locations for Carbon Sequestration in the Isafjord Region",
    category: "GIS", 
    imageUrl: Assess, 
    description: " A paper I authored while abroad in Iceland. These findings helped to inform government funded afforestation efforts in the Isafjord region. ",
    tags: ["ArcGIS Pro", "Research", "Climate", "Consulting"], 
    liveLink: "https://drive.google.com/file/d/1Ps5UPz3S6lBvMl5xc3PaA3UEfmzM2Cz4/view?usp=sharing", 
    liveLinkName: "Read Paper",
    sourceLink: null, 
    sourceLinkName: "test2",
    imagePlaceholder: "https://placehold.co/600x400/007bff/white?text=GIS+Map+Project"
  },
  {
    id: 2,
    title: "Casco Bay Eelgrass Explorer",
    category: "CS",
    imageUrl: Seagrass,
    description: "The web app interface I made as part of my internship at COBALT Team Zoestra. This was used to help visualize the change in eelgrass bed health and dispersion in Casco Bay for the past 30 years. A data upload system helped users input field data to accurately monitor real-time dynamics in the eelgrass beds. ",
    tags: ["R", "R Shiny", "Geoprocessing", "GIS"],
    liveLink: "https://github.com/kylePellerin/Eelgrass_Mapping_Interface.git",
    liveLinkName: "Source Code",
    sourceLink: null, 
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    category: "CS",
    imageUrl: KpLogoFile, 
    description: "The very website you are looking at! Built on Javascript, CSS, and React.js to showcase my skills and projects. Deployed using Vercel",
    tags: ["React", "JavaScript", "CSS", "Vercel"],
    liveLink: "/", 
    liveLinkName: "Home",
    sourceLink: "https://github.com/kylePellerin/my-portfolio/tree/main/my-portfolio",
    sourceLinkName: "Source Code",
    imagePlaceholder: "https://placehold.co/600x400/28a745/white?text=Portfolio+Website"
  },
   {
    id: 4,
    title: "Finance S&P",
    category: "CS",
    imageUrl: Seagrass,
    description: "The web app interface I made as part of my internship at COBALT Team Zoestra. This was used to help visualize the change in eelgrass bed health and dispersion in Casco Bay for the past 30 years. A data upload system helped users input field data to accurately monitor real-time dynamics in the eelgrass beds. ",
    tags: ["R", "R Shiny", "Geoprocessing", "GIS"],
    liveLink: "https://github.com/kylePellerin/Eelgrass_Mapping_Interface.git",
    liveLinkName: "Source Code",
    sourceLink: null, 
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
   {
    id: 5,
    title: "Updating the Topsham NAP",
    category: "CS",
    imageUrl: Seagrass,
    description: "The web app interface I made as part of my internship at COBALT Team Zoestra. This was used to help visualize the change in eelgrass bed health and dispersion in Casco Bay for the past 30 years. A data upload system helped users input field data to accurately monitor real-time dynamics in the eelgrass beds. ",
    tags: ["R", "R Shiny", "Geoprocessing", "GIS"],
    liveLink: "https://github.com/kylePellerin/Eelgrass_Mapping_Interface.git",
    liveLinkName: "Source Code",
    sourceLink: null, 
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
   {
    id: 6,
    title: "AI Project Collection",
    category: "CS",
    imageUrl: Seagrass,
    description: "The web app interface I made as part of my internship at COBALT Team Zoestra. This was used to help visualize the change in eelgrass bed health and dispersion in Casco Bay for the past 30 years. A data upload system helped users input field data to accurately monitor real-time dynamics in the eelgrass beds. ",
    tags: ["R", "R Shiny", "Geoprocessing", "GIS"],
    liveLink: "https://github.com/kylePellerin/Eelgrass_Mapping_Interface.git",
    liveLinkName: "Source Code",
    sourceLink: null, 
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
   {
    id: 7,
    title: "Maine Social Vulnerability Index",
    category: "CS",
    imageUrl: Seagrass,
    description: "The web app interface I made as part of my internship at COBALT Team Zoestra. This was used to help visualize the change in eelgrass bed health and dispersion in Casco Bay for the past 30 years. A data upload system helped users input field data to accurately monitor real-time dynamics in the eelgrass beds. ",
    tags: ["R", "R Shiny", "Geoprocessing", "GIS"],
    liveLink: "https://github.com/kylePellerin/Eelgrass_Mapping_Interface.git",
    liveLinkName: "Source Code",
    sourceLink: null, 
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
   {
    id: 8,
    title: "New Hampshire Healthcare Deserts",
    category: "CS",
    imageUrl: Seagrass,
    description: "The web app interface I made as part of my internship at COBALT Team Zoestra. This was used to help visualize the change in eelgrass bed health and dispersion in Casco Bay for the past 30 years. A data upload system helped users input field data to accurately monitor real-time dynamics in the eelgrass beds. ",
    tags: ["R", "R Shiny", "Geoprocessing", "GIS"],
    liveLink: "https://github.com/kylePellerin/Eelgrass_Mapping_Interface.git",
    liveLinkName: "Source Code",
    sourceLink: null, 
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
   {
    id: 9,
    title: "ASEP Research",
    category: "CS",
    imageUrl: Seagrass,
    description: "The web app interface I made as part of my internship at COBALT Team Zoestra. This was used to help visualize the change in eelgrass bed health and dispersion in Casco Bay for the past 30 years. A data upload system helped users input field data to accurately monitor real-time dynamics in the eelgrass beds. ",
    tags: ["R", "R Shiny", "Geoprocessing", "GIS"],
    liveLink: "https://github.com/kylePellerin/Eelgrass_Mapping_Interface.git",
    liveLinkName: "Source Code",
    sourceLink: null, 
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
  // Add more projects as needed
];

// Function to get all projects
export const getAllProjects = () => projects;

// Function to get projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category.toLowerCase() === category.toLowerCase());
};
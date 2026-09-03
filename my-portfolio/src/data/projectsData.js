// src/data/projectsData.js

import KpLogoFile from '../data/KP_LOGO.png'; // Path relative to Navbar.js
import Seagrass from '../data/Seagrass.png';
import Assess from '../data/Assess.png';
import SPLOGO from '../data/S&P_LOGO.png';
import Topsham from '../data/Topsham.png';
import AILOGO from '../data/AI_PROJ.png';
import Explorer from '../data/Explorer.png';
import NH from '../data/NH.png';
import IDEAs from '../data/ASEP_POSTER.png';

import FarmAssistLogo from '../data/FarmAssist.jpg';
import FaceToolImg from '../data/FaceTool.svg';
import CafeAppImg from '../data/CafeApp.svg';
import EsriLogo from '../data/esri logo.jpg';

export const projects = [
  {
    id: 1,
    title: "Assessing Geospatial Modeling in Determining Optimal Afforestation Locations for Carbon Sequestration in the Isafjord Region",
    category: "GIS", 
    imageUrl: Assess, 
    description: " While studying abroad in Iceland I was asked by the Icelandic Forest Service to create them a tool to help identify the best (as measured by potential carbon sequestration) afforestation locations in the Isafjord region of the country. My research presented in this paper has helped guide the region's government funded tree plantings and won an award for outstanding paper for which it will be published in the School for International Training’s bi-annual journal.  ",
    tags: ["ArcGIS Pro", "Research", "Climate", "Consulting"], 
    liveLink: "https://digitalcollections.sit.edu/icc2/3/", 
    liveLinkName: "Read Paper",
    sourceLink: null, 
    sourceLinkName: "test2",
    imagePlaceholder: "https://placehold.co/600x400/007bff/white?text=GIS+Map+Project"
  },
  {
    id: 13,
    title: "Esri Internship Projects",
    category: "CS",
    imageUrl: EsriLogo,
    description: "A look at the projects I worked on during my software engineering internship at Esri. Over the course of the internship I contributed to cross-platform mapping tools built on the ArcGIS Maps SDK for .NET and collaborated with my team on new features and demos. This video highlights some of the work and contributions I made during my time there.",
    tags: ["C#", ".NET MAUI", "ArcGIS SDK", "Internship"],
    liveLink: "https://youtu.be/F7jm-mzDb68",
    liveLinkName: "Watch the Video",
    sourceLink: null,
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/007bff/white?text=Esri+Internship"
  },
  {
    id: 14,
    title: "RosterPulse — Fantasy Football Start/Sit Optimizer",
    category: "CS",
    imageUrl: "https://placehold.co/600x400/28a745/white?text=RosterPulse",
    description: "RosterPulse is a fantasy football start/sit optimizer I built to help managers make smarter weekly lineup decisions. It analyzes player data and projections to recommend the optimal players to start and sit each week, all wrapped in a clean, responsive web interface. Built with Next.js and TypeScript and deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    liveLink: "https://fantasylineupoptimizer.vercel.app/",
    liveLinkName: "Website",
    sourceLink: "https://github.com/kylePellerin/Fantasy_Football.git",
    sourceLinkName: "Source Code",
    imagePlaceholder: "https://placehold.co/600x400/28a745/white?text=RosterPulse"
  },
  {
    id: 10,
    title: "FarmAssist",
    category: "GIS",
    imageUrl: FarmAssistLogo,
    description: "An award-winning app I helped build at the Esri 2026 Intern Hackathon. FarmAssist is a cross-platform farm field monitoring app built with .NET MAUI and the ArcGIS Maps SDK for .NET. It combines interactive field mapping, AI-assisted crop incident reporting (a photo or plain-language symptoms are classified with Azure OpenAI GPT-4o), spatial risk and disease-spread modeling using geodesic threat zones, and targeted neighbor-farm alerts. A single crop diagnosis becomes the input to a spatial model that identifies which nearby fields and farms could be at risk next.",
    tags: ["C#", ".NET MAUI", "ArcGIS SDK", "Azure OpenAI", "Hackathon"],
    liveLink: "https://devpost.com/software/arcalert",
    liveLinkName: "Devpost",
    sourceLink: "https://github.com/krish0309/KoiPonders",
    sourceLinkName: "Source Code",
    imagePlaceholder: "https://placehold.co/600x400/007bff/white?text=FarmAssist"
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
    id: 11,
    title: "Bowdoin Face Generator & Classifier",
    category: "CS",
    imageUrl: FaceToolImg,
    description: "A deep learning computer vision tool that shows you what you might look like as a Bowdoin student, and can classify input faces to do the same. I trained generative models, including a DCGAN and a conditional denoising diffusion model (DDPM), fine-tuned on face datasets, alongside a face classifier, and wrapped everything in a simple web interface. Built in Python with PyTorch.",
    tags: ["Python", "PyTorch", "Deep Learning", "GANs", "Computer Vision"],
    liveLink: null,
    liveLinkName: "",
    sourceLink: "https://github.com/kylePellerin/DL-final",
    sourceLinkName: "Source Code",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Bowdoin+Face+CV"
  },
  {
    id: 12,
    title: "Bowdoin Café App",
    category: "CS",
    imageUrl: CafeAppImg,
    description: "A full-stack web application I built with a team for Bowdoin's café as a course final project. Developed in Ruby on Rails with an HTML/JavaScript front end and containerized with Docker, the app provides a digital storefront for browsing the café's offerings and placing orders.",
    tags: ["Ruby on Rails", "Ruby", "HTML", "JavaScript", "Docker"],
    liveLink: null,
    liveLinkName: "",
    sourceLink: "https://github.com/kylePellerin/PPL-Final",
    sourceLinkName: "Source Code",
    imagePlaceholder: "https://placehold.co/600x400/28a745/white?text=Bowdoin+Cafe+App"
  },
     {
    id: 7,
    title: "Maine Social Vulnerability Index",
    category: "CS",
    imageUrl: Explorer,
    description: "During the course of my research fellowship at Bowdoin College, I was tasked with helping create an updated social vulnerability index for the State of Maine. The index data was processed through Excel and R frameworks that me and my partner built for which replicability focused documentation was created. I then mapped our work in ArcGIS Pro and handed over the data which were then used to create the updated Maine Social Vulnerability Explorer.",
    tags: ["ArcGIS Pro", "Excel", "R", "Census Data"],
    liveLink: "https://www.arcgis.com/apps/dashboards/7f91e2c287294b35acdeebbd4da9046d",
    liveLinkName: "The Explorer",
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
    id: 6,
    title: "AI Project Collection",
    category: "CS",
    imageUrl: AILOGO,
    description: "A collection of projects I completed as my Artificial Intelligence coursework. The projects range from implementation of various search algorithms to more complex Q-learning agents learning to navigate pacman and a grid world. Projects were all coded in python and received top marks. ",
    tags: ["Python", "AI", "Machine Learning"],
    liveLink: "https://github.com/kylePellerin/AI_Projects.git",
    liveLinkName: "Source Code",
    sourceLink: null, 
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
   {
    id: 4,
    title: "S&P Finance",
    category: "CS",
    imageUrl: SPLOGO,
    description: "A website I collaborated to create with a peer. We had the goal of providing financial information to students of all ages. Built on Javascript, CSS, and React.js and deployed using AWS. ",
    tags: ["React", "JavaScript", "CSS","AWS"],
    liveLink: "https://finance.sp-devs.com/",
    liveLinkName: "Website",
    sourceLink: "https://github.com/anyi-sunny/FinanceProject", 
    sourceLinkName: "Source Code",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
   {
    id: 5,
    title: "Updating the Topsham NAP",
    category: "CS",
    imageUrl: Topsham,
    description: "Maps I created while acting as a consultant for the town of Topsham Maine. I was responsible for updating the Environmental Health and Safety Inventory as well as the Water Quality Inventory for the town by mapping the results as well as providing them with the updated data. I then presented my work to the Topsham Conservation Commission. ",
    tags: ["ArcGIS Pro", "Geodatabases", "Consulting", "Cartography"],
    liveLink: "https://youtu.be/lMm_G7uG4No?si=eEEzPeSbHgCWbB85&t=662",
    liveLinkName: "Watch the Presentation",
    sourceLink: "https://www.bowdoin.edu/news/2025/06/advanced-gis-students-boost-natural-areas-plan-for-topsham.html", 
    sourceLinkName: "Read Article",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
     {
    id: 9,
    title: "ASEP Research",
    category: "CS",
    imageUrl: IDEAs,
    description: "As part of getting accepted into the St. Paul's School Applied Science and Engineering Program (ASEP), each student was tasked with doing a research based internship during the summer before their senior year and then continuing the research for the fall term before finally presenting to the community at large. I worked with the Northwestern based IDEAS lab researching different deep learning algorithms ability to efficiently control HVAC systems in virtual building environments. " ,
    tags: ["Python", "AI", "Deep Learning", "Research"],
    liveLink: "https://sps.myschoolapp.com/ftpimages/36/download/download_6410783.pdf",
    liveLinkName: "Poster",
    sourceLink: null, 
    sourceLinkName: "",
    imagePlaceholder: "https://placehold.co/600x400/6f42c1/white?text=Algorithm+Visualizer"
  },
   {
    id: 8,
    title: "New Hampshire Healthcare Deserts",
    category: "CS",
    imageUrl: NH,
    description: "A project I completed to explore and research the impact of a variety of factors on predicting healthcare deserts in my home state of New Hampshire. The project explores the connections between spatial distributions of healthcare services and a variety of census statistics in order to identify areas with the highest risk of being classified as healthcare deserts. The Story Map details the mapping and research processes. ",
    tags: ["ArcGIS Pro", "ArcGIS Online", "Story Map","Census Data"],
    liveLink: "https://storymaps.arcgis.com/stories/76d35e4c44f04a2eb2b5d20eebeea746",
    liveLinkName: "Story Map",
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
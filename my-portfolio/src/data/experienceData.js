// Image imports
import BowdoinLogo from '../data/Bowdoin_Polar_Bears_Logo.svg.png';
import DimondLogo from '../data/Dimond_HIll_FARM_LOGO.jpeg'
import onxLOGO from '../data/onx_logo.png'
import COBALTLOGO from '../data/Coblat_logo.jpg'
import IDEASLOGO from '../data/IDEAS_LOGO.png'
import StPaulsLOGO from '../data/St.PaulsLOGO.png'
import MEGUGLOGO from '../data/MEGUG_LOGO.png'
import _Harvest_LOGO from '../data/Shared_Harvest_logo.png'

export const experiences = [
   {
    id: 'edu1',
    category: 'Education', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'Bowdoin College',
    organization: 'Bachelor of Arts in Computer Science and Environmental Studies',
    // For images in `public` folder:
    logoUrl: BowdoinLogo, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: '',
    dates: 'September 2022 - present',
    descriptionPoints: [
      'Expected graduation: May 2026',
      'Computer science relevant coursework:  Data Structures, Algorithms, Artificial Intelligence, Computer Systems', 
      'Environmental Studies (GIS) relevant coursework: Applications in GIS and Remote Sensing, Nature of Data, Building Resilient Communities ',
      'Attended the School For International Training during the fall of my junior year to study abroad in Iceland'

    ],
  },
     {
    id: 'edu3',
    category: 'Education', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'St. Pauls School',
    organization: 'High School Degree',
    // For images in `public` folder:
    logoUrl: StPaulsLOGO, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: '',
    dates: 'September 2018 - June 2022',
    descriptionPoints: [
      'Graduated with honors in the humanities and sciences, as well as with honors for being selected to be a part of the Applied Science and Engineering Program.', 
      'Activities: Alpine Ski Team, Crew, Hillel Society, Dorm Proctor'
      
    ],
  },
  //Work ************************************************************************************************************************

     {
    id: 'job1',
    category: 'Work', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'GIS Teaching Assistant (Incoming)',
    organization: 'Bowdoin College',
    // For images in `public` folder:
    logoUrl: BowdoinLogo, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: '',
    dates: 'September 2025 - December 2025',
    descriptionPoints: [
      'Incoming teaching assistant for the "Building Resilient Communities" GIS Course.', 
      'Responsibilities include facilitating the learning process through assisting teaching the course, independent office hours to assist students on assignments, and serving as a first point of contact for the students.'

    ],
  },
    {
    id: 'job2',
    category: 'Work', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'Software Engineering Intern',
    organization: 'onXmaps',
    // For images in `public` folder:
    logoUrl: onxLOGO, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: 'https://placehold.co/80x80/007bff/white?text=Job',
    dates: 'June 2025 - Present',
    descriptionPoints: [
      'fill'
    ],
  },
  {
    id: 'job3',
    category: 'Work', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'GIS Web App Design Intern',
    organization: 'COBALT Team Zoestra',
    // For images in `public` folder:
    logoUrl: COBALTLOGO, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: 'https://placehold.co/80x80/007bff/white?text=Job',
    dates: 'January 2025 - May 2025',
    descriptionPoints: [
      'Designed an R shiny based web app to model the shifting distributions of eelgrass in Casco Bay, Maine, over the past 30 years to assist with conservation and research efforts.',
      'Collaborated with stakeholders to create and implement a data upload system for the app, which employs user-collected field data to accurately monitor real-time dynamics in the eelgrass beds.'
    ],
  },
    {
    id: 'job4',
    category: 'Work', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'Farm Store Associate',
    organization: 'Dimond Hill Farm',
    // For images in `public` folder:
    logoUrl: DimondLogo, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: 'https://placehold.co/80x80/007bff/white?text=Job',
    dates: 'May 2023 - August 2023',
    descriptionPoints: [
      'Coordinated incoming and outgoing shipments of local produce, conferred with owner regularly and resolved long standing stocking issues through initiation and implementation of a new online database.',
      'Represented the store to the public, handled transactions and maintenance for the entire store, trained new employees.'
    ],
  },
  {
    id: 'job5',
    category: 'Work', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'Information Technology Support Staff',
    organization: 'Bowdoin College Information Technology',
    // For images in `public` folder:
    logoUrl: BowdoinLogo, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: 'https://placehold.co/80x80/007bff/white?text=Job',
    dates: 'January 2023 - May 2023',
    descriptionPoints: [
      'Assisted students and faculty in resolving technical issues related to school-supported Apple devices, Okta, and educational software. Assisted in the training of peers.'
    ],
  },

  //RESEARCH ************************************************************************************************************************
   {
    id: 'research1',
    category: 'Research', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'Research Assistant',
    organization: 'Bowdoin College',
    // For images in `public` folder:
    logoUrl: BowdoinLogo, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: 'https://placehold.co/80x80/007bff/white?text=Job',
    dates: 'October 2023 - May 2025',
    descriptionPoints: [
      'Established a quantitative data analysis metric for evaluating the effectiveness of the Maine Governor`s Office of Policy and Innovation for the Future`s Community Resilience Program.',
      'Researched the relationship between municipalities` ability to apply for grants, expand their digital capacity, and increase community resilience. Presented findings at the American Association of Geographers conference.'
    ],
  },
    {
    id: 'research2',
    category: 'Research', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'Research Fellow',
    organization: 'Bowdoin College',
    // For images in `public` folder:
    logoUrl: BowdoinLogo, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: 'https://placehold.co/80x80/007bff/white?text=Job',
    dates: 'June 2024 - August 2024',
    descriptionPoints: [
      'Coordinated with peer institutions to create an index evaluating social vulnerability in Maine, and presented reports that helped inform Maine’s LD-1 storm preparedness legislation.',
      'Utilized ArcGIS to spatialize results and interpret trends and findings, produced maps and data for the Maine Social Vulnerability Index Dashboard. Performed sector-based interviews and evaluated them using NVIVO.'
    ],
  },
   {
    id: 'research3',
    category: 'Research', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'Research Intern',
    organization: 'Northwestern University IDEAS Lab',
    // For images in `public` folder:
    logoUrl: IDEASLOGO, 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: 'https://placehold.co/80x80/007bff/white?text=Job',
    dates: 'March 2021 - November 2021',
    descriptionPoints: [
      'Evaluated the strength of multiple reinforcement learning algorithms on their ability to create more energy-efficient integrated HVAC systems.',
      'Condensed and interpreted data sets, worked within the Ubuntu OS, and presented findings in weekly team meetings.',
      'Accepted into St. Pauls School Honors Applied Science and Engineering Program (ASEP).',
      'Authored and presented a paper and poster on my research results concluding that Deep Q Networks were more effective than Soft Actor Critic models at learning to efficiently control HVAC systems.'
    ],
  },
    //Leadership ************************************************************************************************************************

  {
    id: 'lead1',
    category: 'Leadership',
    title: 'Captain',
    organization: 'Bowdoin Club Alpine Ski Team',
    logoUrl: BowdoinLogo,
    imagePlaceholder: 'https://placehold.co/80x80/ffc107/black?text=Lead',
    dates: 'February 2024 - Present',
    descriptionPoints: [
      'Oversee practices, coach new racers, qualified for regionals. In season average 25 hour commitment per week including racing, training, travel, and coaching responsibilities.'
    ],
  },
   {
    id: 'lead2',
    category: 'Leadership',
    title: 'Founder',
    organization: ' Harvest of Hopkinton',
    logoUrl: _Harvest_LOGO,
    imagePlaceholder: 'https://placehold.co/80x80/ffc107/black?text=Lead',
    dates: 'May 2019 - September 2023',
    descriptionPoints: [
      'Founded and directed a charity working with local farmers and gardeners to provide excess produce and eggs to local families in need. Coordinated with local resource offices and farmers to facilitate pickup and distribution.'
    ],
  },
  {
    id: 'lead3',
    category: 'Leadership',
    title: 'Head',
    organization: 'St. Pauls School Hillel Society',
    logoUrl: StPaulsLOGO,
    imagePlaceholder: 'https://placehold.co/80x80/ffc107/black?text=Lead',
    dates: 'September 2020 - June 2022',
    descriptionPoints: [
      'Helped lead and coordinate Jewish life on campus.', 
      'Planned both in-society and entire school events, delivered educational talks, helped promote DEI initiatives, and assisted in the establishment of St. Pauls School’s first ever multi-faith space. '
    ],
  },
      //Awards and Grants ****************************************************************************************************************

  {
    id: 'award1',
    category: 'Grants and Awards',
    title: 'Angela Stokes Award',
    organization: 'Maine GIS User Group (MEGUG)',
    logoUrl: MEGUGLOGO, // A generic award icon or university seal
    imagePlaceholder: 'https://placehold.co/80x80/6f42c1/white?text=Award',
    dates: 'March 2025',
    descriptionPoints: [
      'Received this annual award from MEGUG to help fund travel costs to the American Association of Geographers annual conference in March 2025 to present my poster: An Exploration of Resilience Adaptive Capacities in Rural Maine Municipalities.',
    ],
  },
  {
    id: 'grant1',
    category: 'Grants and Awards',
    title: 'Fritz C. A. Kollen Grant',
    organization: 'Bowdoin College',
    logoUrl: BowdoinLogo, // A generic grant/funding icon
    imagePlaceholder: 'https://placehold.co/80x80/fd7e14/white?text=Grant',
    dates: 'December 2024',
    descriptionPoints: [
      'Received this grant to extend my stay in Iceland where I had been studying abroad for the fall term of my junior year. During this extension I worked on a collaborative multimedia project documenting the experience of performing research in Icelands far north.'
    ],
  },
  {
    id: 'grant1',
    category: 'Grants and Awards',
    title: 'Sokoloff Prize',
    organization: 'St. Pauls School',
    logoUrl: StPaulsLOGO, // A generic grant/funding icon
    imagePlaceholder: 'https://placehold.co/80x80/fd7e14/white?text=Grant',
    dates: 'May 2021',
    descriptionPoints: [
      'Received runner up in this annual grant given by St. Pauls School which enables students to work on community service projects of their design. ',
      'Used funds to assist with a plant drive and community garden for my pre-existing  Harvest of Hopkinton Program.'
    ],
  },
];

// Helper function to group experiences by category
export const getExperiencesByCategory = () => {
  const categories = ['Education','Work', 'Research', 'Leadership', 'Grants and Awards'];
  const grouped = {};
  categories.forEach(category => {
    grouped[category] = experiences.filter(exp => exp.category === category);
  });
  return grouped;
};

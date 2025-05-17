export const experiences = [
  {
    id: 'job1',
    category: 'Jobs', // Categories: Jobs, Research, Leadership, Awards, Grants
    title: 'Software Development Intern',
    organization: 'Innovatech Solutions',
    // For images in `public` folder:
    logoUrl: '/images/logos/innovatech-logo.png', 
    // If importing from `src`: logoUrl: CompanyLogoPlaceholder,
    imagePlaceholder: 'https://placehold.co/80x80/007bff/white?text=Job',
    dates: 'Summer 2024 (May - Aug)',
    descriptionPoints: [
      'Developed and maintained features for a client-facing web application using React and Python.',
      'Participated in agile development cycles, including sprint planning, daily stand-ups, and retrospectives.',
      'Contributed to API development and database management tasks.',
    ],
  },
  {
    id: 'research1',
    category: 'Research',
    title: 'Undergraduate Research Assistant',
    organization: 'University GIS Lab',
    logoUrl: '/images/logos/university-logo.png',
    imagePlaceholder: 'https://placehold.co/80x80/28a745/white?text=Research',
    dates: 'Jan 2023 - May 2024',
    descriptionPoints: [
      'Assisted in a project analyzing spatial patterns of urban development using ArcGIS and Python scripting.',
      'Collected, processed, and visualized geospatial datasets.',
      'Contributed to a co-authored paper presented at a regional conference.',
    ],
  },
  {
    id: 'lead1',
    category: 'Leadership',
    title: 'President',
    organization: 'Coding Club',
    logoUrl: '/images/logos/coding-club-logo.png',
    imagePlaceholder: 'https://placehold.co/80x80/ffc107/black?text=Lead',
    dates: '2023 - 2024 Academic Year',
    descriptionPoints: [
      'Led a team of 5 officers to organize weekly meetings, workshops, and a hackathon for 50+ members.',
      'Managed club budget and secured sponsorship from local tech companies.',
      'Increased club membership by 30% through outreach initiatives.',
    ],
  },
  {
    id: 'award1',
    category: 'Awards',
    title: 'Dean\'s List for Academic Excellence',
    organization: 'Your University, College of Engineering',
    logoUrl: '/images/logos/award-icon.png', // A generic award icon or university seal
    imagePlaceholder: 'https://placehold.co/80x80/6f42c1/white?text=Award',
    dates: 'Fall 2023, Spring 2024',
    descriptionPoints: [
      'Recognized for achieving a GPA of 3.8+ while maintaining a full course load.',
    ],
  },
  {
    id: 'grant1',
    category: 'Grants',
    title: 'Undergraduate Research Grant',
    organization: 'University Research Fund',
    logoUrl: '/images/logos/grant-icon.png', // A generic grant/funding icon
    imagePlaceholder: 'https://placehold.co/80x80/fd7e14/white?text=Grant',
    dates: 'Awarded March 2023',
    descriptionPoints: [
      'Secured a $1,500 grant to fund independent research on renewable energy mapping.',
      'Successfully completed the proposed research and submitted a final report.',
    ],
  },
  // Add more experiences here
];

// Helper function to group experiences by category
export const getExperiencesByCategory = () => {
  const categories = ['Jobs', 'Research', 'Leadership', 'Awards', 'Grants'];
  const grouped = {};
  categories.forEach(category => {
    grouped[category] = experiences.filter(exp => exp.category === category);
  });
  return grouped;
};

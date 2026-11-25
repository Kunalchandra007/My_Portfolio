export type Certificate = {
  name: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  learning: string;
};

export const certificates: Certificate[] = [
  {
    name: 'Python for Data Science',
    organization: 'NPTEL - IIT Madras',
    date: '2024',
    description: 'Completed NPTEL Python for Data Science with Elite + Silver.',
    image: '/Python for Data Science (1)_page-0001 (1).jpg',
    learning: 'Strong foundation in data analysis and manipulation with Python.',
  },
  {
    name: 'Programming in Java',
    organization: 'NPTEL',
    date: '2023',
    description: 'Covered OOP, core Java fundamentals, and problem-solving.',
    image: '/programming in java.jpeg',
    learning: 'Improved coding and logic building in Java.',
  },
  {
    name: 'Summer Analytics 2025',
    organization: 'IIT Guwahati',
    date: '2025',
    description: '6-week intensive program on data science and machine learning.',
    image: '/summer.jpg',
    learning: 'Hands-on ML exposure with practical analytics tasks.',
  },
  {
    name: 'DSA in Java',
    organization: 'Apna College',
    date: '2023',
    description: 'Data structures and algorithms practice in Java.',
    image: '/DSA in java.jpeg',
    learning: 'Better algorithmic thinking and coding speed.',
  },
  {
    name: 'Project Management',
    organization: 'Coursera',
    date: '2023',
    description: 'Project planning and execution fundamentals.',
    image: '/project management.jpeg',
    learning: 'Learned delivery workflows and team coordination.',
  },
  {
    name: 'Power BI Training',
    organization: 'Ducat India',
    date: '2024',
    description: 'Power BI dashboards and visualization workflows.',
    image: '/ducat india.jpeg',
    learning: 'Improved BI dashboarding and reporting skills.',
  },
  {
    name: 'GirlScript Summer of Code 2025',
    organization: 'GirlScript Foundation',
    date: '2025',
    description: 'Open-source contributions in a national coding initiative.',
    image: '/gssoc.jpg',
    learning: 'Real-world collaboration with version control and PR workflows.',
  },
  {
    name: 'Web Development',
    organization: 'Apna College',
    date: '2023',
    description: 'Frontend development with HTML, CSS, and JavaScript.',
    image: '/Webdev.jpeg',
    learning: 'Built responsive UI projects and frontend fundamentals.',
  },
  {
    name: 'AI & ML Internship',
    organization: 'Teachnook',
    date: '2023',
    description: 'Worked on preprocessing, model building, and evaluation tasks.',
    image: '/teachnook.jpeg',
    learning: 'Applied ML concepts on practical problems.',
  },
  {
    name: 'Tata Data Analytics Workshop',
    organization: 'Tata Consultancy Services',
    date: '2024',
    description: 'Hands-on workshop on analytics and business insights.',
    image: '/Tata.jpeg',
    learning: 'Exposure to analytics workflows used in industry.',
  },
  {
    name: 'Intra College Cricket Winner',
    organization: 'Haridwar University',
    date: '2024',
    description: 'Won the intra college cricket tournament with team effort.',
    image: '/cricket.jpeg',
    learning: 'Teamwork, consistency, and performance under pressure.',
  },
  {
    name: 'HackWithIndia Finalist',
    organization: 'HackWithIndia 2024',
    date: '2024',
    description: 'Ranked among top teams in a national coding challenge.',
    image: '/hackwithindia.jpeg',
    learning: 'Competitive coding and collaborative problem-solving.',
  },
];

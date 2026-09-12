export const profile = {
  name: 'Shashank Shekhar',
  title: 'Aspiring Software Developer',
  tagline: 'Building practical software with Java, DSA, Web Development & Machine Learning.',
  email: 'sonushashank01@gmail.com',
  github: 'https://github.com/shashank-lnct',
  linkedin: 'https://linkedin.com/in/shashank-shekhar-665437395',
  resumeUrl: '/Shashank_Shekhar_Resume.pdf',
}

export const focusAreas = [
  'Data Structures & Algorithms',
  'Java Development',
  'Web Development',
  'Machine Learning',
  'Problem Solving',
]

export type SkillGroup = {
  path: string
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    path: '~/skills/languages',
    label: 'Languages',
    items: ['Java', 'Python', 'C', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'PHP'],
  },
  {
    path: '~/skills/frameworks',
    label: 'Frameworks & Libraries',
    items: ['Laravel', 'Bootstrap 5', 'jQuery', 'AJAX'],
  },
  {
    path: '~/skills/core-concepts',
    label: 'Core Concepts',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'REST APIs',
      'Relational Database Management Systems',
    ],
  },
  {
    path: '~/skills/tools',
    label: 'Developer Tools',
    items: ['IntelliJ IDEA', 'VS Code', 'Git', 'GitHub', 'Postman'],
  },
]

export const experience = [
  {
    role: 'Web Development Intern',
    org: '1Stop.ai',
    period: 'Feb 2026 – Apr 2026',
    description:
      'Completed a hands-on Web Development Internship focused on end-to-end web application development using PHP, Laravel, MySQL, JavaScript, and Bootstrap.',
    highlights: [
      'Developed and worked with RESTful APIs.',
      'Integrated AJAX for dynamic frontend interactions.',
      'Contributed to real-world task management and booking administration systems.',
      'Tested and validated API endpoints using Postman.',
      'Worked with clean application architecture and database-driven applications.',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX', 'REST APIs', 'Postman'],
  },
]

export const projects = [
  {
    title: 'N-Max AI Assistant',
    stack: ['Python', 'JavaScript', 'Electron.js', 'REST APIs'],
    description:
      'Built an intelligent, context-aware AI virtual assistant designed to streamline daily workflows, execute local system actions, and handle natural language queries.',
    github: 'https://github.com/shashank-lnct/n-max',
    kind: 'dashboard' as const,
  },
  {
    title: 'Movie Recommendation System',
    stack: ['Python', 'Jupyter Notebook', 'TMDB Dataset', 'Machine Learning'],
    description:
      'Developed a content-based movie recommendation system using Python and the TMDB dataset to recommend similar movies based on movie features and similarity scores.',
    github: 'https://github.com/shashank-lnct/Movie-Recommendation-System',
    kind: 'ml' as const,
  },
  {
    title: 'Expense Tracker',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    description:
      'Designed and developed a responsive expense tracker with an interactive, user-friendly interface to log, categorize, and monitor daily expenses.',
    github: 'https://github.com/shashank-lnct/Expense-Tracker',
    kind: 'dashboard' as const,
  },
]

export const education = [
  {
    school: 'LNCT University',
    program: 'B.Tech — Computer Science Engineering',
    period: 'Aug 2025 – June 2029',
    metric: 'SGPA 8.00',
  },
  {
    school: 'Oriental Foundation School, Bokaro',
    program: '12th — CBSE Board',
    period: '2023 – 2024',
    metric: '69.2%',
  },
  {
    school: 'Guru Gobind Singh Public School, Bokaro',
    program: '10th — CBSE Board',
    period: '2022',
    metric: '86%',
  },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
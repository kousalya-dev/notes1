// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Hanu S Kumar',
  first: 'HANU',
  title: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'Module Lead', 'React.js + Node.js', 'AWS Builder', 'GenAI Explorer'],
  location: 'Chennai, India',
  email: 'hanuskumar121@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hanuskumar',
  resume: '/Hanu_S_Kumar_Resume.pdf',
  photo: '/hanu-cutout.png',
  tagline: 'I turn slow, manual workflows into fast, secure products.',
  summary:
    'Full-stack developer with 4 years in production, building scalable web apps with React.js, Node.js and AWS. Promoted to Module Lead within a year for ownership and consistent delivery.',
}

export const orbit = ['React.js', 'Node.js', 'AWS', 'MongoDB', 'RBAC']

export const manifesto =
  'I design end-to-end modules that scale, lock them down with role-based access control, and tune them until the numbers move. Clean architecture, efficient workflows, and a team that can rely on me.'

export const impact = [
  { value: 75, suffix: '%', label: 'Less user input time', note: 'Shipped a bulk upload system that replaced repetitive manual entry.', tone: 'lime' },
  { value: 60, suffix: '%', label: 'Faster data fetch', note: 'Implemented bulk get to cut get time across the platform.', tone: 'ink' },
  { value: 1, prefix: '<', suffix: ' yr', label: 'To Module Lead', note: 'Promoted for strong ownership and consistent delivery.', tone: 'ink' },
  { value: 4, suffix: ' yrs', label: 'In production', note: 'Multiple core modules used across the platform.', tone: 'lime' },
]

export const experience = [
  {
    role: 'Full Stack Developer — Module Lead',
    company: 'Unifo Private Ltd',
    place: 'Chennai, India',
    period: 'Aug 2022 — Present',
    points: [
      'Led end-to-end development of core modules, improving scalability and reducing manual processing effort.',
      'Built Super Admin functionality that enables cross-customer operations and lifts administrative efficiency.',
      'Implemented Role-Based Access Control (RBAC) to strengthen security and access management.',
      'Implemented bulk get, reducing get time by 60%.',
      'Reduced user input time by 75% with a bulk upload system.',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'RBAC'],
  },
  {
    role: 'Internship Trainee',
    company: 'Sellogs Metamediary Solutions',
    place: 'Kochi, India',
    period: 'Dec 2021 — Jun 2022',
    points: [
      'Built foundational full-stack skills with PHP, SQL, JavaScript and Laravel.',
      'Developed applications and practised version control with Git and GitHub.',
    ],
    tags: ['PHP', 'Laravel', 'SQL', 'JavaScript', 'Git'],
  },
]

export const skills = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript'] },
  { title: 'Stack', items: ['React.js', 'Node.js', 'HTML / CSS', 'REST APIs'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'DynamoDB', 'ElasticSearch'] },
  { title: 'AWS', items: ['S3', 'DynamoDB', 'CloudWatch', 'ECS', 'ECR', 'Cognito', 'Secrets Manager'] },
  { title: 'AI & Tools', items: ['LLM Fundamentals', 'Prompt Engineering', 'Claude', 'GitHub Copilot', 'Git', 'GitHub', 'Postman'] },
  { title: 'Soft skills', items: ['Critical thinking', 'Communication', 'Team management', 'Teamwork', 'Leadership'] },
]

export const now = {
  title: 'Currently exploring',
  lines: ['Generative AI', 'LLM fundamentals', 'Prompt engineering', 'AI-assisted app development'],
}

export const education = {
  school: 'Kerala University',
  degree: 'BSc Computer Science',
  period: '2017 — 2020',
}

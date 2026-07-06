import {
  backend,
  claude,
  codex,
  copilot,
  css,
  cursor,
  docker,
  figma,
  git,
  graphqlLogo,
  html,
  javascript,
  mongodb,
  nodejs,
  qed42,
  rapid,
  reactjs,
  redux,
  squareboat,
  strapi,
  storybook,
  tailwind,
  typescript,
  v0,
  web,
  creator,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'tech',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'writing',
    title: 'Writing',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Architecture',
    icon: web,
  },
  {
    title: 'Performance & SEO',
    icon: backend,
  },
  {
    title: 'Team Leadership',
    icon: creator,
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Modern UI engineering and client-side architecture',
    skills: [
      {
        name: 'React',
        icon: reactjs,
      },
      {
        name: 'Next.js',
        icon: web,
      },
      {
        name: 'HTML',
        icon: html,
      },
      {
        name: 'CSS',
        icon: css,
      },
      {
        name: 'TypeScript',
        icon: typescript,
      },
      {
        name: 'JavaScript',
        icon: javascript,
      },
      {
        name: 'Redux',
        icon: redux,
      },
      {
        name: 'Tailwind',
        icon: tailwind,
      },
      {
        name: 'GraphQL',
        icon: graphqlLogo,
      },
      {
        name: 'Storybook',
        icon: storybook,
      },
    ],
  },
  {
    title: 'Backend',
    description: 'Data, APIs, and CMS-driven delivery',
    skills: [
      {
        name: 'Node.js',
        icon: nodejs,
      },
      {
        name: 'Express',
        icon: backend,
      },
      {
        name: 'MongoDB',
        icon: mongodb,
      },
      {
        name: 'Strapi',
        icon: strapi,
      },
    ],
  },
  {
    title: 'Tools',
    description: 'Shipping, collaboration, and AI workflows',
    skills: [
      {
        name: 'Git',
        icon: git,
      },
      {
        name: 'GitHub Copilot',
        icon: copilot,
      },
      {
        name: 'Cursor',
        icon: cursor,
      },
      {
        name: 'Vercel',
        icon: v0,
      },
      {
        name: 'OpenAI Codex',
        icon: codex,
      },
      {
        name: 'Claude',
        icon: claude,
      },
    ],
  },
];

const experiences = [
  {
    title: 'Senior JavaScript Engineer',
    company_name: 'Qed42',
    icon: qed42,
    iconBg: '#E6DEDD',
    date: 'April 2024 - Present',
    chips: ['Next.js', 'Strapi', 'SEO', 'Core Web Vitals', "Accessibility"],
    points: [
      'Leading an 8-member frontend team across sprint planning, technical design reviews, task allocation, and production releases.',
      'Directed the frontend migration from kotaksecurities.com to kotakneo.com, ensuring a zero-disruption domain transition for a platform serving 150+ page types.',
      'Led the migration from Next.js 12 to 15 with zero downtime, reducing technical debt and improving build performance.',
      'Driving platform-wide UX modernization initiatives to improve engagement and conversion.',
      'Overseeing a platform generating 674K+ clicks and 194M+ impressions in Google Search Console, keeping performance and SEO integrity high at scale.',
    ],
  },
  {
    title: 'JavaScript Engineer - Next.js',
    company_name: 'Qed42',
    icon: qed42,
    iconBg: '#E6DEDD',
    date: 'January 2022 - March 2024',
    chips: ['Next.js', 'Strapi', 'SEO', 'Core Web Vitals','Component Library', 'Mentoring'],
    points: [
      'Improved Core Web Vitals from the 20-30 range to 60-70 by resolving complex performance bottlenecks on kotaksecurities.com.',
      'Built SEO-optimized pre-login pages that improved product discoverability.',
      'Architected a reusable component library, cutting development time and enforcing design consistency across projects.',
      'Implemented SSG/SSR strategies to boost page speed and SEO performance.',
      'Mentored fellow engineers and conducted code reviews to improve engineering quality.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: 'Squareboat',
    icon: squareboat,
    iconBg: '#383E56',
    date: 'July 2021 - January 2022',
    chips: ['React', 'Redux', 'Strapi', 'Accessibility'],
    points: [
      'Developed a feature-rich dashboard for the US-based client Humanity Health using React and Redux, with an intuitive UX and robust state management.',
      'Delivered accessible, cross-device usability aligned with accessibility standards.',
      "Managed content updates for Star Health Insurance's website via Strapi CMS, streamlining dynamic content handling.",
      'Built responsive, user-friendly interfaces for the Star Health Insurance website using React.js.',
    ],
  },
  {
    title: 'Trainee Software Developer',
    company_name: 'Rapid Innovation',
    icon: rapid,
    iconBg: '#E6DEDD',
    date: 'January 2021 - May 2021',
    chips: ['Solidity', 'Web3.js', 'Blockchain'],
    points: [
      'Developed and deployed Solidity smart contracts, integrating them into React apps for blockchain interaction.',
      'Integrated Web3.js for blockchain transaction management and dApp interactions.',
      'Optimized smart contracts for gas efficiency and security.',
    ],
  },
  {
    title: 'Trainee Software Developer',
    company_name: 'Videtorrium',
    icon: web,
    iconBg: '#E6DEDD',
    date: 'September 2020 - December 2020',
    chips: ['React', 'Material UI', 'Redux', 'Firebase', 'Razorpay'],
    points: [
      'Built a web app for Videtorrium Students Conclave using React.js, Material UI, and Redux so students could discover and register for events.',
      'Integrated Firebase and Razorpay for event management and payment processing.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Aman evolved as a compelling professional from a simple undergraduate student in just a few months. I have known Aman for a year now, and he started his first internship with our organization. He is always keen on learning new skills, and I have been amazed by his innate capacity to acquire new skills. An extremely hard-working, sincere and humble person, Aman is truly a gem to have in the team.',
    name: 'Saurav K Mitra',
    designation: 'Founder & CEO',
    company: 'Noisiv Consulting',
    image:
      'https://media.licdn.com/dms/image/v2/C4D03AQEESaJmJWH2-Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1650443525190?e=1743033600&v=beta&t=irAxnGiDu-uKpPlkAoOus3zE_m4BZzAmx7ghVU-gnYo',
  },
];

const blogPosts = [
  {
    title: 'Building Smarter UI Overlays with React Portals',
    description:
      'A blog on building reliable overlays and modal experiences with React Portals.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Portals',
        color: 'green-text-gradient',
      },
      {
        name: 'UI',
        color: 'pink-text-gradient',
      },
    ],
    publishedAt: '5 April 2025',
    readTime: '6 min read',
    articleLink:
      'https://medium.com/@amngoyal/building-smarter-ui-overlays-with-react-portals-c4355892d9a5',
  },
  {
    title: 'How to create a custom snackbar in Next.js 14 using Tailwind CSS',
    description:
      'A practical write-up on building a polished snackbar pattern with Next.js and Tailwind CSS.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'UX',
        color: 'pink-text-gradient',
      },
    ],
    publishedAt: '8 July 2024',
    readTime: '7 min read',
    articleLink:
      'https://medium.com/@amngoyal/how-to-create-a-custom-snackbar-in-next-js-14-using-tailwind-css-69b17322ad49',
  },
  {
    title: 'Getting started with Strapi',
    description:
      'A short tech talk on building content-driven experiences with Strapi and practical CMS workflows.',
    tags: [
      {
        name: 'Strapi',
        color: 'blue-text-gradient',
      },
      {
        name: 'YouTube',
        color: 'green-text-gradient',
      },
      {
        name: 'CMS',
        color: 'pink-text-gradient',
      },
    ],
    publishedAt: '30 August 2021',
    readTime: '60 min watch',
    articleLink: 'https://youtu.be/Jy_7e6qfAvk',
    actionLabel: 'Watch Video',
  },
];

const personalProjects = [
  {
    title: 'Union Marine Management Services',
    description:
      'A polished web experience for a maritime services brand focused on trust, clarity, and lead generation.',
    tags: [
      {
        name: 'Website',
        color: 'blue-text-gradient',
      },
      {
        name: 'Brand',
        color: 'green-text-gradient',
      },
      {
        name: 'UX',
        color: 'pink-text-gradient',
      },
    ],
    liveLink: 'https://unimarships.com/',
    githubLink: '',
    caseStudyLink: '',
  },
  {
    title: 'The Qualidad',
    description:
      'A modern marketing site built to present the brand cleanly and convert visitors into inquiries.',
    tags: [
      {
        name: 'Website',
        color: 'blue-text-gradient',
      },
      {
        name: 'Marketing',
        color: 'green-text-gradient',
      },
      {
        name: 'Frontend',
        color: 'pink-text-gradient',
      },
    ],
    liveLink: 'https://thequalidad.com/',
    githubLink: '',
    caseStudyLink: '',
  },
];

const contactLinks = [
  {
    name: 'Twitter',
    imgSrc: '/twit.svg',
    href: 'https://x.com/amngoyal',
    alt: "Twitter",
  },
  {
    name: 'GitHub',
    imgSrc: '/git.svg',
    href: 'https://github.com/amngoyal',
    alt: 'Github',
  },
  {
    name: 'LinkedIn',
    imgSrc: '/link.svg',
    href: 'https://www.linkedin.com/in/amngoyal/',
    alt: 'Linkedin',
  },
];

export {
  blogPosts,
  contactLinks,
  experiences,
  personalProjects,
  services,
  skillGroups,
  testimonials,
};

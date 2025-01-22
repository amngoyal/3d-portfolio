import {
  backend,
  carrent,
  css,
  git,
  html,
  javascript,
  jobit,
  mongodb,
  nodejs,
  qed42,
  rapid,
  reactjs,
  redux,
  squareboat,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Senior Javascript Engineer',
    company_name: 'Qed42',
    icon: qed42,
    iconBg: '#E6DEDD',
    date: 'April 2024 - Present',
    points: [
      'Improving web performance of kotaksecurities.com and core web vitals for better user experience and SEO rankings.',
      'Identifying and resolving issues in deployed production websites to ensure stability and seamless user experience.',
      'Working closely with stakeholders and cross-functional teams to ensure alignment with project goals and business requirements.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Upgrading Next.js versions to leverage the latest features and maintain compatibility with modern technologies.',
      'Collaborating with clients to gather requirements and align tasks with the development team for effective execution.',
    ],
  },
  {
    title: 'Javascript Engineer',
    company_name: 'Qed42',
    icon: qed42,
    iconBg: '#E6DEDD',
    date: 'April 2022 - March 2024',
    points: [
      'Designed and implemented pre-login static pages for the Kotak Securities website, highlighting various financial products and enhancing user engagement.',
      'Created a scalable and reusable components library for Kotak Securities, ensuring design consistency and efficient development workflows across multiple projects.',
      'Optimized the performance of web pages by leveraging Static Site Generation (SSG) and Server-Side Rendering (SSR) for faster loading times and improved SEO.',
      'Worked closely with backend developers and product managers to ensure seamless integration and alignment with business requirements.',
      'Focused on responsive and accessible designs to deliver a user-friendly experience across devices.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: 'Squareboat',
    icon: squareboat,
    iconBg: '#383E56',
    date: 'May 2021 - Feb 2022',
    points: [
      'Worked on Strapi CMS for the content management of the Star Health Insurance website, ensuring seamless updates and efficient handling of dynamic content.',
      'Contributed to the frontend development of the Star Health Insurance website using React.js, focusing on responsive designs and user-friendly interfaces.',
      'Developed a feature-rich dashboard for a US-based company, Humanity Health, using React.js, Redux, and React Router, providing an intuitive user experience and robust state management.',
      'Delivered a responsive and accessible dashboard, ensuring usability across devices and adhering to accessibility standards.',
    ],
  },
  {
    title: 'Trainee Software Developer',
    company_name: 'Rapid Innovation',
    icon: rapid,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Gained experience in developing and deploying blockchain smart contracts using Solidity.',
      'Integrated smart contracts into React applications for seamless blockchain interaction.',
      'Worked with Web3.js to handle blockchain transactions and interactions.',
      'Explored decentralized application (dApp) development with blockchain and modern web technologies.',
      'Focused on optimizing smart contracts for gas efficiency and ensuring security.',
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

const projects = [
  {
    name: 'Fullstack project: PeTrack',
    description:
      'PetTrack lets pet owners list their pets with QR codes on collars, helping find lost pets quickly and reunite them with their owners.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Node Js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Express Js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Mongo Db',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { experiences, projects, services, technologies, testimonials };

import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Name : ',
    description: 'Ifra Shamim',
  },

  {
    id: 2,
    title: 'Religion : ',
    description: 'Islam',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Pakistani',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Karachi',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '03112507543',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'ifrashamim29@gmail.com',
  },

  {
    id: 9,
    title: 'Degree : ',
    description: 'BSCS',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Urdu',
  },
];

export const stats = [
  {
    id: 1,
    no: '10+',
    title: 'Projects <br /> Built',
  },

  {
    id: 2,
    no: '50+',
    title: 'Concepts <br /> Learned',
  },

  {
    id: 3,
    no: '100+',
    title: 'Hours of <br /> Coding',
  },

  {
    id: 4,
    no: '5+',
    title: 'Tech <br /> Stacks Used',
  },
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'May 2024 - PRESENT',
    title: 'Lead Trainer <span> SMIT </span>',
    desc: 'Delivered training sessions on web development technologies.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jan 2024 - March 2024',
    title: 'Front End Developer <span> CBS Pakistan Internship </span>',
    desc: 'Developed responsive web applications using modern frontend technologies.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - 2022',
    title: 'Computer Science Instructor <span> Al-Hera Secondary School </span>',
    desc: 'Successfully taught core Computer Science concepts to students, ensuring a strong foundation in programming,algorithms.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'BSCS Degree <span> Sindh Madressatul Islam University </span>',
    desc: 'Final Year Project: "Generative Text To Speech In URdu" using Flask,Python,and Tensorflow.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2020',
    title: 'Intermediate - Pre Engineering <span> PECHS Govt. Degree Girls College </span>',
    desc: 'Got 79% , A Grade',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016-2018',
    title: 'Matriculation - Pre Medical <span> Millenniums Education System </span>',
    desc: 'Got 87% , A+ Grade',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 4,
    title: 'Firebase',
    percentage: '76',
  },

  {
    id: 5,
    title: 'Typescript',
    percentage: '80',
  },

  {
    id: 6,
    title: 'Tailwind Css',
    percentage: '90',
  },

  {
    id: 7,
    title: 'React Js',
    percentage: '75',
  },

  {
    id: 8,
    title: 'Node Js',
    percentage: '65',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'MS Word Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'MS Word Clone',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html5,Css3,ES6',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ifrashamim.github.io/MS-Word-Clone/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'String Manipulator Tool',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'String Manipulator Tool',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html5,Css3,ES6',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ifrashamim.github.io/String-Manipulator-Tool/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Github Dev Finder',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Github Dev Finder',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html5,Css3,ES6',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ifrashamim.github.io/Github-Dev-Finder/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Contact List Manager',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Contact List Manager',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html5,Css3,ES6',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ifrashamim.github.io/Contact-List-Manager/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'BMI Calculator',
    details: [
      {
        title: 'Project : ',
        desc: 'BMI Calculator',
      },
      {
        title: 'Language : ',
        desc: 'Html5,Css3,ES6',
      },
      {
        title: 'Preview : ',
        desc: 'https://ifrashamim.github.io/BMI-Calculator/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Notepad Clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Notepad Clone',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html5,Css3,ES6',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ifrashamim.github.io/notepadClone/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

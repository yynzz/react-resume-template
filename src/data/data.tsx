import {
  AcademicCapIcon,
  //ArrowDownTrayIcon,
  //BuildingOffice2Icon,
  CalendarIcon,
  //FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
//import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */

export const homePageMeta: HomepageMeta = {
  title: 'Ally\'s Resume',
  description: "",
};


/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData = {
  //imageSrc: heroImage,
  name: `I'm Ally.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Data Engineer</strong> with 4 years of experience in
         <strong className="text-stone-100"> financial industry.</strong> My focus area for the past few years has 
         been back-end development with <strong className="text-stone-100"> Python. </strong>
      </p>
    </>
  ),
  actions: [
    /*
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    */
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hello, Ni hao!`,
  aboutItems: [
    {label: 'Location', text: 'Taipei, Taiwan', Icon: MapIcon},
    {label: 'Age', text: '3', Icon: CalendarIcon},
    {label: 'Interests', text: 'Sleep, Marathon, Coffee', Icon: SparklesIcon},
    {label: 'Study', text: 'MBA, NSYSU', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Mandarin',
        level: 10,
      },
      {
        name: 'English',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2016 - Jul 2018',
    location: 'NSYSU',
    title: 'Master of Business Administration',
    content: <p>Statistics, Market Basket Analysis, Conjoint Analysis, Strategic Management.</p>,
  },
  {
    date: 'Jan 2018 - Feb 2018',
    location: 'ESSCA',
    title: 'Exchange Program',
    content: <p>International Economics, Postmodern Marketing.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2021 - Present',
    location: 'Awesome Development Company',
    title: 'Junior Data Engineer',
    content: (
      <p>
        Backend Service Development: Developed efficient and reusable modular 
        Python codes and spearheaded Kubernetes containerization deployment.
      </p>
    ),
  },
  {
    date: 'Oct 2018 - Sep 2021',
    location: 'Garage Startup Studio',
    title: 'Junior Bug Fixer',
    content: (
      <p>
        Happy debugging!
      </p>
    ),
  },
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Zz',
      text: 'Solving Problems, One Line at a Time.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Bear',
      text: 'Chic Apps for Smart People.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone',
      text: 'There’s No Place Like 127.0.0.1',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Let\'s grab a coffee! ☕',
  items: [
    {
      type: ContactType.Location,
      text: 'Taipei, Taiwan',
      href: 'https://www.google.com/maps/place/Taiwan/',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Yy',
      href: 'https://www.linkedin.com/',
    },
    {
      type: ContactType.Github,
      text: 'Yy',
      href: 'https://github.com/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/'},
];

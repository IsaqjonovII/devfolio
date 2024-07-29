import { Github, Instagram, Linkedin, X } from "assets";
import c from "pages/Intro/style.module.css";
export const framerVariants = {
  closed: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
export const itemVariants = {
  closed: {
    opacity: 0,
    y: 0,
  },
  open: { opacity: 1, y: -10 },
};

export const introData = [
  {
    id: 1,
    title: "Professional Journey",
    content: (
      <>
        <p className={c.intro__text}>
          I&apos;ve been working as a frontend developer for over 2 years.
          During this time, I&apos;ve had the privilege of contributing to
          impactful projects where I honed my skills in TypeScript, Javascript,
          React, Vue, Nuxt, Nodejs and Fastify.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Currently",
    content: (
      <>
        <p className={c.intro__text}>
          These days, I'm dedicated to working on{" "}
          <a
            href='https://unicraft.uz'
            rel='noopener noreferrer'
            target='_blank'>
            Unicraft.uz
          </a>
          , a platform designed to make college admissions accessible worldwide.
          Unicraft serves as a bridge between successful college students and
          applicants, providing the necessary tools and resources to simplify
          the admissions process.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Tech Stack",
    content: (
      <>
        <p className={c.intro__text}>
          My tech stack includes JavaScript, TypeScript, React.js, Vue 3, Nuxt
          3, Redux Toolkit, Redux, RTK Query, Git, and CDNs like Cloudinary. I
          also have some experience with backend technologies such as Node.js,
          Fastify, Express, and MongoDB. I leverage these technologies to build
          robust and scalable web applications.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Future Goals",
    content: (
      <>
        <p className={c.intro__text}>
          In the future, I aim to enhance my proficiency in frontend development
          and explore other IT domains like AI, cybersecurity, and mobile
          development. I am dedicated to staying updated on industry trends and
          consistently improving my skills.
        </p>
      </>
    ),
  },
];

export const socialLinks = [
  {
    key: "github",
    label: "Github",
    link: "https://github.com/IsaqjonovII",
    Icon: Github,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    link: "https://linkedin.com/in/Ilhomjon-Isaqjonov",
    Icon: Linkedin,
  },
  {
    key: "twitter",
    label: "Twitter",
    link: "https://twitter.com/Ilhomjondev",
    Icon: X,
  },
  {
    key: "instagram",
    label: "Instagram",
    link: "https://instagram.com/ilhomjondev",
    Icon: Instagram,
  },
];

let id = 0;
export const sideProjectsData = [
  {
    id: id++,
    title: "IT Center Nurafshon",
    info: "Website for Nurafshon branch of IT Center",
    link: "https://itc-nurafshon.uz/",
    repoLink: "https://github.com/IsaqjonovII/ITC",
    tags: ["react", "module css", "react-router"],
  },
  {
    id: id++,
    title: "Motoshop",
    info: "MOTOSHOP: Marketplace for motorcycle enthusiasts. Find your dream ride or sell your trusted companion.",
    tags: [
      "react",
      "antd",
      "typescript",
      "fastify",
      "mongodb",
      "nodejs",
      "redux",
      "rtk-query",
    ],
    link: "https://motoshop.uz/",
    repoLink: "https://github.com/IsaqjonovII/motoshop",
  },
  {
    id: id++,
    title: "Twitter",
    info: "Social media platform: tweeting, liking, replying. Easy account creation, secure login.",
    tags: [
      "react",
      "redux-toolkit",
      "rtk-query",
      "express",
      "mongodb",
      "responsive-web-design",
      "typescript",
      "chakra ui",
    ],
    link: "https://uztwit.vercel.app/",
    repoLink: "https://github.com/IsaqjonovII/twitter-client",
  },
  {
    id: id++,
    title: "Certificate generator",
    info: "Tool for certificate creation. Upload, position text, merge PDFs. Professional certificates quickly.",
    tags: ["react", "pdf-lib"],
    link: "",
    repoLink: "",
  },
  {
    id: id++,
    title: "Avtoqulay",
    info: "Winner hackathon. Locate fuel stations, filter prices. Comprehensive marketplace for car-related items.",
    tags: [
      "react",
      "axios",
      "nodejs",
      "express",
      "mongodb",
      "google-places-api",
    ],
    link: "https://avtoqulay.vercel.app/",
    repoLink: "https://avtoqulay.vercel.app/",
  },
  {
    id: id++,
    title: "Hogan",
    info: "Built as a shoe e-commerce clone website, this project harnesses React, Firebase, and Redux Toolkit. React shapes the UI, Firebase handles data and authentication, and Redux Toolkit manages state.",
    tags: ["react", "firebase", "reduxt-toolkit", "vercel"],
    link: "https://hogan-rebel.vercel.app/",
    repoLink: "https://github.com/IsaqjonovII/Hogan",
  },
];

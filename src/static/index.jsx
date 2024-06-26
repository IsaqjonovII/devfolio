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
          I&apos;ve been working as a frontend developer for over 2 years. During
          this time, I&apos;ve had the privilege of contributing to impactful
          projects where I honed my skills in web development.
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
          These days, I&apos;m dedicated to working on my side project,{" "}
          <a
            href="https://motoshop.uz"
            rel="noreferrer noopener"
            target="_blank"
          >
            motoshop.uz
          </a>. It&apos;s a platform where people can buy or sell their bikes.
          Additionally, I&apos;m involved in guiding and inspiring aspiring
          developers in a dynamic learning environment, with a focus on HTML,
          CSS, and JavaScript.
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
          My tech stack includes JavaScript, TypeScript, React.js, Vue 3, Nuxt 3,
          Redux Toolkit, Redux, RTK Query, Git, and CDNs like Cloudinary.
          I also have some experience with backend technologies such as Node.js,
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
  }
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
    title: "Free Images. Pexels",
    info: "Endless free images. Download limitlessly. Simplify visual search, enhance creativity.",
    tags: ["react", "pexels-api", "axios"],
    link: "https://pexels-teal.vercel.app/",
    repoLink: "https://github.com/IsaqjonovII/pexels",
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
id = 0;
export const recentProjects = [
  {
    id: id++,
    key: "bismillah-travel",
    title: "Bismillah-Travel",
    content: "",
    subtitle: "Tour company landing page website",
    link: "https://bismillah-travel.uz/",
    images: [
      "https://res.cloudinary.com/doswy0zdn/image/upload/v1710228375/mtynkjsl3iaogjbenzuj.png",
      "https://res.cloudinary.com/doswy0zdn/image/upload/v1710228374/j8x9m7mfysv2tv6gn53i.png",
    ],
  },
  {
    id: id++,
    key: "itc-nurafshon",
    title: "IT Center Nurafshon",
    content: "",
    subtitle: "Website for Nurafshon branch of IT Center",
    link: "https://itc-nurafshon.uz/",
    images: [
      "https://res.cloudinary.com/doswy0zdn/image/upload/v1710228374/ehaewq9z9iez02mseld2.png",
      "https://res.cloudinary.com/doswy0zdn/image/upload/v1710228374/jgk58rfloduer01yxlwu.png",
    ],
  },
  {
    id: id++,
    key: "itpark-tashkent",
    title: "IT Park Tashkent Region",
    content: "",
    subtitle: "Website for Tashkent Region branch of IT Park",
    link: "https://it-park-tau.vercel.app/",
    images: [
      "https://res.cloudinary.com/doswy0zdn/image/upload/v1710228374/zesg6gtbr5wfho6xno0v.png",
      "https://res.cloudinary.com/doswy0zdn/image/upload/v1710228374/jcjsekbbpmtfbyhvl6pa.png",
    ],
  },
];

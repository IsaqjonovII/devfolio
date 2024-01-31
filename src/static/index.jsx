import { Github, Instagram, Linkedin, X } from "assets";
import c from "pages/Intro/style.module.css";
import { Link } from "react-router-dom";
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
          React, Nodejs and Fastify.
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
          <Link
            to="https://motoshop.uz"
            rel="noreferrer noopener"
            target="_blank"
          >
            motoshop.uz
          </Link>{" "}
          it&apos;s a platform where people can buy or sell their bikes.
          Additionally, I&apos;m involved in guiding and inspiring aspiring
          developers in a dynamic learning environment, with a focus on HTML,
          CSS, and JavaScript.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Passion and Motivation",
    content: (
      <>
        <p className={c.intro__text}>
          I take pleasure in transforming intricate challenges into elegant
          solutions through code. My interest in web development arises from a
          goal to design not only visually appealing websites but also ensure a
          smooth user experience.
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
          and explore other IT domains like AI, Cybersecurity, and Mobile
          development. I am dedicated to staying updated on industry trends and
          consistently improving my skills.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Fun Fact",
    content: (
      <>
        <p className={c.intro__text}>
          Beyond coding, I find joy in the roar of a motorbike and the thrill of
          travel. Join me as I navigate both the digital and physical landscapes
          with equal enthusiasm!
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
    link: "/portfolio",
    repoLink: "/portfolio",
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
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/nvexbvhkndwhvxi70anq",
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/ceaxmfp4lt3ka6boubuh.png",
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/fv4ym4ukzjqbzxrthgf0.png",
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/xmhl5p2ljou7sgvx1trs",
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
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/zvcvcu1zgpv1obixzu3n.png",
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/mm2p90icrjh2opumzqod.png",
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/nz650p3rwxzwlab4jrjh",
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/hjlkjcunofucrb8o0jhk",
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
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/akvshec4rdomn609fovo",
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/audn4quanajrki3pgt9g",
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/zftkgh5jwjx3syqgpjpe",
      "https://res.cloudinary.com/doswy0zdn/image/upload/f_auto,q_auto/x275u79dpqlurmdwfyjx",
    ],
  },
];
export const msgData = {
  greeting: [
    "Hi!",
    "I'm Dev bro. You can me ask questions about Ilhomjon's work.",
    "How may I help you today?",
  ],
  options: [
    {
      key: "helloReply",
      text: "Just saying hello!",
    },
    {
      key: "partnerReply",
      text: "Interested in teaming up",
    },
    {
      key: "hiring",
      text: "Considering you for a job opportunity",
    },
  ],
  helloReply: [
    "Hey there!",
    "Thanks for saying hi",
    "Can i help you with other things?",
  ],
  partnerReply: [
    "Ok, Let's chat further",
    <Link to="mailto:isaqjonoviii@gmail.com?subject=Hi">Send message</Link>,
  ],
  hiring: [
    "Oh nice",
    "Let's discuss it",
    <Link to="mailto:isaqjonoviii@gmail.com?subject=Hi">Send message</Link>,
  ],
};

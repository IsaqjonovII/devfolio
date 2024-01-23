import { Github, Instagram, Linkedin, X } from "assets";
import c from "pages/Intro/style.module.css";
import { Link } from "react-router-dom";
export const framerVariants = {
  closed: {
    transition: {
      staggerChildren: 0.06,
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
  open: { opacity: 1, y: -30 },
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

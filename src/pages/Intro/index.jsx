import { motion } from "framer-motion";
import c from "./style.module.css";
import { Link } from "react-router-dom";
import { framerVariants, itemVariants, socialLinks } from "utils";
import { coder } from "assets";

const Intro = () => {
  return (
    <main className={c.intro}>
      <div className="container">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <h1 className={c.intro__title}>I&apos;m Ilhomjon</h1>
        </motion.section>
        <div className={c.section__wrp + " flex"}>
          <motion.section
            className={c.text__wrp}
            variants={framerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.h2 className={c.section__title} variants={itemVariants}>
              Professional Journey
            </motion.h2>
            <motion.h3 variants={itemVariants} className={c.intro__text}>
              I&apos;ve been working as a frontend developer for over 2 years.
              During this time, I&apos;ve had the privilege of contributing to
              impactful projects where I honed my skills in TypeScript,
              Javascript, React, Nodejs and Fastify.
            </motion.h3>
            <motion.h2 className={c.section__title} variants={itemVariants}>
              Currently
            </motion.h2>
            <motion.h3 variants={itemVariants} className={c.intro__text}>
              These days, I&apos;m dedicated to working on my side project,{" "}
              <a
                href="https://motoshop.uz"
                rel="noreferrer noopener"
                target="_blank"
              >
                motoshop.uz
              </a>{" "}
              it&apos;s a platform where people can buy or sell their bikes.
              Additionally, I&apos;m involved in guiding and inspiring aspiring
              developers in a dynamic learning environment, with a focus on
              HTML, CSS, and JavaScript.
            </motion.h3>
            <motion.h2 className={c.section__title} variants={itemVariants}>
              Passion and Motivation
            </motion.h2>
            <motion.h3 variants={itemVariants} className={c.intro__text}>
              I take pleasure in transforming intricate challenges into elegant
              solutions through code. My interest in web development arises from
              a goal to design not only visually appealing websites but also
              ensure a smooth user experience.
            </motion.h3>
            <motion.h2 className={c.section__title} variants={itemVariants}>
              Future Goals
            </motion.h2>
            <motion.h3 variants={itemVariants} className={c.intro__text}>
              In the future, I aim to enhance my proficiency in frontend
              development and explore other IT domains like AI, Cybersecurity,
              and Mobile development. I am dedicated to staying updated on
              industry trends and consistently improving my skills.
            </motion.h3>
            <motion.h2 className={c.section__title} variants={itemVariants}>
              Fun Fact
            </motion.h2>
            <motion.h3 variants={itemVariants} className={c.intro__text}>
              Beyond coding, I find joy in the roar of a motorbike and the
              thrill of travel. Join me as I navigate both the digital and
              physical landscapes with equal enthusiasm!
            </motion.h3>
            <div className="navigate__link">
              <Link to="/portfolio">
                Explore my portfolio
                <svg
                  fill="currentColor"
                  height="15px"
                  width="25px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enableBackground="new 0 0 512 512"
                  xmlSpace="preserve"
                  transform="rotate(90)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <polygon points="247.5,0 34.2,213.3 34.2,341.3 204.8,170.7 204.8,512 290.2,512 290.2,170.7 460.8,341.3 460.8,213.3 "></polygon>{" "}
                  </g>
                </svg>
              </Link>
            </div>
          </motion.section>
          <motion.section>
            <img className={c.intro__img} src={coder} alt="" />
            <div className={c.social__links}>
              {socialLinks.map(({ key, link, label }) => (
                <Link
                  key={key}
                  to={link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className={c.social__link}> {label} </div>
                </Link>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default Intro;

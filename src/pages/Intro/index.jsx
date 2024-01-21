import { motion } from "framer-motion";
import c from "./style.module.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <main className={c.intro}>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="page__title">It&apos;s about me</h1>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
      >
        <h3 className={c.intro__text}>
          Hey there! Ilhomjon here, living and coding in the vibrant city of
          Tashkent, Uzbekistan. I'm a web developer with a passion for crafting
          user-friendly interfaces that tell a story. Excited to share this
          journey with you—let's create some digital magic together!
        </h3>
        <h3 className={c.intro__text}>
          I've been working as a frontend developer for over 2 years. During
          this time, I've had the privilege of contributing to impactful
          projects where I honed my skills in TypeScript, Javascript, React,
          Nodejs and Fastify.
        </h3>
        <h3 className={c.intro__text}>
          These days, I focus on working on my side project Motoshop.uz where
          people can buy or sell their bikes.
        </h3>
        <h3 className={c.intro__text}>
          I take pleasure in transforming intricate challenges into elegant
          solutions through code. My interest in web development arises from a
          goal to design not only visually appealing websites but also ensure a
          smooth user experience.
        </h3>
        <h3 className={c.intro__text}>
          In the future, I aim to enhance my proficiency in frontend development
          and explore other IT domains like AI, Cybersecurity, and Mobile
          development. I am dedicated to staying updated on industry trends and
          consistently improving my skills.
        </h3>
        <h3 className={c.intro__text}>
          Beyond coding, I find joy in the roar of a motorbike and the thrill of
          travel. Join me as I navigate both the digital and physical landscapes
          with equal enthusiasm!
        </h3>
      </motion.section>

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
    </main>
  );
};

export default Intro;

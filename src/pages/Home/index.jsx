import { motion } from "framer-motion";
import c from "./style.module.css";
import { myResume } from "assets";

const Home = () => {
  return (
    <main className={c.main} id="home">
      <div className="container">
        <motion.h1
          className={c.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.36 }}
        >
          Hi there, I&apos;m <span className={c.subtitle__label}>Ilhomjon</span>{" "}
          Isaqjonov,
        </motion.h1>
        <motion.h1
          className={c.content__title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className={c.title__label}>Frontend Enthusiast</span> <br />{" "}
          dedicated to crafting engaging web applications and websites.
        </motion.h1>
        <motion.p
          className={c.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42 }}
        >
          As a web developer with a passion for creating user-friendly
          interfaces that tell a compelling story, I&apos;m excited to share
          this journey with you
        </motion.p>
        <motion.div
          className="flex"
          style={{ marginTop: 15 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.48 }}
        >
          <a href={myResume} download={true}>
            <button className={c.menu__btn}>Resume / CV</button>
          </a>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;

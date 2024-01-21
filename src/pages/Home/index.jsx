import { motion } from "framer-motion";
import c from "./style.module.css";
import { coder } from "assets";
import CustomBtn from "components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className={c.main}>
      <div className={c.main__content}>
        <motion.h1
          className={c.content__subtitle}
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
          <span className={c.title__label}>Frontend Enthusiast</span> dedicated
          to crafting engaging web applications and websites.
        </motion.h1>
        <motion.p
          className={c.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          As a web developer with a passion for creating user-friendly
          interfaces that tell a compelling story, I'm excited to share this
          journey with you — let's create some digital magic together!
        </motion.p>
        <motion.div
          style={{ marginTop: 15 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.44 }}
        >
          <Link to="mailto:isaqjonoviii@gmail.com?subject=Work together&body=Let's work together!">
            <CustomBtn className="main__btn">Let's work together </CustomBtn>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className={c.main__img}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.46 }}
      >
        <img src={coder} alt="Ilhomjon Dev" />
      </motion.div>
    </main>
  );
};

export default Home;

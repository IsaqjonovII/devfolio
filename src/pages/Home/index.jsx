import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import c from "./style.module.css";
import CustomBtn from "components/Button";

const Home = () => {
  return (
    <main className={c.main}>
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
          style={{ marginTop: 15 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.48 }}
        >
          <Link to="mailto:isaqjonoviii@gmail.com?subject=Work together&body=Let's work together!">
            <CustomBtn className="main__btn">
              Let&apos;s create some digital magic together!
            </CustomBtn>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;

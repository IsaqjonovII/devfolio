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
          Hello, I&apos;m <span className={c.subtitle__label}>Ilhomjon</span>,
        </motion.h1>

        <br />
        <br />

        <motion.h1
          className={c.content__title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className={c.title__label}>Frontend Enthusiast</span> dedicated
          to crafting engaging web applications and websites.
        </motion.h1>

        <motion.div
          style={{ marginTop: 15 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.44 }}
        >
          <Link to="mailto:isaqjonoviii@gmail.com">
            <CustomBtn>Say Hi</CustomBtn>
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

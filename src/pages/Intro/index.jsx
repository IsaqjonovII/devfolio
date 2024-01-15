import { motion } from "framer-motion";
import c from "./style.module.css";
import { me, meMobile } from "assets";
import { about__me } from "static";

const Intro = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={c.intro__main}
    >
      <article className={c.title__wrp}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <motion.code
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08 }}
            className="code"
          >
            {"<"}h1{">"}
          </motion.code>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            exit={{ opacity: 0 }}
            className="page__label"
          >
            {about__me.page_title}
          </motion.h1>
          <motion.code
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08 }}
            className="code"
          >
            {"</"}h1{">"}
          </motion.code>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <motion.code
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="code"
          >
            {"<"}h1{">"}
          </motion.code>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            exit={{ opacity: 0 }}
            className={c.intro__title}
          >
            {about__me.title}
          </motion.h1>
          <motion.code
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="code"
          >
            {"</"}h1{">"}
          </motion.code>
        </div>
      </article>
      <br />
      <br />
      <article
        className={c.article__cl2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <motion.code
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="code"
        >
          {"<"}p{">"}
        </motion.code>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          exit={{ opacity: 0 }}
          className={c.intro__subtitle}
        >
          {about__me.subtitle}
        </motion.p>
        <motion.code
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="code"
        >
          {"</"}p{">"}
        </motion.code>
      </article>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.23 }}
      >
        {/*  <img
          className={c.future__me}
          src={me}
          srcSet="

        "
          alt="Ilhomjon Isaqjonov"
        /> */}
        <img
          className={c.future__me}
          src={me}
          sizes="(max-width: 767px) 100vw, 50vw"
          srcSet={`${meMobile} 767vw, ${me} 1024vw`}
          alt="Ilhomjon Isaqjonov"
        />
      </motion.div>
    </motion.main>
  );
};

export default Intro;

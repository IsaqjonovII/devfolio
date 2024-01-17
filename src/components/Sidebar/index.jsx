import { routes } from "routes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import c from "./style.module.css";
import { myResume } from "assets";

const Sidebar = () => {
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.01,
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
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  return (
    <motion.aside
      className={c.sidebar__wrp}
      initial={{ width: 0 }}
      animate={{
        width: "80%",
        maxWidth: "600px",
        transition: {
          duration: 0.3,
          type: "spring",
        },
      }}
      exit={{
        width: 0,
        transition: { delay: 0.3, type: "just" },
      }}
    >
      <motion.ul
        className={c.sidebar__links}
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
      >
        {routes.map(({ id, path, title }) => (
          <motion.li key={id} variants={itemVariants}>
            <Link className={c.sidebar__link} to={path}>
              {title}
            </Link>
          </motion.li>
        ))}
        <motion.li variants={itemVariants}>
          <a href={myResume} download={true}>
            <button className={c.menu__btn}>Resume / CV</button>
          </a>
        </motion.li>
      </motion.ul>
    </motion.aside>
  );
};
export default Sidebar;

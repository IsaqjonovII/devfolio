import { routes } from "routes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import c from "./style.module.css";
import { myResume } from "assets";
import { framerVariants, itemVariants } from "static/index";

const Sidebar = () => {
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
        variants={framerVariants}
      >
        <motion.li variants={itemVariants}>
          <Link className={c.sidebar__link} to="/">
            Home
          </Link>
        </motion.li>
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

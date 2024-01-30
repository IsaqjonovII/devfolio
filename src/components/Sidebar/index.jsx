import { routes } from "routes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { bool, func } from "prop-types";
import c from "./style.module.css";
import { myResume } from "assets";
import { framerVariants, itemVariants } from "static";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  setIsContacted,
  isContacted,
}) => {
  const handleScroll = (el) => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
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
        variants={framerVariants}
      >
        {routes.map(({ id, key, title, path }) => (
          <motion.li
            key={id}
            variants={itemVariants}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Link
              className={c.sidebar__link}
              to={path}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById(key);
                if (targetElement) {
                  handleScroll(targetElement);
                }
              }}
            >
              {title}
            </Link>
          </motion.li>
        ))}
        <motion.li
          variants={itemVariants}
          className={c.sidebar__link}
          onClick={() => setIsContacted(!isContacted)}
        >
          Contact
        </motion.li>
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
Sidebar.propTypes = {
  isSidebarOpen: bool.isRequired,
  setIsSidebarOpen: func.isRequired,
};

import { routes } from "routes";
import { motion } from "framer-motion";
import { bool, func } from "prop-types";
import c from "./style.module.css";
import { framerVariants, itemVariants } from "static";

const Sidebar = ({isSidebarOpen,setIsSidebarOpen}) => {
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
            <a
              className={c.sidebar__link}
              href={path}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById(key);
                if (targetElement) {
                  handleScroll(targetElement);
                }
              }}
            >
              {title}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  );
};
export default Sidebar;
Sidebar.propTypes = {
  isSidebarOpen: bool.isRequired,
  setIsSidebarOpen: func.isRequired,
};

import { routes } from "routes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import c from "./style.module.css";

const Sidebar = () => {
  return (
    <motion.aside
      className={c.sidebar__wrp}
      initial={{
        opacity: 0,
        width: 0,
        x: 0,
      }}
      animate={{
        opacity: 1,
        width: "100%",
        x: 1,
      }}
      transition={{
        type: "spring",
        duration: 0.5,
      }}
    >
      <ul className={c.sidebar__links}>
        {routes.map(({ id, path, title }) => (
          <motion.li
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: id * 0.15 }}
          >
            <Link className={c.sidebar__link} to={path}>
              {title}
            </Link>
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className={c.menu__btn}>Resume / CV</button>
        </motion.li>
      </ul>
    </motion.aside>
  );
};
export default Sidebar;

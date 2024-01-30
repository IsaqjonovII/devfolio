import { motion } from "framer-motion";
import { bool, func, string } from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { routes } from "routes";
import c from "./style.module.css";
import BarsIcon from "components/BarsIcon";
import { DarkBulb, LightBulb, Logo } from "assets";

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  theme,
  setTheme,
  isContacted,
  setIsContacted,
}) => {
  const handleScroll = (el) => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className={`${c.header} flex`}>
      <Link to="/">
        <motion.div
          className={c.nav__logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Logo className={c.my__logo} />
        </motion.div>
      </Link>
      <nav className="flex">
        <ul className={`${c.nav__menu} flex`}>
          {routes.map(({ id, path, title, key }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: id * 0.1 }}
            >
              <Link
                className={c.menu__link}
                to={path}
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(key);
                  if (targetElement) {
                    handleScroll(targetElement);
                  }
                }}
              >
                <span>{id}. </span> {title}
              </Link>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p
              onClick={() => setIsContacted(!isContacted)}
              className={
                isContacted
                  ? `${c.menu__link} ${c.contact__active}`
                  : c.menu__link
              }
            >
              <span>3. </span> Contact
            </p>
          </motion.li>
        </ul>
        <motion.div
          className={c.theme__switcher}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {theme.includes("light") ? (
            <LightBulb className={c.icon} onClick={() => setTheme("dark")} />
          ) : (
            <DarkBulb className={c.icon} onClick={() => setTheme("light")} />
          )}
        </motion.div>
        <BarsIcon
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  isSidebarOpen: bool.isRequired,
  setIsSidebarOpen: func.isRequired,
  theme: string.isRequired,
  setTheme: func.isRequired,
};
export default Navbar;

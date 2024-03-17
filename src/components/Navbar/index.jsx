import { motion } from "framer-motion";
import { bool, func, string } from "prop-types";
import { routes } from "routes";
import c from "./style.module.css";
import BarsIcon from "components/BarsIcon";
import { DarkBulb, LightBulb, Logo} from "assets";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, theme, setTheme }) => {
  const handleScroll = (el) => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className={`${c.header} flex`}>
      <a href="/">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Logo className={c.my__logo} />
        </motion.div>
      </a>
      <nav className="flex">
        <ul className={`${c.nav__menu} flex`}>
          {routes.map(({ id, path, title, key }, index) => (
            <motion.li
              key={id + index + title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: id * 0.1 }}
            >
              <a
                className={c.menu__link}
                href={path}
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById(key);
                  if (targetElement) {
                    handleScroll(targetElement);
                  }
                }}
              >
                <span>{id}. </span> {title}
              </a>
            </motion.li>
          ))}
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

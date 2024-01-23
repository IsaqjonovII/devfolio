import { motion } from "framer-motion";
import { bool, func, string } from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { routes } from "routes";
import c from "./style.module.css";
import BarsIcon from "components/BarsIcon";
import { DarkBulb, LightBulb } from "assets";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, theme, setTheme }) => {
  return (
    <div className={`${c.header} flex`}>
      <Link to="/">
        <motion.div
          className={c.nav__logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className={c.code}>{"<"}</span>Ilhomjon{" "}
          <span className={c.code}>{" />"}</span>
        </motion.div>
      </Link>
      <nav className="flex">
        <ul className={`${c.nav__menu} flex`}>
          {routes.map(({ id, path, title }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: id * 0.1 }}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${c.menu__link} ${c.active__link}` : c.menu__link
                }
                to={path}
              >
                <span>{id}. </span> {title}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <div className={c.theme__switcher}>
          {theme.includes("light") ? (
            <LightBulb className={c.icon} onClick={() => setTheme("dark")} />
          ) : (
            <DarkBulb className={c.icon} onClick={() => setTheme("light")} />
          )}
        </div>
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

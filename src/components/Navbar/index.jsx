import { bool, func } from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { routes } from "routes";
import { myResume } from "assets";
import c from "./style.module.css";
import BarsIcon from "components/BarsIcon";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
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
      <nav>
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
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <a className={c.menu__btn} href={myResume} download={true}>
              <div>Resume / CV</div>
              <svg
                height="24px"
                width="22px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <style type="text/css"> </style>{" "}
                  <g>
                    {" "}
                    <path d="M230.546,324.601c6.688,6.703,15.969,10.547,25.454,10.547c9.469,0,18.75-3.844,25.453-10.547L398.422,207.64 c14.062-14.054,14.062-36.851,0-50.906c-14.062-14.062-36.859-14.062-50.906,0v-0.007L292,212.242V38.188c0-19.883-16.125-36-36-36 c-19.89,0-36,16.117-36,36v174.046l-55.5-55.5c-14.062-14.062-36.859-14.062-50.906-0.007c-14.062,14.062-14.062,36.859,0,50.914 L230.546,324.601z"></path>{" "}
                    <path d="M473.453,383.148H333.406c-13.36,29.469-42.954,50-77.406,50c-34.454,0-64.047-20.531-77.39-50H38.562 C17.266,383.148,0,400.406,0,421.696v49.562c0,21.297,17.266,38.554,38.562,38.554h434.89c21.297,0,38.547-17.258,38.547-38.554 v-49.562C512,400.406,494.75,383.148,473.453,383.148z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
          </motion.li>
        </ul>
        <BarsIcon
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  isSidebarOpen: bool,
  setIsSidebarOpen: func.isRequired,
};
export default Navbar;

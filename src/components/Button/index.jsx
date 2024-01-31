import { node, string } from "prop-types";
import { ArrowRight } from "assets";
import "./style.css";

const CustomBtn = ({ children, className }) => {
  return (
    <button className={`btn__shine ${className}`}>
      <span>{children}</span>
    </button>
  );
};
export default CustomBtn;

export const NavigateLink = ({ text, link, className }) => {
  const handleScroll = (el) => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <a
      href={link}
      onClick={(e) => {
        e.preventDefault();
        const targetElement = document.getElementById(link);
        if (targetElement) {
          handleScroll(targetElement);
        }
      }}
      className={"link flex " + className}
    >
      {text}
      <div className="arrow__wrp">
        <ArrowRight className="arrow__icon" />
      </div>
    </a>
  );
};

NavigateLink.propTypes = {
  className: string,
  text: string.isRequired,
  link: string.isRequired,
};
CustomBtn.propTypes = {
  children: node || string,
  className: string,
};

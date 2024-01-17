import { node, string } from "prop-types";
import "./style.css";

const CustomBtn = ({ children, className }) => {
  return (
    <button className={`btn__shine ${className}`}>
      <span>{children}</span>
    </button>
  );
};

export default CustomBtn;
CustomBtn.propTypes = {
  children: node || string,
  className: string,
};

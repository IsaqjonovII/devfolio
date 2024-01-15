import { node, string } from "prop-types";
import "./style.css";

const CustomBtn = ({ children }) => {
  return (
    <button className="btn__shine">
      <span>{children}</span>
    </button>
  );
};

export default CustomBtn;
CustomBtn.propTypes = {
  children: node || string,
};

import PropTypes from "prop-types";
import "./style.css";

const BarsIcon = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div
      className={isSidebarOpen ? "btn active" : "btn not-active"}
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
BarsIcon.propTypes = {
  isSidebarOpen: PropTypes.bool,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

export default BarsIcon;

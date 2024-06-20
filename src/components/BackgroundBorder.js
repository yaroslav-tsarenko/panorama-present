import PropTypes from "prop-types";
import "./BackgroundBorder.css";

const BackgroundBorder = ({ className = "", link, prop }) => {
  return (
    <div className={`backgroundborder9 ${className}`}>
      <img className="link-icon8" loading="lazy" alt="" src={link} />
      <div className="link38">
        <div className="off12">
          <p className="p15">{prop}</p>
          <p className="off13">off</p>
        </div>
      </div>
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  prop: PropTypes.string,
};

export default BackgroundBorder;

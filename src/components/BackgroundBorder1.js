import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundBorder1.css";

const BackgroundBorder1 = ({
  className = "",
  link,
  prop,
  propLeft,
  propTop,
}) => {
  const backgroundBorder1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={`backgroundborder11 ${className}`}
      style={backgroundBorder1Style}
    >
      <img className="link-icon11" loading="lazy" alt="" src={link} />
      <div className="link51">
        <div className="off16">
          <p className="p17">{prop}</p>
          <p className="off17">off</p>
        </div>
      </div>
    </div>
  );
};

BackgroundBorder1.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default BackgroundBorder1;

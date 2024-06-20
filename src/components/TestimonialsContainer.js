import PropTypes from "prop-types";
import "./TestimonialsContainer.css";

const TestimonialsContainer = ({
  className = "",
  alastair,
  iRecentlyUsedPanormaPrese,
}) => {
  return (
    <div className={`testimonials-container ${className}`}>
      <div className="usernames-container">
        <div className="alastair">{alastair}</div>
        <div className="icon-parent">
          <img className="icon" loading="lazy" alt="" src="/icon-6.svg" />
          <img className="icon1" loading="lazy" alt="" src="/icon-7.svg" />
          <img className="icon2" alt="" src="/icon-8.svg" />
          <img className="icon3" alt="" src="/icon-9.svg" />
          <img className="icon4" alt="" src="/icon-10.svg" />
        </div>
      </div>
      <div className="i-recently-used">{iRecentlyUsedPanormaPrese}</div>
      <div className="posted-21-hours">Posted 21 hours ago</div>
    </div>
  );
};

TestimonialsContainer.propTypes = {
  className: PropTypes.string,
  alastair: PropTypes.string,
  iRecentlyUsedPanormaPrese: PropTypes.string,
};

export default TestimonialsContainer;

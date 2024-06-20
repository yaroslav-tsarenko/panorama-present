import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PostItems.css";

const PostItems = ({
  className = "",
  photo156934864293846517ef,
  howToCultivateAGrowthMind,
  may202023,
  developingAGrowthMindsetI,
  propWidth,
  propDisplay,
}) => {
  const howToCultivateStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={`post-items1 ${className}`}>
      <img
        className="photo-1569348642938-46517ef6f1-icon3"
        loading="lazy"
        alt=""
        src={photo156934864293846517ef}
      />
      <div className="how-to-cultivate-a-growth-mind-parent">
        <div className="how-to-cultivate" style={howToCultivateStyle}>
          {howToCultivateAGrowthMind}
        </div>
        <div className="may-20-2023">{may202023}</div>
        <div className="developing-a-growth-mindset-is-parent">
          <div className="developing-a-growth">{developingAGrowthMindsetI}</div>
          <div className="read-more-links">
            <button className="link25">
              <a className="read-more3">Read More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PostItems.propTypes = {
  className: PropTypes.string,
  photo156934864293846517ef: PropTypes.string,
  howToCultivateAGrowthMind: PropTypes.string,
  may202023: PropTypes.string,
  developingAGrowthMindsetI: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default PostItems;

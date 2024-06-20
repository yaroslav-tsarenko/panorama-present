import { useMemo } from "react";
import PropTypes from "prop-types";
import "./PostItems1.css";

const PostItems1 = ({
  className = "",
  photo156934864293846517ef,
  theBenefitsOfMindfulnessM,
  inTodaysHecticWorldIncorp,
  propWidth,
  propDisplay,
  postItemsPadding,
  postItemsGap,
}) => {
  const theBenefitsOfStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  const postItemsStyle = useMemo(() => {
    return {
      padding: postItemsPadding,
      gap: postItemsGap,
    };
  }, [postItemsPadding, postItemsGap]);

  return (
    <div className={`post-items ${className}`} style={postItemsStyle}>
      <img
        className="photo-1569348642938-46517ef6f1-icon2"
        loading="lazy"
        alt=""
        src={photo156934864293846517ef}
      />
      <div className="post-titles">
        <div className="the-benefits-of1" style={theBenefitsOfStyle}>
          {theBenefitsOfMindfulnessM}
        </div>
        <div className="may-27-20242">May 27, 2024</div>
        <div className="post-contents">
          <div className="in-todays-hectic1">{inTodaysHecticWorldIncorp}</div>
        </div>
        <div className="link-frame">
          <button className="link24">
            <a className="read-more2">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

PostItems1.propTypes = {
  className: PropTypes.string,
  photo156934864293846517ef: PropTypes.string,
  theBenefitsOfMindfulnessM: PropTypes.string,
  inTodaysHecticWorldIncorp: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  postItemsPadding: PropTypes.any,
  postItemsGap: PropTypes.any,
};

export default PostItems1;

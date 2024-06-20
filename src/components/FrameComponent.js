import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", reviewContentMinWidth }) => {
  const reviewContentStyle = useMemo(() => {
    return {
      minWidth: reviewContentMinWidth,
    };
  }, [reviewContentMinWidth]);

  return (
    <section className={`review-container-wrapper ${className}`}>
      <div className="review-container">
        <div className="review-content" style={reviewContentStyle}>
          <div className="rating">
            <div className="average-rating">
              <h2 className="excellent1">Excellent</h2>
              <div className="rating-stars">
                <img
                  className="icon12"
                  loading="lazy"
                  alt=""
                  src="/icon-1.svg"
                />
                <img
                  className="icon13"
                  loading="lazy"
                  alt=""
                  src="/icon-2.svg"
                />
                <img
                  className="icon14"
                  loading="lazy"
                  alt=""
                  src="/icon-3.svg"
                />
                <img
                  className="icon15"
                  loading="lazy"
                  alt=""
                  src="/icon-4.svg"
                />
                <img className="icon16" alt="" src="/icon-5.svg" />
              </div>
            </div>
            <div className="average-parent">
              <div className="average2">
                <span>4.74</span>
                <span className="span2">{` `}</span>
                <span className="average3">Average</span>
              </div>
              <div className="reviews2">
                <span>1704</span>
                <span className="span3">{` `}</span>
                <span className="reviews3">Reviews</span>
              </div>
            </div>
          </div>
          <div className="user-review">
            <div className="reviewer-info">
              <div className="emily-r"> Emily R.</div>
              <div className="user-stars">
                <img
                  className="icon17"
                  loading="lazy"
                  alt=""
                  src="/icon-6.svg"
                />
                <img
                  className="icon18"
                  loading="lazy"
                  alt=""
                  src="/icon-7.svg"
                />
                <img
                  className="icon19"
                  loading="lazy"
                  alt=""
                  src="/icon-8.svg"
                />
                <img
                  className="icon20"
                  loading="lazy"
                  alt=""
                  src="/icon-9.svg"
                />
                <img className="icon21" alt="" src="/icon-10.svg" />
              </div>
            </div>
            <div className="ive-used-panorma">
              I've used Panorma Presents multiple times now, and I'm always
              impressed with the service. The variety of gift cards available is
              fantastic.
            </div>
            <div className="posted-21-hours1">Posted 21 hours ago</div>
          </div>
        </div>
        <img className="link-icon7" loading="lazy" alt="" src="/link2.svg" />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  reviewContentMinWidth: PropTypes.any,
};

export default FrameComponent;

import TestimonialsContainer from "./TestimonialsContainer";
import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={`homepage-inner ${className}`}>
      <div className="icons-parent">
        <div className="icons">
          <img className="icon5" loading="lazy" alt="" src="/icon.svg" />
        </div>
        <div className="link-parent">
          <div className="link1">
            <div className="link-inner-container">
              <div className="review-heading-container">
                <h2 className="excellent">Excellent</h2>
                <div className="stars">
                  <img
                    className="icon6"
                    loading="lazy"
                    alt=""
                    src="/icon-1.svg"
                  />
                  <img
                    className="icon7"
                    loading="lazy"
                    alt=""
                    src="/icon-2.svg"
                  />
                  <img
                    className="icon8"
                    loading="lazy"
                    alt=""
                    src="/icon-3.svg"
                  />
                  <img
                    className="icon9"
                    loading="lazy"
                    alt=""
                    src="/icon-4.svg"
                  />
                  <img className="icon10" alt="" src="/icon-5.svg" />
                </div>
              </div>
              <div className="average-reviews-container">
                <div className="average">
                  <span>4.74</span>
                  <span className="span">{` `}</span>
                  <span className="average1">Average</span>
                </div>
                <div className="reviews">
                  <span>1704</span>
                  <span className="span1">{` `}</span>
                  <span className="reviews1">Reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <TestimonialsContainer
              alastair="Alastair"
              iRecentlyUsedPanormaPrese="I recently used Panorma Presents to buy a gift card for a friend’s birthday. The selection was amazing, and I found exactly what I needed in just a few minutes. "
            />
            <TestimonialsContainer
              alastair=" Sarah L."
              iRecentlyUsedPanormaPrese="Panorma Presents has become my go-to website for all gift card purchases. They offer a wide range of options from top brands, making it easy to find the perfect gift for any occasion. "
            />
            <TestimonialsContainer
              alastair=" Emily R."
              iRecentlyUsedPanormaPrese="I've used Panorma Presents multiple times now, and I'm always impressed with the service. The variety of gift cards available is fantastic."
            />
          </div>
        </div>
        <div className="icons1">
          <img className="icon11" loading="lazy" alt="" src="/icon-21.svg" />
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;

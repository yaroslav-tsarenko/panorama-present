import PropTypes from "prop-types";
import "./BlogPostCards.css";

const BlogPostCards = ({
  className = "",
  photo156934864293846517ef,
  theBenefitsOfMindfulnessM,
  may272024,
  inTodaysHecticWorldIncorp,
}) => {
  return (
    <div className={`blog-post-cards ${className}`}>
      <img
        className="photo-1569348642938-46517ef6f1-icon"
        loading="lazy"
        alt=""
        src={photo156934864293846517ef}
      />
      <div className="blog-post-content">
        <div className="the-benefits-of">{theBenefitsOfMindfulnessM}</div>
        <div className="may-27-2024">{may272024}</div>
        <div className="blog-post-descriptions">
          <div className="in-todays-hectic">{inTodaysHecticWorldIncorp}</div>
          <div className="read-more-buttons">
            <button className="link9">
              <a className="read-more">Read More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogPostCards.propTypes = {
  className: PropTypes.string,
  photo156934864293846517ef: PropTypes.string,
  theBenefitsOfMindfulnessM: PropTypes.string,
  may272024: PropTypes.string,
  inTodaysHecticWorldIncorp: PropTypes.string,
};

export default BlogPostCards;

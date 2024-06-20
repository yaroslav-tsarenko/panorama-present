import BackgroundBorder from "./BackgroundBorder";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`popular-heading-parent ${className}`}>
      <div className="popular-heading">
        <h1 className="heading-34">Most popular and available</h1>
      </div>
      <div className="popular-cards1">
        <div className="card-container">
          <img
            className="amazon-e15951d9d13665bc30943b4-icon2"
            loading="lazy"
            alt=""
            src="/amazone15951d9d13665bc30943b40235f6a68889d20bedd7dafb7a584918c60edf7e8png1@2x.png"
          />
        </div>
        <div className="backgroundborder10">
          <img
            className="link-icon9"
            loading="lazy"
            alt=""
            src="/link3@2x.png"
          />
          <div className="link39">
            <a
              className="off14"
              href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-2094"
              target="_blank"
            >
              <p className="p16">10%</p>
              <p className="off15">off</p>
            </a>
          </div>
        </div>
        <BackgroundBorder link="/link-12@2x.png" prop="10%" />
        <BackgroundBorder link="/link-21@2x.png" prop="5%" />
        <BackgroundBorder link="/link-31@2x.png" prop="10%" />
        <BackgroundBorder link="/link-41@2x.png" prop="5%" />
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;

import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`popular-cards-wrapper ${className}`}>
      <div className="popular-cards">
        <div className="popular-cards-title">
          <h1 className="heading-3">Most popular and available</h1>
        </div>
        <div className="popular-card-links">
          <div className="popular-card-image">
            <img
              className="amazon-e15951d9d13665bc30943b4-icon"
              loading="lazy"
              alt=""
              src="/amazone15951d9d13665bc30943b40235f6a68889d20bedd7dafb7a584918c60edf7e8png@2x.png"
            />
          </div>
          <div className="backgroundborder1">
            <img
              className="link-icon"
              loading="lazy"
              alt=""
              src="/link@2x.png"
            />
            <div className="link2">
              <a
                className="off"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-2094"
                target="_blank"
              >
                <p className="p2">10%</p>
                <p className="off1">off</p>
              </a>
            </div>
          </div>
          <div className="backgroundborder2">
            <img
              className="link-icon1"
              loading="lazy"
              alt=""
              src="/link-1@2x.png"
            />
            <div className="link3">
              <div className="off2">
                <p className="p3">10%</p>
                <p className="off3">off</p>
              </div>
            </div>
          </div>
          <div className="backgroundborder3">
            <img
              className="link-icon2"
              loading="lazy"
              alt=""
              src="/link-2@2x.png"
            />
            <div className="link4">
              <div className="off4">
                <p className="p4">5%</p>
                <p className="off5">off</p>
              </div>
            </div>
          </div>
          <div className="backgroundborder4">
            <img
              className="link-icon3"
              loading="lazy"
              alt=""
              src="/link-3@2x.png"
            />
            <div className="link5">
              <div className="off6">
                <p className="p5">10%</p>
                <p className="off7">off</p>
              </div>
            </div>
          </div>
          <div className="backgroundborder5">
            <img
              className="link-icon4"
              loading="lazy"
              alt=""
              src="/link-4@2x.png"
            />
            <div className="link6">
              <div className="off8">
                <p className="p6">5%</p>
                <p className="off9">off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;

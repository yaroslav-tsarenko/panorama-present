import BackgroundBorder from "./BackgroundBorder";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`available-cards-parent ${className}`}>
      <div className="available-cards">
        <h1 className="heading-32">Our Biggest Discounts</h1>
      </div>
      <div className="available-card-links">
        <div className="backgroundborder8">
          <div className="link11">
            <img
              className="argos-3bf72761680c36a56e5670b6-icon"
              loading="lazy"
              alt=""
              src="/argos3bf72761680c36a56e5670b698144ba24b36d6f2d29fd7bb8c82ab6401166b95jpg@2x.png"
            />
            <div className="uber-eats-logosvg" />
            <div className="link12">
              <a
                className="off10"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-2094"
                target="_blank"
              >
                <p className="p7">10%</p>
                <p className="off11">off</p>
              </a>
            </div>
          </div>
        </div>
        <BackgroundBorder link="/link-5@2x.png" prop="10%" />
        <BackgroundBorder link="/link-6@2x.png" prop="5%" />
        <BackgroundBorder link="/link-7@2x.png" prop="10%" />
        <BackgroundBorder link="/link-8@2x.png" prop="5%" />
        <div className="available-card-image">
          <img
            className="amazon-e15951d9d13665bc30943b4-icon1"
            loading="lazy"
            alt=""
            src="/amazone15951d9d13665bc30943b40235f6a68889d20bedd7dafb7a584918c60edf7e8png-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;

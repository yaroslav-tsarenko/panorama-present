import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({
  className = "",
  link,
  propHeight,
  propTextDecoration,
  propTextDecoration1,
}) => {
  const containerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const aboutUsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const privacyPolicyStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  return (
    <footer className={`footer2 ${className}`}>
      <div className="footer3">
        <div className="footer-columns1">
          <div className="column-container">
            <div className="column-items">
              <div className="contact-column">
                <div className="column-titles">
                  <div className="heading-42">Contact us</div>
                  <a className="heading-43">Follow us</a>
                </div>
                <div className="contact-details">
                  <div className="list1">
                    <div className="item3">
                      <div className="chat1">{`Chat: `}</div>
                      <div className="contact-links">
                        <div className="link26">
                          <div className="live-chat1">live chat</div>
                        </div>
                      </div>
                    </div>
                    <div className="item4">
                      <div className="email1">{`Email: `}</div>
                      <div className="frame-div">
                        <div className="link27">
                          <div className="infopanoromapresentscom1">
                            info@panoromapresents.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item5">
                      <div className="tel1">{`Tel: `}</div>
                      <div className="link-wrapper1">
                        <div className="link28">
                          <div className="div2">01392 580 988</div>
                        </div>
                      </div>
                    </div>
                    <div className="item-registered1">
                      Registered address is shown below
                    </div>
                  </div>
                  <div className="social-icons">
                    <div className="link29">
                      <div className="background9">
                        <div className="symbol13"></div>
                      </div>
                    </div>
                    <div className="link30">
                      <div className="background10">
                        <div className="symbol14"></div>
                      </div>
                    </div>
                    <div className="link31">
                      <div className="background11">
                        <div className="symbol15"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-column">
              <div className="container8" style={containerStyle}>
                <div className="heading-4-link1">
                  <a className="about-us1" style={aboutUsStyle}>
                    About Us
                  </a>
                </div>
                <div className="list-item-parent">
                  <div className="list-item1">
                    <div className="cardyard-is-an-container1">
                      <p className="cardyard-is-an1">
                        Cardyard is an online E-commerce platform that allows
                      </p>
                      <p className="people-to-release1">
                        people to release the value in their gift cards. It does
                      </p>
                      <p className="this-by-converting1">
                        this by converting them into cash or gift cards and
                        sells
                      </p>
                      <p className="gift-cards-at1">
                        gift cards at discount prices.
                      </p>
                    </div>
                  </div>
                  <div className="footer-links">
                    <div className="link32">
                      <div className="people1">People</div>
                    </div>
                    <div className="link-wrapper2">
                      <div className="link33">
                        <div className="news1">News</div>
                      </div>
                    </div>
                    <div className="link34">
                      <div className="press1">Press</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="empty-link">
                <img className="link-icon6" loading="lazy" alt="" src={link} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator1">
          <div className="separator1" />
        </div>
        <div className="container9">
          <div className="panoromapresents-ltd1">{`2024 ©Panoromapresents Ltd `}</div>
          <div className="link35">
            <div className="group-div">
              <div className="link36">
                <div className="terms-and-conditions1">
                  Terms And Conditions
                </div>
              </div>
              <div className="including1">{` including `}</div>
              <div className="terms-items">
                <a className="privacy-policy1" style={privacyPolicyStyle}>
                  privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,
};

export default Footer;

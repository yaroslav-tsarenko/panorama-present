import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({
  className = "",
  link,
  propTextDecoration,
  propTextDecoration1,
  propTextDecoration2,
}) => {
  const heading4Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const aboutUs1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  const privacyPolicy1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration2,
    };
  }, [propTextDecoration2]);

  return (
    <footer className={`footer4 ${className}`}>
      <div className="footer5">
        <div className="columns-wrapper">
          <div className="columns">
            <div className="first-column">
              <div className="contact-info1">
                <div className="headings">
                  <div className="heading-44" style={heading4Style}>
                    Contact us
                  </div>
                  <a className="heading-45">Follow us</a>
                </div>
                <div className="contact-details1">
                  <div className="list2">
                    <div className="item6">
                      <div className="chat2">{`Chat: `}</div>
                      <div className="link-container1">
                        <div className="link40">
                          <div className="live-chat2">live chat</div>
                        </div>
                      </div>
                    </div>
                    <div className="item7">
                      <div className="email2">{`Email: `}</div>
                      <div className="link-wrapper3">
                        <div className="link41">
                          <div className="infopanoromapresentscom2">
                            info@panoromapresents.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item8">
                      <div className="tel2">{`Tel: `}</div>
                      <div className="link-wrapper4">
                        <div className="link42">
                          <div className="div3">01392 580 988</div>
                        </div>
                      </div>
                    </div>
                    <div className="item-registered2">
                      Registered address is shown below
                    </div>
                  </div>
                  <div className="social">
                    <div className="link43">
                      <div className="background15">
                        <div className="symbol21"></div>
                      </div>
                    </div>
                    <div className="link44">
                      <div className="background16">
                        <div className="symbol22"></div>
                      </div>
                    </div>
                    <div className="link45">
                      <div className="background17">
                        <div className="symbol23"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-group">
              <div className="container12">
                <div className="heading-4-link2">
                  <div className="about-us2" style={aboutUs1Style}>
                    About Us
                  </div>
                </div>
                <div className="about-description1">
                  <div className="list-item2">
                    <div className="cardyard-is-an-container2">
                      <p className="cardyard-is-an2">
                        Cardyard is an online E-commerce platform that allows
                      </p>
                      <p className="people-to-release2">
                        people to release the value in their gift cards. It does
                      </p>
                      <p className="this-by-converting2">
                        this by converting them into cash or gift cards and
                        sells
                      </p>
                      <p className="gift-cards-at2">
                        gift cards at discount prices.
                      </p>
                    </div>
                  </div>
                  <div className="company-info-links">
                    <div className="link46">
                      <div className="people2">People</div>
                    </div>
                    <div className="info-links1">
                      <div className="link47">
                        <div className="news2">News</div>
                      </div>
                    </div>
                    <div className="link48">
                      <div className="press2">Press</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="empty-link-container">
                <img className="link-icon10" loading="lazy" alt="" src={link} />
              </div>
            </div>
          </div>
        </div>
        <div className="separator-container">
          <div className="separator2" />
        </div>
        <div className="container13">
          <div className="panoromapresents-ltd2">{`2024 ©Panoromapresents Ltd `}</div>
          <div className="link49">
            <div className="link-parent1">
              <div className="link50">
                <div className="terms-and-conditions2">
                  Terms And Conditions
                </div>
              </div>
              <div className="including2">{` including `}</div>
              <div className="privacy-policy-wrapper">
                <div className="privacy-policy2" style={privacyPolicy1Style}>
                  privacy policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propTextDecoration1: PropTypes.any,
  propTextDecoration2: PropTypes.any,
};

export default Footer1;

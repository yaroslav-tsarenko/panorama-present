import PropTypes from "prop-types";
import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer1">
        <div className="footer-columns-wrapper">
          <div className="footer-columns">
            <div className="footer-column-one">
              <div className="footer-contact">
                <div className="contact-header">
                  <div className="heading-4">Contact us</div>
                  <a className="heading-41">Follow us</a>
                </div>
                <div className="contact-info">
                  <div className="list">
                    <div className="item">
                      <div className="chat">{`Chat: `}</div>
                      <div className="contact-link">
                        <div className="link13">
                          <div className="live-chat">live chat</div>
                        </div>
                      </div>
                    </div>
                    <div className="item1">
                      <div className="email">{`Email: `}</div>
                      <div className="link-wrapper">
                        <div className="link14">
                          <div className="infopanoromapresentscom">
                            info@panoromapresents.com
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item2">
                      <div className="tel">{`Tel: `}</div>
                      <div className="link-container">
                        <div className="link15">
                          <div className="div1">01392 580 988</div>
                        </div>
                      </div>
                    </div>
                    <div className="item-registered">
                      Registered address is shown below
                    </div>
                  </div>
                  <div className="social-links">
                    <div className="link16">
                      <div className="background5">
                        <div className="symbol10"></div>
                      </div>
                    </div>
                    <div className="link17">
                      <div className="background6">
                        <div className="symbol11"></div>
                      </div>
                    </div>
                    <div className="link18">
                      <div className="background7">
                        <div className="symbol12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-parent">
              <div className="container6">
                <div className="heading-4-link">
                  <a className="about-us">About Us</a>
                </div>
                <div className="about-description">
                  <div className="list-item">
                    <div className="cardyard-is-an-container">
                      <p className="cardyard-is-an">
                        Cardyard is an online E-commerce platform that allows
                      </p>
                      <p className="people-to-release">
                        people to release the value in their gift cards. It does
                      </p>
                      <p className="this-by-converting">
                        this by converting them into cash or gift cards and
                        sells
                      </p>
                      <p className="gift-cards-at">
                        gift cards at discount prices.
                      </p>
                    </div>
                  </div>
                  <div className="info-links">
                    <div className="link19">
                      <div className="people">People</div>
                    </div>
                    <div className="info-link">
                      <div className="link20">
                        <div className="news">News</div>
                      </div>
                    </div>
                    <div className="link21">
                      <div className="press">Press</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="view-all-link">
                <img
                  className="link-icon5"
                  loading="lazy"
                  alt=""
                  src="/link-9@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator">
          <div className="separator" />
        </div>
        <div className="container7">
          <div className="panoromapresents-ltd">{`2024 ©Panoromapresents Ltd `}</div>
          <div className="link22">
            <div className="link-group">
              <div className="link23">
                <div className="terms-and-conditions">Terms And Conditions</div>
              </div>
              <div className="including">{` including `}</div>
              <div className="legal-item">
                <a className="privacy-policy">privacy policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;

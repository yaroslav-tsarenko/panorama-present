import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header3 ${className}`}>
      <div className="header-navigation3">
        <div className="frame-container">
          <div className="logo-group">
            <div className="logo6">
              <div className="logo7">
                <div className="vector-container">
                  <img
                    className="vector-icon2"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="panaroma-presents3">
                    <span className="p9">P</span>
                    <span className="anaroma-presents3">anaroma Presents</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-menu">
              <a
                className="home3"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-2"
                target="_blank"
              >
                Home
              </a>
              <a
                className="buy-gift-cards5"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-1126"
                target="_blank"
              >
                Buy gift cards
              </a>
              <div className="sell-gift-cards4">Sell gift cards</div>
              <div className="how-it-works3">How it works</div>
            </div>
          </div>
          <div className="login-join-frame">
            <div className="login-join2">
              <a
                className="login3"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-1794"
                target="_blank"
              >
                Login
              </a>
              <div className="join3">Join</div>
              <div className="basket-group">
                <div className="basket3">{`Basket `}</div>
                <div className="background12">
                  <a className="a1">0</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;

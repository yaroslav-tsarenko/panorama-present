import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="header-navigation1">
        <div className="nav-container">
          <div className="nav-inner-container">
            <div className="logo2">
              <div className="logo3">
                <div className="vector-group">
                  <img
                    className="vector-icon1"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="panaroma-presents1">
                    <span className="p1">P</span>
                    <span className="anaroma-presents1">anaroma Presents</span>
                  </div>
                </div>
              </div>
            </div>
            <nav className="home-links">
              <a
                className="home1"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-2"
                target="_blank"
              >
                Home
              </a>
              <a
                className="buy-gift-cards1"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-1126"
                target="_blank"
              >
                Buy gift cards
              </a>
              <div className="sell-gift-cards1">Sell gift cards</div>
              <div className="how-it-works1">How it works</div>
            </nav>
          </div>
          <div className="login-join-container">
            <div className="login-join1">
              <a
                className="login1"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-1794"
                target="_blank"
              >
                Login
              </a>
              <div className="join1">Join</div>
              <div className="basket-container">
                <div className="basket1">{`Basket `}</div>
                <div className="background1">
                  <a className="a">0</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;

import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <div className="header-navigation2">
        <div className="nav-container1">
          <div className="nav-content">
            <div className="logo4">
              <div className="logo5">
                <div className="presents-logo-parent">
                  <img
                    className="presents-logo-icon"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="panaroma-presents2">
                    <span className="p8">P</span>
                    <span className="anaroma-presents2">anaroma Presents</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-actions">
              <a
                className="home2"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-2"
                target="_blank"
              >
                Home
              </a>
              <a
                className="buy-gift-cards4"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-1126"
                target="_blank"
              >
                Buy gift cards
              </a>
              <div className="sell-gift-cards3">Sell gift cards</div>
              <div className="how-it-works2">How it works</div>
            </div>
          </div>
          <div className="auth-buttons-wrapper">
            <div className="auth-buttons">
              <a
                className="login2"
                href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-1794"
                target="_blank"
              >
                Login
              </a>
              <div className="join2">Join</div>
              <div className="cart-icon">
                <div className="basket2">{`Basket `}</div>
                <div className="background8">
                  <a className="placeholder">0</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

import PropTypes from "prop-types";
import "./Cookies.css";

const Cookies = ({
  className = "",
  howWeUseCookies,
  essentialCookies,
  essentialCookiesAreNecess,
  performanceAndAnalyticsCo,
  performanceAndAnalyticsCo1,
  functionalityCookies,
  functionalityCookiesAllow,
  advertisingAndTargetingCo,
  advertisingAndTargetingCo1,
}) => {
  return (
    <div className={`cookies ${className}`}>
      <h1 className="how-we-use-container">
        <ol className="how-we-use-cookies">
          <li>{howWeUseCookies}</li>
        </ol>
      </h1>
      <div className="cookie-types">
        <div className="essential-cookies-parent">
          <h3 className="essential-cookies">{essentialCookies}</h3>
          <div className="essential-cookies-are">
            {essentialCookiesAreNecess}
          </div>
        </div>
        <div className="performance-and-analytics-cook-parent">
          <h3 className="performance-and-analytics">
            {performanceAndAnalyticsCo}
          </h3>
          <div className="performance-and-analytics1">
            {performanceAndAnalyticsCo1}
          </div>
        </div>
        <div className="functionality-cookies-parent">
          <h3 className="functionality-cookies">{functionalityCookies}</h3>
          <div className="functionality-cookies-allow">
            {functionalityCookiesAllow}
          </div>
        </div>
        <div className="advertising-and-targeting-cook-parent">
          <h3 className="advertising-and-targeting">
            {advertisingAndTargetingCo}
          </h3>
          <div className="advertising-and-targeting1">
            {advertisingAndTargetingCo1}
          </div>
        </div>
      </div>
    </div>
  );
};

Cookies.propTypes = {
  className: PropTypes.string,
  howWeUseCookies: PropTypes.string,
  essentialCookies: PropTypes.string,
  essentialCookiesAreNecess: PropTypes.string,
  performanceAndAnalyticsCo: PropTypes.string,
  performanceAndAnalyticsCo1: PropTypes.string,
  functionalityCookies: PropTypes.string,
  functionalityCookiesAllow: PropTypes.string,
  advertisingAndTargetingCo: PropTypes.string,
  advertisingAndTargetingCo1: PropTypes.string,
};

export default Cookies;

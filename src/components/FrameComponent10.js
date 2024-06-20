import PropTypes from "prop-types";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section className={`frame-group ${className}`}>
      <div className="heading-container-parent">
        <div className="heading-container">
          <h1 className="heading-24">Find the Perfect Gift for Any Occasion</h1>
        </div>
        <div className="cards-parent">
          <div className="cards">
            <div className="sell-gift-cards2">Sell Gift Cards</div>
          </div>
          <button className="cards1">
            <div className="buy-gift-cards2">Buy Gift Cards</div>
          </button>
        </div>
      </div>
      <img
        className="beautiful-gift-voucher-with-ha-icon"
        loading="lazy"
        alt=""
        src="/beautifulgiftvoucherwithhand-1@2x.png"
      />
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;

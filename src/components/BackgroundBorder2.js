import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundBorder2.css";

const BackgroundBorder2 = ({
  className = "",
  heading1BuyGiftCardsAtDis,
  buyGiftCardsAtDiscountDes,
  propBackgroundColor,
  propWidth,
  propAlignSelf,
  propAlignSelf1,
  propWidth1,
  propDisplay,
}) => {
  const backgroundBorderStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const discountCardTitlesStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const heading1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const buyGiftCardsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
      display: propDisplay,
    };
  }, [propAlignSelf1, propWidth1, propDisplay]);

  return (
    <div
      className={`backgroundborder6 ${className}`}
      style={backgroundBorderStyle}
    >
      <div className="discount-card-symbol">
        <h1 className="symbol5"></h1>
      </div>
      <div className="discount-card-header">
        <div className="discount-card-titles" style={discountCardTitlesStyle}>
          <h2 className="heading-11" style={heading1Style}>
            {heading1BuyGiftCardsAtDis}
          </h2>
          <div className="buy-gift-cards3" style={buyGiftCardsStyle}>
            {buyGiftCardsAtDiscountDes}
          </div>
        </div>
      </div>
      <div className="discount-card-actions">
        <button className="link7">
          <div className="buy-now">Buy Now</div>
        </button>
        <button className="link8">
          <div className="see-how-it">See How It Works</div>
        </button>
      </div>
    </div>
  );
};

BackgroundBorder2.propTypes = {
  className: PropTypes.string,
  heading1BuyGiftCardsAtDis: PropTypes.string,
  buyGiftCardsAtDiscountDes: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default BackgroundBorder2;

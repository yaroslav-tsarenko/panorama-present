import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  argos5EGiftCard,
  prop,
  propRowGap,
  propGap,
  propPadding,
  propMinWidth,
  propWidth,
  propPadding1,
  propPadding2,
}) => {
  const productCardStyle = useMemo(() => {
    return {
      rowGap: propRowGap,
      gap: propGap,
    };
  }, [propRowGap, propGap]);

  const dataStyle = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propPadding, propMinWidth]);

  const argos5EGiftStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const data1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const data2Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={`product-card ${className}`} style={productCardStyle}>
      <div className="data" style={dataStyle}>
        <div className="argos-5-egift" style={argos5EGiftStyle}>
          {argos5EGiftCard}
        </div>
      </div>
      <div className="data1" style={data1Style}>
        <i className="emphasis-e">e</i>
      </div>
      <div className="data2">
        <div className="save-6-off-container">
          <p className="p10">{prop}</p>
          <p className="save-6-off">save 6% off</p>
        </div>
      </div>
      <div className="data3" style={data2Style}>
        <div className="frame-parent1">
          <div className="quantity-wrapper">
            <div className="quantity">Quantity</div>
          </div>
          <div className="options1">
            <div>
              <div className="options-empty">1</div>
              <div className="backgroundshadow-wrapper">
                <div className="backgroundshadow3">
                  <div className="border4" />
                  <div className="border5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button2">
          <div className="background13">
            <div className="symbol18"></div>
          </div>
          <div className="add-to-basket-wrapper">
            <div className="add-to-basket">Add to basket</div>
          </div>
        </div>
        <i className="small-available">Available: 29</i>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  argos5EGiftCard: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propRowGap: PropTypes.any,
  propGap: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propPadding2: PropTypes.any,
};

export default FrameComponent2;

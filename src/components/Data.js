import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Data.css";

const Data = ({ className = "", propAlignSelf, propPadding, propFlex }) => {
  const data3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propAlignSelf, propPadding, propFlex]);

  return (
    <div className={`data4 ${className}`} style={data3Style}>
      <div className="options-data">
        <div className="option-item">
          <div className="quantity1">Quantity</div>
        </div>
        <div className="options2">
          <div>
            <div className="empty-option">1</div>
            <div className="option-style">
              <div className="backgroundshadow4">
                <div className="border6" />
                <div className="border7" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button3">
        <div className="background14">
          <div className="symbol19"></div>
        </div>
        <div className="basket-label">
          <div className="add-to-basket1">Add to basket</div>
        </div>
      </div>
      <i className="small-available1">Available: 29</i>
    </div>
  );
};

Data.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Data;

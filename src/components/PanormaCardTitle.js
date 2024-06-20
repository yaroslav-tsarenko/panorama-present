import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import CardQuantity from "./CardQuantity";
import PropTypes from "prop-types";
import "./PanormaCardTitle.css";

const PanormaCardTitle = ({ className = "" }) => {
  return (
    <div className={`panorma-card-title ${className}`}>
      <div className="cart-item-structure">
        <div className="item-details">
          <div className="header1">
            <div className="header-child" />
            <div className="details-columns">
              <div className="product">Product</div>
            </div>
            <div className="details-columns1">
              <div className="price">Price</div>
            </div>
            <div className="quantity">Quantity</div>
            <div className="total">Total</div>
          </div>
          <div className="company-links">
            <img
              className="cards-icon1"
              loading="lazy"
              alt=""
              src="/cards@2x.png"
            />
            <div className="gift-card-details">
              <div className="panorma-presents-gift1">
                {" "}
                Panorma Presents Gift Card
              </div>
            </div>
            <div className="gift-card-image">
              <div className="policy-navigation">$120.00</div>
            </div>
            <div className="social-links">
              <div className="socials-title">
                <div className="control-buttons">
                  <img
                    className="icon-plus1"
                    loading="lazy"
                    alt=""
                    src="/iconplus.svg"
                  />
                </div>
                <div className="facebook-link">1</div>
                <input className="control-buttons1" type="checkbox" />
              </div>
              <FormControl
                className="app-download"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#8856f5",
                  borderRadius: "8px",
                  width: "50.73170731707317%",
                  height: "38px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "38px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "38px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "38px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "38px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "Regular",
                    fontFamily: "PT Sans",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "16px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="16px"
                      height="16px"
                      src="/frame-1000002972.svg"
                      style={{ marginRight: "16px" }}
                    />
                  )}
                >
                  <MenuItem>Hourly</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="copyright">$10.11</div>
          </div>
        </div>
        <CardQuantity
          panormaPresentsGiftCard=" Panorma Presents Gift Card"
          divider="$200.00"
        />
        <CardQuantity
          panormaPresentsGiftCard="Panorma Presents Gift Card"
          divider="$120.00"
        />
        <div className="country-links">
          <div className="country-selection" />
          <Button
            className="button"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#8856f5",
              borderRadius: "4px",
              "&:hover": { background: "#8856f5" },
              width: 200,
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
      <div className="checkout-details">
        <div className="header-wrapper">
          <div className="header2">
            <div className="checkout-details1">Checkout Details</div>
          </div>
        </div>
        <div className="subtotal-values-wrapper">
          <div className="subtotal-values">
            <div className="cart-subtotal">Cart Subtotal</div>
            <div className="grand-total-label">$360.00</div>
          </div>
        </div>
        <div className="tax-details-wrapper">
          <div className="tax-details">
            <div className="tax-types">
              <div className="shipping-handling">{`Shipping & Handling`}</div>
              <div className="other-taxes">Other Taxes</div>
            </div>
            <div className="other-tax-labels">
              <div className="div">$0.00</div>
              <div className="div1">$0.00</div>
            </div>
          </div>
        </div>
        <div className="company-info-wrapper">
          <div className="company-info" />
        </div>
        <div className="checkout-details-inner">
          <div className="grand-total-parent">
            <div className="grand-total">Grand Total</div>
            <div className="div2">$360.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

PanormaCardTitle.propTypes = {
  className: PropTypes.string,
};

export default PanormaCardTitle;

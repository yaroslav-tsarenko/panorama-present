import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`video-container-wrapper ${className}`}>
      <div className="video-container">
        <div className="video-inner-container">
          <div className="button">
            <img
              className="main-movie-ceb1e5597a389fe824e-icon"
              loading="lazy"
              alt=""
              src="/mainmovieceb1e5597a389fe824e49f37e57996d9d46d589cc51f574b2a994e1d61b8fad8jpg@2x.png"
            />
            <div className="paragraphbackground">
              <div className="symbol-container">
                <div className="inner-symbol-container">
                  <div className="symbol"></div>
                </div>
                <div className="div">01:51</div>
              </div>
              <h2 className="watch-an-explanation">
                Watch an explanation of Cardyard on YouTube
              </h2>
            </div>
            <div className="background2">
              <h3 className="symbol1"></h3>
            </div>
          </div>
        </div>
        <div className="backgroundborder">
          <div className="small1" />
          <div className="price-heading-container">
            <div className="get-a-quick">
              Get a quick price for your unwanted gift card...
            </div>
            <div className="pound-sign-container">
              <img
                className="uk-pound-cd2838ebff874df44a717-icon"
                loading="lazy"
                alt=""
                src="/ukpoundcd2838ebff874df44a717b97b19e8e5f9b422ee8aa0f0212ebfa4b34566b5343png@2x.png"
              />
            </div>
          </div>
          <div className="backgroundbordershadow-parent">
            <div className="backgroundbordershadow">
              <div className="shop-name">Shop name</div>
              <div className="shop-or-card">
                Shop or card type not recognised?
              </div>
              <div className="input">
                <div className="container">
                  <div className="type-in-a">Type in a shop...</div>
                  <div className="shop-input-border-container">
                    <div className="border1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="value-input-container-parent">
              <div className="value-input-container">
                <div className="value-labels">
                  <div className="current-value-parent">
                    <div className="current-value">Current value</div>
                    <div className="value-symbols-container">
                      <div className="symbol2"></div>
                    </div>
                  </div>
                  <div className="cash-parent">
                    <div className="cash">Cash</div>
                    <div className="symbol-wrapper">
                      <div className="symbol3"></div>
                    </div>
                  </div>
                </div>
                <div className="current-input-container">
                  <div className="container1">
                    <div className="input1">
                      <TextField
                        className="verticalborder"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "#9b9b9b" },
                          "& .MuiInputBase-root": {
                            height: "29px",
                            borderRadius: "0px 0px 0px 0px",
                          },
                          width: "33px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="input2" />
                </div>
              </div>
              <div className="credit-input-container-parent">
                <div className="credit-input-container">
                  <div className="credit">Credit</div>
                  <div className="credit-symbol-container">
                    <div className="symbol4"></div>
                  </div>
                </div>
                <TextField
                  className="input3"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#9b9b9b" },
                    "& .MuiInputBase-root": {
                      height: "39px",
                      backgroundColor: "#fcf8e3",
                      borderRadius: "2px",
                    },
                  }}
                />
              </div>
              <div className="label-type-parent">
                <div className="label-type">Type</div>
                <div className="container2">
                  <div className="options">
                    <div className="backgroundshadow2">
                      <div className="border2" />
                      <div className="border3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;

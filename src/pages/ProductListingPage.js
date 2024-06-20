import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent5 from "../components/FrameComponent5";
import Footer1 from "../components/Footer1";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <header className="header">
        <div className="header-navigation">
          <div className="frame-parent">
            <div className="logo-parent">
              <div className="logo">
                <div className="logo1">
                  <div className="vector-parent">
                    <img className="vector-icon" alt="" src="/vector.svg" />
                    <div className="panaroma-presents">
                      <span className="p">P</span>
                      <span className="anaroma-presents">anaroma Presents</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-options">
                <a
                  className="home"
                  href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-2"
                  target="_blank"
                >
                  Home
                </a>
                <a
                  className="buy-gift-cards"
                  href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-1126"
                  target="_blank"
                >
                  Buy gift cards
                </a>
                <div className="sell-gift-cards">Sell gift cards</div>
                <div className="how-it-works">How it works</div>
              </div>
            </div>
            <div className="login-join-wrapper">
              <div className="login-join">
                <a
                  className="login"
                  href="https://www.figma.com/design/V6Oiif3Wm54cOdP57RgQ9z?node-id=1-1794"
                  target="_blank"
                >
                  Login
                </a>
                <div className="join">Join</div>
                <div className="basket-parent">
                  <div className="basket">{`Basket `}</div>
                  <div className="background">
                    <b className="b">0</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="backgroundhorizontalborder-container">
        <div className="backgroundhorizontalborder3">
          <div className="heading-2-search-cardyard-container">
            <div className="heading-23">Search Cardyard:</div>
          </div>
          <TextField
            className="backgroundshadow1"
            placeholder="Type in a shop..."
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#1c1c1c" },
              "& .MuiInputBase-root": {
                height: "39px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#777" },
              width: "780px",
            }}
          />
        </div>
      </div>
      <main className="productlistingpage-inner">
        <FrameComponent5 />
      </main>
      <Footer1
        link="/link1@2x.png"
        propTextDecoration="none"
        propTextDecoration1="none"
        propTextDecoration2="none"
      />
    </div>
  );
};

export default ProductListingPage;

import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent
        checkout="Checkout"
        viewOrEditYourCartBeforeC="View or edit your cart before checkout"
      />
      <section className="checkoutpage-inner">
        <div className="frame-group">
          <form className="checkout-form-header-parent">
            <div className="checkout-form-header">
              <h2 className="checkout">Checkout</h2>
              <TextField
                className="header"
                placeholder="Billing Details"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "#f57ba2",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="form-field-block">
                <div className="row-1">
                  <TextField
                    className="block-1"
                    placeholder="First Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                  <TextField
                    className="block-2"
                    placeholder="Last Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                </div>
                <div className="row-2">
                  <TextField
                    className="block-11"
                    placeholder="Company Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                  <div className="block-21">
                    <div className="country">Country</div>
                    <img className="icon" alt="" src="/icon.svg" />
                  </div>
                </div>
                <TextField
                  className="row-3"
                  placeholder="Street Address"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-22"
                  placeholder="Apartment / Suite / Unit / etc. (Optional)"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="row-4"
                  placeholder="Town / City"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-23"
                  placeholder="Email Address"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <div className="row-5">
                  <TextField
                    className="block-12"
                    placeholder="ZIP"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                  <TextField
                    className="block-24"
                    placeholder="Phone"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                </div>
              </div>
              <div className="billing-separator" />
              <div className="billing-header-items">
                <Button
                  className="button1"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#8856f5",
                    fontSize: "16",
                    borderColor: "#d9d9d9",
                    borderRadius: "4px",
                    "&:hover": { borderColor: "#d9d9d9" },
                    width: 100,
                    height: 54,
                  }}
                >
                  Back
                </Button>
                <Button
                  className="button2"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#8856f5",
                    borderRadius: "4px",
                    "&:hover": { background: "#8856f5" },
                    width: 128,
                    height: 54,
                  }}
                >
                  Checkout
                </Button>
              </div>
            </div>
            <div className="checkout-details-parent">
              <div className="checkout-details">
                <TextField
                  className="header1"
                  placeholder="Checkout Details"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "54px",
                      backgroundColor: "#f57ba2",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <div className="cart-subtotal-parent">
                  <div className="cart-subtotal">Cart Subtotal</div>
                  <div className="order-detail-values">$360.00</div>
                </div>
                <div className="shipping-handling-parent">
                  <div className="shipping-handling">{`Shipping & Handling`}</div>
                  <div className="div">$0.00</div>
                </div>
                <div className="other-taxes-parent">
                  <div className="other-taxes">Other Taxes</div>
                  <div className="div1">$0.00</div>
                </div>
                <div className="order-details-separator" />
                <div className="grand-total-parent">
                  <div className="grand-total">Grand Total</div>
                  <div className="div2">$360.00</div>
                </div>
              </div>
              <div className="transfer-options">
                <TextField
                  className="header2"
                  placeholder="Transfer Options"
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "54px",
                      backgroundColor: "#f57ba2",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <div className="checkout-details1">
                  <div className="logos-block">
                    <div className="block-13">
                      <div className="logo-block">
                        <img
                          className="image-1-icon"
                          loading="lazy"
                          alt=""
                          src="/image-1@2x.png"
                        />
                      </div>
                      <div className="bank-transfer">
                        <p className="bank">Bank</p>
                        <p className="transfer">Transfer</p>
                      </div>
                    </div>
                    <div className="block-25">
                      <div className="logo-block1">
                        <img
                          className="image-2-icon"
                          loading="lazy"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <div className="google-pay">
                        <p className="google">Google</p>
                        <p className="pay">Pay</p>
                      </div>
                    </div>
                  </div>
                  <div className="block-3-parent">
                    <div className="block-3">
                      <div className="logo-block2">
                        <img
                          className="image-3-icon"
                          loading="lazy"
                          alt=""
                          src="/image-3@2x.png"
                        />
                      </div>
                      <div className="apple-pay">
                        <p className="apple">Apple</p>
                        <p className="pay1">Pay</p>
                      </div>
                    </div>
                    <div className="block-4">
                      <div className="logo-block3">
                        <img
                          className="image-4-icon"
                          loading="lazy"
                          alt=""
                          src="/image-4@2x.png"
                        />
                      </div>
                      <div className="paypal">PayPal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="checkout1">
            <TextField
              className="header3"
              placeholder="Checkout"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#f57ba2",
                  borderRadius: "5px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="checkout-details2">
              <div className="your-personal-data">
                Your Personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our product
              </div>
              <Button
                className="button3"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#8856f5",
                  borderRadius: "4px",
                  "&:hover": { background: "#8856f5" },
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer
        linkTextDecoration="none"
        propTextDecoration="none"
        propTextDecoration1="unset"
        propTextDecoration2="none"
      />
    </div>
  );
};

export default CheckoutPage;

import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./ContactForm.css";

const ContactForm = ({ className = "" }) => {
  return (
    <div className={`contact-form ${className}`}>
      <FrameComponent1
        contactInformation="Contact Information"
        formLabelPlaceholder="Email"
      />
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="frame-parent8">
            <img
              className="frame-child1"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="frame-child3"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon2" alt="" src="/icon1.svg" />
        </div>
        <div className="form-field-parent">
          <TextField
            className="form-field2"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d9d9d9" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
          <TextField
            className="form-field3"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d9d9d9" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
        </div>
      </div>
      <FrameComponent1
        contactInformation="Carholder Name"
        formLabelPlaceholder="Name on Card"
        propDisplay="inline-block"
        propMinWidth="111px"
        propWidth="97px"
        propColor="#d9d9d9"
      />
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <div className="form-field4">
          <div className="usa">USA</div>
          <img
            className="form-field-child"
            alt=""
            src="/frame-1000006889.svg"
          />
          <img className="icon3" alt="" src="/icon1.svg" />
        </div>
      </div>
      <div className="frame-parent9">
        <input className="frame-input" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-form-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className="button5"
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
        Pay Now
      </Button>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;

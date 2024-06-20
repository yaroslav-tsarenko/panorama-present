import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header1 from "../components/Header1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <Header1 />
      <section className="backgroundhorizontalborder-wrapper">
        <div className="backgroundhorizontalborder2">
          <div className="heading-2-search-cardyard-wrapper">
            <div className="heading-22">Search Cardyard:</div>
          </div>
          <TextField
            className="backgroundshadow"
            placeholder="Type in a shop..."
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#1c1c1c" },
              "& .MuiInputBase-root": {
                height: "39px",
                backgroundColor: "#fff",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#777" },
              width: "780px",
            }}
          />
        </div>
      </section>
      <div className="small" />
      <section className="product-cards-row-wrapper">
        <FrameComponent3 />
      </section>
      <section className="card-request">
        <div className="border">
          <div className="request-content">
            <div className="heading-1">Can't find your gift card?</div>
            <div className="tell-us-and">
              Tell us and we'll make it available for you
            </div>
          </div>
          <Button
            className="link"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#6ac7b5",
              border: "#6ac7b5 solid 1px",
              borderRadius: "2px",
              "&:hover": { background: "#6ac7b5" },
              width: 200.4,
              height: 45.9,
            }}
          >
            Login to get notified
          </Button>
        </div>
      </section>
      <FrameComponent4 />
      <FrameComponent reviewContentMinWidth="unset" />
      <Footer1 link="/link-61@2x.png" />
    </div>
  );
};

export default ProductDescriptionPage;

import FrameComponent2 from "./FrameComponent2";
import Data from "./Data";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`product-cards-row ${className}`}>
      <div className="gift-card-info-parent">
        <div className="gift-card-info">
          <img
            className="argos-3bf72761680c36a56e5670b6-icon1"
            loading="lazy"
            alt=""
            src="/argos3bf72761680c36a56e5670b698144ba24b36d6f2d29fd7bb8c82ab6401166b95jpg1@2x.png"
          />
          <div className="heading-3-buy-gift-cards-parent">
            <div className="heading-33">Buy Gift Cards</div>
            <div className="data-description-wrapper">
              <div className="data-description"> Description</div>
            </div>
          </div>
        </div>
        <div className="frame-parent2">
          <div className="heading-1-argos-parent">
            <h1 className="heading-12">Panorma Presents Gift Card</h1>
            <div className="the-panorma-presents-container">
              <p className="the-panorma-presents">
                The Panorma Presents Gift Card belongs to the category of
                prepaid payment cards
              </p>
              <p className="the-panorma-presents1">{`The Panorma Presents Gift Card is the ideal choice for any gifting occasion. For gift-givers, it provides the convenience of a versatile and hassle-free gifting option. `}</p>
            </div>
          </div>
          <div className="gift-card-price-wrapper">
            <div className="gift-card-price">
              <div className="egift">eGift</div>
              <div className="price">Price</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-card-parent">
        <FrameComponent2 argos5EGiftCard="Argos £5 eGift Card " prop="£4.70" />
        <FrameComponent2
          argos5EGiftCard="Argos £10 eGift Card "
          prop="£9.40"
          propRowGap="unset"
          propGap="1px"
          propPadding="40px 8px 12px"
          propMinWidth="135px"
          propWidth="135px"
          propPadding1="35px 32px 37px 33px"
          propPadding2="7px 8px 8.5px 81px"
        />
      </div>
      <div className="frame-parent3">
        <FrameComponent2
          argos5EGiftCard="Argos £10.60 eGift Card "
          prop="£9.96"
          propRowGap="unset"
          propGap="1px"
          propPadding="35px 8px 7px"
          propMinWidth="155px"
          propWidth="155px"
          propPadding1="30px 32px 32px 33px"
          propPadding2="1px 7px 4px 82px"
        />
        <FrameComponent2
          argos5EGiftCard="Argos £20 eGift Card "
          prop="£18.80"
          propRowGap="unset"
          propGap="1px"
          propPadding="40px 8px 12px"
          propMinWidth="137px"
          propWidth="137px"
          propPadding1="35px 32px 37px 33px"
          propPadding2="7px 8px 8.5px 81px"
        />
      </div>
      <div className="frame-parent4">
        <FrameComponent2
          argos5EGiftCard="Argos £20.67 eGift Card "
          prop="£19.43"
          propRowGap="unset"
          propGap="1px"
          propPadding="35px 8px 7px"
          propMinWidth="155px"
          propWidth="155px"
          propPadding1="30px 32px 32px 33px"
          propPadding2="1px 7px 4px 82px"
        />
        <FrameComponent2
          argos5EGiftCard="Argos £24.16 eGift Card "
          prop="£22.71"
          propRowGap="unset"
          propGap="1px"
          propPadding="35px 8px 7px"
          propMinWidth="153px"
          propWidth="153px"
          propPadding1="30px 32px 32px 33px"
          propPadding2="1px 7px 4px 82px"
        />
      </div>
      <div className="frame-parent5">
        <div className="frame-parent6">
          <div className="data-parent">
            <div className="data5">
              <div className="argos-25-egift">{`Argos £25 eGift Card `}</div>
            </div>
            <div className="data6">
              <i className="emphasis-e1">e</i>
            </div>
          </div>
          <div className="frame-parent7">
            <div className="data-group">
              <div className="data7">
                <div className="argos-40-egift">{`Argos £40 eGift Card `}</div>
              </div>
              <div className="data8">
                <i className="emphasis-e2">e</i>
              </div>
            </div>
            <div className="data-container">
              <div className="data9">
                <div className="argos-50-egift">{`Argos £50 eGift Card `}</div>
              </div>
              <div className="data10">
                <i className="emphasis-e3">e</i>
              </div>
            </div>
          </div>
          <div className="data-parent1">
            <textarea
              className="data11"
              placeholder="Argos £100 eGift Card "
              rows={4}
              cols={15}
            />
            <div className="data12">
              <i className="emphasis-e4">e</i>
            </div>
          </div>
        </div>
        <div className="savings">
          <div className="data13">
            <div className="save-10-off-container">
              <span className="save-10-off-container1">
                <p className="p11">£22.50</p>
                <p className="save-10-off">save 10% off</p>
              </span>
            </div>
          </div>
          <div className="data14">
            <div className="save-6-off-container1">
              <p className="p12">£37.60</p>
              <p className="save-6-off1">save 6% off</p>
            </div>
          </div>
          <div className="data15">
            <div className="save-6-off-container2">
              <p className="p13">£47.00</p>
              <p className="save-6-off2">save 6% off</p>
            </div>
          </div>
          <div className="data16">
            <div className="save-6-off-container3">
              <p className="p14">£94.00</p>
              <p className="save-6-off3">save 6% off</p>
            </div>
          </div>
        </div>
        <div className="data-parent2">
          <Data />
          <div className="not-suitable-options">
            <Data
              propAlignSelf="unset"
              propPadding="1px 7px 4px 82px"
              propFlex="1"
            />
          </div>
          <Data
            propAlignSelf="stretch"
            propPadding="1px 7px 4px 82px"
            propFlex="unset"
          />
          <Data
            propAlignSelf="stretch"
            propPadding="1px 7px 4px 82px"
            propFlex="unset"
          />
        </div>
      </div>
      <div className="data17">
        <div className="emphasis-not">Not suitable for gifting</div>
        <div className="warning-icon">
          <div className="symbol20"></div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

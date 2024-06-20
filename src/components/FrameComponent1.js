import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`video-container-container ${className}`}>
      <div className="video-container1">
        <div className="video-player">
          <div className="player-wrapper">
            <div className="player-symbol">
              <div className="symbol16"></div>
            </div>
            <div className="heading-5-list-item">
              <div className="buying-a-discounted">
                Buying a discounted gift card is easy
              </div>
            </div>
          </div>
          <div className="item-find-container">
            <span className="item-find-container1">
              <p className="find-the-gift">Find the gift card you want.</p>
              <p className="buy-it-at">Buy it at a discount.</p>
              <p className="we-send-it">
                We send it to you; most gift cards are sent by email as e-gift
                cards.
              </p>
              <p className="you-spend-the">
                You spend the gift card like cash, saving on every purchase.
              </p>
            </span>
          </div>
        </div>
        <div className="iframe">
          <div className="body">
            <div className="youtube-video-player">
              <img className="image-icon" alt="" src="/image@2x.png" />
              <div className="player-controls">
                <div className="control-bar">
                  <img className="image-icon1" alt="" src="/image@2x.png" />
                  <div className="control-elements">
                    <div className="container10">
                      <img
                        className="link-photo-image-of-cardyard"
                        loading="lazy"
                        alt=""
                        src="/link--photo-image-of-cardyard@2x.png"
                      />
                    </div>
                  </div>
                  <div className="video-title-container">
                    <div className="link37">
                      <div className="cardyard-buying">
                        Cardyard - Buying a Gift Card
                      </div>
                    </div>
                  </div>
                  <div className="button-menu-share">
                    <div className="share-icon-container">
                      <img
                        className="svg-icon"
                        loading="lazy"
                        alt=""
                        src="/svg.svg"
                      />
                    </div>
                    <div className="container11">
                      <div className="share">Share</div>
                    </div>
                  </div>
                </div>
                <div className="play-button">
                  <img
                    className="button-play-svg"
                    loading="lazy"
                    alt=""
                    src="/button--play--svg.svg"
                  />
                </div>
              </div>
              <button className="link-watch-on-youtube">
                <div className="watch-on">Watch on</div>
                <img className="svg-icon1" alt="" src="/svg-1.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="more-details">
          <div className="detail-link">
            <div className="symbol17"></div>
          </div>
          <div className="click-here-for"> Click here for more detail</div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./HowItWorksPage.css";

const HowItWorksPage = () => {
  return (
    <div className="howitworkspage">
      <Header />
      <section className="content">
        <div className="backgroundhorizontalborder1">
          <div className="page-title">
            <div className="heading-21">How it works: Buying</div>
            <div className="back-to-how-it-works">Back to How-it-Works</div>
          </div>
        </div>
      </section>
      <section className="buy-a-discounted-gift-card-to-wrapper">
        <h1 className="buy-a-discounted">
          Buy a discounted gift card to save money by spending it yourself...
        </h1>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <Footer
        link="/link-11@2x.png"
        propHeight="171.8px"
        propTextDecoration="unset"
        propTextDecoration1="unset"
      />
    </div>
  );
};

export default HowItWorksPage;

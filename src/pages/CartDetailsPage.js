import FrameComponent from "../components/FrameComponent";
import PanormaCardTitle from "../components/PanormaCardTitle";
import Footer from "../components/Footer";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent />
      <section className="panorma-card-title-wrapper">
        <PanormaCardTitle />
      </section>
      <Footer />
    </div>
  );
};

export default CartDetailsPage;

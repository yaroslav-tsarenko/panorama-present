import Header2 from "../components/Header2";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import DiscountCards from "../components/DiscountCards";
import FrameComponent6 from "../components/FrameComponent6";
import Footer2 from "../components/Footer2";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header2 />
      <FrameComponent10 />
      <FrameComponent9 />
      <FrameComponent8 />
      <FrameComponent7 />
      <DiscountCards />
      <FrameComponent6 />
      <Footer2 />
    </div>
  );
};

export default Homepage;

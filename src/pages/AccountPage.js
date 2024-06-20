import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import Footer1 from "../components/Footer1";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent
        checkout="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <FrameComponent2 />
      <Footer1 />
    </div>
  );
};

export default AccountPage;

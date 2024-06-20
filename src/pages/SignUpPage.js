import Header from "../components/Header";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header />
      <main className="signup-container-parent">
        <div className="signup-container">
          <SignIn />
        </div>
        <img
          className="background-shape-icon"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;

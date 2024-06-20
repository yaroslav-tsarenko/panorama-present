import { Button } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <Header />
      <main className="frame-parent">
        <div className="sign-in-wrapper">
          <div className="sign-in">
            <div className="sign-in-heading">
              <div className="sign-in-title">
                <h1 className="sign-in1">Sign in</h1>
                <div className="sign-in-to">
                  Sign in to your account to see products catered to you
                </div>
              </div>
              <form className="credentials">
                <div className="input-fields">
                  <div className="username">Username</div>
                  <img
                    className="input-containers-icon"
                    alt=""
                    src="/frame-153-1.svg"
                  />
                </div>
                <div className="input-fields1">
                  <div className="password">Password</div>
                  <img
                    className="input-fields-child"
                    alt=""
                    src="/frame-153-2.svg"
                  />
                </div>
                <Button
                  className="button"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#8856f5",
                    borderRadius: "4px",
                    "&:hover": { background: "#8856f5" },
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div className="or-sign-in">or, sign in with</div>
              <div className="social-sign-in">
                <img
                  className="social-buttons-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-shape-icon1"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </main>
      <Footer
        linkTextDecoration="none"
        propTextDecoration="unset"
        propTextDecoration1="none"
        propTextDecoration2="unset"
      />
    </div>
  );
};

export default SignInPage;

import ContactForm from "../components/ContactForm";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <div className="paymentpage-inner">
        <div className="logo-parent">
          <div className="logo">
            <div className="logo-container">
              <img
                className="vector-icon"
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
              <div className="panaroma-presents">
                <span className="p">P</span>
                <span className="anaroma-presents">anaroma Presents</span>
              </div>
            </div>
          </div>
          <div className="frame-container">
            <img
              className="frame-child"
              loading="lazy"
              alt=""
              src="/frame-1000006877@2x.png"
            />
            <div className="frame-div">
              <div className="powered-by-wrapper">
                <div className="powered-by">{`Powered by `}</div>
              </div>
              <div className="payment-icons-parent">
                <img
                  className="payment-icons"
                  loading="lazy"
                  alt=""
                  src="/payment-icons@2x.png"
                />
                <div className="vector-wrapper">
                  <img
                    className="frame-item"
                    loading="lazy"
                    alt=""
                    src="/vector-341.svg"
                  />
                </div>
                <div className="legal-wrapper">
                  <div className="legal">Legal</div>
                </div>
                <div className="refunds-wrapper">
                  <div className="refunds">Refunds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-inner" />
        <ContactForm />
      </div>
    </div>
  );
};

export default PaymentPage;

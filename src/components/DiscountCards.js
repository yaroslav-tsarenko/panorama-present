import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import BackgroundBorder2 from "./BackgroundBorder2";
import BlogPostCards from "./BlogPostCards";
import PostItems1 from "./PostItems1";
import PropTypes from "prop-types";
import "./DiscountCards.css";

const DiscountCards = ({ className = "" }) => {
  return (
    <section className={`discount-cards ${className}`}>
      <div className="discount-card">
        <div className="discount-card-container">
          <BackgroundBorder2
            heading1BuyGiftCardsAtDis="Buy Gift Cards At Discount"
            buyGiftCardsAtDiscountDes="Buy Gift Cards At Discount Description"
          />
          <BackgroundBorder2
            heading1BuyGiftCardsAtDis="Gift Your Friends At Discount"
            buyGiftCardsAtDiscountDes="Send Gift Cards At Discount Description"
            propBackgroundColor="#fdfdfd"
            propWidth="unset"
            propAlignSelf="unset"
            propAlignSelf1="unset"
            propWidth1="299px"
            propDisplay="flex"
          />
        </div>
        <div className="newsletter">
          <div className="backgroundborder7">
            <h2 className="heading-31">Join our newsletter</h2>
            <div className="background3">
              <div className="newsletter-inputs">
                <div className="label-email">Email address</div>
                <div className="input4">
                  <div className="email-container">
                    <div className="container3">
                      <div className="youremailcom">your@email.com</div>
                    </div>
                  </div>
                  <div className="verticalborder1">
                    <div className="symbol6"></div>
                  </div>
                </div>
              </div>
              <div className="name-inputs">
                <div className="name-fields">
                  <div className="label-first">First name</div>
                  <div className="input5">
                    <div className="container-wrapper">
                      <div className="container4">
                        <div className="your-first-name">your first name</div>
                      </div>
                    </div>
                    <div className="verticalborder2">
                      <div className="symbol7"></div>
                    </div>
                  </div>
                </div>
                <div className="name-fields1">
                  <div className="label-last">Last name</div>
                  <div className="input6">
                    <div className="container-container">
                      <div className="container5">
                        <div className="your-surname">your surname</div>
                      </div>
                    </div>
                    <div className="verticalborder3">
                      <div className="symbol8"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button1">
              <div className="subscribe-wrapper">
                <div className="subscribe">Subscribe</div>
              </div>
              <div className="background4">
                <div className="symbol9"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-posts1">
          <div className="blog-list">
            <div className="blog-items">
              <BlogPostCards
                photo156934864293846517ef="/photo156934864293846517ef6f177@2x.png"
                theBenefitsOfMindfulnessM="The Benefits of Mindfulness Meditation"
                may272024="May 27, 2024"
                inTodaysHecticWorldIncorp="In today's hectic world, incorporating mindfulness meditation into your daily routine can have numerous benefits for your mental and physical well-being. Mindfulness meditation involves focusing your attention on the present moment without judgment"
              />
              <BlogPostCards
                photo156934864293846517ef="/photo156934864293846517ef6f177-1@2x.png"
                theBenefitsOfMindfulnessM="How to Cultivate a Growth Mindset"
                may272024="May 20, 2023"
                inTodaysHecticWorldIncorp="Developing a growth mindset is essential for achieving success and fulfillment in both your personal and professional life. Unlike a fixed mindset, which believes that abilities and intelligence are innate and unchangeable, a growth mindset embraces challenges."
              />
              <PostItems1
                photo156934864293846517ef="/photo156934864293846517ef6f177-2@2x.png"
                theBenefitsOfMindfulnessM="How Gratitude Can Transform Your Life"
                inTodaysHecticWorldIncorp="Practicing gratitude is a simple yet powerful way to improve your overall happiness and well-being. Research has shown that regularly expressing gratitude can increase positive emotions, improve relationships, boost resilience, and even enhance physical health."
                propWidth="347px"
                propDisplay="flex"
                postItemsPadding="unset"
                postItemsGap="41.5px"
              />
              <div className="blog-post-cards1">
                <img
                  className="photo-1569348642938-46517ef6f1-icon1"
                  loading="lazy"
                  alt=""
                  src="/photo156934864293846517ef6f177-3@2x.png"
                />
                <div className="strategies-for-effective-time-parent">
                  <div className="strategies-for-effective">
                    Strategies for Effective Time Management
                  </div>
                  <div className="may-27-2024-parent">
                    <div className="may-27-20241">May 27, 2024</div>
                    <div className="effective-time-management">
                      Effective time management is essential for maximizing
                      productivity, reducing stress, and achieving your goals.
                      By implementing strategies to prioritize tasks, minimize
                      distractions, and make the most of your time, you can
                      improve your efficiency and accomplish more in less time.
                    </div>
                    <div className="read-more-time-management">
                      <button className="link10">
                        <a className="read-more1">Read More</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TextField
              className="ordered-list1"
              placeholder="View all blog posts"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "38px",
                  backgroundColor: "#fff",
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": { color: "#693194" },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

DiscountCards.propTypes = {
  className: PropTypes.string,
};

export default DiscountCards;

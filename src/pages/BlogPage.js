import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Header from "../components/Header";
import PostItems1 from "../components/PostItems1";
import PostItems from "../components/PostItems";
import Footer from "../components/Footer";
import "./BlogPage.css";

const BlogPage = () => {
  return (
    <div className="blogpage">
      <Header />
      <section className="page-banner">
        <div className="backgroundhorizontalborder">
          <div className="heading-2">News / Blog</div>
        </div>
      </section>
      <section className="main-content">
        <div className="blog-posts">
          <div className="post-list">
            <PostItems1
              photo156934864293846517ef="/photo156934864293846517ef6f1771@2x.png"
              theBenefitsOfMindfulnessM="The Benefits of Mindfulness Meditation"
              inTodaysHecticWorldIncorp="In today's hectic world, incorporating mindfulness meditation into your daily routine can have numerous benefits for your mental and physical well-being. Mindfulness meditation involves focusing your attention on the present moment without judgment"
            />
            <PostItems
              photo156934864293846517ef="/photo156934864293846517ef6f177-11@2x.png"
              howToCultivateAGrowthMind="How to Cultivate a Growth Mindset"
              may202023="May 20, 2023"
              developingAGrowthMindsetI="Developing a growth mindset is essential for achieving success and fulfillment in both your personal and professional life. Unlike a fixed mindset, which believes that abilities and intelligence are innate and unchangeable, a growth mindset embraces challenges."
            />
            <PostItems
              photo156934864293846517ef="/photo156934864293846517ef6f177-21@2x.png"
              howToCultivateAGrowthMind="How Gratitude Can Transform Your Life"
              may202023="May 27, 2024"
              developingAGrowthMindsetI="Practicing gratitude is a simple yet powerful way to improve your overall happiness and well-being. Research has shown that regularly expressing gratitude can increase positive emotions, improve relationships, boost resilience, and even enhance physical health."
              propWidth="347px"
              propDisplay="flex"
            />
            <PostItems1
              photo156934864293846517ef="/photo156934864293846517ef6f177-31@2x.png"
              theBenefitsOfMindfulnessM="Strategies for Effective Time Management"
              inTodaysHecticWorldIncorp="Effective time management is essential for maximizing productivity, reducing stress, and achieving your goals. By implementing strategies to prioritize tasks, minimize distractions, and make the most of your time, you can improve your efficiency and accomplish more in less time."
              propWidth="unset"
              propDisplay="inline-block"
              postItemsPadding="0px 26px 0px 0px"
              postItemsGap="15px"
            />
            <PostItems
              photo156934864293846517ef="/photo156934864293846517ef6f1771@2x.png"
              howToCultivateAGrowthMind="The Benefits of Mindfulness Meditation"
              may202023="May 27, 2024"
              developingAGrowthMindsetI="In today's hectic world, incorporating mindfulness meditation into your daily routine can have numerous benefits for your mental and physical well-being. Mindfulness meditation involves focusing your attention on the present moment without judgment"
              propWidth="347px"
              propDisplay="flex"
            />
            <PostItems
              photo156934864293846517ef="/photo156934864293846517ef6f177-11@2x.png"
              howToCultivateAGrowthMind="How to Cultivate a Growth Mindset"
              may202023="May 20, 2023"
              developingAGrowthMindsetI="Developing a growth mindset is essential for achieving success and fulfillment in both your personal and professional life. Unlike a fixed mindset, which believes that abilities and intelligence are innate and unchangeable, a growth mindset embraces challenges."
              propWidth="347px"
              propDisplay="flex"
            />
            <PostItems1
              photo156934864293846517ef="/photo156934864293846517ef6f177-21@2x.png"
              theBenefitsOfMindfulnessM="How Gratitude Can Transform Your Life"
              inTodaysHecticWorldIncorp="Practicing gratitude is a simple yet powerful way to improve your overall happiness and well-being. Research has shown that regularly expressing gratitude can increase positive emotions, improve relationships, boost resilience, and even enhance physical health."
              propWidth="347px"
              propDisplay="flex"
              postItemsPadding="0px 26px 0px 0px"
              postItemsGap="15px"
            />
            <PostItems
              photo156934864293846517ef="/photo156934864293846517ef6f177-31@2x.png"
              howToCultivateAGrowthMind="Strategies for Effective Time Management"
              may202023="May 27, 2024"
              developingAGrowthMindsetI="Effective time management is essential for maximizing productivity, reducing stress, and achieving your goals. By implementing strategies to prioritize tasks, minimize distractions, and make the most of your time, you can improve your efficiency and accomplish more in less time."
              propWidth="unset"
              propDisplay="inline-block"
            />
          </div>
          <TextField
            className="ordered-list"
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
      </section>
      <Footer link="/link1@2x.png" />
    </div>
  );
};

export default BlogPage;

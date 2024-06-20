import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import ProductListingPage from "./pages/ProductListingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/blogpage":
        title = "";
        metaDescription = "";
        break;
      case "/howitworkspage":
        title = "";
        metaDescription = "";
        break;
      case "/productdescriptionpage":
        title = "";
        metaDescription = "";
        break;
      case "/productlistingpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blogpage" element={<BlogPage />} />
      <Route path="/howitworkspage" element={<HowItWorksPage />} />
      <Route
        path="/productdescriptionpage"
        element={<ProductDescriptionPage />}
      />
      <Route path="/productlistingpage" element={<ProductListingPage />} />
    </Routes>
  );
}
export default App;

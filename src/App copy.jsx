import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Phone from "./pages/Phone";
import Mobile1 from "./pages/Mobile1";
import Tablet from "./pages/Tablet";
import Laptop from "./pages/Laptop";
import Layout from "./pages/Layout";

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
      case "/mobile":
        title = "";
        metaDescription = "";
        break;
      case "/tablet1":
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
      <Route path="/" element={<Phone />} />
      <Route path="/mobile" element={<Mobile1 />} />
      <Route path="/tablet1" element={<Tablet />} />
      <Route path="/laptop" element={<Laptop />} />
    </Routes>
  );
}
export default App;

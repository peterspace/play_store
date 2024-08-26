import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import BlackPage from "./pages/BlackPage";
import WhitePage from "./pages/WhitePage";
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
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/mobile":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-2":
        title = "";
        metaDescription = "";
        break;
      case "/tablet":
        title = "";
        metaDescription = "";
        break;
      case "/phone":
        title = "";
        metaDescription = "";
        break;
      case "/phone1":
        title = "";
        metaDescription = "";
        break;
      case "/tablet1":
        title = "";
        metaDescription = "";
        break;
      case "/laptop-white":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-white":
        title = "";
        metaDescription = "";
        break;
      case "/phone-pop-over":
        title = "";
        metaDescription = "";
        break;
      case "/phone-pop-install-middle":
        title = "";
        metaDescription = "";
        break;
      case "/phone-pop-install":
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
      <Route path="/" element={<Layout />} />
      <Route path="/:sub_id_1/:sub_id_2" element={<Layout />} />
      <Route path="/black" element={<BlackPage />} />
      <Route path="/white" element={<WhitePage />} />
    </Routes>
  );
}
export default App;
//

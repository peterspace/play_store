import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlackPage from "./pages/BlackPage";
import WhitePage from "./pages/WhitePage";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:sub_id_1/:sub_id_2" element={<Layout />} />
        <Route path="/black" element={<BlackPage />} />
        <Route path="/white" element={<WhitePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
//

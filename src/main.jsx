import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz.jsx";
import Merci from "./pages/Merci.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/merci" element={<Merci />} />
        <Route path="/Merci" element={<Merci />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
